//  https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

// let audioContext = new AudioContext();
// let audioBuffer;

// let dropZone = document.getElementById('drop-zone');
// dropZone.addEventListener('drop', handleDrop);

// function handleDrop(event) {
//   event.preventDefault();
//   console.log("dropping a file...");
//   let file = event.dataTransfer.files[0];
//   let reader = new FileReader();
//   reader.onload = function(event) {
//     audioContext.decodeAudioData(event.target.result, function(buffer) {
//       audioBuffer = buffer;
//       playAudio();
//     });
//   }
//   reader.readAsArrayBuffer(file);
// }

// function playAudio() {
//   let source = audioContext.createBufferSource();
//   source.buffer = audioBuffer;
//   source.connect(audioContext.destination);
//   source.start(0);
// }



console.clear();

// instigate our audio context
let audioCtx;

// load some sound
const audioElement = document.querySelector("audio");
let track;

const playButton = document.querySelector(".tape-controls-play");

// play pause audio
playButton.addEventListener(
  "click", () => {
    if (!audioCtx) {
      init();
    }

    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    if (playButton.dataset.playing === "false") {
      audioElement.play();
      playButton.dataset.playing = "true";
      // if track is playing pause it
    } else if (playButton.dataset.playing === "true") {
      audioElement.pause();
      playButton.dataset.playing = "false";
    }

    // Toggle the state between play and not playing
    let state =
      playButton.getAttribute("aria-checked") === "true" ? true : false;
    playButton.setAttribute("aria-checked", state ? "false" : "true");
  },
  false
);

// If track ends
audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
    playButton.setAttribute("aria-checked", "false");
  },
  false
);

function init() {
  audioCtx = new AudioContext();
  track = new MediaElementAudioSourceNode(audioCtx, {
    mediaElement: audioElement,
  });

  // Create the node that controls the volume.
  const gainNode = new GainNode(audioCtx);

  const volumeControl = document.querySelector('[data-action="volume"]');
  volumeControl.addEventListener(
    "input", () => {
      gainNode.gain.value = volumeControl.value;
    },
    false
  );

  // Create the node that controls the panning
  const panner = new StereoPannerNode(audioCtx, { pan: 0 });

  const pannerControl = document.querySelector('[data-action="panner"]');
  pannerControl.addEventListener(
    "input", () => {
      panner.pan.value = pannerControl.value;
    },
    false
  );

  // connect our graph
  track.connect(gainNode).connect(panner).connect(audioCtx.destination);
}


// Track credit: Outfoxing the Fox by Kevin MacLeod under Creative Commons
