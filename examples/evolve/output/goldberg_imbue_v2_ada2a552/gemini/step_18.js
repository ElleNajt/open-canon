samples('shabda/speech:binary,process,data')
samples('shabda/speech/de-DE:maschine,geist')
setcps(130/60/4)

$: note("[c2(3,8) f1 g#1] a#1(5,8)").slow(8)
  .sound("pulse")
  .shape(0.4)
  .lpf(perlin.range(150, 900).slow(12))
  .lpq(7)
  .gain(0.2)

$: note("0 7 5 [8,12] 7 3 5 [0,2]").scale("c:minor").slow(4)
  .sound("supersaw")
  .hpf(200)
  .room(0.3)
  .pan(square.slow(2).range(0.1,0.9))
  .gain(0.1)

$: stack(
    s("bd(5,8)").crush(5),
    s("[~ sn], cp?*2"),
    s("hh*8").hpf(6000).gain(0.5).degradeBy(0.2)
  ).distort(0.05)
  .room(0.2)
  .hpf(150)
  .gain(0.75)

$: note("<c3:min7 g3:min7 f3:maj7 d#3:maj7>").chord().slow(8)
  .sound("sawtooth")
  .attack(2).release(3)
  .cutoff(rand.range(500, 2000).slow(8)).lpq(5)
  .leslie(0.3)
  .gain(0.12)

$: s("<binary process maschine geist>").slow(4)
  .chop(8)
  .speed(perlin.range(0.8, 1.2).slow(6))
  .bandf(sine.range(400, 4000).slow(5)).bandq(8)
  .delay(0.4)
  .gain(0.22)

$: note("~ c5 [d#5 f5] g5 <a#5 g5> [f5 a#5]").every(3, rev)
  .sound("triangle")
  .vowel("i u e a".slow(3))
  .ring(0.4).ringf(25)
  .delay(0.3).dfb(0.6)
  .gain(0.15)