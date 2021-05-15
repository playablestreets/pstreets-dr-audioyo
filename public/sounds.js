// const player = new Tone.Player("https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination();

class Sound{
  constructor(title, url){
    this.title = title;
    this.sound = new Tone.Player(url).toDestination();
  }
  play(){
    this.sound.start();
  }
  makeLooping(){
    this.sound.loop = true;
  }
}

function getSoundById(title){
  return sounds.filter(s => {
    return s.title === title;
  })[0];
}

function getSoundLoops(){
  return sounds.filter(s => {
    return s.sound.loop === true;
  });
}


function playSound(title){
    const foundSound = getSoundById(title);
    
    if(foundSound){
      foundSound.play();
    }
  }
  
  function stopSounds(){
    sounds.forEach( s => {
      s.sound.stop();
    });
  }
  
function stopSound(title){
  const foundSound = getSoundById(title);
  if(foundSound){
    foundSound.sound.stop();
  }
}

function startLoops(){
  const loops = getSoundLoops();
  loops.forEach( s => {
    s.sound.start();
    // s.sound.mute = true;
  });
}

function stopLoops(){
  const loops = getSoundLoops();
  loops.forEach( s => {
    s.sound.stop();
  });
}

const sounds = [];
sounds.hasLoaded = false;

sounds.push(new Sound("singer", "audio/singer.mp3"));
sounds.push(new Sound("bus", "audio/bus.mp3"));
sounds.push(new Sound("chopper", "audio/chopper.mp3"));
sounds.push(new Sound("crowd", "audio/crowd.mp3"));
sounds.push(new Sound("dj", "audio/dj.mp3"));
sounds.push(new Sound("dog", "audio/dog.mp3"));
sounds.push(new Sound("guitar", "audio/guitar.mp3"));
sounds.push(new Sound("horn", "audio/horn.mp3"));
sounds.push(new Sound("roar", "audio/roar.mp3"));
sounds.push(new Sound("scream", "audio/scream.mp3"));
sounds.push(new Sound("trumpet", "audio/trumpet.mp3"));
sounds.push(new Sound("knock", "audio/knock.mp3"));
sounds.push(new Sound("hello", "audio/hello.mp3"));
sounds.push(new Sound("click", "audio/click.mp3"));
sounds.push(new Sound("clack", "audio/clack.mp3"));
sounds.push(new Sound("hmm", "audio/hmm.mp3"));
sounds.push(new Sound("streetscape1", "audio/streetscape1.mp3"));
sounds.push(new Sound("streetscape2", "audio/streetscape2.mp3"));
sounds.push(new Sound("edge", "audio/edge.mp3"));
sounds.push(new Sound("jump", "audio/jump.mp3"));
sounds.push(new Sound("smash", "audio/smash.mp3"));
sounds.push(new Sound("laugh", "audio/laugh.mp3"));
sounds.push(new Sound("meow", "audio/meow.mp3"));
sounds.push(new Sound("wind", "audio/wind.mp3"));
sounds.push(new Sound("purr", "audio/purr.mp3"));
sounds.push(new Sound("cat", "audio/cat.mp3"));
sounds.push(new Sound("fall", "audio/fall.mp3"));
sounds.push(new Sound("splat", "audio/splat.mp3"));


const bumbagMeow = new Sound("bumbagMeow", "audio/bumbag/meow.mp3");
bumbagMeow.makeLooping();
sounds.push(bumbagMeow);

const bumbagBass = new Sound("bumbagBass", "audio/bumbag/bass.mp3");
bumbagBass.makeLooping();
sounds.push(bumbagBass);

const bumbagBeatbox = new Sound("bumbagBeatbox", "audio/bumbag/beatbox.mp3");
bumbagBeatbox.makeLooping();
sounds.push(bumbagBeatbox);

const bumbagDrums = new Sound("bumbagDrums", "audio/bumbag/drums.mp3");
bumbagDrums.makeLooping();
sounds.push(bumbagDrums);

const bumbagGuitar = new Sound("bumbagGuitar", "audio/bumbag/guitar.mp3");
bumbagGuitar.makeLooping();
sounds.push(bumbagGuitar);

const bumbagTrumpet = new Sound("bumbagTrumpet", "audio/bumbag/trumpet.mp3");
bumbagTrumpet.makeLooping();
sounds.push(bumbagTrumpet);

const bumbagLips = new Sound("bumbagLips", "audio/bumbag/lips.mp3");
bumbagLips.makeLooping();
sounds.push(bumbagLips);


sounds.forEach(s =>{
  s.sound.fadeOut = 1;
})

Tone.loaded().then(() => {
	// player.start();
  // sounds[0].play();
  // playSound("horn");
  sounds.hasLoaded = true;
});
