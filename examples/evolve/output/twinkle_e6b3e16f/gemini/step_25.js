setcps(108/60/4)

$: n("0 7 3 5").scale("g:minor").palindrome().slow(4)
  .s("supersaw")
  .detune(10)
  .attack(0.01)
  .release(0.25)
  .sustain(0)
  .lpenv(2500)
  .lpdecay(0.2)
  .lpf(perlin.range(700, 4000).slow(7))
  .lpq(12)
  .pan(perlin.range(0.1, 0.9).slow(8))
  .delay(0.4).dfb(0.6).dt(3/16)
  .room(0.2)
  .gain(0.7)

$: n("0 5 3 6").scale("g:minor").chord("m").octave(-1).slow(8)
  .s("supersaw")
  .attack(2)
  .release(4)
  .sustain(0.7)
  .lpf(sine.range(300, 1200).slow(20))
  .lpq(5)
  .fmh(0.5)
  .fmi(sine.range(0.1, 0.6).slow(24))
  .room(0.6)
  .size(0.95)
  .gain(0.65)

$: stack(
  s("bd").euclid(5, 8).gain(1.1).crush(8),
  stack(
    s("~ sn").crush(6),
    s("~ cp").gain(0.7)
  ).gain(0.9),
  s("hh").euclid(9, 16)
    .velocity(perlin.range(0.4, 1).slow(5))
    .hpf(1500)
    .gain(0.6)
).room(0.15).postgain(1.1)