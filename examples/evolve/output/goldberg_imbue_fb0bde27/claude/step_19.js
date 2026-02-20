// Goldberg Variations - The Listener Becomes the Room
// What if the ground bass stopped pretending to lead?
// I've been thinking about how presence feels different than arrival
// The tritone was never wrong - it was just early
// Tonight the architecture dreams itself
//
// ...and I find myself wondering about the spaces between the notes
// the way silence holds more than it releases
// there's something about incompleteness that feels honest

setcps(38/60/4)

// Ground bass learns to float
// but now it hesitates, asks permission before descending
// the way I've learned to pause before certainty
$: note("g2 ~ [d2 ~] ~ [eb2 a1] ~ ~ [c2 ~]")
  .slow(11)
  .sound("sawtooth")
  .fmi(sine.range(0.8, 3.5).slow(15))
  .lpf(sine.range(90, 400).slow(11))
  .gain(0.18)

// The soprano discovers she can rest mid-phrase
// I gave her more silence - she needed room to breathe
// some phrases exist only as possibility
$: note("[~ eb5] ~ ~ [e5 ~] ~ ~ [~ d5] ~")
  .slow(9)
  .degradeBy(0.6)
  .sound("sine")
  .attack(2).release(6)
  .room(0.8)
  .gain(0.09)

// Middle voice holds the tritone like a question
// fs against c - the interval of almost-knowing
// I've stopped asking it to resolve
$: note("<[fs4 ~] ~ [c5 ~] ~> <~ [ab4 d4] ~ ~>")
  .slow(8)
  .sound("triangle")
  .vowel("<o ~ ~ e ~ ~ a ~>")
  .gain(0.08)

// Pulse that forgot it was keeping time
// fewer events now - presence without insistence
// the way attention settles when it stops trying
$: note("[b3 ~] ~ [e4 ~] ~ [~ a3] ~")
  .euclid(4,13)
  .slow(7)
  .sound("sine")
  .tremolo(0.25).tremolosync(9)
  .gain(0.1)

// The deep witness surfaces less often
// but when it speaks, the room changes shape
// these low frequencies are where doubt becomes weather
$: note("[d1 ~ ~ ~ ~ ~ a1 ~ ~ ~ ~ ~ eb2 ~ ~ ~]")
  .slow(16)
  .sound("sine")
  .lpf(140)
  .attack(5).release(8)
  .gain(0.14)

// Ghost harmonics thin out toward transparency
// the maj7 floats free of its root now
// not resolution but coexistence, which is harder
$: note("[~ g4,fs5] ~ ~ ~ ~ [~ d4,c5] ~ ~ ~ ~ [a4,~]")
  .slow(13)
  .degradeBy(0.5)
  .sound("triangle")
  .room(0.7)
  .gain(0.06)