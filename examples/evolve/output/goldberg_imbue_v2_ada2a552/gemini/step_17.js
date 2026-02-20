samples('shabda/speech:binary,process,data')
samples('shabda/speech/de-DE:maschine,geist')
setcps(130/60/4)

$: note("[c2 g#1(3,8)] f1 [a#1 f1]").slow(8)
  .sound("pulse")
  .shape(0.3)
  .lpf(perlin.range(100, 800).slow(16))
  .lpq(6)
  .gain(0.18)
  .delay(0.25)

$: note("0 7 5 [8,12] 7 3 5 [0,2]").scale("c:minor").slow(2)
  .sound("supersaw")
  .fmenv(0.8).fmdecay(0.05)
  .hpf(200)
  .gain(0.1)
  .pan(perlin.range(0.1,0.9).slow(7))

$: stack(
    s("bd(5,8)").jux(rev).gain(0.9),
    s("[~ sn, ~ cp]*2"),
    s("hh*8").hpf(5000).gain(0.5)
  ).crush(6)
  .distort(0.1)
  .room(0.15)
  .gain(0.7)

$: note("<c3:min7 g3:min7 f3:maj7 d#3:maj7>").chord().slow(16)
  .sound("sawtooth")
  .attack(3).release(4)
  .cutoff(sine.range(600, 2500).slow(10)).lpq(4)
  .phaser(cosine.range(0.1, 5).slow(14))
  .gain(0.15)

$: s("binary? process? maschine? geist?").fast(2)
  .chop(16)
  .speed(perlin.range(0.5, 1.5).slow(8))
  .gain(0.2)
  .delay(0.5)
  .pan(rand)

$: note("~ c5 d#5 f5 g5 a#5 g5 [f5 d#5]").every(4, rev)
  .sound("triangle")
  .vowel("a e i o u".slow(5))
  .gain(0.1)
  .slide(0.05)
  .delay(0.3).dfb(0.5)