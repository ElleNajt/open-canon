samples('shabda/speech/en-GB/f:drifting,breathe')
samples('shabda/speech/de-DE/m:achtung,fokus,energie')
setcps(128/60/4)

$: stack(
  stack(
    s("[bd bd] [~ sn] [bd ~] sn bd [~ cp]").gain(0.95),
    s("cp [~ ht]").early(0.1).room(0.4).crush(4).gain(0.65),
    euclid(9,16,"hh").gain(0.55).pan(sine.range(0.1,0.9).fast(3)).swing(0.1),
    euclid(7,16,"lt").fmi(8).fmh(3).gain(0.55).pan(0.7).delay(0.3).dt("1/3").dfb(0.5)
  )
    .gain(0.9)
    .drive(0.5)
    .hpf(50)
    .compressor("0.15:5:0.4:0.02:0.2"),

  note("eb1 ~ bb1 ~ eb2 [g2 bb2] ~")
    .sound("sawtooth")
    .lpf(cosine.range(250,1000).fast(3))
    .lpq(7)
    .attack(0.005)
    .decay(0.12)
    .sustain(0.15)
    .release(0.12)
    .shape(0.6)
    .gain(0.75)
    .pan(0.5)
    .jux(x => x.add(12).late(0.03).pan(0.6).gain(0.7)),

  note("~ <[eb3 g3 bb3] [c3 eb3 g3]>")
    .sound("triangle")
    .voicing()
    .attack(0.01)
    .decay(0.18)
    .sustain(0.12)
    .release(0.6)
    .gain(0.7)
    .room(0.7)
    .size(0.7)
    .lpf(tri.range(350,2800).slow(3))
    .lpq(4)
    .delay(0.5)
    .dt("1/8")
    .dfb(0.5)
    .pan(0.3),

  s("piano")
    .note("eb5 [g5 bb5] eb6 ~ [bb5 g5] eb5")
    .slow(2)
    .attack(0.02)
    .decay(0.3)
    .sustain(0.4)
    .release(1.2)
    .gain(0.6)
    .room(0.8)
    .lpf(2500)
    .pan(saw.range(0.2,0.8).slow(4))
    .tremolo(0.4)
    .tremolosync(0.5),

  s("energie [fokus ~] [breathe drifting]")
    .chop(32)
    .speed(perlin.range(0.7,1.2).slow(2))
    .echo(4, "1/8", 0.4)
    .lpf(1800)
    .phaser(0.3)
    .gain(0.8)
    .room(0.6)
    .pan(0.75)
    .jux(x => x.speed(-0.8).pan(0.25).gain(0.55))
    .sometimes(x => x.ring(0.5))
)