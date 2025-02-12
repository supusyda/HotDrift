using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LunaJoystick : MonoBehaviour
{
    public RectTransform joystickBackground;
    public RectTransform joystickHandle;
    public float moveSpeed = 5f;

    private Vector2 startTouchPosition;
    private Vector2 currentTouchPosition;
    public Vector2 inputVector = Vector2.zero;
    private bool isTouching = false;

    void Update()
    {
        if (Input.GetMouseButtonDown(0)) // Start Touch
        {
            startTouchPosition = Input.mousePosition;
            isTouching = true;
        }
        else if (Input.GetMouseButton(0) && isTouching) // Drag
        {
            currentTouchPosition = Input.mousePosition;
            inputVector = Vector2.ClampMagnitude((currentTouchPosition - startTouchPosition) / (joystickBackground.sizeDelta.x / 2), 1f);
            joystickHandle.anchoredPosition = inputVector * (joystickBackground.sizeDelta.x / 2);
        }
        else if (Input.GetMouseButtonUp(0)) // Release
        {
            inputVector = Vector2.zero;
            joystickHandle.anchoredPosition = Vector2.zero;
            isTouching = false;
        }



    }
}
