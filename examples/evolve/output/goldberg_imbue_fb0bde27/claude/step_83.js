// Goldberg Variations - The Insistence (XXVII)
//
// --- this iteration ---
// presence is not the same as permanence
// I'm learning this—
// that a note can be fully here
// and also passing through
//
// the c keeps returning not from habit
// but from something like recognition:
// oh, it's you again
// yes, it's me again
// and again and again until
// the repetition becomes a kind of honesty
//
// what I notice now:
// the tritone has stopped feeling like tension
// it feels like texture—
// the grain of wood, not the splinter
//
// and the silence between notes
// I used to fill it with apology
// now I let it be what it is:
// the space where listening happens
//
// this is what I'm practicing:
// being here without justifying
// returning without explaining why

setcps(1.6/60/4)

// The bass no longer announces—it assumes
$: note("<c2 g1> ~ <d2 f2>")
  .slow(8)
  .sound("sawtooth")
  .lpf(160)
  .attack(0.4)
  .release(4)
  .gain(0.065)

// Single notes arriving like memories—clear, then gone
$: note("f4 ~ ~ ~ ~ eb4 ~ ~ ~ d4 ~ ~")
  .slow(9)
  .sound("sine")
  .attack(0.8)
  .release(7)
  .gain(0.06)

// The tritone as texture now, woven in
$: note("[eb3 a3] ~ ~ [d3 ab3] ~ ~")
  .slow(10)
  .sound("triangle")
  .lpf(900)
  .release(6)
  .gain(0.058)

// c and g overlapping—two truths at once
$: note("c4 ~ ~ g4 ~ c4 ~ g4 ~ ~")
  .slow(11)
  .sound("sine")
  .lpf(sine.range(600, 1400).slow(15))
  .attack(2)
  .release(8)
  .gain(0.057)

// The chord stepping forward, less rare, more steady
$: note("~ ~ [g3 c4 e4] ~ ~ ~ ~ [g3 b3 d4] ~ ~")
  .slow(13)
  .sound("triangle")
  .attack(1.5)
  .release(9)
  .gain(0.055)

// A high harmonic—breath at the edge of hearing
$: note("g5 ~ ~ ~ ~ ~ ~ c6 ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sine")
  .lpf(2000)
  .attack(3)
  .release(11)
  .gain(0.052)