using UnityEngine;
using DG.Tweening;
using TMPro;

public class MoveAndHide : MonoBehaviour
{
    public Vector3 targetPosition; // Set this to the new position in the Inspector
    public float moveDuration = 1f;  // Time to move each child
    public float fadeDuration = 0.5f; // Time to fade each child
    public float delayBetween = 1f; // Delay between each child's animation
    public Transform particle;

    void Start()
    {

        MoveAndFadeChildrenInOrder();
    }

    void MoveAndFadeChildrenInOrder()
    {
        int childCount = transform.childCount;
        int completed = 0;
        for (int i = 0; i < childCount; i++)
        {
            Transform child = transform.GetChild(i);
            Vector3 newPosition = child.localPosition + child.forward * -31;

            // Move to new position
            Sequence s = DOTween.Sequence();
            s.Append(child.DOLocalMove(newPosition, moveDuration)
                 .SetDelay(i * delayBetween) // Delay each child movement
                 .SetEase(Ease.OutQuad).OnComplete(() =>
                 {
                     Instantiate(particle, child.position, child.rotation).GetComponent<ParticleSystem>().Play();
                     completed++;
                     if (completed == childCount)
                     {
                         CarController.CanMove = true;
                     }
                 }));

            // Try to fade if the child has a Renderer (for 3D) or CanvasGroup (for UI)
            s.Append(child.GetComponent<TextMeshPro>().DOFade(0, fadeDuration)
                 // Delay each child fade
                 .OnComplete(() => child.gameObject.SetActive(false))); // Hide the child after fading



        }
    }
}