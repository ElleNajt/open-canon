// Goldberg Variations - Variation XVIII: Defiant Cathedral
// The phrygian fire transmutes to dorian rebellion;
// where prayer once spiraled, now drums thunder;
// triumphant brass replaces shattered bells

setcps(66/60/4)

samples('shabda/speech:thunder')
samples('shabda/speech:rising')
samples('shabda/speech:defy')
samples('shabda/speech:glory')

// Bass: dorian swagger, syncopated defiance
$: note("d1 ~ e1 f1 ~ a1 g1 ~ d2 c2")
  .slow(6)
  .sound("sawtooth")
  .gain(0.38)
  .lpf(cosine.range(60, 350).slow(5))
  .lpq(4)
  .attack(0.01)
  .decay(0.4)
  .sustain(0.7)
  .release(1.8)
  .room(0.65)
  .size(0.85)
  .pan(0.5)
  .shape(0.4)
  .distort(0.15)

// Brass fanfare: triumphant fifths replace shattered bells
$: note("<[d5,a5] [e5,b5] [f5,c6] [g5,d6]> <[a5,e6] ~ [g5,d6] [f5,c6]>")
  .slow(4)
  .sound("square")
  .gain(0.18)
  .lpf(2400)
  .lpq(2)
  .attack(0.08)
  .decay(0.5)
  .sustain(0.6)
  .release(1.2)
  .room(0.7)
  .size(0.8)
  .pan(sine.range(0.3, 0.7).slow(6))
  .detune(15)
  .phaser(0.3)
  .phaserdepth(0.4)

// Abandoned hymn: now a defiant march in dorian
$: note("d4 e4 f4 g4 a4 ~ b4 c5 d5 ~ a4 g4 f4 e4 d4")
  .slow(8)
  .sound("triangle")
  .gain(0.14)
  .attack(0.15)
  .decay(0.6)
  .sustain(0.5)
  .release(2)
  .room(0.75)
  .size(0.82)
  .pan(perlin.range(0.3, 0.7).slow(9))
  .lpf(2200)
  .lpq(2)
  .fmi(2)
  .fmh(2)

// War drums: polyrhythmic thunder replaces ritual
$: stack(
    s("bd*2").gain(0.35).lpf(120).shape(0.25).room(0.5),
    s("bd").euclid(3,8).gain(0.22).lpf(80).late(0.125),
    s("sn").euclid(2,5).gain(0.18).hpf(200).pan(0.6).room(0.4),
    s("mt").euclid(3,7).gain(0.12).pan(0.35).speed(1.2),
    s("oh").euclid(5,11).gain(0.09).hpf(4000).pan(0.7).delay(0.3).delaytime(0.25)
  )
  .slow(2)
  .sometimes(x => x.hurry(1.5))
  .juxBy(0.25, x => x.late(0.03125))

// NEW: Pulsing synth stabs - rhythmic defiance
$: note("[d4,f4,a4] ~ [e4,g4,b4] ~ ~ [f4,a4,c5] [g4,b4,d5] ~")
  .slow(2)
  .sound("pulse")
  .gain(0.15)
  .lpf(sine.range(600, 2800).slow(4))
  .lpq(5)
  .attack(0.005)
  .decay(0.15)
  .sustain(0.1)
  .release(0.4)
  .room(0.55)
  .pan(rand.range(0.25, 0.75))
  .distort(0.2)
  .delay(0.4)
  .delaytime(0.166)
  .delayfeedback(0.5)

// Chanting voices - defiant proclamation
$: stack(
    s("thunder,defy").speed(0.9).gain(0.14).vowel("a o"),
    s("rising,glory").speed(0.7).gain(0.11).pan(0.4)
  )
  .slow(6)
  .chop(16)
  .lpf(1100)
  .hpf(150)
  .room(0.88)
  .delay(0.7)
  .delaytime(0.5)
  .delayfeedback(0.6)
  .degradeBy(0.35)
  .jux(x => x.speed(0.85))

// Ascending arpeggios - spiraling victory
$: note("d3 f3 a3 d4 f4 a4 d5 f5 a5 d6")
  .slow(3)
  .sound("sine")
  .gain(0.1)
  .fmi(6)
  .fmh(3/2)
  .fmenv(0.7)
  .fmdecay(0.2)
  .attack(0.002)
  .decay(0.4)
  .sustain(0.08)
  .release(1.8)
  .pan(saw.range(0.15, 0.85).slow(3))
  .hpf(400)
  .room(0.8)
  .delay(0.6)
  .delaytime(0.333)
  .delayfeedback(0.55)
  .iter(5)