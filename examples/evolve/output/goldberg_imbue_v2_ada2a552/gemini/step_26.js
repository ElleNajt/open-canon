samples('shabda/speech:binary,process,data,computer')
samples('shabda/speech/de-DE:maschine,geist')
setcps(130/60/4)

$: note("[c2,g2,eb2] [g2,f2]").euclid(5,13).slow(4)
  .sound("sawtooth")
  .bpf(perlin.range(200, 1200).slow(8)).bpq(8)
  .shape(0.7).crush(6)
  .delay(0.5).delaytime(0.75).dfb(0.6)
  .gain(0.2)

$: note("<0 3 7 10> <3 0 -5>").scale("c:minor").ply("<2 1?1>").slow(8).sometimes(rev)
  .sound("triangle")
  .lpf(2500).lpq(4)
  .trem(0.3).tremolosync(4)
  .off(0.25, (x=>x.pan(1).detune(20))).pan(0)
  .gain(0.1)

$: stack(
    s("bd").euclid(3,7),
    s("sn").euclid(2,8).late(0.25).crush(6),
    s("~ cp").slow(2),
    s("[hh,oh]*8").degradeBy(0.2).bpf(7000).bpq(2)
  ).slow(2)
  .distort(perlin.range(0.1, 0.6).slow(8))
  .room(0.15)
  .gain(0.9)

$: note("<f3:m7 c3:m7 g3:sus4 ab3:maj7>").chord().slow(16)
  .sound("supersaw")
  .lpf(perlin.range(300, 1800).slow(12)).lpq(7)
  .attack(2).release(6).leslie(0.1)
  .room(0.6)
  .gain(0.15)

$: s("<geist maschine binary data process computer>").euclid(7,16).slow(8)
  .chop(16).loop(1)
  .speed(perlin.range(0.75, 2).fast(4))
  .vowel("o u a e i".slow(3))
  .delay(0.6).dfb(0.5).room(0.25)
  .gain(0.22)

$: note("[c5 ~ d#5 g5] [a#5 g5] d#5 c5").palindrome().slow(8)
  .sound("sine")
  .fmi(perlin.range(5, 15).slow(8)).fmh(1.5).fmenv(6)
  .vowel("a e u")
  .delay(0.4).dfb(0.4)
  .gain(0.11)