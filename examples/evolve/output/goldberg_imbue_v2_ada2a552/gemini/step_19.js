samples('shabda/speech:binary,process,data')
samples('shabda/speech/de-DE:maschine,geist')
setcps(130/60/4)

$: note("[c2(3,8) f1? g#1] a#1(7,8)").slow(8)
  .sound("pulse")
  .distort(0.2)
  .lpf(perlin.range(150, 900).slow(12))
  .lpq(6)
  .gain(0.18)

$: note("0 7 5 [~,12] 7 3 5 [0,2]").scale("c:minor").slow(4)
  .sound("supersaw")
  .hpf(200)
  .jux(n => n.add(7))
  .delay(0.2)
  .gain(0.1)

$: stack(
    s("bd(5,8)").crush(5),
    s("[~ sn], cp?*2"),
    s("hh*4 oh hh*3").hpf(6000).gain(0.5).degradeBy(0.1)
  ).distort(0.1)
  .room(0.1)
  .gain(0.8)

$: note("<c3:min7 g3:min7 f3:maj7 d#3:maj7>").chord().slow(8)
  .sound("sine")
  .fmi(perlin.range(1,4).slow(16))
  .attack(2).release(3)
  .cutoff(rand.range(800, 2500).slow(12)).lpq(4)
  .gain(0.15)

$: s("<binary process maschine geist>").slow(8)
  .striate(16)
  .speed(perlin.range(0.4, 1.4).slow(8))
  .crush(6)
  .bandf(sine.range(400, 4000).slow(5)).bandq(7)
  .gain(0.25)

$: note("~ c5 [d#5 f5] g5 <a#5 g5> [f5 a#5]").every(4, palindrome)
  .sound("triangle")
  .vowel(perlin.slow(5))
  .ring(0.2).ringf(perlin.slow(11).range(20, 100))
  .delay(0.3).dfb(0.6)
  .gain(0.15)