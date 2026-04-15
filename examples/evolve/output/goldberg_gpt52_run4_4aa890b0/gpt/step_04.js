// Goldberg Variations — evolved again: inversion, mirror-dance, and a ghost in the machine

samples('shabda/speech:aria,break,the_pattern,again,invert,mirror,ghost_in_the_machine,listen')
samples('shabda/speech/fr-FR/m:magnifique,encore')
samples('shabda/speech/ja-JP/f:utakata')

setcps(84/60/4)

$: arrange(
  // I. Aria inverted: harmonic floor tilts harder, melody is rewritten and answers itself
  [8, stack(
    note("g2 d3 eb3 fs2 f2 c3 db3 a2")
      .slow(2)
      .sound("sine")
      .gain(0.38)
      .attack(0.01)
      .release(0.24)
      .lpf(1200)
      .lpq(4.2)
      .room(0.14),

    note("<g4 bb4 d5> <a4 c5 e5> <fs4 a4 cs5> <f4 ab4 c5> <eb4 g4 bb4> <d4 fs4 a4> <db4 f4 ab4> <c4 e4 g4>")
      .slow(2)
      .sound("supersaw")
      .gain(0.15)
      .detune(11)
      .leslie(0.25)
      .phaser(0.18)
      .lpf(perlin.range(900, 6200).slow(6))
      .lpq(6.4)
      .tremolo(0.18)
      .tremolosync(4)
      .every(2, x => x.juxBy(0.55, y => y.transpose(12).gain(0.11).delay(0.16).dt(0.25).dfb(0.22)))
      .room(0.32)
      .size(0.85),

    note("[d5 e5 f5 g5] [a5 g5 f5 e5] [d5 f5 a5 c6] [b4 a4 g4 f4] [e5 g5 bb5] ~ [d5 e5 f5] [c5 bb4 a4 g4]")
      .slow(2)
      .sound("piano")
      .gain(0.19)
      .swing(0.12)
      .every(2, x => x.off(0.125, y => y.transpose(-12).gain(0.12).delay(0.22).dt(0.375).dfb(0.25)))
      .delay(0.22)
      .dt(0.5)
      .dfb(0.33)
      .room(0.26)
  )],

  // II. Mirror-dance: rhythm swap (new grid), no arpeggio—speech becomes the hi-hat logic
  [8, stack(
    stack(
      s("bd").euclid(9, 16).gain(0.23),
      s("sn").euclid(5, 16).gain(0.17).late(0.125).room(0.1),
      s("rim*16").gain(0.1).hpf(2200).sometimesBy(0.45, x => x.rev()),
      s("hh*32").gain(0.09).hpf(7000).swing(0.18).degradeBy(0.35),
      s("cb").euclid(3, 10).gain(0.08).hpf(2800).off(0.25, x => x.speed(1.5).gain(0.07))
    ).compressor("-18:3:6:0.01:0.12"),

    s("break the_pattern mirror")
      .fast(4)
      .chop(32)
      .speed(rand.range(0.9, 1.4))
      .begin(rand.range(0, 0.2))
      .end(rand.range(0.35, 0.9))
      .hpf(900)
      .bpf(sine.range(1400, 4200).slow(2))
      .bpq(8.8)
      .crush(7)
      .gain(0.085)
      .delay(0.24)
      .dt(0.25)
      .dfb(0.4)
      .room(0.2),

    n("0 0 2 4 2 1 4 6 7 6 4 2 1 2 4 6")
      .scale("G:minor")
      .octave(2)
      .sound("sawtooth")
      .fast(8)
      .gain(0.12)
      .cut(2)
      .attack(0.005)
      .release(0.09)
      .slide(0.06)
      .drive(0.22)
      .lpf(saw.range(600, 3400).slow(3))
      .lpq(7.8)
      .sometimesBy(0.35, x => x.iter(4))
      .room(0.12)
  )],

  // III. The voice splits in two: French/English vs Japanese; harmony becomes a shadow-canon (no drums)
  [8, stack(
    s("aria magnifique encore utakata ghost_in_the_machine listen")
      .fast(2)
      .chop(56)
      .speed(rand.range(0.65, 1.2))
      .begin(rand.range(0, 0.3))
      .end(rand.range(0.45, 1))
      .hpf(180)
      .bpf(cosine.range(700, 2800).slow(5))
      .bpq(8.6)
      .ring(0.48)
      .ringf(80)
      .gain(0.12)
      .every(2, x => x.palindrome())
      .delay(0.42)
      .dt(0.5)
      .dfb(0.62)
      .room(0.4),

    note("g2 ~ fs2 g2 ~ f2 ~ eb2 ~ d2 ~ c2")
      .slow(1)
      .sound("sine")
      .gain(0.31)
      .attack(0.01)
      .release(0.28)
      .fm(0.62)
      .fmh(2)
      .fmenv(0.55)
      .fmattack(0.005)
      .fmdecay(0.16)
      .fmsustain(0.1)
      .fmrelease(0.12)
      .lpf(620)
      .lpq(8.2)
      .room(0.14),

    note("[bb4 d5] [a4 c5] ~ [ab4 c5] [g4 bb4] ~ [fs4 a4] ~ [f4 ab4] [eb4 g4]")
      .slow(2)
      .sound("supersaw")
      .gain(0.12)
      .detune(14)
      .tremolo(0.42)
      .tremolosync(8)
      .phaser(0.12)
      .lpf(perlin.range(500, 3600).slow(6))
      .lpq(6.2)
      .delay(0.28)
      .dt(0.375)
      .dfb(0.36)
      .room(0.3)
  )],

  // IV. Canon glitch: piano is a sequencer again, but the counterline is sawed and time-bent
  [8, stack(
    note("<g4 bb4 d5> <eb4 g4 bb4> <a3 c4 e4> <d4 fs4 a4> <f4 ab4 c5> <c4 e4 g4> <db4 f4 ab4> <bb3 d4 f4>")
      .fast(2)
      .sound("piano")
      .gain(0.18)
      .striate(12)
      .every(2, x => x.rev())
      .lpf(saw.range(1000, 6500).slow(4))
      .lpq(6.8)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.5)
      .room(0.28),

    n("0 2 4 7 6 4 2 1 2 4 6 9 7 6 4 2")
      .scale("C:minor")
      .octave(3)
      .sound("pulse")
      .fast(8)
      .gain(0.11)
      .cut(3)
      .attack(0.005)
      .release(0.08)
      .slide(0.05)
      .hpf(750)
      .lpf(4200)
      .lpq(7.2)
      .every(2, x => x.iterBack(4))
      .delay(0.18)
      .dt(0.125)
      .dfb(0.35)
      .room(0.18),

    stack(
      s("mt").euclid(7, 16).gain(0.09).hpf(900).ring(0.28).ringf(190),
      s("ht").euclid(5, 16).gain(0.09).hpf(1000).ring(0.28).ringf(260).late(0.125),
      s("lt").euclid(9, 16).gain(0.08).hpf(800).ring(0.22).ringf(130)
    ).compressor("-20:4:6:0.005:0.1")
  )],

  // V. Radiant turn: harmony jumps to a brighter world; drums lock; arps are glass
  [8, stack(
    stack(
      s("bd*4").gain(0.24),
      s("sn").euclid(3, 8).gain(0.17).room(0.1),
      s("hh*16").gain(0.11).hpf(6800).swing(0.1),
      s("oh").euclid(5, 16).gain(0.11).hpf(4600).room(0.1),
      s("cp").euclid(2, 8).gain(0.08).hpf(2600)
    ).compressor("-18:3:6:0.005:0.12"),

    n("0 4 7 11 12 11 7 4 2 4 7 9 11 9 7 4")
      .scale("D:major")
      .octave(2)
      .sound("triangle")
      .fast(4)
      .gain(0.16)
      .attack(0.005)
      .release(0.12)
      .lpf(2200)
      .lpq(4.2)
      .every(2, x => x.off(0.125, y => y.transpose(12).gain(0.12)))
      .room(0.12),

    note("<d5 fs5 a5> <e5 gs5 b5> <fs5 a5 cs6> <g5 b5 d6> <a5 cs6 e6> <b5 ds6 fs6>")
      .slow(2)
      .sound("supersaw")
      .gain(0.14)
      .detune(9)
      .lpf(cosine.range(1400, 7600).slow(4))
      .lpq(7.4)
      .tremolo(0.24)
      .tremolosync(4)
      .delay(0.18)
      .dt(0.375)
      .dfb(0.34)
      .room(0.32)
      .size(0.9),

    n("0 2 4 7 9 11 14 16 14 11 9 7 4 2")
      .scale("D:major")
      .octave(4)
      .sound("pulse")
      .fast(8)
      .gain(0.11)
      .cut(4)
      .attack(0.005)
      .release(0.07)
      .slide(0.06)
      .lpf(sine.range(1200, 7200).slow(2))
      .lpq(8.4)
      .every(2, x => x.off(0.125, y => y.transpose(12).gain(0.085).delay(0.22).dt(0.25).dfb(0.32)))
      .delay(0.26)
      .dt(0.25)
      .dfb(0.42)
      .room(0.22)
  )],

  // VI. Break: drop the harmony; speech and metal drums run the form
  [8, stack(
    stack(
      s("bd").euclid(5, 8).gain(0.22),
      s("rim*16").gain(0.1).hpf(2400).degradeBy(0.25),
      s("cb").euclid(3, 8).gain(0.09).hpf(3200),
      s("cr").euclid(2, 16).gain(0.07).hpf(6000).room(0.12)
    ).compressor("-19:4:6:0.01:0.12"),

    s("break invert the_pattern listen ghost_in_the_machine")
      .fast(3)
      .chop(64)
      .speed(rand.range(-1.1, 1.35))
      .begin(rand.range(0, 0.4))
      .end(rand.range(0.25, 1))
      .hpf(320)
      .bpf(perlin.range(800, 3600).slow(2))
      .bpq(8.9)
      .drive(0.35)
      .crush(5)
      .ring(0.35)
      .ringf(120)
      .gain(0.12)
      .delay(0.45)
      .dt(0.25)
      .dfb(0.68)
      .room(0.3),

    note("g2 ~ ~ g2  f2 ~ eb2 ~  d2 ~ ~ d2  c2 ~ bb1 ~")
      .slow(1)
      .sound("sine")
      .gain(0.28)
      .attack(0.01)
      .release(0.22)
      .hpf(40)
      .lpf(520)
      .lpq(8.2)
      .fm(0.5)
      .fmh(1)
      .fmenv(0.45)
      .fmattack(0.005)
      .fmdecay(0.14)
      .fmsustain(0.12)
      .fmrelease(0.1)
      .room(0.1)
  )],

  // VII. Coda: slow glass returns; "again" dissolves and resolves sideways
  [8, stack(
    note("g3 f3 eb3 d3 bb2 c3 db3 g2")
      .slow(4)
      .sound("sine")
      .gain(0.34)
      .attack(0.02)
      .release(0.38)
      .lpf(900)
      .lpq(3.4)
      .room(0.24),

    note("<g4 bb4 d5> <ab4 c5 eb5> <f4 a4 c5> <eb4 g4 bb4> <d4 fs4 a4> <db4 f4 ab4> <c4 e4 g4>")
      .slow(4)
      .sound("piano")
      .gain(0.2)
      .every(2, x => x.off(0.125, y => y.transpose(12).gain(0.1).delay(0.22).dt(0.25).dfb(0.28)))
      .delay(0.16)
      .dt(0.5)
      .dfb(0.24)
      .room(0.3),

    s("again encore again utakata")
      .slow(2)
      .chop(48)
      .speed(rand.range(0.6, 1.2))
      .vowel("a e i o u")
      .begin(rand.range(0, 0.2))
      .end(rand.range(0.45, 0.95))
      .hpf(220)
      .bpf(cosine.range(900, 2100).slow(6))
      .bpq(8.2)
      .crush(6)
      .leslie(0.18)
      .ring(0.22)
      .ringf(140)
      .gain(0.11)
      .delay(0.42)
      .dt(0.5)
      .dfb(0.52)
      .room(0.4)
  )]
)