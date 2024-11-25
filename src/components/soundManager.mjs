export const playSound = (soundName) => {
    const sounds = {
      correct: new Audio("/sound/correct.mp3"),
      wrong: new Audio("/sound/wrong.mp3"),
      background: new Audio("/sound/play.mp3")
    };
  
    if (soundName in sounds) {
      sounds[soundName].play();
    }
  };
  