using UnityEngine;

public class FinishLineColider : MonoBehaviour
{
    void OnTriggerEnter(Collider other)
    {

        if (other.gameObject.CompareTag("Car") && other.gameObject.transform.parent.Find("Car").TryGetComponent(out PlayerController _))
        {
            GameManager.OnGameOver.Invoke(true);
        }
        else
        {
            GameManager.OnGameOver.Invoke(false);
        }
    }
    void Update()
    {
        if (Input.GetKeyUp(KeyCode.Space))
        {
            GameManager.OnGameOver.Invoke(true);
        }
    }

}
