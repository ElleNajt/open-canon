setcps(72/60/4)

$: stack(
  note("g3 f3 eb3 d3 bb2 c3 d3 g2")
    .slow(4)
    .sound("triangle")
    .gain(0.35)
    .lpf(sine.range(300, 1200).slow(8))
    .lpq(2)
    .room(0.4)
    .size(0.8),
  
  note("g3 f3 eb3 d3 bb2 c3 d3 g2")
    .slow(2)
    .transpose(12)
    .sound("piano")
    .gain(0.25)
    .decay(0.05)
    .sustain(0)
    .room(0.1)
    .every(2, p => p.add([0, 5, 9]))
    .sometimes(p => p.rev()),
  
  s("cp*8")
    .gain(0.2)
    .hpf(6000)
    .lpf(9000)
    .every(4, p => p.chop(8).speed(1.5)),
  
  s("bd")
    .euclid(5, 8)
    .gain(0.6)
    .slow(1)
    .distort(0.2)
    .crush(8)
    .early(0.05),

  s("mt")
    .note("0 ~ 2 ~ 4 ~ 6")
    .gain(0.45)
    .lpf(800)
    .room(0.3)
    .delay(0.2)
    .delaytime(0.3)
    .delayfeedback(0.4)
)