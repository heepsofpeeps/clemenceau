<script src="https://p5js.org/assets/libs/p5.min.js"></script>
<script src="https://p5js.org/assets/libs/addons/p5.sound.min.js"></script>
<script src="https://p5js.org/reference/p5.sound/p5.MonoSynth/"></script>
<script src="https://p5js.org/assets/libs/addons/p5.sound.js"></script>
<script src="https://p5js.org/assets/libs/p5.js"></script>

let monoSynth;

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.mousePressed(playSynth);
  background(220);
  textAlign(CENTER);
  text('tap to play', width/2, height/2);
  monoSynth.setOscillator('sine');
  monoSynth = new p5.MonoSynth();
}

function playSynth() {
  userStartAudio();

  let note = random(['Fb4', 'G4']);
  // note velocity (volume, from 0 to 1)
  let velocity = random();
  // time from now (in seconds)
  let time = 0;
  // note duration (in seconds)
  let dur = 1/6;

  monoSynth.play(note, velocity, time, dur);
}
