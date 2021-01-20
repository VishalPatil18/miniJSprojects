function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;                                      // stop the function from running
    audio.currentTime = 0;                                  // rewind the time of audio to start when pressed multiple times quickly
    audio.play();                                           // playing the audio
    console.log(e.key);
    key.classList.add('playing');                           // vannila js syntax to add class to an element
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;              // skip if no transform is present
    this.classList.remove('playing');                       // remove the class of playing once the transition is over
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playsound);