// BWV 1087 Canon 3 Evolved

// Baroque style voices
let upperVoice = x => x
  .sound("piano")
  .gain(0.4)
  .attack(0.01)
  .decay(0.12)
  .sustain(0.3)
  .release(0.3)
  .lpf(sine.range(2000,3200).slow(16))
  .hpf(150)
  .room(0.2)
  .delay(0.1)
  .tremolo(0.15)
  .tremolosync(6)

let lowerVoice = x => x
  .sound("sawtooth")
  .gain(0.45)
  .decay(0.12)
  .sustain(0.3)
  .detune(3)
  .lpf(2400)
  .room(0.25)
  .delay(0.15)
  .phaser(0.3)

let bassVoice = x => x
  .sound("triangle")
  .gain(0.5)
  .lpf(500)
  .hpf(50)
  .attack(0.04)
  .decay(0.3)
  .sustain(0.5)
  .release(0.7)
  .room(0.3)
  .compressor()

setcps(135/60/4)

let drums = s("bd [~ bd], [sn ~], hh*4?").gain(0.2).hpf(250).room(0.1)

// Track 1: Upper
$: note("~!32 d5 ~!6 e5 ~!6 gb5 ~!6 g5 ~!6 b5 ~!6 a5 ~!6 g5 ~!6 d6 ~!6 d5 ~!6 e5 ~!6 gb5 ~!6 g5 ~!6 b5 ~!6 a5 ~!6 g5 ~!6 d6")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.3)
  .every(8, x => x.add(12).detune(rand.range(-15,15)))

// Track 2: Lower (offset evolution)
$: note("~!4 g5 ~!6 gb5 ~!6 e5 ~!6 d5 ~!6 b4 ~!6 c5 ~!6 d5 ~!6 g4 ~!6 g5 ~!6 gb5 ~!6 e5 ~!6 d5 ~!6 b4 ~!6 c5 ~!6 d5 ~!6 g4")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.7)
  .off(1/8, x => x.rev().pan(0.6))

// Track 3: Bass
$: note("d2~ [fs2 g2]~ [a2 b2]~ [g2 fs2] d3~ [g2 fs2]~ d2~ [e2 d2]")
  .slow(52/8/4)
  .apply(bassVoice)
  .pan(0.5)

// Track 4: Subtle drums
$: drums
  .slow(52/8/4)
  .pan(sine.range(0.4,0.6).slow(4))