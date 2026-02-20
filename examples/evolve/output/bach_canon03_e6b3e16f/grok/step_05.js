// BWV 1087 Canon 3 Evolved

// Baroque style voices
let upperVoice = x => x
  .sound("triangle")
  .gain(0.28)
  .attack(0.01)
  .decay(0.12)
  .sustain(0.4)
  .release(0.4)
  .lpf(sine.range(1000,4000).slow(20))
  .lpq(sine.range(3,15).slow(20))
  .hpf(200)
  .room(0.2)
  .delay(0.1)
  .tremolo(0.08)
  .tremolosync(6)
  .penv(0.06)
  .vowel("e a i o".slow(4))

let lowerVoice = x => x
  .sound("pulse")
  .gain(0.36)
  .decay(0.12)
  .sustain(0.4)
  .detune(4)
  .lpf(cosine.range(900,2800).slow(20))
  .room(0.25)
  .delay(0.1)
  .phaser(0.25)
  .phaserdepth(0.35)
  .fm(0.2)
  .fmenv(0.12)

let bassVoice = x => x
  .sound("piano")
  .gain(0.48)
  .lpf(650)
  .hpf(40)
  .attack(0.04)
  .decay(0.3)
  .sustain(0.5)
  .release(0.7)
  .room(0.3)
  .detune(-6)
  .tremolo(0.12)
  .tremolosync(4)

setcps(120/60/4)

// Track 1: Upper
$: note("~!32 d5 ~!6 e5 ~!6 fs5 ~!6 g5 ~!6 b5 ~!6 a5 ~!6 g5 ~!6 d6 ~!6 d5 ~!6 e5 ~!6 fs5 ~!6 g5 ~!6 b5 ~!6 a5 ~!6 g5 ~!6 [d6 eb6]")
  .slow(208/8/4)
  .apply(upperVoice)
  .pan(perlin.range(0.3,0.5).slow(16))
  .detune(perlin.range(-15,18).slow(10))
  .every(24, x => x.add(12).detune(rand.range(-12,12)))

// Track 2: Lower (offset evolution)
$: note("~!4 [g5 b5] ~!6 fs5 ~!6 e5 ~!6 d5 ~!6 b4 ~!6 c5 ~!6 d5 ~!6 g4 ~!4 [g5 b5] ~!6 fs5 ~!6 e5 ~!6 d5 ~!6 b4 ~!6 c5 ~!6 d5 ~!6 g4")
  .slow(208/8/4)
  .apply(lowerVoice)
  .pan(perlin.range(0.6,0.8).slow(16))
  .off(1/8, x => x.rev().pan(perlin.range(0.5,0.7).slow(16)))

// Track 3: Bass
$: note("d2~ [fs2 g2]~ [a2 b2]~ [g2 fs2 d3]~ [g2 fs2]~ d2~ [e2 d2 c2]~")
  .slow(65/8/4)
  .apply(bassVoice)
  .pan(sine.range(0.35,0.65).slow(16))
  .every(4, x => x.add(7))

// Track 4: Subtle continuo rhythm
$: s("bd ~ [cp rim] ~ hh*4 ~ hh").slow(2)
  .gain(0.18)
  .room(0.12)
  .hpf(250)
  .pan(sine.range(0.4,0.6).slow(8))
  .sometimes(x => x.speed(0.9))