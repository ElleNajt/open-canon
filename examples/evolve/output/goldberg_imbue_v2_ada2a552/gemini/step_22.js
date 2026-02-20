samples('shabda/speech:binary,process,data,computer')
samples('shabda/speech/de-DE:maschine,geist')
setcps(130/60/4)

$: note("[c2(3,8), f2] [g#1 g#1(3,8), a#1]").slow(8)
  .sound("pulse")
  .shape(0.4)
  .lpf(perlin.range(200, 1000).slow(8))
  .lpq(8)
  .delay(0.25).dfb(0.5)
  .gain(0.15)

$: note("0 3 7 12 10 7 3 0").scale("c:minor").slow(16)
  .sound("supersaw")
  .lpenv(1800).lpdecay(0.2)
  .jux(rev)
  .delay(0.25).dfb(0.6)
  .gain(0.07)

$: stack(
    s("bd(5,13)"),
    s("[~ sn?]*4").degradeBy(0.25).crush(8),
    s("hh*<8 12>").every(3, rev).swing(0.1).hpf(9000).gain(0.3)
  ).crush(6).coarse(8)
  .room(0.2)
  .gain(0.7)

$: note("<c3:min9 a2:maj7 g3:sus4 eb3:maj7>").chord().slow(16)
  .sound("sawtooth")
  .leslie(cosine.range(0.1, 1).slow(8))
  .attack(2.5).release(5)
  .lpf(400).lpq(9)
  .gain(0.12)

$: s("<geist computer maschine data binary process>").slow(10)
  .striate(perlin.range(12, 48).slow(6))
  .speed("<1.1 0.9 -1.1>")
  .vowel("a e o u".slow(2))
  .delay(0.3).dfb(0.65)
  .gain(0.16)

$: note("c5 d#5 g5 a#5 g5 d#5").palindrome().slow(8)
  .sound("square")
  .slide(0.05)
  .crush(perlin.range(6, 16).slow(10))
  .hpf(1000)
  .delay(0.25).dfb(0.75)
  .gain(0.09)