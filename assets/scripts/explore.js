// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore > img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('#explore > button');

  let voices = [];

  function loadVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach(function (voice, index) {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  window.speechSynthesis.addEventListener('voiceschanged', loadVoices);

  talkButton.addEventListener('click', function () {
    const text = textArea.value;

    if (text.trim() === '') {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoiceIndex = voiceSelect.value;
    if (selectedVoiceIndex !== 'select') {
      utterance.voice = voices[selectedVoiceIndex];
    }

    utterance.onstart = function () {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Open mouth face';
    };

    utterance.onend = function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    utterance.onerror = function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    window.speechSynthesis.speak(utterance);
  });
}