// Goldberg Variations - Variation XVIII: Ascending Prisms
// Shards defy gravity, forging phrygian fire;
// shattered prayer spirals upward in defiant harmony;
// from sacred doubt erupts harmonic triumph

setcps(58/60/4)

samples('shabda/speech:cathedral')
samples('shabda/speech:shatter')
samples('shabda/speech:prayer')
samples('shabda/speech:ghost')

// Bass: inverted ascent, phrygian dominant thrust
$: note("e1 f1 gs1 a1 b1 c2 ds2 e2")
  .slow(8)
  .sound("triangle")
  .gain(0.42)
  .lpf(cosine.range(80, 400).slow(7))
  .lpq(6)
  .attack(0.05)
  .decay(0.5)
  .sustain(0.6)
  .release(2.2)
  .room(0.8)
  .size(0.9)
  .pan(0.5)
  .shape(0.3)
  .fmi(0.8)
  .fmh(0.5)

// Shattered bells: prismatic clusters ignite with sharps
$: note("<[e7,gs7,b6] ~ [f7,c7,a6] ~> <~ [ds7,gs6] ~ [e7,b6,gs6]>")
  .slow(3)
  .sound("sine")
  .gain(0.14)
  .fmi(9)
  .fmh(7/4)
  .fmenv(0.95)
  .fmdecay(0.08)
  .attack(0.0005)
  .decay(2.5)
  .sustain(0.02)
  .release(4)
  .room(0.95)
  .size(0.95)
  .pan(rand.range(0.1, 0.9))
  .hpf(800)
  .delay(0.85)
  .delaytime(0.666)
  .delayfeedback(0.7)

// Hymn fragment: soaring phrygian dominant arc
$: note("e4 f4 gs4 a4 b4 c5 ~ ds5 e5 f5 gs5 a5 ~ b5")
  .slow(6)
  .sound("sawtooth")
  .gain(0.12)
  .attack(0.4)
  .decay(0.8)
  .sustain(0.3)
  .release(3)
  .room(0.85)
  .size(0.88)
  .pan(perlin.range(0.25, 0.75).slow(11))
  .lpf(1800)
  .lpq(3)
  .detune(8)
  .phaser(0.15)
  .phaserdepth(0.6)

// Ritual percussion: euclidean spirals, hypnotic drive
$: stack(
    s("bd").euclid(3,8).gain(0.28).lpf(100).room(0.6),
    s("rim").euclid(2,7).gain(0.14).pan(0.3).delay(0.5).delaytime(0.333),
    s("hh").euclid(5,13).gain(0.08).hpf(3000).pan(0.7).speed(1.05)
  )
  .slow(1.5)
  .sometimesBy(0.4, x => x.rev())
  .juxBy(0.3, x => x.late(0.0625))

// NEW: Soaring supersaw lead - triumphant phrygian blaze
$: note("<e5 gs5 b5 c6> <e6 gs6 b6> ~ <c6 b5 gs5 e5>")
  .slow(4)
  .sound("supersaw")
  .gain(0.16)
  .lpf(sine.range(800, 3200).slow(6))
  .lpq(4)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.4)
  .release(1.8)
  .room(0.75)
  .pan(saw.range(0.2, 0.8).slow(3))
  .detune(25)
  .fmi(1.8)
  .fmh(1.5)

// Ghostly choir - fractured echoes ascend
$: stack(
    s("shatter,ghost,prayer").speed(0.75).gain(0.12).vowel("o*3 a*3 u"),
    s("cathedral").speed(0.55).gain(0.09).pan(0.65)
  )
  .slow(5)
  .chop(32)
  .rev()
  .lpf(900)
  .hpf(180)
  .room(0.97)
  .delay(0.9)
  .delaytime(0.75)
  .delayfeedback(0.72)
  .degradeBy(0.45)
  .jux(x => x.speed(1.25))

// Metallic prayer wheel - spiraling dominant ascent
$: note("e3 f3 gs3 a3 b3 c4 ds4 e4 gs4 b4")
  .slow(4)
  .sound("triangle")
  .gain(0.11)
  .fmi(12)
  .fmh(5/3)
  .attack(0.001)
  .decay(0.6)
  .sustain(0.05)
  .release(1.5)
  .pan(sine.range(0.2, 0.8).fast(2))
  .hpf(600)
  .room(0.75)
  .iter(8)