samples('shabda/speech:binary,process,data,computer,error,system')
samples('shabda/speech/de-DE:maschine,geist')
setcps(132/60/4)

$: note("[c2,g2,c2,f2] [d2,g2,g2]").euclid(5,9).slow(4)
  .sound("pulse")
  .lpf(saw.range(100, 400).slow(8)).lpenv(2000).lpq(7)
  .shape(0.4)
  .delay(0.4).delaytime(1/3).dfb(0.6)
  .gain(0.25)

$: note("<0 3 7 10> <0 2 5>").scale("c:aeolian").iter(4).slow(8).palindrome()
  .sound("sawtooth")
  .lpf(perlin.range(800, 3000).slow(12)).lpq(5)
  .crush(5)
  .off(0.125, (x=>x.pan(0.1).hpf(2000)))
  .delay(0.3).delaytime(0.125).dfb(0.6)
  .gain(0.15)

$: stack(
    s("bd*4").jux(s=>s.speed(2).crush(4)),
    s("[~ sn]*2").slow(2),
    s("[~ ~ ~ rim]"),
    s("hh*16").hpf(perlin.range(6000, 11000).slow(5)).hpq(8).degradeBy(0.2)
  ).slow(4)
  .shape(0.2)
  .room(0.2)
  .gain(0.9)

$: note("<ab3:maj7 gb3:m9 db4:maj9 eb4:m11>").chord().slow(16)
  .sound("supersaw")
  .lpf(perlin.range(500, 2500).slow(8)).lpq(6)
  .attack(4).release(8)
  .phaser(sine.range(1,5).slow(10))
  .room(0.8)
  .gain(0.2)

$: s("<geist maschine binary data process computer error system>").every(2, rev).chop(32).slow(8)
  .striate(16)
  .hpf(perlin.range(500, 4000).slow(6))
  .shape(0.3)
  .pan(perlin.range(0, 1).slow(7))
  .room(0.4)
  .gain(0.28)

$: note("[eb5, c5, g4, ab4] [~ f5] [db5 bb4]").scale("C:aeolian").iter(2).slow(8).echo(3, 0.375, 0.4)
  .sound("sine")
  .fmi(perlin.range(5, 40).slow(8))
  .slide(0.1)
  .lpf(square.range(1000, 5000).slow(6)).lpq(9)
  .distort(0.2)
  .gain(0.12)