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
}

//update play/pause icon depending on if video is running or not
function updatePlayIcon() {
  if (videoEl.paused) {
    playBtn.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
  } else {
    playBtn.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
  }
}

//update progress & timestamp
function updateProgress() {
  progressEl.value = (video.currentTime / video.duration) * 100;

  //get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  //get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }
  timeStampEl.innerHTML = `${mins}:${secs}`;
}

//tie video time to the progress bar
function setVideoProgress() {
  video.currentTime = (+progressEl.value * video.duration) / 100;
}

//stop video
function stopVideo() {
  videoEl.currentTime = 0;
  videoEl.pause();
}

//even listeners
videoEl.addEventListener("click", toggleVideoStatus);
videoEl.addEventListener("pause", updatePlayIcon);
videoEl.addEventListener("play", updatePlayIcon);
videoEl.addEventListener("timeupdate", updateProgress);
playBtn.addEventListener("click", toggleVideoStatus);
stopBtn.addEventListener("click", stopVideo);
progressEl.addEventListener("change", setVideoProgress);
