using System.Collections.Generic;
using UnityEngine;

public class AIPathController : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    [Header("References")]
    public Transform pathHolder;

    private List<Transform> _path = new List<Transform>();
    private int _currentPathIndex = -1;
    private CarController _carController;
    private Vector3 _dirToNextPoint = Vector3.zero;
    private bool _canMove = true;

    void Start()
    {
        _carController = GetComponent<CarController>();
        for (int i = 0; i < pathHolder.childCount; i++)
        {
            _path.Add(pathHolder.GetChild(i));
        }
        NextPathPoint();
    }
    void Update()
    {
        if (!_canMove) return;
        MoveCarAI();
        if (Vector3.Distance(transform.position, GetCurrentWaypointPos()) < 3f)
        {
            NextPathPoint();
        }
        Debug.DrawRay(transform.position, _dirToNextPoint * 3, Color.green);

    }
    private void NextPathPoint()
    {
        ++_currentPathIndex;
        if (_currentPathIndex >= _path.Count)
        {
            this._canMove = false;
        }


    }

    Vector3 GetCurrentWaypointPos()
    {
        return new Vector3(_path[_currentPathIndex].position.x, transform.position.y, _path[_currentPathIndex].position.z);
    }

    private void MoveCarAI()
    {
        _dirToNextPoint = GetCurrentWaypointPos() - transform.position;
        _carController.MovingCar(_dirToNextPoint);
    }
}
