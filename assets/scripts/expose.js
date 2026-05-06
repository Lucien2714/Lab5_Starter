// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.getElementById('horn-select');

  const hornImage = document.querySelector('#expose > img');
  const audioElement = document.querySelector('audio');
  const playButton = document.querySelector('button');
  const volumeControl = document.getElementById('volume-controls');
  const volumeImage = volumeControl.querySelector('img');
  const volumeSlider = document.getElementById('volume');

  selectHorn.addEventListener('change', function () {
    const selectedValue = selectHorn.value;

    hornImage.src = `assets/images/${selectedValue}.svg`;
    hornImage.alt = selectedValue;

    audioElement.src = `assets/audio/${selectedValue}.mp3`;
  });

  playButton.addEventListener('click', function () {
    audioElement.play();

    if (selectHorn.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });

  volumeSlider.addEventListener('input', function () {
    const volumeValue = Number(volumeSlider.value);

    if (volumeValue === 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
      volumeImage.alt = 'Volume level 0';
    } else if (volumeValue < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
      volumeImage.alt = 'Volume level 1';
    } else if (volumeValue < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
      volumeImage.alt = 'Volume level 2';
    } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
      volumeImage.alt = 'Volume level 3';
    }

    audioElement.volume = volumeValue / 100;
  });
}