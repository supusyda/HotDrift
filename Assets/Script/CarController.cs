using System.Collections.Generic;
using Unity.Mathematics;
using UnityEngine;


public class CarController : MonoBehaviour
{
    public SphereCollider sphereCollider;
    public Rigidbody sphereRB;
    public bool isDriffing = false;
    public Transform CarBody;
    [Header("Parameters")]

    public CarData carData;









    [Header("Particles")]
    public List<Transform> wheelParticlesHolder = new List<Transform>();
    public List<Transform> trailRenderHolder = new List<Transform>();
    public static bool CanMove = false;



    private float _actualRotate = 0;
    private float _actualSpeed = 0;
    private float _friction = 0;

    private float _rotate = 0;

    private int _steerDir = 0;// 1 right -1 left 0 none
    private float angleOfMoveDirToVecForward = 0;//has kenectEnegy
    private Vector3 cc3 = Vector3.zero;//has kenectEnegy

    private List<ParticleSystem> driftParticles = new List<ParticleSystem>();
    private List<TrailRenderer> trail = new List<TrailRenderer>();
    [SerializeField] private CarAudio carAudio;


    void Start()
    {
        foreach (Transform child in wheelParticlesHolder[0])
        {
            driftParticles.Add(child.GetComponent<ParticleSystem>());
        }
        foreach (Transform child in wheelParticlesHolder[1])
        {
            driftParticles.Add(child.GetComponent<ParticleSystem>());
        }
        foreach (Transform child in trailRenderHolder)
        {
            trail.Add(child.GetComponent<TrailRenderer>());
        }
        _friction = carData.FrictionNormal;
        cc3 = transform.forward;
        carAudio.PlaySound(carAudio.engineSound);

    }
    Vector3 RotateVector(Vector3 v, float degrees, Vector3 axis)
    {
        return Quaternion.AngleAxis(degrees, axis) * v;
    }
    public void MovingCar(Vector3 movingDir)
    {
        if (!CanMove) return;
        // Move the car object to be at the same position as the sphere collider,
        // but offset by 0.5 units to be at the middle of the sphere collider
        transform.position = new Vector3(sphereCollider.transform.position.x, 0.2f, sphereCollider.transform.position.z);


        // Vector3 fo = ;

        // Calculate the dot product of the direction to the mouse and the right direction
        // This will be positive if the mouse is to the right of the car, and negative if it's to the left
        Debug.DrawLine(transform.position, transform.position + RotateVector(transform.forward, carData.MaxAngleToDrift, Vector3.up) * 10, Color.blue);
        Debug.DrawLine(transform.position, transform.position + RotateVector(transform.forward, -carData.MaxAngleToDrift, Vector3.up) * 10, Color.blue);
        Debug.DrawLine(transform.position, transform.position + movingDir * 10, Color.blue);



        float dot = Vector3.Dot(movingDir.normalized, transform.right);
        if (dot > .1f)
        {

            _steerDir = 1;
        }
        else if (dot < -.1f)
        {

            _steerDir = -1;
        }
        else
        {
            _steerDir = 0;
        }


        angleOfMoveDirToVecForward = Vector3.SignedAngle(transform.forward, movingDir, Vector3.up);

        if (!isDriffing && IsInRangeOfDrift(angleOfMoveDirToVecForward))
        {
            isDriffing = true;

            if (_steerDir > 0)
            {
                cc3 = (transform.forward + (-transform.right)).normalized;
            }
            else if (_steerDir < 0)
            {
                cc3 = (transform.forward + transform.right).normalized;
            }
        }

        if (!isDriffing)
        {
            _rotate = this.SteerRotation(_steerDir, .5f);

            foreach (ParticleSystem p in driftParticles)
            {
                p.startColor = Color.red;
                p.Stop();
            }
            foreach (TrailRenderer t in trail)
            {
                t.emitting = false;
            }
        }
        else
        {
            const int driftPower = 1;
            _rotate = this.SteerRotation(_steerDir, driftPower);

            foreach (ParticleSystem p in driftParticles)
            {
                if (p.isPlaying == false)
                {
                    p.startColor = Color.red;
                    p.Play();

                }
            }
            foreach (TrailRenderer t in trail)
            {
                t.emitting = true;
            }




        }

        _actualRotate = Mathf.Lerp(_actualRotate, _rotate, Time.deltaTime * 3);


        _rotate = 0;
        _actualSpeed = Mathf.Lerp(_actualSpeed, carData.MaxSpeed, Time.deltaTime * 5f);
        // _speed = 0;
        Debug.DrawRay(transform.position, transform.forward * 3, Color.white);
        // Debug.Log(_steerDir);

    }
    void FixedUpdate()
    {
        if (!CanMove) return;
        // move the car
        if (isDriffing)
        {
            Debug.DrawRay(transform.position, cc3 * 3, Color.red);
            _actualSpeed = Mathf.Lerp(_actualSpeed, 0, Time.deltaTime * 3f);
            _friction = carData.DriftFriction;

            cc3 = Vector3.Lerp(cc3.normalized, transform.forward, Time.deltaTime * carData.DriftTraction);

            sphereRB.AddForce(cc3 * _actualSpeed, ForceMode.Acceleration);
            sphereRB.linearDamping = _friction;

            float angle = Vector3.SignedAngle(transform.forward, cc3.normalized, transform.up);
            if (angle >= -10f && angle <= 10f) // Close to 1 means they are nearly identical
            {
                isDriffing = false;
            }
        }
        else
        {
            sphereRB.AddForce(transform.forward * _actualSpeed, ForceMode.Acceleration);
            _friction = Mathf.Lerp(_friction, carData.FrictionNormal, Time.deltaTime * 3);
            sphereRB.linearDamping = _friction;

        }

        // apply carData.Gravity
        sphereRB.AddForce(Vector3.down * carData.Gravity, ForceMode.Acceleration);
        // steer the car    


        transform.eulerAngles = Vector3.Lerp(transform.eulerAngles, new Vector3(0, transform.eulerAngles.y + _actualRotate, 0), Time.deltaTime);

    }
    /// <summary>
    /// Calculates the steering angle based on the input direction and amount
    /// </summary>
    /// <param name="steerDir">The direction of the steering input, either 1 or -1</param>
    /// <param name="steerAmount">The amount of steering input, a value between 0 and 1</param>
    /// <returns>The steering angle in degrees</returns>
    public float SteerRotation(int steerDir, float steerAmount)
    {
        // Calculate the steering angle based on the input direction and amount
        // The maximum steering angle is multiplied by the direction of the input
        // and the amount of the input, then multiplied by the steering sensitivity
        // to get the final steering angle
        return (carData.MaxSteerAngle * steerDir) * steerAmount * carData.SteerSensitivity;
    }
    private bool IsInRangeOfDrift(float angleToCarForwardVector)
    {
        return Mathf.Abs(angleToCarForwardVector) >= carData.MaxAngleToDrift;
    }



}
