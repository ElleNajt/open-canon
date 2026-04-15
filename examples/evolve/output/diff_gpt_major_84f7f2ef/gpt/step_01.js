setcps(128/60/4)

samples('shabda/speech:im_here,stay_curious')

$: note("c4 e4 g4 c5 g4 e4").sound("triangle").every(4, x=>x.transpose(2)).lpf(sine.range(300, 2600).slow(8)).gain(0.32).room(0.18)

$: note("c2 ~ c2 g1").sound("sine").lpf(180).drive(0.25).gain(0.22).room(0.07)

$: stack(
  s("bd*4"),
  s("sn").late(0.5).euclid(2, 4),
  s("hh*8")
).swing(0.08).hpf(180).gain(0.42).room(0.08).compressor("0.25:3:0.2:0.01:0.2")

$: note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <f3 ab3 c4 eb4> <g3 bb3 d4 f4>").sound("supersaw").slow(4).lpf(sine.range(500, 3200).slow(16)).gain(0.14).room(0.35)

$: s("im_here stay_curious").slow(8).chop(16).speed(rand.range(0.9, 1.05)).gain(0.11).room(0.4)