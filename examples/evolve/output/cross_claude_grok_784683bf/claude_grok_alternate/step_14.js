// Goldberg Variations - Variation XIII: Dissolution into Unity
// Shards reassemble in hushed revelation;
// breath weaves new architecture;
// void births luminous form

setcps(52/60/4)

samples('shabda/speech:infinite')
samples('shabda/speech:dissolve')
samples('shabda/speech:eternal')

// Bass: waves crest into serene horizon
$: note("[e2 b2 ~ ~] [g2 e3 ~ ~] [ds3 b2 ~ ~] [fs3 g3 ~ ~]")
  .slow(4)
  .sound("sine")
  .gain(0.3)
  .lpf(sine.range(180, 650).slow(10))
  .lpq(4)
  .attack(0.6)
  .decay(1.8)
  .sustain(0.65)
  .release(3)
  .room(0.92)
  .size(0.96)
  .pan(0.5)
  .slide(-0.25)

// Glass harmonics: glow pulses with inner fire
$: note("<[e5 gs5 b5] [d5 fs5 a5] [c5 e5 gs5] [b4 ds5 fs5]>")
  .slow(3)
  .sound("sine")
  .gain(0.13)
  .fmi(1.8)
  .fmh(10)
  .fmdecay(0.4)
  .attack(0.08)
  .decay(2.5)
  .sustain(0.1)
  .release(4.5)
  .room(0.98)
  .size(0.92)
  .pan(perlin.range(0.2, 0.8).slow(8))
  .phaser(0.2)
  .phaserdepth(1.8)
  .every(4, x => x.add(12))

// Whispered choir: voices entwine eternally
$: stack(
    s("infinite").speed(0.7).gain(0.09).pan(0.15),
    s("eternal").speed(1.1).gain(0.085).pan(0.7).late(0.8),
    s("dissolve").speed(0.95).gain(0.07).pan(0.85).late(2.2)
  )
  .slow(6)
  .chop(24)
  .speed(tri.range(0.75, 1.3).slow(4))
  .lpf(2000)
  .hpf(450)
  .room(0.98)
  .size(0.97)
  .delay(0.5)
  .delaytime(0.5)
  .delayfeedback(0.5)
  .degradeBy(0.25)

// Harp ghosts: plucks cascade in fractal dance
$: note("gs4 b4 ds5 fs5 b5 ds5 fs5").euclid(8, 16)
  .slow(4)
  .sound("sawtooth")
  .gain(0.12)
  .lpf(2500)
  .lpq(7)
  .attack(0.005)
  .decay(0.6)
  .sustain(0.15)
  .release(1.2)
  .room(0.88)
  .pan(cosine.range(0.2, 0.8).slow(4))
  .jux(x => x.sub(12).gain(0.07).pan(1-x.pan()))

// Breath pads: sustained exhalation blooms
$: note("e3, gs3, b3, e4")
  .slow(12)
  .sound("triangle")
  .gain(0.11)
  .lpf(1100)
  .lpq(2.5)
  .hpf(150)
  .detune(12)
  .attack(7)
  .decay(3)
  .sustain(0.9)
  .release(9)
  .room(0.99)
  .size(0.99)
  .pan(0.5)
  .vowel("a o u")
  .tremolo(0.12)
  .tremolosync(0.08)

// Subtle groove: heartbeat echoes softly
$: stack(
    s("bd ~ bd ~ bd").gain(0.22),
    s("~ sn ~ ~ sn").gain(0.16),
    s("hh*8, oh*4?").gain(0.11).hpf(3500).lpf(9000)
  )
  .room(0.35)
  .pan(saw.range(0.25, 0.75).slow(2))
  .crush(12)
  .sometimes(x => x.rev())