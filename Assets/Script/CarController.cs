using System.Collections.Generic;
using UnityEngine;


public class CarController : MonoBehaviour
{
    public SphereCollider sphereCollider;
    public Rigidbody sphereRB;
    public bool isDriffing = false;
    public Transform CarBody;
    [Header("Parameters")]
    public float gravity = 10f;
    public float MaxSpeed = 0;
    public float MaxAngleToDrift = 20;
    public float MaxSteerAngle = 80;
    public float SteerSensitivity = 1.2f;
    public float DriftTracion = 10;

    [Header("Particles")]
    public Transform[] wheelParticlesHolder;
    public Transform[] trailRenderHolder;



    private float _actualRotate = 0;
    private float _actualSpeed = 0;
    private float _speed = 0;
    private float _rotate = 0;
    private int driffDir = 0;
    private int _steerDir = 0;// 1 right -1 left 0 none
    private bool cc2 = false;//has kenectEnegy
    private Vector3 cc3 = Vector3.zero;//has kenectEnegy

    private List<ParticleSystem> driftParticles = new List<ParticleSystem>();
    private List<TrailRenderer> trail = new List<TrailRenderer>();


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

    }

    public void MovingCar(Vector3 movingDir)
    {
        // Move the car object to be at the same position as the sphere collider,
        // but offset by 0.5 units to be at the middle of the sphere collider
        transform.position = new Vector3(sphereCollider.transform.position.x, 0.5f, sphereCollider.transform.position.z);



        Vector3 rightDirection = transform.right;

        // Calculate the dot product of the direction to the mouse and the right direction
        // This will be positive if the mouse is to the right of the car, and negative if it's to the left
        float dot = Vector3.Dot(movingDir, rightDirection);
        // If the dot product is positive, set the direction to 1 (right), otherwise set it to -1 (left)
        if (dot > -0.1 && dot <= 0.1)
        {
            _steerDir = 0;
        }
        else if (dot > 0)
        {
            _steerDir = 1;
        }
        else if (dot < 0)
        {
            _steerDir = -1;
        }

        // Get the mouse position in world space


        // Calculate the steering angle based on the direction and amount of steering input
        _rotate = this.SteerRotation(_steerDir, .5f);


        float angleToCarForwardVector = Vector3.SignedAngle(CarBody.forward, movingDir, Vector3.up);
        if (!isDriffing && IsInRangeOfDrift(angleToCarForwardVector))
        {
            isDriffing = true;
            cc2 = true;
        }
        if (!isDriffing)
        {

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
            const int driftPower = 5;
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
            cc2 = IsInRangeOfDrift(angleToCarForwardVector);

        }
        _actualRotate = Mathf.Lerp(_actualRotate, _rotate, Time.deltaTime * 5f);
        _rotate = 0;
        _actualSpeed = Mathf.Lerp(_actualSpeed, MaxSpeed, Time.deltaTime * 5f);
        _speed = 0;
        Debug.DrawRay(transform.position, cc3 * 3, Color.red);
        Debug.DrawRay(transform.position, transform.forward * 3, Color.white);
        Debug.Log(_steerDir);

    }
    void FixedUpdate()
    {
        // move the car
        if (isDriffing)
        {
            Vector3 driffDirNormalize = _steerDir < 0 ? (transform.forward + CarBody.right).normalized : (transform.forward + -CarBody.right).normalized;
            cc3 = cc2 == true ? driffDirNormalize : (cc3).normalized;
            cc3 = Vector3.Lerp(cc3, transform.forward, Time.deltaTime * DriftTracion);
            sphereRB.AddForce(cc3.normalized * _actualSpeed, ForceMode.Acceleration);

            sphereRB.linearDamping = 4;
            float dot = Vector3.Dot(cc3.normalized, transform.forward);
            if (dot > 0.99f) // Close to 1 means they are nearly identical
            {
                isDriffing = false;
            }
        }
        else
        {
            sphereRB.AddForce(transform.forward * _actualSpeed, ForceMode.Acceleration);
            sphereRB.linearDamping = 2;

        }

        // apply gravity
        sphereRB.AddForce(Vector3.down * gravity, ForceMode.Acceleration);
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
        return (MaxSteerAngle * steerDir) * steerAmount * SteerSensitivity;
    }
    private bool IsInRangeOfDrift(float angleToCarForwardVector)
    {
        return (Mathf.Abs(angleToCarForwardVector) > MaxAngleToDrift || Mathf.Abs(angleToCarForwardVector) < -MaxAngleToDrift);
    }


}
