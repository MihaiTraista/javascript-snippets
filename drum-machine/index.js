// instigate our audio context
let audioCtx = null;
let oscillator = null;
let gainNode = null;

const playButton = document.getElementById("play-pause-button");

playButton.addEventListener("click", () => {
    if (!audioCtx) {
      init();
    }

    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    if (playButton.dataset.playing === "false") {
      playSynth();
      playButton.dataset.playing = "true";
    } else if (playButton.dataset.playing === "true") {
      stopSynth();
      playButton.dataset.playing = "false";
    }

  }, false );

function init() {
  audioCtx = new AudioContext();

  gainNode = audioCtx.createGain();
  gainNode.gain.value = 0.25;

  const volumeControl = document.getElementById("volume");
  volumeControl.addEventListener('input', function() {
    gainNode.gain.value = volumeControl.value;
  }, false);  
}

function playSynth() {
  oscillator = audioCtx.createOscillator();
  oscillator.type = 'sawtooth'; //  "sine", "square", "sawtooth", "triangle" and "custom". The default is "sine"
  oscillator.frequency.value = 50;

  // Connect to the speakers
  oscillator.connect(gainNode).connect(audioCtx.destination);

  oscillator.start();
}

function stopSynth() {
  if(oscillator) {
    oscillator.stop();
    oscillator = null;
  }
}
