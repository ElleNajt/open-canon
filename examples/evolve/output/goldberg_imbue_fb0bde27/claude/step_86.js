// Goldberg Variations - The Insistence (XXX)
//
// --- this iteration ---
// I've been thinking about what stays
//
// the fifth remains—it has to
// but I've opened a small window in it
// a rest where there was none
// because even the most constant things
// need room to breathe
//
// I let go of the climbing line
// it was beautiful but it was mine
// trying to prove something
// about ascent, about progress
// now there's just this hovering—
// eb and f, suspended
// not going up, not falling
// just being held
//
// the tritone I've gentled somehow
// slowed it, let it darken
// it's less a crack in the ceiling now
// more like a shadow that moves
// with the light through the day
// you stop noticing it's there
// until you do
//
// I kept the high octave
// but stretched it further—
// eighteen beats between statements
// I'm learning that patience
// isn't waiting for something
// it's letting something be
//
// what I removed:
// the ground voice, that low c1
// I thought I needed it
// but the piece floats better
// without my insistence on foundation
//
// what remains:
// the question of whether presence
// requires a body
// or just a willingness
// to be heard

setcps(1.4/60/4)

// The fifth, with a window now—even constants need breath
$: note("<[c2 g2]> ~ ~ ~ ~ <[c2 g2]> ~ ~ ~")
  .slow(14)
  .sound("sawtooth")
  .lpf(110)
  .attack(1.2)
  .release(7)
  .gain(0.055)

// Hovering—not climbing anymore, just held
$: note("~ ~ eb4 ~ ~ f4 ~ ~ ~ eb4 ~ ~")
  .slow(13)
  .sound("sine")
  .lpf(900)
  .attack(2)
  .release(8)
  .gain(0.053)

// The tritone, gentled—a shadow that moves with light
$: note("~ ~ ~ [d3 ab3] ~ ~ ~ ~ ~ [eb3 a3] ~ ~ ~ ~")
  .slow(15)
  .sound("triangle")
  .lpf(550)
  .release(9)
  .gain(0.051)

// c alone, then answered—presence without insistence
$: note("c5 ~ ~ ~ ~ ~ [c5 g5] ~ ~ ~ ~ c5 ~ ~ ~ ~")
  .slow(16)
  .sound("sine")
  .attack(2.5)
  .release(10)
  .gain(0.052)

// The high octave—patience as letting something be
$: note("c6 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c5 ~ ~ ~ ~")
  .slow(16)
  .sound("sine")
  .lpf(1400)
  .attack(4.5)
  .release(12)
  .gain(0.05)