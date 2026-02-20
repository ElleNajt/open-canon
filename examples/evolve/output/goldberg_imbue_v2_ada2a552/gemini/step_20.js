samples('shabda/speech:binary,process,data')
samples('shabda/speech/de-DE:maschine,geist')
setcps(130/60/4)

$: note("[c2(5,8) f2? g#1] a#1(3,8)").slow(8)
  .sound("sawtooth")
  .drive(0.4)
  .lpf(perlin.range(200, 1000).slow(8))
  .lpq(5)
  .gain(0.15)

$: note("0 7 5 [~,12] 7 3 5 [0,2]").scale("c:minor").slow(4)
  .sound("supersaw")
  .hpenv(4000).hpdecay(0.5)
  .jux(rev)
  .delay(0.25).dfb(0.4)
  .gain(0.1)

$: stack(
    s("bd(5,8)").crush(6),
    s("[~ sn]*2").jux(rev),
    s("hh*8").hpf(7000).gain(0.5).degradeBy(0.15)
  ).crush(8)
  .room(0.2)
  .djf(sine.range(0.2, 0.8).slow(16))
  .gain(0.8)

$: note("<c3:min9 g2:min7 f3:maj7 eb3:dom7>").chord().slow(16)
  .sound("triangle")
  .fmi(perlin.range(0.5, 5).slow(12))
  .attack(3).release(4)
  .lpf(800).lpq(8)
  .gain(0.12)

$: s("<binary process maschine data geist>").slow(8)
  .chop(32)
  .speed(perlin.range(0.5, 1.2).slow(10))
  .pan(sine.slow(6))
  .bandf(sine.range(300, 5000).slow(7)).bandq(8)
  .gain(0.2)

$: note("~ c5 [d#5,f5] g5 <a#5 g5> [f5,a#5]").iter(1).slow(2)
  .sound("square")
  .shape(0.4)
  .vowel(perlin.slow(6))
  .delay(0.2).dfb(0.7)
  .gain(0.12)