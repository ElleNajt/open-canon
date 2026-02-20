// Evolved BWV 1087 Canon 3: tighter groove, dynamic pads, sub pulse

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.35)
  .attack(0.03)
  .decay(0.22)
  .sustain(0.3)
  .release(0.12)
  .lpf(2600)
  .hpf(140)
  .lpq(2.5)
  .delay(0.15)
  .delayfeedback(0.28)
  .room(0.22)
  .tremolo(0.1)
  .tremolosync(6)
  .compressor()
  .degradeBy(0.03)

let lowerVoice = x => x
  .sound("square")
  .gain(0.42)
  .attack(0.025)
  .decay(0.2)
  .sustain(0.28)
  .release(0.11)
  .lpf(2200)
  .hpf(110)
  .lpq(2)
  .phaser(0.35)
  .leslie(0.2)
  .room(0.2)
  .compressor()
  .degradeBy(0.03)

let bassVoice = x => x
  .sound("piano")
  .gain(0.52)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.4)
  .release(0.8)
  .lpf(1100)
  .hpf(40)
  .ring(0.15)
  .room(0.3)
  .pan(0.5)
  .compressor()

let padVoice = x => x
  .sound("sawtooth")
  .gain(0.18)
  .attack(0.8)
  .decay(0.5)
  .sustain(0.4)
  .release(1.2)
  .lpf(sine.range(600, 1400).slow(8))
  .lpq(1.5)
  .vowel("a o")
  .room(0.45)
  .pan(sine.range(0.4, 0.6))

let subVoice = x => x
  .sound("sine")
  .gain(0.3)
  .attack(0.1)
  .decay(0.4)
  .sustain(0.6)
  .release(0.6)
  .lpf(120)
  .hpf(30)
  .room(0.2)

setcps(132/60/4)

stack(
  note("~!36 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7 d5 ~!7 e5 ~!7 gb5 ~!7 g5 ~!7 b5 ~!7 a5 ~!7 g5 ~!7 d6 ~!7")
    .slow(6)
    .every(4, x => x.rev())
    .apply(upperVoice)
    .pan(0.3)
    .juxBy(0.6, x => x.rev().pan(1))
    .swing(0.02),

  note("~!12 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4 ~!7 g5 ~!7 gb5 ~!7 e5 ~!7 d5 ~!7 b4 ~!7 c5 ~!7 d5 ~!7 g4")
    .slow(6)
    .apply(lowerVoice)
    .pan(0.7)
    .off(1/8, x => x.add(-12))
    .swing(0.02),

  note("g2 bb2 d3 f3 c3 eb3 bb2 g2").euclid(7,16)
    .slow(1.25)
    .apply(bassVoice)
    .swing(0.02),

  chord("gmin dmin bbmin fmin cmin gmin").voicing()
    .slow(4)
    .sometimes(x => x.arp("up").fast(3))
    .apply(padVoice),

  note("g1 bb1").euclid(3,8)
    .slow(2)
    .apply(subVoice),

  s("[bd bd ~ sn] [bd ~ sn hh*2] bd [sn hh*3 ~]").gain(0.28).room(0.15).pan(0.5)
    .sometimes(x => x.speed(0.85))
    .swing(0.04)
)