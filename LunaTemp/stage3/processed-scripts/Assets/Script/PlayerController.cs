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
        // Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        // Plane plane = new Plane(Vector3.up, transform.position); // Assuming the object is on a horizontal plane
        // float distance;
        // Vector3 movingDir = transform.forward;
        // if (plane.Raycast(ray, out distance))
        // {
        //     Vector3 mouseWorldPos = ray.GetPoint(distance); // Get mouse world position

        //     // Calculate the direction to the mouse position relative to the car object
        //     movingDir = mouseWorldPos - transform.position;

        //     // Calculate the right direction relative to the car object


        // }
        Vector3 joyDir = new Vector3(fixedJoystick.inputVector.x, 0, fixedJoystick.inputVector.y);
        _carController.MovingCar(joyDir.normalized);

    }
}
