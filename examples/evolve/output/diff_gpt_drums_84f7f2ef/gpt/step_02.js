samples('shabda/speech:stay_weird,listen_closer')

setcps(138/60/4)

$: arrange(
  [4, s("bd ~ sn ~ bd bd sn ~")],
  [4, s("bd bd [sn sn] ~ bd ~ sn")],
  [4, s("bd ~ sn ~ bd bd sn [~ sn]")],
  [2, s("bd ~ ~ ~ bd ~ ~ ~")],
  [2, s("bd ~ sn sn bd bd [sn sn] sn")],
  [4, s("bd ~ sn bd [sn ~] bd ~ sn")]
).gain(0.9).compressor("-18:3:6:0.01:0.12").swing(0.1).every(8, p => p.rev())

$: s("hh*8").hpf(5500).gain(0.18).swing(0.16).every(4, p => p.degradeBy(0.2))

$: note("c2 ~ c2 eb2 g1 ~ bb1").sound("sawtooth").lpf(900).lpq(7).lpenv(0.35).gain(0.24)

$: note("<c4 eb4 g4 bb4>").sound("supersaw").slow(2).lpf(1800).juxBy(0.4, p => p.transpose(12)).gain(0.16)

$: s("rim cp rim ~ rim ~ cp ~").echo(4, 0.25, 0.33).hpf(1800).gain(0.12).swing(0.08)

$: s("stay_weird ~ ~ listen_closer").slow(4).chop(16).hpf(1200).room(0.45).gain(0.09)