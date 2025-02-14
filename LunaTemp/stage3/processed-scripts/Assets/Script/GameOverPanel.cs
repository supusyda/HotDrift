using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using TMPro;
using UnityEngine;

public class GameOverPanel : MonoBehaviour
{
    // Start is called before the first frame update
    [SerializeField] private Transform gameOverPanel;
    [SerializeField] private TMP_Text finishTxt;
    [SerializeField] private RectTransform retryButton;


    void OnEnable()
    {
        GameManager.OnGameOver.AddListener(HandleGameOver);
    }
    void OnDisable()
    {
        GameManager.OnGameOver.RemoveListener(HandleGameOver);
    }
    void Start()
    {
        gameOverPanel.GetComponent<CanvasGroup>().alpha = 0;  // Start hidden
    }
    private void HandleGameOver(bool isPlayerWin)
    {
        gameOverPanel.GetComponent<CanvasGroup>().DOFade(1, 0.5f);
        gameOverPanel.gameObject.SetActive(true);
        retryButton.anchoredPosition = new Vector2(0, -1000);
        retryButton.DOAnchorPosY(-100, 1f).SetEase(Ease.OutBack).SetDelay(.4f);
        finishTxt.text = isPlayerWin ? "You Win" : "You Lose";
    }

}
