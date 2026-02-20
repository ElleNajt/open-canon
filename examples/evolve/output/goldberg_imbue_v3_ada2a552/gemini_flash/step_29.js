setcps(80/60/4)

$: stack(
    note("g3 cs3 e3 d3 b2 c3 d3 g2").gain(0.7).sound("sine").delay(0.6).dt(0.6).dfb(0.8),
    note("g2 cs2 e2 d2 b1 c2 d2 g1").gain(0.5).sound("supersaw").crush(12).drive(0.8)
  )
  .slow(5) // Slower progression
  .lpf(sine.range(100, 4000).slow(12)).lpq(5) // Wider filter sweep
  .vowel("a i u").room(0.9).phaser(0.3).phaserdepth(15) // More vowels, more reverb, more phaser

$: s("bd*2 sn:2 cp*0.75").gain(0.9)
  .crush(6)
  .delay(0.7).dt(0.3).dfb(0.85) // Longer delay
  .lpf(square.range(150, 2000).slow(12)) // Higher frequency range
  .room(0.7).drive(0.6).compressor() // Added compressor for punch

$: note("cs4 fs4 g4").sound("sawtooth").gain(0.6) // Added a richer chord
  .octave(4).chop(8).speed(1.5).accelerate(0.05) // Faster, more chopped
  .phaser(2).phaserdepth(30)
  .every(2, (p) => p.detune(perlin.range(-75, 75).slow(3))) // More frequent and wider detune
  .room(0.6).delay(0.3).dt(0.2).dfb(0.5)

$: s("hh*16 cp*8").gain(0.4) // Faster hi-hats and claps
  .pan(rand.mul(0.9).add(0.05)) // Wider panning spread
  .crush(8)
  .every(2, (p) => p.djf(rand)) // More frequent DJ filter
  .room(0.5).tremolo(0.5).tremolosync(2) // Deeper, faster tremolo

$: stack(
  note("g5").sound("triangle").gain(0.5).slow(10).detune(80), // Louder, more detuned, slightly faster
  note("c6").sound("pulse").gain(0.4).slow(12).detune(-80) // Louder, more detuned, slightly faster
).room(1).delay(0.9).dt(0.7).dfb(0.95).lpf(sine.range(800, 8000).slow(15)).trem(0.3) // Maxed reverb, delay feedback, added tremolo

$: note("cs3 e3 g3 cs4").sound("sine").gain(0.7) // Changed to sine for smoother bass
  .octave(3)
  .lpf(sine.range(50, 1500).slow(10)) // Broader filter sweep
  .delay(0.9).dt(0.4).dfb(0.8) // Longer delay
  .room(0.8).jux((p) => p.octave(4).drive(0.4)).compressor().tremolo(0.2) // Increased drive on jux, added tremolo