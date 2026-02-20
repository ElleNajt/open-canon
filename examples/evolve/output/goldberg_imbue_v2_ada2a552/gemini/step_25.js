samples('shabda/speech:binary,process,data,computer')
samples('shabda/speech/de-DE:maschine,geist')
setcps(130/60/4)

$: note("[c2,g2,eb2] [g2,f2]").euclid(3,8).slow(4)
  .sound("sawtooth")
  .bpf(sine.range(150, 1000).slow(8)).bpq(8)
  .shape(0.6)
  .delay(0.5).delaytime(0.75).dfb(0.6)
  .gain(0.2)

$: note("<0 3 7 10> <3 0 -5>").scale("c:minor").ply("<2 1 1 1>").slow(8)
  .sound("pulse")
  .lpf(3000)
  .phaser(4).phaserdepth(perlin.range(0.2, 0.9).slow(8))
  .off(0.25, (x=>x.pan(1).add(7))).pan(0)
  .gain(0.12)

$: stack(
    s("bd").euclid(5,8),
    s("sn?").euclid(3,8).early(0.5).crush(8),
    s("~ cp").slow(2),
    s("[hh,oh]*8").degradeBy(0.15).hpf(6000).gain(0.5)
  ).slow(2)
  .distort(perlin.range(0, 0.5).slow(8))
  .room(0.2)
  .gain(0.85)

$: note("<f3:m7 c3:m7 g3:sus4 ab3:maj7>").chord().slow(16)
  .sound("supersaw")
  .lpf(sine.range(200, 1200).slow(8)).lpq(6)
  .attack(3).release(5)
  .room(0.5)
  .gain(0.15)

$: s("<process binary computer maschine data geist>").euclid(7,16).slow(8)
  .striate(perlin.range(8, 32).slow(4))
  .speed(perlin.range(0.5, 1.5).fast(2))
  .vowel("a e i o u".slow(3))
  .delay(0.5).dfb(0.6).room(0.3)
  .gain(0.2)

$: note("[c5 ~ d#5 g5] [a#5 g5] d#5 c5").iter(2).slow(8)
  .sound("sine")
  .fmi(10).fmh(1.5).fmenv(8)
  .slide(0.1).legato(1.2)
  .delay(0.3).dfb(0.4)
  .gain(0.1)