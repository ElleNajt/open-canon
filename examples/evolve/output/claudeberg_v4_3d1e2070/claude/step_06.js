// Goldberg Variations - Evolved: The Gathering
// The storm returns - fragments coalesce, rhythm rebuilds, tension mounts

setcps(84/60/4)

// Bass awakens with purpose - descending line, growing urgency
$: note("[e2 ~ d2 ~] [c2 ~ b1 ~] [a1 ~ g1 ~] [fs1 ~ ~ e1]")
  .slow(2)
  .sound("sawtooth")
  .lpf(600)
  .gain(0.4)
  .attack(0.02)
  .decay(0.4)
  .sustain(0.5)
  .release(0.8)
  .room(0.4)

// Melody returns fragmented - call and response across stereo field
$: note("[e5 g5 ~ fs5] [~ ~ a5 ~] [b5 ~ g5 ~] [~ fs5 e5 ~]")
  .slow(2)
  .sound("triangle")
  .lpf(2400)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.3)
  .release(0.6)
  .gain(0.28)
  .pan("<0.2 0.8 0.3 0.7>")
  .room(0.35)
  .delay(0.25)
  .delaytime(0.375)
  .delayfeedback(0.4)

// Chords now move - minor to major shifts, building hope
$: note("<[e3,g3,b3] [a3,c4,e4] [d3,fs3,a3] [g3,b3,d4]>")
  .sound("sine")
  .fmi(1.2)
  .fmh(3)
  .fmdecay(0.8)
  .attack(0.05)
  .decay(0.6)
  .sustain(0.4)
  .release(1)
  .gain(0.22)
  .pan(0.5)
  .room(0.4)
  .lpf(1800)

// Driving pulse emerges - 16th note engine
$: s("bd ~ ~ bd ~ ~ bd ~ ~ ~ bd ~ ~ bd ~ ~")
  .gain(0.35)
  .lpf(200)
  .room(0.2)

// Metallic shimmer - off-beat accents
$: s("~ hh ~ oh ~ hh hh ~")
  .gain(0.18)
  .lpf(sine.range(3000, 8000).slow(4))
  .hpf(2000)
  .pan(sine.range(0.25, 0.75).slow(3))
  .room(0.3)
  .delay(0.2)
  .delaytime(0.25)

// New: Arpeggiated synth - spiraling upward
$: note("e4 g4 b4 e5 b4 g4 fs4 a4 d5 fs5 d5 a4")
  .fast(2)
  .sound("pulse")
  .lpf(saw.range(800, 3000).slow(8))
  .lpq(3)
  .gain(0.2)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.1)
  .release(0.3)
  .pan(saw.range(0.3, 0.7).slow(2))
  .room(0.25)

// Sub bass - root notes reinforcing the movement
$: note("<e1 a0 d1 g0>")
  .slow(2)
  .sound("sine")
  .lpf(80)
  .gain(0.38)
  .attack(0.02)
  .decay(0.5)
  .sustain(0.7)
  .release(0.4)