setcps(90/60/4)

// Arp Lead
$: n("g3 f4 g3 d4 bb3 c4 bb3 g3").slow(4)
  .s("pulse")
  .release(0.1).attack(0.01).sustain(0.1)
  .gain(0.4)
  .lpf(sine.slow(16).range(800, 2500)).lpq(8)
  .lpenv(1500).lpdecay(0.1)
  .delay(0.6).dt(3/8).dfb(0.7)
  .pan(cosine.slow(10).range(0.1, 0.9))
  .phaser(sine.slow(24).range(0.1, 3))

// Pads
$: n("[g2 bb2 d3] [eb2 g2 bb2]").slow(8)
  .s("sawtooth")
  .gain(0.45)
  .attack(8).release(12)
  .lpf(400).lpq(10)
  .lpenv(2000).lpdecay(6)
  .room(0.5).size(0.95)
  .jux(p => p.octave(1).detune(-5).gain(0.8))
  .detune(5)

// Sub
$: n("g1 eb1").slow(8)
  .s("sine")
  .gain(0.6)
  .attack(0.01).release(2.5)
  .lpf(90).lpq(1)
  .cut(1)

// Groove
$: stack(
  s("bd ~ ~ [~ bd*2]").shape(0.4).gain(1.1),
  s("~ ~ [sn,cp]").crush(5).release(0.1).gain(0.7).room(0.2),
  s("hh").euclid(7, 8).velocity(perlin.slow(4).range(0.4, 1)).gain(0.5).hpf(8000).sustain(0.02)
).compressor().compressorRatio(5)