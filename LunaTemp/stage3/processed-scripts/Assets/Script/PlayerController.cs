using UnityEngine;
[RequireComponent(typeof(CarController))]
public class PlayerController : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    [SerializeField] LunaJoystick fixedJoystick;
    CarController _carController;

    void Start()
    {
        _carController = GetComponent<CarController>();
    }

    void Update()
    {

        Vector3 joyDir = new Vector3(fixedJoystick.inputVector.x, 0, fixedJoystick.inputVector.y);
        _carController.MovingCar(joyDir.normalized);

    }
}
