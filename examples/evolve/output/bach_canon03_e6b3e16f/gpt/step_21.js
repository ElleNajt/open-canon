// BWV 1087 Canon 3

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.37)
  .attack(0.027)
  .decay(0.12)
  .sustain(0.21)
  .lpf(1320)
  .room(0.27)

let lowerVoice = x => x
  .sound("square")
  .gain(0.32)
  .attack(0.04)
  .decay(0.10)
  .sustain(0.2)
  .lpf(890)
  .room(0.18)

setcps(116/60/4)

// Track 1 — upper voice now gets mild delay at intervals; less vowel patterning, subtle overdrive
$: note("~!40 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!15")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(0.22)
  .room(0.27)
  .degradeBy(0.03)
  .every(16, x => x.lpf(1020).gain(0.23).decay(0.13))
  .every(22, x => x.rev())
  .sometimes(x => x.vowel("a i"))
  .every(40, x => x.delay(0.17).delaytime(0.29).delayfeedback(0.14).room(0.11).pan(0.16))
  .sometimes(x => x.hpf(920).gain(0.13).room(0.12))
  .sometimes(x => x.drive(0.12))

// Track 2 — lower voice: streamlined, rarely gets extra phasing, less delay, more mid warmth
$: note("~!8 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!15")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(0.77)
  .room(0.17)
  .every(10, x => x.decay(0.13).room(0.17).lpf(720))
  .sometimes(x => x.phaser(0.21).phaserdepth(0.21))
  .every(32, x => x.delay(0.08).delaytime(0.21).delayfeedback(0.09))
  .sometimes(x => x.attack(0.035).room(0.15))

// Track 3 — more focused bass, tighter pan, some additional grain on rare cycles
$: n("[d2 ~ a2] [d2 ~ fs2] [g2 ~ b1] [d2 ~ a1] [fs2 g2] [b1 a1]")
  .sound("sine")
  .gain(0.10)
  .sustain(0.14)
  .attack(0.016)
  .release(0.25)
  .lpf(sine.range(570, 820).slow(17))
  .lpq(5)
  .room(0.28)
  .pan(sine.range(0.33,0.51).slow(17))
  .every(18, x => x.lpf(430).room(0.15).gain(0.06))
  .sometimes(x => x.hpf(95).room(0.19))
  .every(24, x => x.rev().pan(0.41))
  .rarely(x => x.crush(7).gain(0.07).delay(0.18).delaytime(0.12).delayfeedback(0.09))