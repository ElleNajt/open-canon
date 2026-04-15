samples('shabda/speech/en-GB/f:drifting,breathe')
samples('shabda/speech/de-DE/m:achtung,fokus,energie')
setcps(105/60/4)

$: stack(
  stack(
    s("bd [~ bd] sn [~ bd*2] ~ sn [bd bd] ~").gain(0.95),
    s("~ cp").early(0.05).room(0.3).crush(5).gain(0.7),
    euclid(11,16,"hh").gain(0.5).pan(sine.range(0.2,0.8).fast(2)),
    euclid(5,8,"rim").fmi(6).fmh(2.5).gain(0.6).pan(0.3).delay(0.2).dt("1/2").dfb(0.4)
  )
    .gain(0.85)
    .drive(0.4)
    .hpf(40)
    .compressor("0.2:6:0.3:0.01:0.15"),

  note("f1 ~ ~ gb1 ~ f1 [~ c2] ~")
    .sound("supersaw")
    .lpf(sine.range(300,900).fast(4))
    .lpq(8)
    .attack(0.01)
    .decay(0.15)
    .sustain(0.1)
    .release(0.1)
    .shape(0.7)
    .gain(0.8)
    .pan(0.5)
    .jux(x => x.add(12).late(0.05).pan(0.7).gain(0.65)),

  note("~ <[f3 ab3 c4] [gb3 bb3 db4]>")
    .sound("pulse")
    .attack(0.01)
    .decay(0.2)
    .sustain(0.1)
    .release(0.5)
    .gain(0.65)
    .room(0.8)
    .size(0.8)
    .lpf(saw.range(400,3000).slow(2))
    .lpq(5)
    .delay(0.6)
    .dt("3/16")
    .dfb(0.6)
    .pan(0.4),

  note("f2 db3")
    .sound("square")
    .slow(2)
    .vowel("o a e u")
    .attack(0.3)
    .decay(0.5)
    .sustain(0.7)
    .release(2)
    .gain(0.6)
    .room(0.9)
    .lpf(1500)
    .pan(cosine.range(0.3, 0.7).slow(4)),

  s("achtung [~ breathe] drifting ~")
    .chop(16)
    .speed(tri.range(0.5, 0.9).slow(4))
    .echo(2, "1/4", 0.3)
    .lpf(2000)
    .gain(0.75)
    .room(0.7)
    .pan(0.8)
    .jux(x => x.speed(-0.6).pan(0.2).gain(0.5))
)