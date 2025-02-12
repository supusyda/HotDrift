using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameOverPanel : MonoBehaviour
{
    // Start is called before the first frame update
    [SerializeField] private Transform gameOverPanel;
    void OnEnable()
    {
        GameManager.OnGameOver.AddListener(HandleGameOver);
    }
    void OnDisable()
    {
        GameManager.OnGameOver.RemoveListener(HandleGameOver);
    }
    private void HandleGameOver()
    {
        gameOverPanel.gameObject.SetActive(true);
    }

}
