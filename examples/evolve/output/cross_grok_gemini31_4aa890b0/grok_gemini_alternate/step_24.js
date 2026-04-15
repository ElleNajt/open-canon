samples('shabda/speech/en-GB/f:drifting,breathe')
samples('shabda/speech/de-DE/m:achtung,fokus,energie')
setcps(132/60/4)

$: stack(
  stack(
    s("bd(4,4)").gain(0.95),
    s("~ cp").late(0.02).room(0.4).gain(0.75),
    s("[hh*4, <~ oh*2>]*2").pan(perlin.range(0.3, 0.7).fast(4)).gain(0.65),
    euclid(3, 8, "mt").gain(0.6).room(0.2).pan(0.3),
    euclid(5, 16, "ht").gain(0.5).delay(0.2).dt("1/8").dfb(0.4).pan(0.7)
  )
    .gain(0.85)
    .drive(0.4)
    .hpf(40),

  note("c2 [~ eb2] c2 <g1 bb1> [c2 c3] eb2 [db2 f2] ~")
    .sound("square")
    .lpf(sine.range(150, 2200).fast(8))
    .lpq(8.5)
    .attack(0.01)
    .decay(0.15)
    .sustain(0)
    .release(0.1)
    .gain(0.75)
    .drive(0.5)
    .pan(0.4)
    .jux(x => x.add(12).early(0.125).pan(0.6).gain(0.6)),

  note("[c3 eb3 g3] [db3 f3 ab3] [bb2 db3 f3] [c3 eb3 g3]")
    .voicing()
    .sound("supersaw")
    .slow(2)
    .detune(30)
    .bpf(tri.range(400, 2400).slow(8))
    .bpq(4)
    .attack(0.5)
    .decay(1.5)
    .sustain(0.7)
    .release(1.5)
    .gain(0.6)
    .room(0.95)
    .size(0.9)
    .leslie(1.2)
    .pan(sine.range(0.2, 0.8).slow(6)),

  note("c6 ~ eb5 ~ f5 ~ g5 ~ [db5 f5] ~ [c5 bb4] ~")
    .sound("sine")
    .fmi(rand.range(2, 6))
    .fmh(2)
    .attack(0.02)
    .decay(0.4)
    .sustain(0.1)
    .release(0.6)
    .gain(0.7)
    .room(0.8)
    .size(0.75)
    .pan(0.2)
    .echo(3, 0.375, 0.45)
    .jux(x => x.add(7).late(0.25).pan(0.8)),

  s("achtung [energie <drifting fokus>]")
    .chop(rand.range(4, 12))
    .rev()
    .speed(0.85)
    .lpf(2000)
    .gain(0.85)
    .delay(0.5)
    .dt("1/6")
    .dfb(0.6)
    .room(0.6)
    .jux(x => x.striate(8).speed(1.5).pan(0.85))
)