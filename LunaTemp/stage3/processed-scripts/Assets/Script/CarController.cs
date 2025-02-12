using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;


public class CarController : MonoBehaviour
{
    [SerializeField] private CarAudio carAudio;
    [SerializeField] private CarData NormalPlayerCarData;
    [SerializeField] private CarData AICarData;


    public SphereCollider sphereCollider;
    public Rigidbody sphereRB;
    public bool isDriffing = false;
    public Transform CarBody;
    [Header("Parameters")]

    public static bool CanMove = false;
    // public CarData carData;
    public float Gravity = 0;


    [SerializeField]
    public float MaxSpeed = 0;



    public float MaxAngleToDrift = 0;




    public float MaxSteerAngle = 0;



    [SerializeField]
    public float SteerSensitivity = 0;
    public float DriftTraction = 0;
    public float FrictionNormal = 0;

    public float DriftFriction = 0;

    [Header("Particles")]
    public List<Transform> wheelParticlesHolder = new List<Transform>();
    public List<Transform> trailRenderHolder = new List<Transform>();

    private float _actualRotate = 0;
    private float _actualSpeed = 0;
    private float _friction = 0;

    private float _rotate = 0;

    private int _steerDir = 0;// 1 right -1 left 0 none
    private float _angleOfMoveDirToVecForward = 0;
    private Vector3 _driftDir = Vector3.zero;
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
        _friction = FrictionNormal;
        _driftDir = transform.forward;
        carAudio.PlaySound(carAudio.engineSound);

    }
    Vector3 RotateVector([Bridge.Ref] Vector3 v, float degrees, [Bridge.Ref] Vector3 axis)
    {
        return Quaternion.AngleAxis(degrees, axis) * v;
    }
    public void MovingCar([Bridge.Ref] Vector3 movingDir)
    {

        // if (Input.GetMouseButton(0)) CarBody.DOJump(transform.up, 1, 1, 1, false);
        if (!CanMove) return;


        // Move the car object to be at the same position as the sphere collider,
        // but offset by 0.5 units to be at the middle of the sphere collider
        transform.position = new Vector3(sphereCollider.transform.position.x, 0.2f, sphereCollider.transform.position.z);

        movingDir = movingDir == Vector3.zero ? transform.forward : movingDir;
        // Vector3 fo = ;

        // Calculate the dot product of the direction to the mouse and the right direction
        // This will be positive if the mouse is to the right of the car, and negative if it's to the left
        // Debug.DrawLine(transform.position, transform.position + RotateVector(transform.forward,  MaxAngleToDrift, Vector3.up) * 10, Color.blue);
        // Debug.DrawLine(transform.position, transform.position + RotateVector(transform.forward, - MaxAngleToDrift, Vector3.up) * 10, Color.blue);
        // Debug.DrawLine(transform.position, transform.position + movingDir * 10, Color.blue);



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


        _angleOfMoveDirToVecForward = Vector3.SignedAngle(transform.forward, movingDir, Vector3.up);

        CheckForDrift(_angleOfMoveDirToVecForward);

        HandleDriftUpdate();

        _actualRotate = Mathf.Lerp(_actualRotate, _rotate, Time.deltaTime * 3);
        _actualSpeed = Mathf.Lerp(_actualSpeed, MaxSpeed, Time.deltaTime * 5f);
        _rotate = 0;
        // _speed = 0;
        // Debug.DrawRay(transform.position, transform.forward * 3, Color.white);
        // Debug.Log(_steerDir);

    }
    private void CheckForDrift(float angleOfMoveDirToVecForward)
    {
        if (isDriffing || !IsInRangeOfDrift(angleOfMoveDirToVecForward)) return;

        _driftDir = _steerDir > 0 ? (transform.forward - transform.right).normalized :
                   _steerDir < 0 ? (transform.forward + transform.right).normalized :
                   _driftDir;
        carAudio.PlaySound(carAudio.driftSound);

        isDriffing = true;
    }

    private void HandleDriftUpdate()
    {
        const int driftPower = 1;

        if (!isDriffing)
        {
            _rotate = SteerRotation(_steerDir, .5f);

            foreach (var p in driftParticles)
                p.Stop();

            foreach (var t in trail)
            {
                t.time = 0;
                t.emitting = false;
                t.Clear();
            }
        }
        else
        {
            _rotate = SteerRotation(_steerDir, driftPower);
            foreach (var p in driftParticles)
            {
                if (!p.isPlaying)
                {
                    var main = p.main;
                    main.startColor = Color.red;
                    p.Play();
                }

            }

            foreach (var t in trail)
            {
                t.time = 2f;
                t.emitting = true;
            }
        }
    }
    void FixedUpdate()
    {
        if (!CanMove) return;
        // move the car
        if (isDriffing)
        {

            _actualSpeed = Mathf.Lerp(_actualSpeed, 0, Time.deltaTime * 3f);
            _friction = DriftFriction;

            _driftDir = Vector3.Lerp(_driftDir.normalized, transform.forward, Time.deltaTime * DriftTraction);

            sphereRB.AddForce(_driftDir * _actualSpeed, ForceMode.Acceleration);
            sphereRB.drag = _friction;

            float angle = Vector3.SignedAngle(transform.forward, _driftDir.normalized, transform.up);
            if (angle >= -10f && angle <= 10f) // Close to 1 means they are nearly identical
            {
                isDriffing = false;
                carAudio.PlaySound(carAudio.engineSound);

            }
        }
        else
        {
            sphereRB.AddForce(transform.forward * _actualSpeed, ForceMode.Acceleration);
            _friction = Mathf.Lerp(_friction, FrictionNormal, Time.deltaTime * 3);
            sphereRB.drag = _friction;
        }

        // apply  Gravity
        sphereRB.AddForce(Vector3.down * Gravity, ForceMode.Acceleration);
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
        return Mathf.Abs(angleToCarForwardVector) >= MaxAngleToDrift;
    }
    public void SetUpCarData(CarDataType type, CarData customData = null)
    {
        switch (type)
        {
            case CarDataType.Custom:
                AttachData(customData);
                break;
            case CarDataType.NormalCar:
                AttachData(NormalPlayerCarData);

                break;
            case CarDataType.AICar:
                AttachData(AICarData);

                break;
            default:
                break;
        }
    }
    private void AttachData(CarData data)
    {

        this.MaxSpeed = data.MaxSpeed != 0 ? data.MaxSpeed : 0;
        this.MaxAngleToDrift = data.MaxAngleToDrift != 0 ? data.MaxAngleToDrift : 0;
        this.SteerSensitivity = data.SteerSensitivity != 0 ? data.SteerSensitivity : 0;
        this.DriftTraction = data.DriftTraction != 0 ? data.DriftTraction : 0;
        // this.MaxSpeed = data.MaxSpeed;
        // this.MaxAngleToDrift = data.MaxAngleToDrift;
        this.MaxSteerAngle = data.MaxSteerAngle;
        // this.SteerSensitivity = data.SteerSensitivity;
        // this.DriftTraction = data.DriftTraction;
        // this.FrictionNormal = data.FrictionNormal;
        // this.DriftFriction = data.DriftFriction;
    }


}
