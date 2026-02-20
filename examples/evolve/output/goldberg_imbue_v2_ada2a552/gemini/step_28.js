samples('shabda/speech:binary,process,data,computer')
samples('shabda/speech/de-DE:maschine,geist')
setcps(132/60/4)

$: note("[c2,g2,d2] [f2,gb2]").euclid(7,11).slow(4)
  .sound("pulse")
  .lpf(100).lpenv(2000).lpdecay(0.1).lpq(8)
  .crush(9)
  .delay(0.5).delaytime(0.375).dfb(0.6)
  .room(0.1)
  .gain(0.22)

$: note("<0 1 5 8> <1 0 -4>").scale("c:phrygian").ply("<2 1?1>").slow(8).sometimes(rev)
  .sound("triangle")
  .lpf(3000).lpq(5)
  .crush(8)
  .off(0.25, (x=>x.pan(0).detune(-5)))
  .room(0.2)
  .gain(0.12)

$: stack(
    s("bd").euclid(3,8).jux(s=>s.crush(6)),
    s("sn").ply("<1 2>").slow(2).euclid(5,11).late(0.5),
    s("[~ cp ~ ~]"),
    s("hh*8").degradeBy(0.2).hpf(9000).hpq(5)
  ).slow(2)
  .distort(0.2)
  .compressor(ratio=8)
  .gain(0.95)

$: note("<f3:m9 c4:m7 g3:sus2 gb3:maj7>").chord().slow(16)
  .sound("supersaw")
  .lpf(perlin.range(500, 2500).slow(10)).lpq(5)
  .attack(2).release(7)
  .phaser(0.1).phaserdepth(10)
  .delay(0.3).delaytime(0.75).dfb(0.6)
  .room(0.6)
  .gain(0.18)

$: s("<geist maschine binary data process computer>").euclid(9,13).slow(8)
  .striate(perlin.range(8, 32).slow(6))
  .speed(perlin.range(-1, 1.5).fast(2))
  .vowel("a e i o u".slow(4))
  .jux(s=>s.speed(1).ring(0.5).distort(0.4))
  .room(0.4)
  .gain(0.25)

$: note("[c5 ~ db5 g5] [ab5 g5] eb5 db5").palindrome().slow(8)
  .sound("sine")
  .fmi(perlin.range(2, 30).slow(8)).fmh(saw.range(0.5, 2).slow(7))
  .penv(24).pdecay(0.05).prelease(0.2)
  .lpf(sine.range(800, 5000).slow(6)).lpq(9)
  .delay(0.3).dfb(0.5).dt(0.375)
  .gain(0.1)