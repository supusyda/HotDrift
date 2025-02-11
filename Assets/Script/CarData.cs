using UnityEngine;

[CreateAssetMenu(fileName = "CarData", menuName = "Scriptable Objects/CarData")]
public class CarData : ScriptableObject
{
    public float Gravity;
    public float MaxSpeed;
    public float MaxAngleToDrift;
    public float MaxSteerAngle;

    public float SteerSensitivity;
    public float DriftTraction;
    public float FrictionNormal;

    public float DriftFriction;


}
