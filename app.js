//grabbing html elements for use in JS
const videoEl = document.querySelector("#video");
const playBtn = document.querySelector("#play");
const stopBtn = document.querySelector("#stop");
const progressEl = document.querySelector("#progress");
const timeStampEl = document.querySelector("#timestamp");

//play and pause video
function toggleVideoStatus() {
  if (videoEl.paused) {
    videoEl.play();
  } else {
    videoEl.pause();
  }
};

//update play/pause icon depending on if video is running or not
function updatePlayIcon() {
  if (videoEl.paused) {
    playBtn.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  } else {
    playBtn.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  }
};

//update progress & timestamp
function updateProgress() {
  return true;
};

//tie video time to the progress bar
function setVideoProgress() {
  return true;
};

//stop video
function stopVideo() {
//   videoEl.currentTime = 0;
  videoEl.pause();
};

//even listeners
videoEl.addEventListener("click", toggleVideoStatus);
videoEl.addEventListener("pause", updatePlayIcon);
videoEl.addEventListener("play", updatePlayIcon);
videoEl.addEventListener("timeupdate", updateProgress);
playBtn.addEventListener("click", toggleVideoStatus);
stopBtn.addEventListener("click", stopVideo);
progressEl.addEventListener("change", setVideoProgress);
