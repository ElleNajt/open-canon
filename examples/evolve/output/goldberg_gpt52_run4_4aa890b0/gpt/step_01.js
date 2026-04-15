// Goldberg Variations - Ground Bass, reimagined as bold, audible variations

samples('shabda/speech:aria,break,the_pattern,again')

setcps(72/60/4)

$: arrange(
  [8, stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.45)
      .lpf(1200)
      .lpq(4)
      .room(0.12),

    note("<g4 bb4 d5> <f4 a4 d5> <eb4 g4 c5> <d4 fs4 a4>")
      .slow(2)
      .sound("supersaw")
      .gain(0.18)
      .lpf(sine.range(400, 2500).slow(8))
      .lpq(6)
      .room(0.25)
      .size(0.7)
  )],

  [8, stack(
    note("g3 ~ gb3 e3 d3 ~ b2 c3 d3")
      .slow(1)
      .sound("pulse")
      .cut(1)
      .gain(0.35)
      .attack(0.01)
      .release(0.2)
      .lpf(900)
      .lpq(5)
      .slide(0.1)
      .room(0.08),

    stack(
      s("bd*4").gain(0.25),
      s("hh*8").gain(0.12).hpf(6000),
      s("sn").euclid(2, 8).gain(0.18).room(0.1)
    ).compressor("-18:3:6:0.01:0.12"),

    note("[d5 e5] [f5 g5] a5 g5 f5 e5")
      .slow(2)
      .sound("piano")
      .gain(0.22)
      .delay(0.25)
      .dt(0.375)
      .dfb(0.35)
      .room(0.2)
  )],

  [8, stack(
    note("g3 gb3 e3 d3 b2 c3 d3 g2")
      .slow(2)
      .transpose(5)
      .sound("square")
      .gain(0.4)
      .lpf(700)
      .lpq(7)
      .drive(0.25)
      .room(0.08),

    stack(
      s("bd*4").gain(0.23).sometimesBy(0.35, x => x.fast(2)),
      s("hh*16").gain(0.11).hpf(6500).degradeBy(0.2),
      s("oh").euclid(3, 8).gain(0.12).hpf(4000).room(0.08)
    ).compressor("-20:4:6:0.005:0.1"),

    n("0 2 4 6 7 6 4 2")
      .scale("C:minor")
      .octave(1)
      .sound("sawtooth")
      .fast(2)
      .gain(0.18)
      .lpf(saw.range(500, 5000).slow(4))
      .lpq(5)
      .tremolo(0.4)
      .tremolosync(8)
      .delay(0.3)
      .dt(0.25)
      .dfb(0.45)
      .room(0.25)
  )],

  [8, stack(
    s("hh*16")
      .gain(0.1)
      .degradeBy(0.4)
      .crush(6)
      .hpf(5000)
      .phaser(0.2)
      .phaserdepth(0.7)
      .phasercenter(1200)
      .room(0.15),

    s("aria break the_pattern again")
      .slow(4)
      .chop(16)
      .speed(rand.range(0.9, 1.05))
      .vowel("a e i o u")
      .hpf(200)
      .gain(0.15)
      .delay(0.3)
      .dt(0.5)
      .dfb(0.5)
      .room(0.35)
  )],

  [8, stack(
    note("g2 d3 e3 fs3 g3 d3 e3 c3")
      .slow(1)
      .sound("triangle")
      .gain(0.42)
      .attack(0.005)
      .release(0.15)
      .lpf(1400)
      .lpq(4)
      .room(0.1),

    stack(
      s("bd*4").gain(0.24),
      s("rim*8").gain(0.1).hpf(2500),
      s("hh*16").gain(0.1).hpf(6500).sometimesBy(0.3, x => x.rev())
    ).compressor("-18:3:6:0.005:0.12"),

    note("<b4 d5 g5> <a4 cs5 e5> <g4 b4 d5> <fs4 a4 cs5>")
      .slow(2)
      .sound("piano")
      .gain(0.25)
      .delay(0.2)
      .dt(0.375)
      .dfb(0.3)
      .room(0.25),

    note("<g4 b4 d5> <d4 fs4 a4> <e4 g4 b4> <c4 e4 a4>")
      .slow(1)
      .sound("supersaw")
      .gain(0.15)
      .lpf(cosine.range(800, 6000).slow(4))
      .lpq(6)
      .tremolo(0.25)
      .tremolosync(4)
      .room(0.3)
      .size(0.8)
  )]
)