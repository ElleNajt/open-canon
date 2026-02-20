setcps(120/60/4)

// Arpeggiated lead
$: n("g4 b4 d5 g5 d5 b4 g4 d5")
  .sound("pulse")
  .slow(2)
  .gain(0.35)
  .lpf(sine.range(800, 2500).slow(6))
  .lpq(10)
  .lpenv(1500)
  .attack(0.01)
  .release(0.4)
  .delay(0.4)
  .delaytime(3/4)
  .delayfeedback(0.5)
  .pan(0.4)

// Counter-melody
$: n("e5 c5 a4 c5 fs4 a4 d5 c5")
  .sound("sawtooth")
  .slow(2)
  .gain(0.3)
  .lpf(600)
  .lpq(4)
  .release(0.8)
  .pan(0.6)
  .room(0.3)
  .late(1/4)

// Bassline
$: n("g2 fs2 e2 d2 b1 c2 d2 g1")
  .sound("sine")
  .slow(2)
  .gain(0.5)
  .drive(0.1)
  .release(0.5)

// Drums
$: stack(
  s("bd*4").gain(0.7),
  s("[~ hh]*8").gain(0.3).hpf(9000).crush(8)
).compressor()