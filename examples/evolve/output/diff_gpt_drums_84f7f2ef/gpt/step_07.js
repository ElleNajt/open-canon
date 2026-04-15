samples('shabda/speech:stay_weird,listen_closer,keep_drifting,not_today,hold_the_line,signal_in_the_noise,wake_up,ghost_in_the_machine,we_are_listening')

setcps(138/60/4)

$: arrange(
  [2,  s("bd ~ ~ ~ bd ~ ~ ~")],
  [2,  s("bd ~ sn ~ bd bd sn ~")],
  [4,  s("bd ~ sn ~ bd bd sn cr")],
  [4,  s("bd bd [sn sn] ~ bd ~ sn cr")],
  [4,  s("bd ~ sn bd [sn ~] bd ~ sn")],
  [2,  s("bd ~ ~ ~ bd ~ ~ cr")],
  [2,  s("bd ~ sn sn bd bd [sn sn] sn")],
  [4,  s("bd ~ sn ~ bd bd sn [~ sn]")],
  [4,  s("bd bd sn ~ bd [sn sn] ~ cr")],
  [4,  s("bd [~ bd] sn ~ bd bd sn cr")],
  [4,  s("bd ~ sn [bd bd] ~ sn ~ cr")],
  [2,  s("bd ~ ~ ~ ~ ~ sn cr")],
  [2,  s("[bd bd] sn ~ bd ~ sn [cr cr]")],
  [4,  s("bd ~ sn ~ bd [bd bd] sn [cr cr]")],
  [4,  s("bd bd sn ~ [bd bd] ~ sn cr")]
)
  .gain(0.86)
  .compressor("-18:3:6:0.01:0.12")
  .lpf(sine.range(850, 6900).slow(12))
  .swing(0.12)
  .every(8, p => p.rev().sometimes(q => q.fast(2)).sometimes(r => r.ply(2)))

$: s("<hh hh hh hh hh hh [hh hh] [hh oh]>")
  .hpf(4800)
  .pan(perlin.range(0.15, 0.85).slow(8))
  .gain(0.14)
  .swing(0.14)
  .every(4, p => p.degradeBy(0.28).fast(2))

$: note("c2 ~ c2 <eb2 eb1> g1 ~ <bb1 g1> <c2 bb1> ~ <c2 g1>")
  .sound("pulse")
  .lpf(perlin.range(180, 1400).slow(9))
  .lpq(7)
  .gain(0.22)
  .every(6, p => p.transpose(-12).sometimes(q => q.transpose(12)).slide(0.09))

$: note("<c4 eb4 g4 bb4> <bb3 db4 f4 ab4> <ab3 c4 eb4 gb4> <c4 eb4 g4 bb4> <eb4 g4 bb4 c5>")
  .sound("supersaw")
  .slow(4)
  .gain(0.11)
  .room(0.26)
  .juxBy(0.6, p => p.transpose(12).detune(8).lpf(1700))

$: s("rim [cp rim] rim [~ rim] rim ~ <cp rim> ~")
  .echo(6, 0.25, 0.35)
  .hpf(1500)
  .crush(6)
  .gain(0.105)
  .every(8, p => p.rev().degradeBy(0.33).sometimes(q => q.fast(2)))

$: s("<stay_weird we_are_listening listen_closer signal_in_the_noise> ~ [not_today ~] <wake_up hold_the_line ghost_in_the_machine> ~")
  .slow(8)
  .chop(32)
  .hpf(750)
  .delay(0.5)
  .gain(0.075)