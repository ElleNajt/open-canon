samples('shabda/speech:stay_weird,listen_closer,keep_drifting,not_today')

setcps(138/60/4)

$: arrange(
  [4, s("bd ~ sn ~ bd bd sn cr")],
  [4, s("bd bd [sn sn] ~ bd ~ sn cr")],
  [4, s("bd ~ sn bd [sn ~] bd ~ sn")],
  [2, s("bd ~ ~ ~ bd ~ ~ cr")],
  [2, s("bd ~ sn sn bd bd [sn sn] sn")],
  [4, s("bd ~ sn ~ bd bd sn [~ sn]")],
  [4, s("bd bd sn ~ bd [sn sn] ~ cr")],
  [4, s("bd [~ bd] sn ~ bd bd sn cr")],
  [4, s("bd ~ sn [bd bd] ~ sn ~ cr")]
).gain(0.86).compressor("-18:3:6:0.01:0.12").swing(0.12).every(8, p => p.rev())

$: s("hh*8").hpf(5200).gain(0.14).swing(0.14).every(4, p => p.degradeBy(0.3).fast(2))

$: note("c2 ~ c2 <eb2 eb1> g1 ~ <bb1 g1> <c2 bb1>").sound("sawtooth").lpf(perlin.range(280, 1600).slow(10)).lpq(6).gain(0.23).every(6, p => p.transpose(-12))

$: note("<c4 eb4 g4 bb4> <bb3 db4 f4 ab4> <ab3 c4 eb4 gb4> <c4 eb4 g4 bb4>").sound("supersaw").slow(4).lpf(sine.range(900, 4200).slow(24)).gain(0.12).juxBy(0.6, p => p.transpose(12).lpf(1800))

$: s("rim cp rim ~ rim ~ cp ~").echo(6, 0.25, 0.35).hpf(1700).distort(0.18).gain(0.105).every(8, p => p.rev().degradeBy(0.35))

$: s("<stay_weird keep_drifting listen_closer> ~ [not_today ~] [listen_closer ~]").slow(4).chop(16).hpf(900).delay(0.45).gain(0.075)