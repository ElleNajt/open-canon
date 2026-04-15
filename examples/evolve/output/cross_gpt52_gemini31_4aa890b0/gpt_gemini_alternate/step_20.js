setcps(133/60/4)

samples('shabda/speech:counterpoint,dissonance,inversion,retrograde,canon,ricercar,subject,fracture,mirror,spiral,again,oracle,glitch,breath,wake,unfold,now,afterimage,cipher,threshold,softly,become,run')
samples('shabda/speech/fr-FR/f:attention,machine,silence,vertige,lueur,ruine,passage')
samples('shabda/speech/de-DE/m:achtung,schatten,traum,zeichen')
samples('shabda/speech/ja-JP/f:kokoro,kage')
samples('shabda/speech:i_am_here,listen,turn,between,remember')
samples('shabda/speech/en-GB/m:signal,ghost,blueprint,interrupt')

$: arrange(
  [4, stack(
    note("d1 ~ ~ ~ a1 ~ g1 ~")
      .slow(2)
      .sound("sine")
      .gain(0.2)
      .fm(perlin.range(20, 60).slow(2))
      .fmh(2.01)
      .fmenv(0.8)
      .fmattack(0.5)
      .fmdecay(4)
      .fmsustain(0.1)
      .fmrelease(8)
      .lpf(sine.range(500, 1800).slow(4))
      .lpq(8)
      .room(0.9)
      .roomlp(600)
      .pan(0.5),

    note("d5 a4 f5 e5 c5 a4 g5 f5")
      .slow(2)
      .sound("piano")
      .gain(0.18)
      .lpf(sine.range(1200, 6200).slow(5))
      .lpq(6)
      .attack(0.02)
      .release(6.0)
      .delay(0.8)
      .dt(0.333)
      .dfb(0.7)
      .iter(2)
      .pan(saw.range(0.2, 0.8).slow(4)),

    s("ruine lueur silence passage")
      .slow(4)
      .chop(32)
      .striate(8)
      .begin(rand.range(0.1, 0.2))
      .end(rand.range(0.6, 0.9))
      .speed(rand.range(0.4, 0.8))
      .gain(0.18)
      .vowel("o u")
      .hpf(400)
      .room(0.95)
      .delay(0.8)
      .dt(0.75)
      .dfb(0.85)
  )],

  [4, stack(
    note("[d1 ~ d1 d1] [f1 e1 ~ c1] [~ d1 ~ e1] [g1 ~ f1 ~]")
      .sound("pulse")
      .fast(2)
      .gain(0.22)
      .shape(0.9)
      .drive(0.8)
      .lpf(perlin.range(400, 4200).fast(2))
      .lpq(8.5)
      .attack(0.01)
      .release(0.2)
      .jux(x => x.transpose(5).rev().pan(0.8))
      .pan(0.2),

    s("bd(3,8)")
      .fast(2)
      .gain(0.5)
      .drive(0.9)
      .shape(0.6),

    s("~ cp")
      .fast(2)
      .gain(0.3)
      .hpf(800)
      .room(0.4),

    s("sn*4")
      .euclid(9, 16)
      .fast(2)
      .gain(0.15)
      .speed(2)
      .hpf(2000)
      .jux(x => x.speed(1.5).pan(0.9)),

    s("achtung schatten traum zeichen")
      .fast(2)
      .chop(16)
      .gain(0.2)
      .djf(0.8)
      .delay(0.5)
      .dt(0.125)
      .dfb(0.6)
      .pan(0.5)
  )],

  [6, stack(
    note("[eb3 g3 bb3 d4] [f3 a3 c4 e4] [g3 b3 d4 fs4] [a3 cs4 e4 gs4]")
      .slow(2)
      .sound("supersaw")
      .gain(0.18)
      .lpf(sine.range(1200, 8000).slow(4))
      .lpq(7.5)
      .drive(0.4)
      .room(0.8)
      .leslie(0.8)
      .delay(0.5)
      .dt(0.5)
      .dfb(0.7)
      .pan(0.5),

    note("eb5 <g5 f5> <bb5 a5> <c6 d6> <g5 f5> d5")
      .sound("square")
      .fast(4)
      .gain(0.12)
      .lpf(saw.range(1500, 8500).slow(2))
      .lpq(6.5)
      .crush(4)
      .attack(0.01)
      .release(0.2)
      .delay(0.6)
      .dt(0.333)
      .dfb(0.6)
      .iter(3)
      .off(0.5, x => x.transpose(12).gain(0.08).rev().pan(0.8)),

    s("bd")
      .euclid(3, 8)
      .fast(2)
      .gain(0.4)
      .drive(0.7),

    s("rim")
      .euclid(11, 16)
      .gain(0.18)
      .hpf(1500)
      .ring(0.6)
      .ringf(1200)
      .pan(tri.range(0.2, 0.8).fast(4)),

    s("fracture unfold become spiral")
      .slow(2)
      .chop(64)
      .striate(16)
      .speed(rand.range(0.8, 1.2))
      .gain(0.16)
      .vowel("a e")
      .djf(sine.range(0.3, 0.8).slow(3))
      .delay(0.7)
      .dt(0.25)
      .dfb(0.8)
  )],

  [6, stack(
    note("[eb4 g4 bb4 d5 f5 a5 c6]")
      .arp("updown")
      .fast(8)
      .sound("triangle")
      .gain(0.12)
      .lpf(perlin.range(2000, 8000).fast(2))
      .lpq(6)
      .attack(0.01)
      .release(0.15)
      .delay(0.6)
      .dt(0.125)
      .dfb(0.8)
      .jux(x => x.rev().transpose(-12).gain(0.1).pan(0.8)),

    note("[eb4 g4 bb4 d5] ~ [f4 a4 c5 e5] ~")
      .sound("piano")
      .slow(2)
      .gain(0.16)
      .lpf(sine.range(1500, 6000).slow(4))
      .lpq(5)
      .attack(0.05)
      .release(5)
      .delay(0.7)
      .dt(0.5)
      .dfb(0.75),

    s("rd")
      .euclid(13, 16)
      .fast(2)
      .gain(0.1)
      .hpf(6000)
      .pan(saw.range(0.1, 0.9).fast(8)),

    s("signal ghost blueprint interrupt")
      .slow(2)
      .chop(48)
      .speed(rand.range(-1.2, 1.2))
      .gain(0.15)
      .hpf(500)
      .djf(0.8)
      .delay(0.8)
      .dt(0.333)
      .dfb(0.85)
  )],

  [4, stack(
    note("bb2 d3 f3 a3 ~ ~ a2 cs3 e3 g3")
      .slow(2)
      .sound("pulse")
      .shape(0.7)
      .vowel("o a")
      .gain(0.15)
      .lpf(sine.range(400, 2500).slow(4))
      .lpq(8)
      .attack(0.5)
      .release(4)
      .room(0.95)
      .delay(0.7)
      .dt(0.75)
      .dfb(0.8)
      .pan(0.5),

    s("breath*4")
      .slow(2)
      .chop(8)
      .speed(0.8)
      .gain(0.2)
      .room(1)
      .hpf(1200)
      .delay(0.9)
      .dt(1.0)
      .dfb(0.9),

    s("kokoro kage")
      .slow(4)
      .chop(16)
      .speed(0.5)
      .gain(0.2)
      .ring(0.9)
      .ringf(800)
      .hpf(1000)
      .delay(0.8)
      .dt(0.5)
      .dfb(0.8)
      .pan(sine.range(0.2, 0.8).slow(2))
  )],

  [8, stack(
    note("d1*2 eb1*2 f1*2 g1*2 a1*2 bb1*2 c2*2 d2*2")
      .sound("sawtooth")
      .fast(2)
      .gain(0.28)
      .lpf(perlin.range(800, 6500).fast(2))
      .lpq(8)
      .drive(0.9)
      .shape(0.85)
      .attack(0.01)
      .release(0.2),

    note("d5 a4 f5 d5 eb5 bb4 g5 eb5 c6 g5 e6 c6 a5 f5 d5 c5")
      .sound("supersaw")
      .fast(2)
      .gain(0.15)
      .lpf(sine.range(2000, 9000).slow(2))
      .lpq(7)
      .attack(0.02)
      .release(0.5)
      .delay(0.6)
      .dt(0.25)
      .dfb(0.8)
      .off(0.25, x => x.transpose(12).gain(0.12).pan(0.8))
      .iter(4),

    s("bd(5,8)")
      .fast(2)
      .gain(0.5)
      .drive(0.8),

    s("sn")
      .euclid(2, 8)
      .late(0.5)
      .gain(0.25)
      .room(0.4),

    s("hh*8")
      .fast(2)
      .gain(0.14)
      .hpf(8000)
      .pan(perlin.range(0, 1).fast(8)),

    s("machine interrupt glitch run")
      .fast(4)
      .chop(64)
      .striate(16)
      .speed(rand.range(1.5, 3.0))
      .gain(0.16)
      .djf(saw.range(0.2, 0.9).fast(2))
      .crush(2)
      .delay(0.7)
      .dt(0.125)
      .dfb(0.8)
      .jux(x => x.rev().speed(-2).pan(0.9))
  )],

  [8, stack(
    note("d2 ~")
      .slow(8)
      .sound("sine")
      .gain(0.2)
      .lpf(400)
      .room(1)
      .attack(2)
      .release(16),

    s("ruine lueur silence passage attention")
      .slow(8)
      .speed(0.15)
      .gain(0.25)
      .hpf(300)
      .room(1)
      .roomlp(800)
      .delay(0.9)
      .dt(1.5)
      .dfb(0.9)
      .pan(sine.range(0.1, 0.9).slow(16)),

    s("breath")
      .slow(8)
      .speed(0.4)
      .gain(0.2)
      .room(0.9)
      .delay(0.6)
      .dt(0.5)
      .dfb(0.7)
  )]
)
.compressor("0.4:5.0:0.3:0.01:0.3")