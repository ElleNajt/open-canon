// BWV 1087 Canon 3 Evolved

// Baroque style voices
let upperVoice = x => x
  .sound("piano")
  .gain(0.4)
  .attack(0.01)
  .decay(0.12)
  .sustain(0.3)
  .release(0.3)
  .lpf(2800)
  .hpf(150)
  .room(0.2)
  .delay(0.1)

let lowerVoice = x => x
  .sound("supersaw")
  .gain(0.45)
  .decay(0.12)
  .sustain(0.3)
  .lpf(2200)
  .room(0.25)
  .delay(0.15)

let bassVoice = x => x
  .sound("sine")
  .gain(0.5)
  .lpf(450)
  .hpf(60)
  .attack(0.03)
  .decay(0.25)
  .sustain(0.5)
  .release(0.6)
  .room(0.3)

setcps(130/60/4)

// Track 1: Upper
$: note("~!32 d5 ~!6 e5 ~!6 gb5 ~!6 g5 ~!6 b5 ~!6 a5 ~!6 g5 ~!6 d6 ~!6 d5 ~!6 e5 ~!6 gb5 ~!6 g5 ~!6 b5 ~!6 a5 ~!6 g5 ~!6 d6")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.25)
  .every(4, x => x.add(12).detune(rand.range(-10,10)))

// Track 2: Lower (offset evolution)
$: note("~!4 g5 ~!6 gb5 ~!6 e5 ~!6 d5 ~!6 b4 ~!6 c5 ~!6 d5 ~!6 g4 ~!6 g5 ~!6 gb5 ~!6 e5 ~!6 d5 ~!6 b4 ~!6 c5 ~!6 d5 ~!6 g4")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.75)
  .jux(x => x.rev())

// Track 3: Bass
$: note("d2~ [fs2 g2]~ [a2 b2]~ [g2 fs2] d3~ g2~")
  .slow(52/8/4)
  .apply(bassVoice)
  .pan(0.5)