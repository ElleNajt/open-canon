// Goldberg Variations — evolved: harmonic swerves, rhythmic mutations, and a stranger voice at the center

samples('shabda/speech:aria,break,the_pattern,again')
samples('shabda/speech/fr-FR/m:magnifique,encore')

setcps(78/60/4)

$: arrange(
  // I. Aria, but the floor tilts: chromatic bass + luminous upper voices
  [8, stack(
    note("g3 f3 eb3 d3 bb2 c3 db3 g2")
      .slow(2)
      .sound("sine")
      .gain(0.42)
      .attack(0.01)
      .release(0.22)
      .lpf(1300)
      .lpq(4.5)
      .room(0.16),

    note("<g4 bb4 d5> <fs4 a4 c5> <f4 ab4 c5> <eb4 g4 bb4> <d4 fs4 a4> <db4 f4 ab4> <c4 e4 g4> <g4 bb4 d5>")
      .slow(2)
      .sound("supersaw")
      .gain(0.16)
      .detune(8)
      .lpf(cosine.range(700, 5200).slow(6))
      .lpq(6.5)
      .tremolo(0.22)
      .tremolosync(4)
      .every(2, x => x.juxBy(0.6, y => y.transpose(12).gain(0.11).delay(0.18).dt(0.25).dfb(0.25)))
      .room(0.3)
      .size(0.85),

    note("[d5 f5 a5] [c5 eb5 g5] [b4 d5 f5] [bb4 db5 f5] [a4 c5 e5] ~ [g4 bb4 d5] [fs4 a4 c5] [g4 f4]")
      .slow(2)
      .sound("piano")
      .gain(0.2)
      .every(2, x => x.palindrome())
      .delay(0.24)
      .dt(0.375)
      .dfb(0.38)
      .room(0.24)
  )],

  // II. Rhythm mutation: new drum grammar + a jagged arpeggio in the cracks
  [8, stack(
    stack(
      s("bd").euclid(7, 12).gain(0.22),
      s("sn").euclid(5, 12).gain(0.17).late(0.125).room(0.12),
      s("rim*12").gain(0.11).hpf(2400).sometimesBy(0.4, x => x.rev()),
      s("hh*24").gain(0.1).hpf(6500).degradeBy(0.28),
      s("cb").euclid(3, 8).gain(0.08).hpf(3000).off(0.25, x => x.speed(1.5).gain(0.07))
    ).compressor("-18:3:6:0.01:0.12"),

    note("<g4 bb4 d5 f5>")
      .arp("up")
      .fast(6)
      .sound("pulse")
      .gain(0.14)
      .cut(2)
      .attack(0.005)
      .release(0.1)
      .slide(0.08)
      .lpf(sine.range(700, 5200).slow(2))
      .lpq(7.5)
      .delay(0.22)
      .dt(0.25)
      .dfb(0.42)
      .sometimesBy(0.35, x => x.transpose(2))
      .room(0.18),

    note("g2 ~ d3 f3 ~ eb3 ~ d3 ~ c3 ~ bb2")
      .slow(1)
      .sound("triangle")
      .gain(0.32)
      .attack(0.01)
      .release(0.18)
      .lpf(950)
      .lpq(5.5)
      .drive(0.18)
      .room(0.1)
  )],

  // III. The voice takes over: fractured French/English, no drums, low FM shadow
  [8, stack(
    s("aria magnifique encore the_pattern")
      .fast(2)
      .chop(48)
      .speed(rand.range(0.75, 1.15))
      .begin(rand.range(0, 0.25))
      .end(rand.range(0.55, 1))
      .hpf(220)
      .bpf(sine.range(900, 2400).slow(4))
      .bpq(8.5)
      .ring(0.42)
      .ringf(90)
      .gain(0.13)
      .delay(0.38)
      .dt(0.5)
      .dfb(0.6)
      .room(0.38),

    note("g2 ~ g2 fs2 ~ f2 ~ eb2 ~ d2 ~ c2")
      .slow(1)
      .sound("sine")
      .gain(0.32)
      .attack(0.01)
      .release(0.25)
      .fm(0.55)
      .fmh(1.5)
      .fmenv(0.5)
      .fmattack(0.005)
      .fmdecay(0.18)
      .fmsustain(0.12)
      .fmrelease(0.12)
      .lpf(700)
      .lpq(7.5)
      .room(0.12),

    note("[bb4 d5] ~ [a4 c5] [ab4 c5] ~ [g4 bb4] ~ [fs4 a4] [f4 ab4]")
      .slow(2)
      .sound("supersaw")
      .gain(0.13)
      .detune(12)
      .tremolo(0.45)
      .tremolosync(8)
      .lpf(cosine.range(600, 3800).slow(6))
      .lpq(6.5)
      .delay(0.25)
      .dt(0.375)
      .dfb(0.35)
      .room(0.28)
  )],

  // IV. Mechanical minuet: piano becomes a sequencer; metallic counter-rhythm appears
  [8, stack(
    note("<g4 bb4 d5> <eb4 g4 bb4> <a3 c4 e4> <d4 fs4 a4> <f4 ab4 c5> <c4 e4 g4> <db4 f4 ab4> <bb3 d4 f4>")
      .slow(1)
      .sound("piano")
      .gain(0.19)
      .striate(8)
      .every(2, x => x.rev())
      .lpf(saw.range(900, 6200).slow(4))
      .lpq(6.5)
      .delay(0.32)
      .dt(0.25)
      .dfb(0.48)
      .room(0.3),

    stack(
      s("mt").euclid(5, 16).gain(0.09).hpf(800).ring(0.25).ringf(160),
      s("ht").euclid(3, 16).gain(0.09).hpf(900).ring(0.25).ringf(220).late(0.125),
      s("lt").euclid(7, 16).gain(0.08).hpf(700).ring(0.2).ringf(110),
      s("rd").euclid(2, 8).gain(0.07).hpf(5000).room(0.18)
    ).compressor("-20:4:6:0.005:0.1"),

    n("0 2 4 7 6 4 2 1 2 4 6 9 7 6 4 2")
      .scale("C:minor")
      .octave(2)
      .sound("sawtooth")
      .fast(8)
      .gain(0.11)
      .hpf(650)
      .lpf(3200)
      .lpq(6.5)
      .fm(0.4)
      .fmh(2)
      .fmenv(0.45)
      .fmattack(0.005)
      .fmdecay(0.1)
      .fmsustain(0.12)
      .fmrelease(0.08)
      .sometimesBy(0.3, x => x.iter(4))
      .room(0.22)
  )],

  // V. Climax: drums lock, harmony turns radiant, arps cut like glass
  [8, stack(
    note("g2 d3 g3 bb3 a3 f3 eb3 d3")
      .slow(1)
      .sound("triangle")
      .gain(0.4)
      .attack(0.005)
      .release(0.16)
      .lpf(1900)
      .lpq(4.5)
      .room(0.12),

    stack(
      s("bd*4").gain(0.24),
      s("sn").euclid(3, 8).gain(0.17).room(0.1),
      s("hh*16").gain(0.11).hpf(6500),
      s("oh").euclid(5, 16).gain(0.11).hpf(4500).room(0.1),
      s("cp").euclid(2, 8).gain(0.08).hpf(2500)
    ).compressor("-18:3:6:0.005:0.12"),

    note("<bb4 d5 f5> <c5 e5 g5> <d5 fs5 a5> <eb5 g5 bb5> <f5 a5 c6> <g5 b5 d6>")
      .slow(2)
      .sound("supersaw")
      .gain(0.15)
      .detune(10)
      .lpf(cosine.range(1000, 7000).slow(4))
      .lpq(7)
      .tremolo(0.26)
      .tremolosync(4)
      .delay(0.2)
      .dt(0.375)
      .dfb(0.32)
      .room(0.32)
      .size(0.9),

    n("0 2 4 6 7 9 11 12 11 9 7 6 4 2")
      .scale("G:minor")
      .octave(3)
      .sound("pulse")
      .fast(4)
      .gain(0.13)
      .cut(2)
      .attack(0.005)
      .release(0.1)
      .slide(0.07)
      .lpf(sine.range(900, 6200).slow(2))
      .lpq(7.5)
      .every(2, x => x.off(0.125, y => y.transpose(12).gain(0.09)))
      .delay(0.28)
      .dt(0.25)
      .dfb(0.45)
      .room(0.22)
  )],

  // VI. Coda: slow glass; "again" breaks into dust, harmony resolves sideways
  [8, stack(
    note("g3 f3 eb3 d3 bb2 c3 db3 g2")
      .slow(4)
      .sound("sine")
      .gain(0.36)
      .attack(0.02)
      .release(0.35)
      .lpf(1000)
      .lpq(3.5)
      .room(0.22),

    note("<g4 bb4 d5> <ab4 c5 eb5> <f4 a4 c5> <eb4 g4 bb4> <d4 fs4 a4> <c4 e4 g4>")
      .slow(4)
      .sound("piano")
      .gain(0.21)
      .every(2, x => x.off(0.125, y => y.transpose(12).gain(0.1).delay(0.25).dt(0.25).dfb(0.3)))
      .delay(0.18)
      .dt(0.5)
      .dfb(0.25)
      .room(0.28),

    s("again encore again")
      .slow(2)
      .chop(36)
      .speed(rand.range(0.7, 1.25))
      .vowel("a e i o u")
      .begin(rand.range(0, 0.15))
      .end(rand.range(0.55, 0.95))
      .hpf(260)
      .bpf(1600)
      .bpq(7)
      .crush(6)
      .ring(0.28)
      .ringf(140)
      .gain(0.12)
      .delay(0.4)
      .dt(0.5)
      .dfb(0.5)
      .room(0.36)
  )]
)