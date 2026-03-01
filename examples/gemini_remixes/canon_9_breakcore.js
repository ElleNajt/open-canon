


let upperVoice = x => x
  .sound("triangle")
  .gain(0.4)
  .attack(0.02)
  .decay(0.15)
  .sustain(0.2)
  .lpf(4000)
  .room(0.2)
  .vibrato(0.05)
  .pan(-0.2)

let lowerVoice = x => x
  .sound("pulse")
  .gain(0.6)
  .decay(0.15)
  .sustain(0.2)
  .room(0.15)
  .vibrato(0.05)
  .pan(0.2)

setcps(120/60/4)

$: note("g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5 ~ b5 ~ d6 ~ g6 ~ d6 ~ b5 ~ g5 ~ d6 ~ d5 ~ gb5 ~ a5 ~ db5 ~ e5 ~ g5 ~ db6 ~!3 d6 ~ a5 ~ gb5 ~ d5 ~ g5 ~ b5 ~ d6 ~ g5 ~ e6 ~ c6 ~ a5 ~ c6 ~ gb5 ~ a5 ~ d6 c6 b5 a5 g5")
  .slow(264/8/4)
  .apply(upperVoice)
  .delay(0.1)
  .hpf(500)
  .gain(0.3)

$: note("~!8 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3 ~!7 g4 ~!7 gb4 ~!7 e4 ~!7 d4 ~!7 b3 ~!7 c4 ~!7 d4 ~!7 g3")
  .slow(264/8/4)
  .apply(lowerVoice)
  .lpf(1000)
  .gain(0.4)

$: s("bd <sn cp>").gain(0.4).degradeBy(0.2).room(0.1)
$: s("hh*8").gain(0.3)
$: note("c3 g3 eb3").sound("sbd").lpf(500).gain(0.3).room(0.3).delay(0.2).slow(4).distort(0.2)
$: s("sh/8").gain(0.2).pan(-0.8)
$: s("RolandTR808_cb/8").gain(0.2).pan(0.5).degradeBy(0.3)
$: s("insect/4").gain(0.15).hpf(500)
$: s("misc/16").gain(0.05).hpf(1000).pan(0.9)
$: s("<brk brk brk ~>").gain(0.25).hpf(200)
