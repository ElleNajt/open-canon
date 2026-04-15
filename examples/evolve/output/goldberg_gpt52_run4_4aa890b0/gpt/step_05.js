// Goldberg Variations — evolved: crooked aria, mirror percussion, split-voice nocturne, and a bright fracture

samples('shabda/speech:aria,break,the_pattern,again,invert,mirror,ghost_in_the_machine,listen,answer,shift')
samples('shabda/speech/fr-FR/m:magnifique,encore,ombre')
samples('shabda/speech/ja-JP/f:utakata')
samples('shabda/speech/de-DE/f:noch_einmal,ruhe')

setcps(90/60/4)

$: arrange(
  // I. Crooked Aria: harmony re-voiced, melody rewritten into questions; a quiet voice-thread appears
  [6, stack(
    note("g2 ~ d3 fs2  eb3 ~ f2 a2  c3 ~ db3  bb2 ~ a2 ~")
      .slow(2)
      .sound("sine")
      .gain(0.36)
      .attack(0.01)
      .release(0.22)
      .fm(0.52)
      .fmh(1)
      .fmenv(0.35)
      .fmattack(0.004)
      .fmdecay(0.14)
      .fmsustain(0.08)
      .fmrelease(0.1)
      .lpf(980)
      .lpq(4.8)
      .room(0.16),

    note("<g4 c5 f5> <fs4 b4 e5> <f4 bb4 eb5> <eb4 ab4 db5> <d4 g4 c5> <cs4 fs4 b4> <c4 f4 bb4> <bb3 eb4 ab4>")
      .slow(2)
      .sound("square")
      .gain(0.13)
      .detune(7)
      .leslie(0.32)
      .phaser(0.16)
      .lpf(perlin.range(700, 5200).slow(5))
      .lpq(6.6)
      .tremolo(0.22)
      .tremolosync(4)
      .every(2, x => x.juxBy(0.55, y => y.transpose(12).gain(0.11).delay(0.18).dt(0.25).dfb(0.24)))
      .room(0.34)
      .size(0.88),

    note("[d5 f5 e5 ~] [g5 a5 g5 e5] [f5 a5 c6 a5] [g5 ~ f5 e5] [d5 e5 f5 g5] [bb5 a5 g5 f5] [e5 g5 f5 d5] [c5 ~ bb4 a4]")
      .slow(2)
      .sound("piano")
      .gain(0.19)
      .swing(0.16)
      .every(2, x => x.off(0.125, y => y.transpose(-12).gain(0.12).delay(0.22).dt(0.375).dfb(0.22)))
      .delay(0.2)
      .dt(0.5)
      .dfb(0.3)
      .room(0.28),

    s("answer shift listen")
      .fast(4)
      .chop(48)
      .speed(rand.range(0.75, 1.25))
      .begin(rand.range(0, 0.25))
      .end(rand.range(0.5, 1))
      .hpf(1200)
      .bpf(sine.range(1600, 3600).slow(3))
      .bpq(8.6)
      .crush(7)
      .tremolo(0.35)
      .tremolosync(8)
      .gain(0.075)
      .delay(0.24)
      .dt(0.25)
      .dfb(0.38)
      .room(0.22)
  )],

  // II. Mirror percussion: grid flips; bass becomes an answer-line; hats are speech shards
  [8, stack(
    stack(
      s("bd").euclid(7, 12).gain(0.24),
      s("sn").euclid(4, 12).gain(0.16).late(0.125).room(0.12),
      s("rim*24").gain(0.09).hpf(2400).sometimesBy(0.55, x => x.rev()),
      s("oh").euclid(5, 12).gain(0.1).hpf(5200).room(0.12),
      s("cb").euclid(3, 7).gain(0.085).hpf(3000).off(0.25, x => x.speed(1.4).gain(0.075))
    ).compressor("-18:3:6:0.01:0.12"),

    s("the_pattern mirror answer shift")
      .fast(6)
      .chop(36)
      .speed(rand.range(0.9, 1.5))
      .begin(rand.range(0, 0.22))
      .end(rand.range(0.3, 0.85))
      .hpf(1400)
      .bpf(tri.range(1800, 5200).slow(2))
      .bpq(9.2)
      .crush(6)
      .gain(0.08)
      .delay(0.18)
      .dt(0.25)
      .dfb(0.42)
      .room(0.2),

    n("0 2 3 7 6 3 2 1  0 2 3 6 7 6 3 2")
      .scale("Bb:minor")
      .octave(2)
      .sound("sawtooth")
      .fast(12)
      .gain(0.12)
      .cut(2)
      .attack(0.004)
      .release(0.075)
      .slide(0.08)
      .drive(0.26)
      .lpf(saw.range(650, 4200).slow(2))
      .lpq(8.8)
      .sometimesBy(0.32, x => x.iter(3))
      .delay(0.14)
      .dt(0.125)
      .dfb(0.28)
      .room(0.12)
  )],

  // III. Split-voice nocturne: voices argue; harmony becomes a slow shadow without drums
  [10, stack(
    s("aria magnifique ombre encore utakata ghost_in_the_machine listen")
      .fast(2)
      .chop(64)
      .speed(rand.range(0.6, 1.15))
      .begin(rand.range(0, 0.32))
      .end(rand.range(0.5, 1))
      .hpf(160)
      .bpf(cosine.range(600, 2400).slow(6))
      .bpq(8.8)
      .ring(0.52)
      .ringf(70)
      .gain(0.11)
      .every(2, x => x.juxBy(0.5, y => y.speed(-1).gain(0.09).delay(0.28).dt(0.5).dfb(0.55)))
      .delay(0.36)
      .dt(0.5)
      .dfb(0.6)
      .room(0.42),

    note("g2 ~ fs2 ~  f2 ~ eb2 ~  d2 ~ c2 ~  bb1 ~ a1 ~")
      .slow(1)
      .sound("triangle")
      .gain(0.29)
      .attack(0.015)
      .release(0.26)
      .penv(0.12)
      .pattack(0.002)
      .pdecay(0.08)
      .psustain(0)
      .prelease(0.06)
      .lpf(720)
      .lpq(7.4)
      .room(0.18),

    note("[bb4 d5] ~ [a4 c5] [g4 bb4]  ~ [fs4 a4] ~ [f4 ab4] [eb4 g4]  ~ [d4 fs4] ~ [c4 e4]")
      .slow(2)
      .sound("supersaw")
      .gain(0.12)
      .detune(16)
      .tremolo(0.5)
      .tremolosync(8)
      .phaser(0.1)
      .lpf(perlin.range(420, 2800).slow(7))
      .lpq(6.4)
      .delay(0.3)
      .dt(0.375)
      .dfb(0.34)
      .room(0.32)
  )],

  // IV. Canon glitch reborn: piano becomes a broken choir; counterline is bent and impatient
  [8, stack(
    note("<g4 bb4 d5> <fs4 a4 cs5> <f4 ab4 c5> <eb4 g4 bb4> <d4 fs4 a4> <c4 e4 g4> <bb3 d4 f4> <a3 c4 e4>")
      .fast(2)
      .sound("piano")
      .gain(0.17)
      .striate(16)
      .every(2, x => x.palindrome())
      .lpf(saw.range(900, 7200).slow(3))
      .lpq(6.9)
      .delay(0.28)
      .dt(0.25)
      .dfb(0.52)
      .room(0.3),

    n("0 2 4 7  6 4 2 1  2 4 6 9  11 9 7 6")
      .scale("C:minor")
      .octave(3)
      .sound("pulse")
      .fast(16)
      .gain(0.105)
      .cut(3)
      .attack(0.004)
      .release(0.065)
      .slide(0.06)
      .accelerate(0.06)
      .hpf(820)
      .lpf(5200)
      .lpq(8.1)
      .every(2, x => x.iterBack(5))
      .delay(0.16)
      .dt(0.125)
      .dfb(0.34)
      .room(0.18),

    stack(
      s("mt").euclid(9, 16).gain(0.085).hpf(950).ring(0.3).ringf(210),
      s("ht").euclid(7, 16).gain(0.085).hpf(1100).ring(0.28).ringf(290).late(0.125),
      s("lt").euclid(5, 16).gain(0.08).hpf(850).ring(0.22).ringf(150).off(0.25, x => x.speed(0.8).gain(0.075))
    ).compressor("-20:4:6:0.005:0.1")
  )],

  // V. Bright fracture: harmony pivots to A major; drums go steadier; glass-line replaces the old arp
  [8, stack(
    stack(
      s("bd*4").gain(0.24),
      s("sn").euclid(3, 8).gain(0.17).room(0.12),
      s("hh*16").gain(0.11).hpf(7200).swing(0.12).degradeBy(0.22),
      s("cp").euclid(3, 16).gain(0.08).hpf(2800),
      s("cr").euclid(1, 8).gain(0.07).hpf(6400).room(0.16)
    ).compressor("-18:3:6:0.005:0.12"),

    note("<a4 cs5 e5> <b4 ds5 fs5> <cs5 e5 gs5> <d5 fs5 a5> <e5 gs5 b5> <fs5 a5 cs6>")
      .slow(2)
      .sound("supersaw")
      .gain(0.135)
      .detune(10)
      .lpf(cosine.range(1600, 8200).slow(4))
      .lpq(7.2)
      .tremolo(0.2)
      .tremolosync(4)
      .delay(0.2)
      .dt(0.375)
      .dfb(0.32)
      .room(0.34)
      .size(0.92),

    n("0 2 4 7 11 7 4 2  0 2 4 9 11 9 7 4")
      .scale("A:major")
      .octave(5)
      .sound("sine")
      .fast(8)
      .gain(0.095)
      .attack(0.002)
      .release(0.09)
      .tremolo(0.32)
      .tremolosync(8)
      .lpf(sine.range(1800, 9000).slow(3))
      .lpq(8.6)
      .delay(0.32)
      .dt(0.25)
      .dfb(0.46)
      .room(0.28),

    s("ruhe")
      .slow(2)
      .chop(24)
      .speed(rand.range(0.8, 1.1))
      .vowel("a e i o u")
      .begin(rand.range(0, 0.2))
      .end(rand.range(0.5, 1))
      .hpf(200)
      .bpf(tri.range(700, 1900).slow(6))
      .bpq(8.4)
      .gain(0.07)
      .delay(0.26)
      .dt(0.5)
      .dfb(0.5)
      .room(0.4)
  )],

  // VI. Break (re-scored): kick drops out; DJ filter sweeps the metal; sub pulses like a warning
  [6, stack(
    stack(
      s("rim*16").gain(0.11).hpf(2600).degradeBy(0.28),
      s("cb").euclid(5, 8).gain(0.1).hpf(3200),
      s("cr").euclid(3, 16).gain(0.075).hpf(6500).room(0.16),
      s("sn").euclid(3, 8).gain(0.14).late(0.125).room(0.12)
    ).djf(perlin.range(0.12, 0.88).slow(2))
     .compressor("-19:4:6:0.01:0.12"),

    s("break invert the_pattern ghost_in_the_machine listen")
      .fast(4)
      .chop(72)
      .speed(rand.range(-1.2, 1.35))
      .begin(rand.range(0, 0.45))
      .end(rand.range(0.2, 1))
      .hpf(260)
      .bpf(perlin.range(650, 4200).slow(2))
      .bpq(9.4)
      .drive(0.38)
      .crush(5)
      .ring(0.38)
      .ringf(110)
      .gain(0.12)
      .delay(0.48)
      .dt(0.25)
      .dfb(0.66)
      .room(0.32),

    note("g1 ~ g1 ~  f1 ~ eb1 ~  d1 ~ d1 ~  c1 ~ bb0 ~")
      .slow(1)
      .sound("sine")
      .gain(0.26)
      .attack(0.01)
      .release(0.2)
      .penv(0.18)
      .pattack(0.002)
      .pdecay(0.09)
      .psustain(0)
      .prelease(0.08)
      .hpf(35)
      .lpf(460)
      .lpq(8.6)
      .room(0.12)
  )],

  // VII. Coda: a darker homecoming; piano turns back on itself; "noch einmal" hangs in the air
  [10, stack(
    note("g3 eb3 f3 d3  bb2 c3 db3 a2  g2 ~ bb2 c3")
      .slow(4)
      .sound("sine")
      .gain(0.33)
      .attack(0.02)
      .release(0.4)
      .lpf(820)
      .lpq(3.6)
      .room(0.26),

    note("<g4 bb4 d5> <f4 ab4 c5> <eb4 g4 bb4> <d4 fs4 a4> <db4 f4 ab4> <c4 e4 g4> <bb3 d4 f4> <a3 c4 e4>")
      .slow(4)
      .sound("piano")
      .gain(0.2)
      .every(2, x => x.rev().off(0.125, y => y.transpose(12).gain(0.105).delay(0.22).dt(0.25).dfb(0.26)))
      .delay(0.18)
      .dt(0.5)
      .dfb(0.22)
      .room(0.32),

    s("again encore noch_einmal utakata")
      .slow(2)
      .chop(56)
      .speed(rand.range(0.55, 1.15))
      .vowel("a e i o u")
      .begin(rand.range(0, 0.22))
      .end(rand.range(0.4, 0.98))
      .hpf(180)
      .bpf(cosine.range(750, 1900).slow(7))
      .bpq(8.6)
      .crush(6)
      .leslie(0.22)
      .ring(0.24)
      .ringf(130)
      .gain(0.11)
      .delay(0.44)
      .dt(0.5)
      .dfb(0.54)
      .room(0.42)
  )]
)