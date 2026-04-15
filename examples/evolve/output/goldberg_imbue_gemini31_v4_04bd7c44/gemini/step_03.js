setcps(120/60/4)

$: stack(
  note("g2 fs2 e2 d2 b1 c2 d2 g1").s("piano").slow(8).room(0.6).size(0.8),
  note("g4 fs4 e4 d4 b3 c4 d4 g3")
    .s("sawtooth")
    .slow(8)
    .lpf(sine.range(400, 2500).slow(8))
    .lpq(12)
    .jux(rev)
    .delay(0.5)
    .dt(0.375)
    .gain(0.5),
  s("bd(3,8) , hh*8 , ~ cp/2")
    .slow(2)
    .room(0.2)
    .gain(0.8)
)