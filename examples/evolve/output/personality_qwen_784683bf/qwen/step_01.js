setcps(72/60/4)

$: stack(
  note("g3 gb3 e3 d3 b2 c3 d3 g2")
    .slow(2)
    .sound("sine")
    .gain(0.4)
    .lpf(400)
    .room(0.1),
  
  note("g3 gb3 e3 d3 b2 c3 d3 g2")
    .slow(1)
    .transpose(12)
    .sound("piano")
    .gain(0.3)
    .decay(0.1)
    .sustain(0)
    .room(0.2)
    .every(3, p => p.add([0, 7, 12])),
  
  s("hh*8")
    .gain(0.15)
    .hpf(8000)
    .sometimes(p => p.degradeBy(0.3)),
  
  s("bd")
    .euclid(3, 8)
    .gain(0.5)
    .slow(2)
    .distort(0.1)
)