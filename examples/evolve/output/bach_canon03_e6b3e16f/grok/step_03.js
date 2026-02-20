// BWV 1087 Canon 3 Evolved

// Baroque style voices
let upperVoice = x => x
  .sound("square")
  .gain(0.35)
  .attack(0.01)
  .decay(0.1)
  .sustain(0.35)
  .release(0.35)
  .lpf(sine.range(1500,3500).slow(12))
  .hpf(180)
  .room(0.18)
  .delay(0.12)
  .tremolo(0.12)
  .tremolosync(5)
  .penv(0.08)

let lowerVoice = x => x
  .sound("sawtooth")
  .gain(0.42)
  .decay(0.1)
  .sustain(0.35)
  .detune(2)
  .lpf(saw.range(1200,2600).slow(20))
  .room(0.22)
  .delay(0.12)
  .phaser(0.25)
  .phaserdepth(0.4)
  .fm(0.15)

let bassVoice = x => x
  .sound("sine")
  .gain(0.52)
  .lpf(650)
  .hpf(35)
  .attack(0.035)
  .decay(0.28)
  .sustain(0.55)
  .release(0.65)
  .room(0.32)
  .detune(-8)

setcps(128/60/4)

// Track 1: Upper
$: note("~!32 d5 ~!6 e5 ~!6 gb5 ~!6 g5 ~!6 b5 ~!6 a5 ~!6 g5 ~!6 d6 ~!6 d5 ~!6 e5 ~!6 gb5 ~!6 g5 ~!6 b5 ~!6 a5 ~!6 g5 ~!6 d6")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(perlin.range(0.2,0.4).slow(16))
  .every(16, x => x.add(12).detune(rand.range(-10,10)))

// Track 2: Lower (offset evolution)
$: note("~!4 g5 ~!6 gb5 ~!6 e5 ~!6 d5 ~!6 b4 ~!6 c5 ~!6 d5 ~!6 g4 ~!6 g5 ~!6 gb5 ~!6 e5 ~!6 d5 ~!6 b4 ~!6 c5 ~!6 d5 ~!6 g4")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.75)
  .off(1/16, x => x.rev().pan(0.65))

// Track 3: Bass
$: note("d2~ [fs2 g2]~ [a2 b2]~ [g2 fs2] d3~ [g2 fs2]~ d2~ [e2 d2]")
  .slow(52/8/4)
  .apply(bassVoice)
  .pan(sine.range(0.45,0.55).slow(8))
  .every(4, x => x.add(7))