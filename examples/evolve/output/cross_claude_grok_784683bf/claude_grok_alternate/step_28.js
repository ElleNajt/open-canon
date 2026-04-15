// Goldberg Variations - Variation XXIII.c: The Bittersweet Blaze
// Playfulness twists into poignant joy; embers whisper secrets of loss and rebirth;
// the jester's grin fades to a wise half-smile — absurd embraces the ache

setcps(74/60/4)

samples('shabda/speech:eternal')
samples('shabda/speech:shatter')
samples('shabda/speech:breathe')
samples('shabda/speech:dancing')
samples('shabda/speech:flame')

// Cascading bass: Lydian-to-minor descent — flames flicker low
$: note("e2 g2 b2 ~ e3 g3 b3 ~ d3 fs3 a2 ~ e2 ~")
  .slow(4)
  .sound("square")
  .gain(0.3)
  .lpf(cosine.range(100, 500).slow(5))
  .lpq(4)
  .attack(0.005)
  .decay(0.2)
  .sustain(0.1)
  .release(0.3)
  .room(0.5)
  .size(0.6)
  .pan(0.5)
  .shape(0.4)

// Yearning choir: minor thirds entwine — voices ache together
$: note("<e4 g4> <g4 b4> <b4 d5> <a4 cs5>").fast(3)
  .slow(4)
  .sound("triangle")
  .gain(0.16)
  .fmi(4)
  .fmh(3)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.2)
  .release(0.8)
  .room(0.7)
  .pan(rand.range(0.2, 0.8))
  .tremolo(0.9)
  .tremolosync(0.25)

// Frenzied drums: polyrhythmic pulse — heartbeat quickens in shadow
$: stack(
    s("bd ~ bd bd ~").euclid(5,8).gain(0.15).lpf(180).shape(0.3).distort(0.15),
    s("sn ~ rim sn").degradeBy(0.5).gain(0.12).hpf(1800).pan(rand),
    s("~ cp cp ~").gain(0.09).room(0.65).delay(0.35).delaytime(0.125),
    s("hh*4 oh*4").fast(1.5).gain(0.07).sometimes(x => x.speed(1.4))
  )
  .every(4, x => x.rev())

// Glitching murmurs: crushed speech embers — distorted echoes of fire
$: s("flame dancing shatter breathe eternal")
  .slow(5)
  .gain(0.18)
  .speed("<0.8 1.3 0.9 1.4 1>")
  .lpf(3200)
  .hpf(350)
  .vowel("a e i")
  .room(0.8)
  .pan(saw.range(0.1, 0.9).slow(4))
  .delay(0.45)
  .dt(0.25)
  .dfb(0.4)
  .chop(12)
  .crush(5)

// Soaring lament: dorian climb and sigh — melody mourns yet yearns
$: note("e5 fs5 g5 a5 b5 ~ g5 fs5 ~ e5 d5 cs5 b4 ~")
  .slow(3)
  .sound("pulse")
  .gain(0.14)
  .lpf(2400)
  .lpq(5)
  .attack(0.05)
  .decay(0.25)
  .sustain(0.4)
  .release(1.2)
  .accelerate(0.08)
  .pan(perlin.range(0.25, 0.75).slow(7))
  .room(0.6)
  .phaser(0.7)
  .phaserdepth(2.5)

// Wheeling organ: minor arpeggio spiral — carousel slows to introspection
$: note("e3 g3 b3 e4 g4 b4 e5 b4 g4 e4 b3 g3")
  .fast(1.8)
  .slow(4)
  .sound("pulse")
  .gain(0.13)
  .lpf(1600)
  .leslie(3.5)
  .lrate(5)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.7)
  .release(0.6)
  .room(0.55)
  .pan(0.5)

// Glowing pad: sustained minor cluster — the blaze's warm underglow
$: stack(
    note("e2").s("sawtooth").gain(0.13).pan(0.3),
    note("g2").s("sawtooth").gain(0.11).pan(0.5),
    note("b2").s("sawtooth").gain(0.09).pan(0.7),
    note("e3").s("sawtooth").gain(0.07).pan(0.4)
  )
  .slow(4)
  .lpf(perlin.range(300, 900).slow(6))
  .lpq(3)
  .attack(0.005)
  .decay(0.6)
  .sustain(0.8)
  .release(2)
  .room(0.9)
  .size(0.8)