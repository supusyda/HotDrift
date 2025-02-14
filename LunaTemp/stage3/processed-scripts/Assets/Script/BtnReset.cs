using DG.Tweening;
using UnityEngine;
using UnityEngine.SceneManagement;

public class BtnReset : BtnBase
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    protected override void OnClick()
    {
        transform.GetComponent<RectTransform>().DOAnchorPosY(200, 1f);
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }

}
