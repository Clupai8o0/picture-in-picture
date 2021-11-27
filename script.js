const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (err) {
    //! throw error
    console.error('Error here', err);
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;

  // Start picture in picture window
  await videoElement.requestPictureInPicture();

  // Reset button
  button.disabled = false;
})

// On Load
selectMediaStream();