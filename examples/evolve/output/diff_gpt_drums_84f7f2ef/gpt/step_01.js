setcps(138/60/4)

$: arrange(
  [4, s("bd ~ sn ~ bd bd sn ~")],
  [4, s("bd bd [sn sn] ~ bd ~ sn")],
  [4, s("bd ~ sn ~ bd bd sn [~ sn]")],
  [4, s("bd ~ sn bd [sn ~] bd ~ sn")]
).gain(0.9).compressor("-18:3:6:0.01:0.12").swing(0.1)

$: s("hh*8").hpf(5500).gain(0.18).swing(0.16)

$: note("c2 ~ c2 eb2 g1 ~ bb1").sound("sawtooth").lpf(850).lpq(6).release(0.22).gain(0.24)

$: note("<c4 eb4 g4 bb4>").sound("supersaw").slow(2).lpf(1800).room(0.35).gain(0.16)

$: s("rim cp rim ~ rim ~ cp ~").delay(0.22).dt(0.25).dfb(0.33).hpf(1800).gain(0.12)