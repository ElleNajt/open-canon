samples('shabda/speech:binary,process,data,computer')
samples('shabda/speech/de-DE:maschine,geist')
setcps(130/60/4)

$: note("[c2,f2,g#1] [a#1,f2]").euclid(5,8).slow(4)
  .sound("sawtooth")
  .lpf(perlin.range(100, 800).slow(8)).lpq(5)
  .shape(0.7)
  .delay(0.25).dfb(0.5)
  .gain(0.18)

$: note("<0 3 7 10> <3 0 -5>").scale("c:minor").slow(4)
  .sound("triangle")
  .phaser(perlin.range(0.1, 4).slow(6))
  .off(0.25, (x=>x.pan(1).add(7))).pan(0)
  .room(0.3)
  .gain(0.1)

$: stack(
    s("bd").euclid(5,8),
    s("sn").euclid(3,8).early(0.25).crush(8),
    s("hh*16").degradeBy(0.25).hpf(8000).gain(0.4)
  ).djf(tri.slow(8))
  .distort(0.1).room(0.3)
  .compressor()
  .gain(0.8)

$: note("<c3:min7 g3:m7 ab3:maj7>").chord().slow(16)
  .sound("supersaw")
  .lpf(400).lpq(4)
  .tremolo(perlin.range(0,0.5).slow(12))
  .attack(2).release(4)
  .gain(0.2)

$: s("<process binary computer maschine data geist>").ply(2).slow(16)
  .chop(8)
  .speed(perlin.range(-1, 1).slow(8))
  .vowel("o u a".slow(2))
  .delay(0.4).dfb(0.7)
  .gain(0.18)

$: note("[c5 d#5] g5 [a#5 ~] g5 d#5 c5").iter(1).slow(8)
  .sound("sine")
  .fmi(perlin.range(0, 8).slow(4)).fmh(2)
  .slide(perlin.range(-0.1, 0.1).slow(16))
  .delay(0.25).room(0.4)
  .gain(0.12)