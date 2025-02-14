
using System.Collections.Generic;
using Cinemachine;
using UnityEngine;
using UnityEngine.Events;
public enum GameState
{
    MainMenu,
    GamePlay,
    GameOver
}
public enum CarDataType { Custom, NormalCar, AICar }
public class GameManager : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    public static GameManager instance;
    public CinemachineVirtualCamera cinemachineCamera;
    [SerializeField]
    private CarController playerCar;
    [SerializeField]
    private CarController aiCar;


    [LunaPlaygroundField("Player Data", 1, "Data Of Player Car")]

    [SerializeField] private CarDataType playerCarType = CarDataType.NormalCar;
    [LunaPlaygroundField("Custom Speed Player", 2, "Data Of Player Car")]
    [SerializeField] private float CustomSpeedPlayer = 0;
    [LunaPlaygroundField("Custom Max Angle To Drift Player", 3, "Data Of Player Car")]
    [SerializeField] private float CustomMaxAngleToDriftPlayer = 0;
    [LunaPlaygroundField("Custom Steer Sensitivity Player", 4, "Data Of Player Car")]
    [SerializeField] private float CustomSteerSensitivityPlayer = 0;
    [LunaPlaygroundField("Custom Steer Drift Traction Player", 5, "Data Of Player Car")]
    [SerializeField] private float CustomDriftTractionPlayer = 0;

    [LunaPlaygroundField("AI Data", 1, "Data Of AI Car")]
    [SerializeField] private CarDataType aiCarType = CarDataType.AICar;
    [LunaPlaygroundField("Custom Speed AI", 2, "Data Of AI Car")]
    [SerializeField] private float CustomSpeedAI = 0;
    [LunaPlaygroundField("Custom Max Angle To Drift AI", 3, "Data Of AI Car")]
    [SerializeField] private float CustomMaxAngleToDriftAI = 0;
    [LunaPlaygroundField("Custom Steer Sensitivity AI", 4, "Data Of AI Car")]
    [SerializeField] private float CustomSteerSensitivityAI = 0;
    [LunaPlaygroundField("Custom Steer Drift Traction AI", 5, "Data Of AI Car")]
    [SerializeField] private float CustomDriftTractionAI = 0;





    public static UnityEvent<bool> OnGameOver = new UnityEvent<bool>();
    void OnEnable()
    {
        OnGameOver.AddListener(HandleOnGameOver);
    }
    void OnDisable()
    {
        OnGameOver.RemoveListener(HandleOnGameOver);
    }

    private void HandleOnGameOver(bool isPlayerWin)
    {
        CarController.CanMove = false;
    }


    void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }
        else
        {
            Destroy(this.gameObject);
        }
        CarController.CanMove = false;
    }
    void Start()
    {
        SetUpCar();
    }
    void FixedUpdate()
    {
        bool isPortrait = Screen.height > Screen.width;
        if (isPortrait)
        {
            cinemachineCamera.m_Lens.FieldOfView = 50;

            // Adjust UI manually if needed
        }
        else
        {

            cinemachineCamera.m_Lens.FieldOfView = 25f;
        }


    }
    private void StopAllCar()
    {
        CarController.CanMove = false;
    }
    private void StartAllCar()
    {
        CarController.CanMove = true;
    }
    private void SetUpCar()
    {
        void ConfigureCar(CarController car, CarDataType type, float maxSpeed, float steerSensitivity, float maxAngleToDrift, float driftTraction)
        {
            if (type == CarDataType.Custom)
            {
                CarData carData = new CarData()
                {
                    MaxSpeed = maxSpeed,
                    SteerSensitivity = steerSensitivity,
                    MaxAngleToDrift = maxAngleToDrift,
                    DriftTraction = driftTraction
                };
                car.SetUpCarData(CarDataType.Custom, carData);
            }
            else
            {
                car.SetUpCarData(type);
            }
        }

        ConfigureCar(playerCar, playerCarType, CustomSpeedPlayer, CustomSteerSensitivityPlayer, CustomMaxAngleToDriftPlayer, CustomDriftTractionPlayer);
        ConfigureCar(aiCar, aiCarType, CustomSpeedPlayer, CustomSteerSensitivityPlayer, CustomMaxAngleToDriftPlayer, CustomDriftTractionPlayer);
    }
}
