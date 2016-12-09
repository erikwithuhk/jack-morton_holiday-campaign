var video = document.querySelector('video');

var togglePlay = function() {
  if (!video.paused) {
    video.pause();
  } else {
    video.play();
  }
};

var pauseOnClick = function() {
  video.addEventListener('click', togglePlay);
}

window.onload = pauseOnClick;
