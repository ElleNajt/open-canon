samples('shabda/speech:stay_weird,listen_closer,keep_drifting,not_today')

setcps(138/60/4)

$: arrange(
  [4, s("bd ~ sn ~ bd bd sn ~")],
  [4, s("bd bd [sn sn] ~ bd ~ sn cr")],
  [4, s("bd ~ sn ~ bd bd sn [~ sn]")],
  [2, s("bd ~ ~ ~ bd ~ ~ ~")],
  [2, s("bd ~ sn sn bd bd [sn sn] sn")],
  [4, s("bd ~ sn bd [sn ~] bd ~ sn")]
).gain(0.88).compressor("-18:3:6:0.01:0.12").swing(0.1).every(8, p => p.rev()).every(4, p => p.palindrome())

$: s("hh*8").hpf(5500).gain(0.17).swing(0.16).every(4, p => p.degradeBy(0.2)).sometimes(p => p.fast(2))

$: note("c2 ~ c2 <eb2 eb1> g1 ~ <bb1 g1>").sound("sawtooth").lpf(perlin.range(500, 1500).slow(8)).lpq(6.5).lpenv(0.4).gain(0.24)

$: note("<c4 eb4 g4 bb4> <bb3 db4 f4 ab4> <ab3 c4 eb4 gb4> <c4 eb4 g4 bb4>").sound("supersaw").slow(4).lpf(sine.range(1200, 3600).slow(16)).room(0.28).gain(0.14)

$: s("rim cp rim ~ rim ~ cp ~").echo(4, 0.25, 0.33).hpf(1800).gain(0.12).swing(0.08).sometimes(p => p.degradeBy(0.35))

$: s("<stay_weird keep_drifting> ~ not_today listen_closer").slow(4).chop(16).hpf(1200).delay(0.35).gain(0.09)