using UnityEngine;
using UnityEngine.SceneManagement;

public class BtnReset : BtnBase
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    protected override void OnClick()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }

}
