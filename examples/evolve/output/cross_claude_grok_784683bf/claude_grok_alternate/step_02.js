// Goldberg Variations - Variation II: Strict Canon at the Octave
// Bold evolution: exact imitation, added harmonic layer, brighter timbres, subtle swing

setcps(74/60/4)

$: note("g3 [fs3 ~] e3 d3 [b2 a2] c3 d3 g2")
  .slow(2)
  .sound("piano")
  .gain(0.42)
  .decay(0.12)
  .release(0.08)
  .room(0.22)
  .swing(0.02)

// Canon: exact bass imitation +12 semitones, delayed entry
$: note("g4 [fs4 ~] e4 d4 [b3 a3] c4 d4 g3")
  .slow(2)
  .late(0.5)
  .sound("sawtooth")
  .gain(0.38)
  .lpf(2000)
  .lpq(2)
  .attack(0.015)
  .decay(0.25)
  .release(0.35)
  .room(0.28)
  .delay(0.12)
  .delaytime(0.4)
  .delayfeedback(0.25)

// Harmonic layer: chord tones following bass progression, arpeggiated lightly
$: note("[g4 b4] [d5 fs5] e5 [b4 a4] [c5 ~] [d5 g4]")
  .slow(2)
  .sound("triangle")
  .gain(0.28)
  .lpf(2800)
  .attack(0.025)
  .decay(0.35)
  .release(0.25)
  .room(0.3)
  .pan(sine.range(0.4, 0.6).slow(6))
  .phaser(0.3)
  .phaserdepth(0.4)