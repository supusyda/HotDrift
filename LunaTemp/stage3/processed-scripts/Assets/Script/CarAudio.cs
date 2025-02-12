using UnityEngine;

public class CarAudio : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    public AudioClip engineSound;
    public AudioClip driftSound;
    AudioSource audioSource;


    void Awake()
    {
        audioSource = GetComponent<AudioSource>();
        audioSource.loop = true;
    }


    public void PlaySound(AudioClip clip)
    {
        audioSource.Stop();
        audioSource.clip = clip;
        audioSource.Play();
    }
}
