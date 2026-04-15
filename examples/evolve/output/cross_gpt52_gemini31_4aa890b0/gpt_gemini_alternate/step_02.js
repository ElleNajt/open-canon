setcps(72/60/4)

samples('shabda/speech:quodlibet,da_capo,variatio,clavier')

$: arrange(
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2")
      .slow(2)
      .sound("triangle")
      .gain(0.4)
      .room(0.2),

    note("g4 b4 d5 fs5 d5 e5 fs5 g5")
      .slow(2)
      .sound("piano")
      .gain(0.2)
      .sustain(1)
      .room(0.3)
      .jux(x => x.rev()),

    s("rim ~ ~ ~")
      .slow(2)
      .gain(0.1)
      .room(0.1)
  )],

  [8, stack(
    note("[g3 fs3] [e3 d3] [b2 c3] [d3 g2]")
      .sound("pulse")
      .gain(0.3)
      .lpf(1200)
      .lpq(4)
      .attack(0.01)
      .release(0.1),

    note("g4 a4 b4 g4 d5 c5 b4 a4 d5 e5 d5 c5 b4 a4 g4 fs4")
      .sound("piano")
      .gain(0.18)
      .room(0.25)
      .swing(0.1),

    s("bd*4")
      .gain(0.2),

    s("hh")
      .euclid(13,16)
      .gain(0.08)
      .hpf(7000),

    s("sn")
      .euclid(5,16)
      .gain(0.15)
      .room(0.1)
  )],

  [8, stack(
    note("g3 f3 eb3 d3 c3 bb2 a2 d3")
      .slow(2)
      .sound("sine")
      .gain(0.35)
      .lpf(sine.range(200,1000).slow(4))
      .lpq(3)
      .room(0.3),

    note("g4 d4 eb4 d4")
      .chord("minor minor major major")
      .slow(2)
      .sound("piano")
      .voicing()
      .gain(0.22)
      .room(0.4)
      .jux(x => x.rev())
      .delay(0.25)
      .dt(0.375)
      .dfb(0.3),

    s("oh ~")
      .slow(1)
      .gain(0.08)
      .hpf(4000)
      .room(0.4)
  )],

  [8, stack(
    note("[g2 fs2] [e2 d2] [b1 c2] [d2 g1]")
      .sound("square")
      .gain(0.3)
      .lpf(800)
      .lpq(4)
      .drive(0.2)
      .swing(0.1),

    note("g5 d5 b4 g4 a4 fs4 d4 c4 d5 b4 g4 d4 b3 a3 g3 fs3")
      .sound("supersaw")
      .gain(0.12)
      .lpf(saw.range(600,3000).slow(2))
      .lpq(5)
      .room(0.25)
      .delay(0.35)
      .dt(0.25)
      .dfb(0.4),

    s("bd bd [~ bd] bd")
      .fast(2)
      .gain(0.25)
      .drive(0.1),

    s("cp")
      .euclid(3,8)
      .gain(0.18)
      .room(0.2),

    s("quodlibet variatio da_capo clavier")
      .slow(8)
      .chop(32)
      .speed(rand.range(0.85,1.1))
      .gain(0.15)
      .room(0.35)
      .jux(x => x.rev())
  )]
)
.compressor("0.55:3:0.2:0.01:0.12")