samples('shabda/speech:binary,process,data,computer')
samples('shabda/speech/de-DE:maschine,geist')
setcps(132/60/4)

$: note("[c2,g2,c2,f2] [d2,g2]").euclid(5,8).slow(4)
  .sound("pulse")
  .lpf(sine.range(100, 300).slow(8)).lpenv(2500).lpq(7)
  .shape(0.3)
  .delay(0.4).delaytime(0.375).dfb(0.5)
  .slide(0.05)
  .gain(0.25)

$: note("<0 3 4 7> <0 3 6>").scale("c:minor").iter(4).slow(8).sometimes(rev)
  .sound("triangle")
  .vowel("a e i o u".slow(6))
  .lpf(perlin.range(1000, 4000).slow(12)).lpq(6)
  .off(0.125, (x=>x.pan(0.1).detune(4)))
  .delay(0.2).delaytime(0.125).dfb(0.7)
  .gain(0.15)

$: stack(
    s("bd*4").jux(s=>s.speed(1.5).crush(5)),
    s("~ sn").slow(2),
    s("[~ ~ ~ rim]"),
    s("hh*16").hpf(sine.range(7000, 12000).slow(4)).hpq(8).degradeBy(0.15)
  ).slow(4)
  .shape(0.25)
  .gain(0.9)

$: note("<ab3:maj7 f3:m7 db4:maj7 eb4:sus4>").chord().slow(16)
  .sound("supersaw")
  .lpf(perlin.range(400, 3000).slow(8)).lpq(6)
  .attack(3).release(8)
  .tremolosync(1).tremolodepth(0.4)
  .delay(0.4).delaytime(0.75).dfb(0.7)
  .room(0.7)
  .gain(0.2)

$: s("<geist maschine binary data process computer>").chop(16).slow(8)
  .speed(perlin.range(0.5, 2).slow(4).add(sine.slow(0.25)))
  .distort(0.1)
  .pan(perlin.range(0, 1).slow(7))
  .delay(0.5).dt(0.375).dfb(0.4)
  .room(0.3)
  .gain(0.28)

$: note("[eb5 ~ c5 g5] [ab5 gb5] f5 db5").iter(2).slow(8)
  .sound("sine")
  .fmi(perlin.range(10, 50).slow(10)).fmh(square.range(1, 3).slow(9))
  .penv(12).pdecay(0.1).prelease(0.3)
  .lpf(saw.range(1000, 6000).slow(5)).lpq(8)
  .delay(0.4).dfb(0.6).dt("3/16")
  .gain(0.12)