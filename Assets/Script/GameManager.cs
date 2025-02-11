using Unity.Cinemachine;
using UnityEngine;
public enum GameState
{
    MainMenu,
    GamePlay,
    GameOver
}
public class GameManager : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    public static GameManager instance;
    public CinemachineCamera cinemachineCamera;
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
    void FixedUpdate()
    {
        switch (Screen.orientation)
        {
            case ScreenOrientation.Portrait:

                Debug.Log("Portrait Mode");
                cinemachineCamera.Lens.FieldOfView = 50;
                break;

            case ScreenOrientation.LandscapeLeft:
            case ScreenOrientation.LandscapeRight:
                cinemachineCamera.Lens.FieldOfView = 25f;

                Debug.Log("Landscape Mode");
                break;


            default:
                Debug.Log("Unknown Orientation");
                break;
        }

    }
}
