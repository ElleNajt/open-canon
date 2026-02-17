$: s("bd sn bd [sn cp]")
$: s("hh*8").gain(0.6).hpf(8000)
$: s("~ ~ ~ cp").delay(0.3)
$: note("c3 ~ eb3 g3").sound("sawtooth").lpf(600).room(0.2)