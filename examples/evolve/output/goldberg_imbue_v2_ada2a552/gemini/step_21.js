samples('shabda/speech:binary,process,data,computer')
samples('shabda/speech/de-DE:maschine,geist')
setcps(130/60/4)

$: note("[c2, f2(3,8)] [g#1(5,8)] a#1").slow(8)
  .sound("pulse")
  .shape(0.3)
  .lpf(perlin.range(150, 1200).slow(12))
  .lpq(6)
  .gain(0.18)

$: note("0 3 7 10 12 10 7 3").scale("c:minor").ply(2).slow(8)
  .sound("supersaw")
  .phaser(perlin.range(0.1, 4).slow(16))
  .jux(rev)
  .delay(0.25).dfb(0.6)
  .gain(0.08)

$: stack(
    s("bd").euclid(3,8),
    s("[~ sn?]*2").crush(8).speed(perlin.range(0.8, 1.2)),
    s("hh*16").hpf(8000).pan(rand).gain(0.4)
  ).distort(0.3)
  .room(0.3)
  .gain(0.8)

$: note("<c3:min9 ab2:maj7 g3:sus4 eb3:maj7>").chord().slow(16)
  .sound("sine")
  .ring(perlin.range(0.1, 2).slow(10))
  .attack(2).release(5)
  .lpf(600).lpq(9)
  .gain(0.15)

$: s("<binary process maschine computer data geist>").slow(12)
  .striate(perlin.range(16, 64).slow(8))
  .speed("<1.2 0.8 -1>")
  .jux(rev)
  .delay(0.3).dfb(0.6)
  .gain(0.18)

$: note("c5 d#5 g5 a#5").palindrome().slow(4)
  .sound("square")
  .shape(0.5)
  .crush(perlin.range(4, 16).slow(8))
  .hpf(perlin.range(500, 6000).slow(12))
  .delay(0.25).dfb(0.7)
  .gain(0.1)