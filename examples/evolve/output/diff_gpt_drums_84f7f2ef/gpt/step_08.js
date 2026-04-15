samples('shabda/speech:stay_weird,listen_closer,keep_drifting,not_today,hold_the_line,signal_in_the_noise,wake_up,ghost_in_the_machine,we_are_listening')

setcps(138/60/4)

$: arrange(
  [4,  s("bd ~ ~ ~ bd ~ ~ ~")],
  [4,  s("bd ~ sn ~ bd bd sn ~")],
  [4,  s("bd ~ sn ~ bd bd sn cr")],
  [4,  s("bd bd [sn sn] ~ bd ~ sn cr")],
  [4,  s("bd ~ sn bd [sn ~] bd ~ sn")],
  [2,  s("bd ~ ~ ~ ~ ~ ~ ~")],
  [2,  s("~ ~ sn ~ ~ ~ sn cr")],
  [4,  s("bd ~ sn sn bd bd [sn sn] sn")],
  [4,  s("bd ~ sn ~ bd bd sn [~ sn]")],
  [4,  s("bd bd sn ~ bd [sn sn] ~ cr")],
  [4,  s("bd [~ bd] sn ~ bd bd sn cr")],
  [4,  s("bd ~ sn [bd bd] ~ sn ~ cr")],
  [4,  s("bd ~ ~ ~ bd ~ sn cr")],
  [4,  s("[bd bd] sn ~ bd ~ sn [cr cr]")],
  [4,  s("bd ~ sn ~ bd [bd bd] sn [cr cr]")],
  [4,  s("bd bd sn ~ [bd bd] ~ sn cr")]
)
  .gain(0.86)
  .compressor("-18:3:6:0.01:0.12")
  .lpf(perlin.range(650, 7600).slow(16))
  .swing(0.12)
  .every(8, p => p.rev().sometimes(q => q.fast(2).degradeBy(0.22)).sometimes(r => r.ply(2)).sometimesBy(0.35, t => t.degradeBy(0.18)))

$: s("<hh*8 [hh hh hh oh] hh*8 [hh oh hh oh]>")
  .hpf(5200)
  .pan(perlin.range(0.1, 0.9).slow(12))
  .gain(0.13)
  .swing(0.16)
  .every(4, p => p.degradeBy(0.24).sometimes(q => q.fast(2)).sometimes(r => r.rev()))

$: note("c2 ~ c2 <eb2 eb1> g1 ~ <bb1 g1> <c2 bb1> ~ <c2 g1> <ab1 ~> <g1 ~>")
  .sound("pulse")
  .lpf(perlin.range(140, 1800).slow(7))
  .lpq(8)
  .gain(0.21)
  .every(6, p => p.transpose(-12).sometimes(q => q.transpose(12)).sometimes(r => r.ply(2)).slide(0.11))

$: note("<c4 eb4 g4 bb4> <bb3 db4 f4 ab4> <ab3 c4 eb4 gb4> <eb4 g4 bb4 c5> <c4 eb4 g4 bb4> <ab3 c4 eb4 gb4>")
  .sound("supersaw")
  .slow(4)
  .gain(0.11)
  .room(0.28)
  .juxBy(0.55, p => p.transpose(12).detune(10).lpf(sine.range(800, 2200).slow(6)))

$: s("<rim rim> [cp rim] rim [~ rim] rim ~ <cp rim rd> ~")
  .echo(6, 0.25, 0.35)
  .hpf(1600)
  .crush(5)
  .gain(0.095)
  .every(8, p => p.rev().degradeBy(0.36).sometimes(q => q.fast(2)))

$: s("<stay_weird keep_drifting> ~ <listen_closer signal_in_the_noise> ~ [we_are_listening ~] <wake_up hold_the_line ghost_in_the_machine not_today>")
  .slow(8)
  .chop(32)
  .hpf(650)
  .delay(perlin.range(0.25, 0.65).slow(8))
  .gain(0.07)