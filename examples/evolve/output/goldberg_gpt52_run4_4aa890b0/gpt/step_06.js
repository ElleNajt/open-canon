// Goldberg Variations — re-evolved: unbraided aria, clockwork mirror, nocturne without ground, siren-canon, false major, breath-break, interruption, and a home that won’t sit still

samples('shabda/speech:aria,break,the_pattern,again,invert,mirror,ghost_in_the_machine,listen,answer,shift,fold,unravel,signal,remember,wait')
samples('shabda/speech/fr-FR/m:magnifique,encore,ombre,respire')
samples('shabda/speech/ja-JP/f:utakata')
samples('shabda/speech/de-DE/f:noch_einmal,ruhe')
samples('shabda/speech/ru-RU/f:teper,tiho')

setcps(102/60/4)

$: arrange(
  // I. Unbraided Aria: harmony slips sideways; melody becomes a deliberate, singing line; voice is a thread, not a glitch
  [6, stack(
    note("g2 ~ d3  f2 ~ c3  eb2 ~ bb2  a1 ~ d2  g1 ~ fs2  f2 ~ eb2")
      .slow(2)
      .sound("sine")
      .gain(0.34)
      .attack(0.01)
      .release(0.24)
      .fm(0.58)
      .fmh(2)
      .fmenv(0.32)
      .fmattack(0.004)
      .fmdecay(0.16)
      .fmsustain(0.06)
      .fmrelease(0.11)
      .lpf(920)
      .lpq(4.6)
      .room(0.18),

    note("<g4 bb4 d5> <a4 c5 e5> <bb4 d5 f5> <c5 eb5 g5> <d5 f5 a5> <eb5 g5 bb5> <d5 f5 a5> <c5 eb5 g5>")
      .slow(2)
      .sound("square")
      .gain(0.14)
      .detune(9)
      .leslie(0.28)
      .phaser(0.14)
      .lpf(perlin.range(900, 5600).slow(6))
      .lpq(6.4)
      .tremolo(0.18)
      .tremolosync(4)
      .every(2, x => x.juxBy(0.55, y => y.transpose(12).gain(0.105).delay(0.2).dt(0.25).dfb(0.22)))
      .room(0.32)
      .size(0.9),

    note("[d5 f5 g5 a5] [bb5 a5 g5 f5] [eb5 f5 g5 ~] [d5 c5 bb4 a4] [g4 a4 bb4 c5] [d5 f5 e5 d5] [c5 bb4 a4 g4] [f4 g4 a4 ~]")
      .slow(2)
      .sound("piano")
      .gain(0.2)
      .swing(0.14)
      .every(2, x => x.off(0.125, y => y.transpose(-12).gain(0.11).delay(0.24).dt(0.375).dfb(0.24)))
      .delay(0.18)
      .dt(0.5)
      .dfb(0.28)
      .room(0.26),

    s("remember listen answer wait")
      .fast(4)
      .chop(32)
      .speed(rand.range(0.85, 1.2))
      .begin(rand.range(0, 0.18))
      .end(rand.range(0.55, 1))
      .hpf(900)
      .bpf(sine.range(1200, 3200).slow(4))
      .bpq(8.2)
      .crush(7)
      .gain(0.07)
      .delay(0.22)
      .dt(0.25)
      .dfb(0.34)
      .room(0.24)
  )],

  // II. Clockwork Mirror: rhythm swaps its spine; bass turns mechanical; speech becomes hats (not atmosphere)
  [8, stack(
    stack(
      s("bd").euclid(9, 16).gain(0.23),
      s("sn").euclid(5, 16).gain(0.16).late(0.125).room(0.12),
      s("rim*32").gain(0.095).hpf(2400).every(2, x => x.palindrome()),
      s("hh*32").gain(0.11).hpf(7600).degradeBy(0.28).swing(0.14),
      s("oh").euclid(7, 16).gain(0.095).hpf(5400).room(0.1),
      s("cb").euclid(3, 5).gain(0.085).hpf(2800).off(0.25, x => x.speed(1.5).gain(0.075))
    ).compressor("-18:3:6:0.01:0.12"),

    s("the_pattern mirror shift fold unravel")
      .fast(8)
      .chop(48)
      .speed(rand.range(0.95, 1.65))
      .begin(rand.range(0, 0.18))
      .end(rand.range(0.25, 0.8))
      .hpf(1800)
      .bpf(tri.range(2400, 6200).slow(2))
      .bpq(9.0)
      .crush(6)
      .gain(0.075)
      .delay(0.16)
      .dt(0.125)
      .dfb(0.42)
      .room(0.2),

    n("0 2 3 7 6 3 2 1  0 2 5 6 7 6 3 2")
      .scale("G:minor")
      .octave(2)
      .sound("sawtooth")
      .fast(16)
      .gain(0.12)
      .cut(2)
      .attack(0.003)
      .release(0.07)
      .slide(0.09)
      .drive(0.28)
      .lpf(saw.range(520, 3800).slow(3))
      .lpq(8.6)
      .every(2, x => x.iter(5))
      .delay(0.12)
      .dt(0.125)
      .dfb(0.26)
      .room(0.1)
  )],

  // III. Nocturne Without Ground: drums removed; harmony slows into a shadow; a single impatient counterline pokes through
  [10, stack(
    note("g2 ~  f2 ~  eb2 ~  d2 ~  c2 ~  bb1 ~  a1 ~  g1 ~")
      .slow(1)
      .sound("triangle")
      .gain(0.28)
      .attack(0.02)
      .release(0.3)
      .penv(0.14)
      .pattack(0.002)
      .pdecay(0.09)
      .psustain(0)
      .prelease(0.08)
      .lpf(680)
      .lpq(7.2)
      .room(0.2),

    note("<bb3 d4 f4> <c4 eb4 g4> <d4 f4 a4> <eb4 g4 bb4> <f4 a4 c5> <g4 bb4 d5> <a4 c5 eb5> <bb4 d5 f5>")
      .slow(4)
      .sound("supersaw")
      .gain(0.12)
      .detune(18)
      .tremolo(0.52)
      .tremolosync(8)
      .phaser(0.1)
      .lpf(perlin.range(360, 2400).slow(9))
      .lpq(6.2)
      .delay(0.32)
      .dt(0.5)
      .dfb(0.38)
      .room(0.36),

    n("0 2 3 5  7 6 5 3  2 3 5 7  10 7 5 3")
      .scale("G:minor")
      .octave(5)
      .sound("pulse")
      .fast(8)
      .gain(0.085)
      .cut(7)
      .attack(0.002)
      .release(0.055)
      .slide(0.12)
      .accelerate(0.08)
      .hpf(900)
      .lpf(5400)
      .lpq(8.0)
      .every(2, x => x.off(0.25, y => y.transpose(12).gain(0.07).delay(0.22).dt(0.25).dfb(0.3)))
      .delay(0.14)
      .dt(0.25)
      .dfb(0.24)
      .room(0.18),

    s("aria ombre utakata")
      .fast(2)
      .chop(64)
      .speed(rand.range(0.6, 1.1))
      .begin(rand.range(0, 0.28))
      .end(rand.range(0.55, 1))
      .hpf(220)
      .bpf(cosine.range(520, 1900).slow(7))
      .bpq(8.4)
      .ring(0.46)
      .ringf(60)
      .gain(0.105)
      .every(2, x => x.juxBy(0.5, y => y.speed(-1).gain(0.09).delay(0.3).dt(0.5).dfb(0.6)))
      .delay(0.34)
      .dt(0.5)
      .dfb(0.62)
      .room(0.44)
  )],

  // IV. Siren-Canon: piano fractures into glass; a “wrong” bright center insists; metal drums re-enter as tuned engines
  [8, stack(
    note("<g4 bb4 d5> <fs4 a4 cs5> <f4 ab4 c5> <eb4 g4 bb4> <d4 fs4 a4> <c4 e4 g4> <bb3 d4 f4> <a3 c4 e4>")
      .fast(2)
      .sound("piano")
      .gain(0.17)
      .striate(16)
      .every(2, x => x.palindrome())
      .lpf(saw.range(1000, 7600).slow(3))
      .lpq(6.8)
      .delay(0.26)
      .dt(0.25)
      .dfb(0.5)
      .room(0.3),

    n("0 2 4 7  11 9 7 6  7 9 11 14  16 14 11 9")
      .scale("E:major")
      .octave(4)
      .sound("pulse")
      .fast(16)
      .gain(0.095)
      .cut(3)
      .attack(0.003)
      .release(0.06)
      .slide(0.08)
      .accelerate(0.07)
      .hpf(900)
      .lpf(5600)
      .lpq(7.8)
      .every(2, x => x.iterBack(7))
      .delay(0.14)
      .dt(0.125)
      .dfb(0.32)
      .room(0.18),

    stack(
      s("mt").euclid(11, 16).gain(0.085).hpf(950).ring(0.32).ringf(190),
      s("ht").euclid(9, 16).gain(0.085).hpf(1100).ring(0.3).ringf(260).late(0.125),
      s("lt").euclid(7, 16).gain(0.08).hpf(850).ring(0.24).ringf(140).off(0.25, x => x.speed(0.75).gain(0.075))
    ).compressor("-20:4:6:0.005:0.1"),

    s("signal answer shift")
      .fast(4)
      .chop(48)
      .speed(rand.range(-1.1, 1.25))
      .begin(rand.range(0, 0.35))
      .end(rand.range(0.3, 1))
      .hpf(1200)
      .bpf(perlin.range(1200, 4600).slow(3))
      .bpq(8.8)
      .drive(0.3)
      .crush(6)
      .gain(0.075)
      .delay(0.24)
      .dt(0.25)
      .dfb(0.44)
      .room(0.24)
  )],

  // V. False Major: a new “bright” key but the bass refuses; glass-line turns into a spiral; drums become steadier, almost pop
  [8, stack(
    stack(
      s("bd*4").gain(0.24),
      s("sn").euclid(2, 8).gain(0.17).room(0.12),
      s("hh*16").gain(0.11).hpf(7400).swing(0.16).degradeBy(0.18),
      s("cp").euclid(5, 16).gain(0.08).hpf(2600),
      s("cr").euclid(1, 8).gain(0.07).hpf(6400).room(0.16)
    ).compressor("-18:3:6:0.005:0.12"),

    note("<cs4 fs4 gs4> <ds4 fs4 as4> <e4 gs4 b4> <fs4 as4 cs5> <gs4 b4 ds5> <as4 cs5 e5> <b4 ds5 fs5> <cs5 e5 gs5>")
      .slow(2)
      .sound("supersaw")
      .gain(0.135)
      .detune(12)
      .lpf(cosine.range(1400, 8800).slow(5))
      .lpq(7.0)
      .tremolo(0.18)
      .tremolosync(4)
      .delay(0.18)
      .dt(0.375)
      .dfb(0.3)
      .room(0.32)
      .size(0.92),

    note("[cs5 e5 gs5 b5] [as4 cs5 e5 gs5] [fs4 as4 cs5 e5] [gs4 b4 ds5 fs5] [e5 ds5 cs5 b4] [as4 b4 cs5 e5] [gs4 fs4 e4 ds4] [cs4 ~ cs4 ~]")
      .fast(4)
      .sound("sine")
      .gain(0.09)
      .attack(0.002)
      .release(0.07)
      .tremolo(0.36)
      .tremolosync(8)
      .lpf(sine.range(2200, 9400).slow(3))
      .lpq(8.2)
      .every(2, x => x.off(0.125, y => y.transpose(12).gain(0.07).delay(0.28).dt(0.25).dfb(0.42)))
      .delay(0.28)
      .dt(0.25)
      .dfb(0.48)
      .room(0.28),

    note("fs1 ~ fs1 ~  e1 ~ ds1 ~  cs1 ~ cs1 ~  b0 ~ as0 ~")
      .slow(1)
      .sound("sine")
      .gain(0.25)
      .attack(0.01)
      .release(0.2)
      .penv(0.16)
      .pattack(0.002)
      .pdecay(0.09)
      .psustain(0)
      .prelease(0.08)
      .hpf(35)
      .lpf(520)
      .lpq(8.4)
      .room(0.12),

    s("ruhe respire")
      .slow(2)
      .chop(24)
      .speed(rand.range(0.8, 1.15))
      .vowel("a e i o u")
      .begin(rand.range(0, 0.2))
      .end(rand.range(0.55, 1))
      .hpf(200)
      .bpf(tri.range(600, 1700).slow(7))
      .bpq(8.2)
      .gain(0.07)
      .delay(0.28)
      .dt(0.5)
      .dfb(0.52)
      .room(0.4)
  )],

  // VI. Breath-Break: kick disappears; everything becomes a slow inhalation with a moving filter; sub ticks like a warning light
  [6, stack(
    stack(
      s("rim*16").gain(0.11).hpf(2500).degradeBy(0.34),
      s("cr").euclid(5, 16).gain(0.075).hpf(6500).room(0.18),
      s("cb").euclid(3, 8).gain(0.095).hpf(3100)
    ).djf(perlin.range(0.08, 0.92).slow(2))
     .compressor("-19:4:6:0.01:0.12"),

    s("break invert ghost_in_the_machine wait")
      .fast(4)
      .chop(72)
      .speed(rand.range(-1.25, 1.35))
      .begin(rand.range(0, 0.5))
      .end(rand.range(0.2, 1))
      .hpf(240)
      .bpf(perlin.range(520, 3800).slow(2))
      .bpq(9.2)
      .drive(0.4)
      .crush(5)
      .ring(0.36)
      .ringf(95)
      .gain(0.12)
      .delay(0.5)
      .dt(0.25)
      .dfb(0.7)
      .room(0.34),

    note("g1 ~ ~ g1  ~ ~ g1  f1 ~ ~ eb1")
      .slow(1)
      .sound("sine")
      .gain(0.22)
      .attack(0.01)
      .release(0.18)
      .penv(0.2)
      .pattack(0.002)
      .pdecay(0.08)
      .psustain(0)
      .prelease(0.07)
      .hpf(35)
      .lpf(420)
      .lpq(8.6)
      .every(2, x => x.off(0.25, y => y.transpose(12).gain(0.08).lpf(820).delay(0.22).dt(0.125).dfb(0.25)))
      .room(0.14)
  )],

  // VII. Interruption: an unexpected “choir” of languages, chopped into a percussive canon; the harmony blanks out
  [4, stack(
    s("magnifique utakata teper tiho noch_einmal")
      .fast(8)
      .chop(96)
      .speed(rand.range(0.65, 1.6))
      .begin(rand.range(0, 0.35))
      .end(rand.range(0.2, 0.95))
      .hpf(900)
      .bpf(tri.range(1000, 5200).slow(2))
      .bpq(9.4)
      .crush(6)
      .gain(0.1)
      .every(2, x => x.juxBy(0.5, y => y.speed(-1).gain(0.085).delay(0.3).dt(0.25).dfb(0.55)))
      .delay(0.36)
      .dt(0.25)
      .dfb(0.64)
      .room(0.42),

    s("rd*16")
      .gain(0.07)
      .hpf(5200)
      .striate(8)
      .speed(rand.range(0.8, 1.2))
      .delay(0.22)
      .dt(0.125)
      .dfb(0.4)
      .room(0.24)
  )],

  // VIII. Coda (restless homecoming): returns to G, but keeps the false brightness as a stain; piano folds, voice hangs
  [10, stack(
    note("g3 eb3 f3 d3  bb2 c3 db3 a2  g2 ~ bb2 c3  d3 ~ c3 bb2 a2")
      .slow(4)
      .sound("sine")
      .gain(0.32)
      .attack(0.02)
      .release(0.42)
      .lpf(860)
      .lpq(3.8)
      .room(0.28),

    note("<g4 bb4 d5> <a4 c5 e5> <bb4 d5 f5> <c5 eb5 g5> <d5 fs5 a5> <eb5 g5 bb5> <d5 f5 a5> <c5 eb5 g5>")
      .slow(4)
      .sound("piano")
      .gain(0.2)
      .every(2, x => x.rev().off(0.125, y => y.transpose(12).gain(0.105).delay(0.24).dt(0.25).dfb(0.28)))
      .delay(0.16)
      .dt(0.5)
      .dfb(0.24)
      .room(0.34),

    s("again encore noch_einmal utakata tiho")
      .slow(2)
      .chop(56)
      .speed(rand.range(0.55, 1.2))
      .vowel("a e i o u")
      .begin(rand.range(0, 0.22))
      .end(rand.range(0.4, 0.98))
      .hpf(180)
      .bpf(cosine.range(650, 2100).slow(8))
      .bpq(8.4)
      .crush(6)
      .leslie(0.24)
      .ring(0.26)
      .ringf(120)
      .gain(0.11)
      .delay(0.46)
      .dt(0.5)
      .dfb(0.56)
      .room(0.44)
  )]
)