// Goldberg Variations - Evolved: Fractured Memory
// The pulse breaks apart, harmony shifts to minor, new voices emerge

setcps(72/60/4)

// Bass fractures into irregular pattern, now in E minor territory
$: note("[e2 ~ e3 ~] [b2 b2 ~ b3] [c2 c3 c2 ~] [d2 ~ ~ d3]")
  .slow(2)
  .sound("sawtooth")
  .lpf(sine.range(800, 1800).slow(8))
  .lpq(3)
  .gain(0.42)
  .room(0.25)

// Melody transformed: minor mode, descending phrases, longer notes
$: note("[b5 ~ a5 g5] [~ fs5 e5 ~] [d5 c5 ~ b4] [~ ~ a4 g4]")
  .slow(2)
  .sound("sine")
  .lpf(3500)
  .attack(0.08)
  .decay(0.3)
  .sustain(0.5)
  .release(0.4)
  .gain(0.32)
  .room(0.35)
  .delay(0.25)
  .delaytime(0.5)
  .delayfeedback(0.4)

// Arpeggios become sparse, haunting - open fifths and minor thirds
$: note("[e4 b4 ~ e5] [~ g4 b4 ~] [c4 ~ g4 c5] [d4 a4 ~ ~]")
  .slow(2)
  .sound("triangle")
  .attack(0.01)
  .decay(0.2)
  .sustain(0.1)
  .gain(0.25)
  .pan(saw.range(0.25, 0.75).slow(6))
  .room(0.2)

// New: Percussive pulse emerges - pitched clicks like a broken music box
$: note("[e6 e6 ~ e6] [~ b5 b5 ~] [g5 ~ g5 g5] [~ ~ d6 ~]")
  .slow(1)
  .sound("pulse")
  .attack(0.001)
  .decay(0.03)
  .sustain(0)
  .lpf(4000)
  .gain(0.2)
  .pan(0.7)
  .delay(0.15)
  .delaytime(0.125)
  .delayfeedback(0.2)

// New: Deep foghorn drone - long tones that shift beneath
$: note("<e2 ~ ~ b1 ~ ~ c2 ~ ~ ~ d2 ~>")
  .slow(8)
  .sound("sawtooth")
  .lpf(400)
  .lpq(5)
  .gain(0.2)
  .attack(1.5)
  .release(2)
  .room(0.5)