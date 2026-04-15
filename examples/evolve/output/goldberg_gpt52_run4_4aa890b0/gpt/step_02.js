// Goldberg Variations — evolved: bolder harmonic turns, rhythmic swaps, and a stranger middle

samples('shabda/speech:aria,break,the_pattern,again')

setcps(72/60/4)

$: arrange(
  // I. New Aria: bass remains, harmony slips sideways
  [8, stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2")
      .slow(2)
      .sound("sine")
      .gain(0.42)
      .attack(0.01)
      .release(0.2)
      .lpf(1400)
      .lpq(4)
      .room(0.14),

    note("<g4 bb4 d5> <ab4 c5 eb5> <a4 c5 e5> <d4 fs4 a4>")
      .slow(2)
      .sound("supersaw")
      .gain(0.17)
      .lpf(cosine.range(500, 3200).slow(8))
      .lpq(6)
      .tremolo(0.2)
      .tremolosync(4)
      .room(0.28)
      .size(0.8),

    note("[d5 f5] [eb5 g5] [e5 a5] [fs5 a5] ~ [g5 f5] [eb5 d5]")
      .slow(2)
      .sound("piano")
      .gain(0.2)
      .delay(0.22)
      .dt(0.375)
      .dfb(0.35)
      .room(0.22)
  )],

  // II. Rhythm swap: off-kilter percussion + rewritten motif
  [8, stack(
    note("g3 ~ gb3 e3 d3 ~ b2 c3 d3")
      .slow(1)
      .sound("pulse")
      .cut(1)
      .gain(0.33)
      .attack(0.005)
      .release(0.18)
      .slide(0.12)
      .lpf(950)
      .lpq(6)
      .room(0.1),

    stack(
      s("bd").euclid(5, 8).gain(0.22),
      s("sn").euclid(3, 8).gain(0.18).room(0.12),
      s("rim*8").gain(0.11).hpf(2500).sometimesBy(0.35, x => x.rev()),
      s("hh*16").gain(0.1).hpf(6500).degradeBy(0.25)
    ).compressor("-18:3:6:0.01:0.12"),

    note("[g4 bb4 d5] ~ [a4 c5 e5] [bb4 d5 f5] [c5 eb5 g5] ~ [d5 f5 a5] [c5 eb5 g5]")
      .slow(2)
      .sound("triangle")
      .gain(0.16)
      .lpf(sine.range(600, 4200).slow(4))
      .lpq(5)
      .delay(0.28)
      .dt(0.25)
      .dfb(0.4)
      .room(0.18)
  )],

  // III. Drop the drums: voice becomes the pulse, bass turns shadowy
  [8, stack(
    s("aria break the_pattern again")
      .fast(2)
      .chop(32)
      .speed(rand.range(0.85, 1.1))
      .begin(rand.range(0, 0.2))
      .end(rand.range(0.6, 1))
      .hpf(180)
      .bpf(1400)
      .bpq(7)
      .ring(0.35)
      .ringf(120)
      .gain(0.14)
      .delay(0.35)
      .dt(0.5)
      .dfb(0.55)
      .room(0.35),

    note("g2 ~ g2 d3 ~ eb3 ~ d3 ~ c3 ~ b2")
      .slow(1)
      .sound("square")
      .gain(0.34)
      .attack(0.01)
      .release(0.22)
      .penv(0.25)
      .pattack(0.005)
      .pdecay(0.08)
      .psustain(0.2)
      .prelease(0.1)
      .lpf(800)
      .lpq(7)
      .drive(0.22)
      .room(0.12),

    note("d5 ~ eb5 g5 ~ f5 ~ eb5 d5 ~ c5 ~ bb4")
      .slow(2)
      .sound("sine")
      .gain(0.12)
      .tremolo(0.5)
      .tremolosync(8)
      .hpf(700)
      .delay(0.2)
      .dt(0.375)
      .dfb(0.3)
      .room(0.25)
  )],

  // IV. Unexpected machine-minuet: granular piano + metallic edges
  [8, stack(
    stack(
      s("bd*4").gain(0.21).sometimesBy(0.25, x => x.fast(2)),
      s("cp*8").gain(0.11).hpf(2500),
      s("hh*16").gain(0.1).hpf(7000).degradeBy(0.3),
      s("cr").euclid(2, 8).gain(0.08).hpf(5000).room(0.18)
    ).compressor("-20:4:6:0.005:0.1"),

    note("<g4 bb4 d5> <d4 f4 a4> <eb4 g4 bb4> <a3 c4 e4> <bb3 d4 f4> <fs3 a3 cs4>")
      .slow(1)
      .sound("piano")
      .gain(0.18)
      .striate(6)
      .sometimesBy(0.5, x => x.rev())
      .lpf(saw.range(700, 5000).slow(4))
      .lpq(6)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.45)
      .room(0.28),

    n("0 2 4 7 6 4 2 1")
      .scale("C:minor")
      .octave(2)
      .sound("sawtooth")
      .fast(4)
      .gain(0.12)
      .hpf(500)
      .lpf(2600)
      .lpq(6)
      .fm(0.35)
      .fmh(2)
      .fmenv(0.4)
      .fmattack(0.005)
      .fmdecay(0.12)
      .fmsustain(0.15)
      .fmrelease(0.1)
      .room(0.2)
  )],

  // V. Climax: harmony brightens, arps cut through, drums lock in
  [8, stack(
    note("g2 d3 e3 fs3 g3 d3 e3 c3")
      .slow(1)
      .sound("triangle")
      .gain(0.4)
      .attack(0.005)
      .release(0.16)
      .lpf(1700)
      .lpq(4)
      .room(0.12),

    stack(
      s("bd*4").gain(0.24),
      s("sn").euclid(2, 8).gain(0.17).room(0.1),
      s("hh*16").gain(0.11).hpf(6500),
      s("oh").euclid(3, 8).gain(0.11).hpf(4500).room(0.1)
    ).compressor("-18:3:6:0.005:0.12"),

    note("<g4 b4 d5> <a4 cs5 e5> <b4 ds5 fs5> <d5 fs5 a5>")
      .slow(2)
      .sound("supersaw")
      .gain(0.16)
      .lpf(cosine.range(900, 6500).slow(4))
      .lpq(6)
      .tremolo(0.28)
      .tremolosync(4)
      .delay(0.18)
      .dt(0.375)
      .dfb(0.3)
      .room(0.3)
      .size(0.85),

    n("0 2 4 6 7 9 11 9 7 6 4 2")
      .scale("G:minor")
      .octave(2)
      .sound("pulse")
      .fast(2)
      .gain(0.14)
      .cut(2)
      .attack(0.005)
      .release(0.12)
      .slide(0.08)
      .lpf(sine.range(600, 4800).slow(2))
      .lpq(7)
      .delay(0.25)
      .dt(0.25)
      .dfb(0.4)
      .room(0.2)
  )],

  // VI. Coda: ground returns, but "again" is fractured
  [8, stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2")
      .slow(2)
      .sound("sine")
      .gain(0.38)
      .attack(0.01)
      .release(0.25)
      .lpf(1100)
      .lpq(3)
      .room(0.18),

    note("<g4 bb4 d5> <f4 a4 c5> <eb4 g4 bb4> <d4 fs4 a4>")
      .slow(2)
      .sound("piano")
      .gain(0.22)
      .every(2, x => x.off(0.125, y => y.transpose(12).gain(0.12).delay(0.25).dt(0.25).dfb(0.3)))
      .room(0.22),

    s("again")
      .slow(2)
      .chop(24)
      .speed(rand.range(0.8, 1.2))
      .vowel("a e i o u")
      .hpf(250)
      .bpf(1800)
      .bpq(6)
      .crush(7)
      .gain(0.12)
      .delay(0.35)
      .dt(0.5)
      .dfb(0.45)
      .room(0.32)
  )]
)