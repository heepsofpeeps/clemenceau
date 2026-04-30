let monoSynth;
let delay;
let reverb;

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.mousePressed(playSynth);

  background(220);
  textAlign(CENTER, CENTER);
  text('tap to play', width / 2, height / 2);

  monoSynth = new p5.MonoSynth();
  delay = new p5.Delay();
  reverb = new p5.Reverb();

  // Initial routing (values updated in draw)
  delay.process(monoSynth, 0.2, 0.4, 1000);
  reverb.process(delay, 2, 2);
}

function draw() {
  background('#DDA0DD');

  // Map mouse X to delay time (0.05s → 0.6s)
  let delayTime = map(mouseX, 0, width, 0.05, 0.6, true);

  // Map mouse Y to reverb time (0.1s → 5s)
  let reverbTime = map(mouseY, 0, height, 5, 0.1, true);

  // Apply changes live
  delay.delayTime(delayTime);
  reverb.set(reverbTime, 2);

  // Simple UI text
  fill(0);
  text(
    `Delay Time (X): ${delayTime.toFixed(2)}s\nReverb Time (Y): ${reverbTime.toFixed(2)}s\nTap to play`,
    width / 2,
    height / 2
  );
}

function playSynth() {
  userStartAudio();

  let note = random(['E4', 'G4']);
  let velocity = random(0.4, 1);
  let dur = 1 / 6;

  monoSynth.play(note, velocity, 0, dur);
}
