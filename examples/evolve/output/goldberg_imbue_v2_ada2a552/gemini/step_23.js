samples('shabda/speech:binary,process,data,computer')
samples('shabda/speech/de-DE:maschine,geist')
setcps(130/60/4)

$: note("[c2, f2] [g#1, a#1]").slow(8)
  .sound("sawtooth")
  .distort(0.3)
  .crush(perlin.range(4, 9).slow(4))
  .hpf(100)
  .delay(0.25).dfb(0.5)
  .gain(0.18)

$: note("0 3 7 10 3 0").scale("c:minor").slow(8)
  .sound("triangle")
  .phaser(perlin.range(0.1, 4).slow(6))
  .off(0.25, (x=>x.pan(1).add(7)))
  .pan(0)
  .gain(0.08)

$: stack(
    s("bd").euclid(7,8),
    s("[~ sn?]*2").ply(2).crush(8),
    s("hh*8").every(4, rev).hpf(8000).gain(0.4)
  ).vowel("a e i o u".slow(4))
  .distort(0.2).room(0.2)
  .compressor()
  .gain(0.8)

$: note("<c3:min9 g3:sus4 eb3:maj7>").chord().slow(16)
  .sound("piano")
  .tremolo(perlin.range(0,0.5).slow(12))
  .room(0.5).size(0.9)
  .attack(2).release(4)
  .gain(0.15)

$: s("<geist computer maschine data binary process>").slow(8)
  .chop(16)
  .speed(perlin.range(-1.5, 1.5).slow(8))
  .crush(perlin.range(8, 16).slow(12))
  .delay(0.4).dfb(0.7)
  .gain(0.14)

$: note("c5 d#5 g5 a#5 g5 d#5 c5").palindrome().slow(8)
  .sound("square")
  .fmi(perlin.range(1, 5).slow(6))
  .fmh(1.5)
  .sometimesBy(0.5, (x=>x.slide(0.1)))
  .delay(0.25)
  .gain(0.1)