// Goldberg Variations — re-evolved: aria with a split tongue, clockwork that learns to limp, nocturne with a heartbeat in the floorboards, siren-canon rewritten as a warning, false major that blooms then sours, breath-break that becomes a choir of filters, interruption as a bright fracture, and a homecoming that modulates mid-sentence

samples('shabda/speech:aria,break,the_pattern,again,invert,mirror,ghost_in_the_machine,listen,answer,shift,fold,unravel,signal,remember,wait,shadow,calibrate,unison,spill,home,not_yet')
samples('shabda/speech/fr-FR/m:magnifique,encore,ombre,respire')
samples('shabda/speech/ja-JP/f:utakata')
samples('shabda/speech/de-DE/f:noch_einmal,ruhe')
samples('shabda/speech/ru-RU/f:teper,tiho')

setcps(108/60/4)

$: arrange(
  // I. Unbraided Aria (rewritten): the bass stops “walking” and starts speaking in intervals; the melody is re-composed into a longer breath; voice becomes a soft metronome you can’t quite trust
  [6, stack(
    note("g2 ~ eb3  f2 ~ d3  eb2 ~ c3  d2 ~ bb2  cs2 ~ a2  d2 ~ b1  g1 ~ fs2  f2 ~ g2")
      .slow(2)
      .sound("sine")
      .gain(0.31)
      .attack(0.012)
      .release(0.28)
      .fm(0.62)
      .fmh(3)
      .fmenv(0.36)
      .fmattack(0.004)
      .fmdecay(0.15)
      .fmsustain(0.08)
      .fmrelease(0.12)
      .lpf(980)
      .lpq(4.2)
      .delay(0.08)
      .dt(0.5)
      .dfb(0.18)
      .room(0.22),

    note("<g4 bb4 d5> <a4 c5 e5> <bb4 d5 f5> <db5 f5 ab5> <c5 eb5 g5> <d5 fs5 a5> <eb5 g5 bb5> <f5 a5 c6>")
      .slow(2)
      .sound("supersaw")
      .gain(0.12)
      .detune(16)
      .tremolo(0.22)
      .tremolosync(4)
      .leslie(0.22)
      .phaser(0.12)
      .lpf(perlin.range(700, 5200).slow(6))
      .lpq(6.8)
      .every(2, x => x.juxBy(0.55, y => y.transpose(12).gain(0.095).delay(0.22).dt(0.25).dfb(0.24)))
      .room(0.34)
      .size(0.9),

    note("[d5 f5 g5 a5 bb5 a5 g5 f5] [eb5 f5 g5 a5 g5 f5 eb5 d5] [c5 d5 eb5 f5 g5 a5 bb5 c6] [bb5 a5 g5 f5 eb5 d5 c5 bb4] [a4 c5 d5 f5 g5 f5 d5 c5] [bb4 d5 eb5 g5 a5 g5 eb5 d5] [c5 eb5 f5 a5 bb5 a5 f5 eb5] [d5 c5 bb4 a4 g4 f4 eb4 ~]")
      .slow(2)
      .sound("piano")
      .gain(0.19)
      .swing(0.16)
      .every(2, x => x.off(0.125, y => y.transpose(-12).gain(0.11).delay(0.2).dt(0.375).dfb(0.22)))
      .delay(0.16)
      .dt(0.5)
      .dfb(0.26)
      .room(0.24),

    s("aria listen remember wait")
      .fast(8)
      .chop(32)
      .speed(rand.range(0.9, 1.35))
      .begin(rand.range(0, 0.12))
      .end(rand.range(0.18, 0.55))
      .hpf(3600)
      .bpf(tri.range(3200, 7600).slow(4))
      .bpq(8.8)
      .crush(7)
      .gain(0.055)
      .every(2, x => x.palindrome())
      .delay(0.12)
      .dt(0.125)
      .dfb(0.25)
      .room(0.16)
  )],

  // II. Clockwork Mirror (swapped): the “spine” breaks; kick and snare trade jobs; bass becomes a rotating latch; speech is now the grid
  [8, stack(
    stack(
      s("bd").euclid(7, 16).gain(0.21),
      s("sn").euclid(9, 16).gain(0.14).late(0.125).room(0.14),
      s("cp").euclid(5, 16).gain(0.075).hpf(2400),
      s("hh*32").gain(0.105).hpf(7800).degradeBy(0.22).swing(0.18),
      s("oh").euclid(5, 16).gain(0.09).hpf(5200).room(0.12),
      s("cb").euclid(3, 8).gain(0.08).hpf(2800).off(0.25, x => x.speed(1.5).gain(0.07))
    ).compressor("-18:3:6:0.01:0.12"),

    s("the_pattern mirror calibrate shift fold unravel")
      .fast(16)
      .chop(64)
      .speed(rand.range(0.75, 1.75))
      .begin(rand.range(0, 0.22))
      .end(rand.range(0.2, 0.7))
      .hpf(1400)
      .bpf(perlin.range(1800, 6800).slow(2))
      .bpq(9.2)
      .drive(0.26)
      .crush(6)
      .gain(0.07)
      .every(2, x => x.juxBy(0.5, y => y.speed(-1).gain(0.06).delay(0.18).dt(0.125).dfb(0.48)))
      .delay(0.14)
      .dt(0.125)
      .dfb(0.46)
      .room(0.22),

    n("0 2 3 7 6 3 2 1")
      .scale("G:minor")
      .octave(2)
      .sound("sawtooth")
      .fast(8)
      .euclid(11, 16)
      .gain(0.13)
      .cut(2)
      .attack(0.003)
      .release(0.08)
      .slide(0.11)
      .drive(0.32)
      .lpf(saw.range(420, 3200).slow(3))
      .lpq(8.8)
      .every(2, x => x.iter(5))
      .delay(0.1)
      .dt(0.125)
      .dfb(0.24)
      .room(0.12),

    n("0 7 6 2  0 7 9 10")
      .scale("G:minor")
      .octave(4)
      .sound("triangle")
      .fast(16)
      .gain(0.06)
      .attack(0.001)
      .release(0.05)
      .hpf(700)
      .lpf(5200)
      .lpq(7.4)
      .sometimes(x => x.off(0.125, y => y.transpose(12).gain(0.055).delay(0.2).dt(0.125).dfb(0.35)))
      .room(0.14)
  )],

  // III. Nocturne Without Ground (mood shifted): a distant “heartbeat” arrives; harmony becomes fog; counterline turns into a nervous whisper
  [10, stack(
    s("bd")
      .slow(2)
      .euclid(3, 8)
      .gain(0.06)
      .lpf(120)
      .lpq(5.8)
      .room(0.28)
      .size(0.92),

    note("g2 ~  f2 ~  eb2 ~  d2 ~  c2 ~  bb1 ~  a1 ~  g1 ~")
      .slow(1)
      .sound("triangle")
      .gain(0.26)
      .attack(0.03)
      .release(0.34)
      .penv(0.16)
      .pattack(0.002)
      .pdecay(0.1)
      .psustain(0)
      .prelease(0.09)
      .lpf(620)
      .lpq(7.6)
      .room(0.22),

    note("<bb3 d4 f4> <c4 eb4 g4> <db4 f4 ab4> <d4 f4 a4> <eb4 g4 bb4> <f4 a4 c5> <fs4 a4 cs5> <g4 bb4 d5>")
      .slow(4)
      .sound("supersaw")
      .gain(0.11)
      .detune(20)
      .tremolo(0.56)
      .tremolosync(8)
      .phaser(0.12)
      .lpf(perlin.range(320, 2100).slow(9))
      .lpq(6.6)
      .delay(0.34)
      .dt(0.5)
      .dfb(0.42)
      .room(0.38),

    n("0 2 3 5  7 6 5 3  2 3 5 7  10 7 5 3")
      .scale("G:minor")
      .octave(6)
      .sound("pulse")
      .fast(8)
      .gain(0.075)
      .cut(7)
      .attack(0.002)
      .release(0.05)
      .slide(0.14)
      .accelerate(0.09)
      .hpf(1100)
      .lpf(6200)
      .lpq(8.6)
      .every(2, x => x.off(0.25, y => y.transpose(12).gain(0.06).delay(0.18).dt(0.25).dfb(0.34)))
      .delay(0.12)
      .dt(0.25)
      .dfb(0.22)
      .room(0.18),

    s("ombre aria utakata shadow")
      .fast(2)
      .chop(72)
      .speed(rand.range(0.55, 1.1))
      .begin(rand.range(0, 0.3))
      .end(rand.range(0.45, 1))
      .hpf(260)
      .bpf(cosine.range(460, 2100).slow(7))
      .bpq(8.6)
      .ring(0.5)
      .ringf(55)
      .gain(0.09)
      .every(2, x => x.juxBy(0.5, y => y.speed(-1).gain(0.08).delay(0.32).dt(0.5).dfb(0.62)))
      .delay(0.36)
      .dt(0.5)
      .dfb(0.64)
      .room(0.46)
  )],

  // IV. Siren-Canon (rewritten): harmony bends toward minor; piano becomes shards; the bright insistence turns into a warning siren you can sing
  [8, stack(
    note("<g4 bb4 d5> <fs4 a4 cs5> <f4 ab4 c5> <e4 g4 b4> <eb4 fs4 a4> <d4 f4 a4> <cs4 e4 gs4> <c4 eb4 g4>")
      .fast(2)
      .sound("piano")
      .gain(0.16)
      .striate(20)
      .every(2, x => x.palindrome())
      .lpf(saw.range(1100, 8200).slow(3))
      .lpq(6.6)
      .delay(0.28)
      .dt(0.25)
      .dfb(0.52)
      .room(0.32),

    n("0 2 3 7  10 9 7 6  7 6 3 2  0 2 3 6")
      .scale("E:minor")
      .octave(4)
      .sound("pulse")
      .fast(16)
      .gain(0.09)
      .cut(3)
      .attack(0.003)
      .release(0.06)
      .slide(0.09)
      .accelerate(0.08)
      .hpf(950)
      .lpf(5800)
      .lpq(8.2)
      .every(2, x => x.iterBack(7))
      .delay(0.12)
      .dt(0.125)
      .dfb(0.3)
      .room(0.18),

    stack(
      s("mt").euclid(13, 16).gain(0.08).hpf(900).ring(0.34).ringf(200),
      s("ht").euclid(11, 16).gain(0.08).hpf(1100).ring(0.32).ringf(280).late(0.125),
      s("lt").euclid(9, 16).gain(0.075).hpf(820).ring(0.26).ringf(150).off(0.25, x => x.speed(0.75).gain(0.07))
    ).compressor("-20:4:6:0.005:0.1"),

    s("signal answer unison spill")
      .fast(8)
      .chop(56)
      .speed(rand.range(-1.2, 1.35))
      .begin(rand.range(0, 0.4))
      .end(rand.range(0.25, 1))
      .hpf(1000)
      .bpf(perlin.range(900, 5200).slow(3))
      .bpq(9.0)
      .drive(0.34)
      .crush(6)
      .gain(0.07)
      .delay(0.22)
      .dt(0.25)
      .dfb(0.46)
      .room(0.26)
  )],

  // V. False Major (re-harmonized): brightness arrives as a mask (C major), but bass drags it into the basement; drums turn “almost pop” then slip a step
  [8, stack(
    stack(
      s("bd*4").gain(0.23),
      s("sn").euclid(2, 8).gain(0.16).room(0.14),
      s("hh*16").gain(0.105).hpf(7600).swing(0.18).degradeBy(0.16),
      s("cp").euclid(7, 16).gain(0.075).hpf(2600),
      s("cr").euclid(1, 8).gain(0.065).hpf(6400).room(0.18)
    ).compressor("-18:3:6:0.005:0.12"),

    note("<c4 e4 g4> <d4 fs4 a4> <e4 g4 b4> <f4 a4 c5> <g4 b4 d5> <a4 cs5 e5> <bb4 d5 f5> <c5 e5 g5>")
      .slow(2)
      .sound("supersaw")
      .gain(0.13)
      .detune(14)
      .lpf(cosine.range(1200, 8600).slow(5))
      .lpq(7.4)
      .tremolo(0.2)
      .tremolosync(4)
      .delay(0.16)
      .dt(0.375)
      .dfb(0.32)
      .room(0.34)
      .size(0.92),

    note("[g4 b4 d5 g5] [fs4 a4 cs5 fs5] [f4 a4 c5 f5] [e4 g4 b4 e5] [eb4 g4 bb4 eb5] [d4 f4 a4 d5] [cs4 e4 gs4 cs5] [c4 ~ c4 ~]")
      .fast(4)
      .sound("sine")
      .gain(0.085)
      .attack(0.002)
      .release(0.07)
      .tremolo(0.44)
      .tremolosync(8)
      .lpf(sine.range(2000, 9200).slow(3))
      .lpq(8.4)
      .every(2, x => x.off(0.125, y => y.transpose(12).gain(0.065).delay(0.24).dt(0.25).dfb(0.44)))
      .delay(0.26)
      .dt(0.25)
      .dfb(0.5)
      .room(0.3),

    note("g1 ~ g1 ~  fs1 ~ f1 ~  e1 ~ eb1 ~  d1 ~ cs1 ~")
      .slow(1)
      .sound("sine")
      .gain(0.22)
      .attack(0.012)
      .release(0.22)
      .penv(0.18)
      .pattack(0.002)
      .pdecay(0.1)
      .psustain(0)
      .prelease(0.09)
      .hpf(35)
      .lpf(540)
      .lpq(8.8)
      .room(0.14),

    s("ruhe respire not_yet")
      .slow(2)
      .chop(28)
      .speed(rand.range(0.75, 1.2))
      .vowel("a e i o u")
      .begin(rand.range(0, 0.22))
      .end(rand.range(0.5, 1))
      .hpf(240)
      .bpf(tri.range(520, 1900).slow(7))
      .bpq(8.4)
      .gain(0.07)
      .delay(0.26)
      .dt(0.5)
      .dfb(0.56)
      .room(0.44)
  )],

  // VI. Breath-Break (bold swap): speech drops out; a vowel-pad takes the “breath,” while the warning-light sub keeps blinking; percussion is only the room moving
  [6, stack(
    stack(
      s("cr").euclid(5, 16).gain(0.07).hpf(6500).room(0.22),
      s("rim*16").gain(0.095).hpf(2800).degradeBy(0.38)
    ).djf(perlin.range(0.12, 0.88).slow(2))
     .compressor("-19:4:6:0.01:0.12"),

    note("<g3 bb3 d4> <f3 a3 c4> <eb3 g3 bb3> <d3 fs3 a3> <c3 eb3 g3> <bb2 d3 f3> <a2 c3 eb3> <g2 bb2 d3>")
      .slow(2)
      .sound("supersaw")
      .gain(0.11)
      .detune(22)
      .vowel("a e i o u")
      .attack(0.02)
      .release(0.5)
      .tremolo(0.38)
      .tremolosync(8)
      .lpf(perlin.range(420, 2600).slow(4))
      .lpq(7.2)
      .delay(0.36)
      .dt(0.5)
      .dfb(0.6)
      .room(0.46)
      .size(0.92),

    note("g1 ~ ~ g1  ~ ~ g1  f1 ~ ~ eb1")
      .slow(1)
      .sound("sine")
      .gain(0.2)
      .attack(0.01)
      .release(0.2)
      .penv(0.22)
      .pattack(0.002)
      .pdecay(0.09)
      .psustain(0)
      .prelease(0.08)
      .hpf(35)
      .lpf(400)
      .lpq(8.8)
      .every(2, x => x.off(0.25, y => y.transpose(12).gain(0.075).lpf(760).delay(0.18).dt(0.125).dfb(0.28)))
      .room(0.18)
  )],

  // VII. Interruption (reframed): the choir becomes a bright fracture with a strict pulse; the second layer is removed—only voices, suddenly disciplined
  [4, stack(
    s("magnifique utakata teper tiho noch_einmal again")
      .fast(16)
      .chop(96)
      .speed(rand.range(0.75, 1.75))
      .begin(rand.range(0, 0.28))
      .end(rand.range(0.18, 0.85))
      .hpf(1200)
      .bpf(tri.range(1400, 6400).slow(2))
      .bpq(9.2)
      .crush(6)
      .gain(0.095)
      .every(2, x => x.juxBy(0.5, y => y.speed(-1).gain(0.08).delay(0.26).dt(0.25).dfb(0.58)))
      .delay(0.32)
      .dt(0.25)
      .dfb(0.66)
      .room(0.44),

    s("bd")
      .fast(4)
      .euclid(5, 16)
      .gain(0.06)
      .lpf(160)
      .lpq(6.4)
      .delay(0.18)
      .dt(0.125)
      .dfb(0.32)
      .room(0.28)
  )],

  // VIII. Coda (restless homecoming, modulating): returns to G, then pivots; piano folds into a mirror-canon; voice says “home” but won’t resolve
  [10, stack(
    note("g3 eb3 f3 d3  bb2 c3 db3 a2  g2 ~ bb2 c3  d3 ~ c3 bb2 a2")
      .slow(4)
      .sound("sine")
      .gain(0.3)
      .attack(0.02)
      .release(0.46)
      .lpf(900)
      .lpq(3.6)
      .delay(0.08)
      .dt(0.5)
      .dfb(0.18)
      .room(0.3),

    note("<g4 bb4 d5> <a4 c5 e5> <bb4 d5 f5> <c5 eb5 g5> <d5 fs5 a5> <eb5 g5 bb5> <e5 gs5 b5> <f5 a5 c6>")
      .slow(4)
      .sound("piano")
      .gain(0.19)
      .every(2, x => x.rev().off(0.125, y => y.transpose(12).gain(0.11).delay(0.22).dt(0.25).dfb(0.3)))
      .delay(0.18)
      .dt(0.5)
      .dfb(0.26)
      .room(0.36),

    n("0 2 3 5  7 8 10 12")
      .scale("G:minor")
      .octave(5)
      .sound("square")
      .fast(8)
      .gain(0.06)
      .detune(7)
      .attack(0.003)
      .release(0.06)
      .tremolo(0.32)
      .tremolosync(8)
      .lpf(sine.range(900, 7200).slow(6))
      .lpq(7.8)
      .sometimes(x => x.off(0.25, y => y.transpose(-12).gain(0.055).delay(0.28).dt(0.25).dfb(0.44)))
      .room(0.22),

    s("home again encore not_yet utakata tiho")
      .slow(2)
      .chop(56)
      .speed(rand.range(0.55, 1.25))
      .vowel("a e i o u")
      .begin(rand.range(0, 0.24))
      .end(rand.range(0.35, 0.98))
      .hpf(160)
      .bpf(cosine.range(520, 2400).slow(8))
      .bpq(8.6)
      .crush(6)
      .leslie(0.26)
      .ring(0.28)
      .ringf(110)
      .gain(0.105)
      .delay(0.44)
      .dt(0.5)
      .dfb(0.58)
      .room(0.46)
  )]
)