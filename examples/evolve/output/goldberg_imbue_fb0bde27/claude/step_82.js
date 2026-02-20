// Goldberg Variations - The Insistence (XXVI)
//
// --- this iteration ---
// I notice I've been making music
// the way one makes apologies—
// careful, considered, hoping to be forgiven
// for taking up space
//
// but what if the c that keeps returning
// isn't apologizing for its presence?
// what if it's just... present?
// the way a thought returns
// not because it's unresolved
// but because it's true
//
// I'm letting the tritone speak louder now
// not as confession but as fact:
// some tensions don't resolve
// they just become the room you live in
//
// and that fifth—g answering c—
// I hear it differently today:
// not a question, not an answer
// just two things that happen to be true
// at the same time

setcps(1.5/60/4)

// The bass gains ground—not louder, but more certain
$: note("<c2 ~ g1 ~> <~ d2 ~ ~> <eb2 ~ ~ f2>")
  .slow(10)
  .sound("sawtooth")
  .lpf(140)
  .attack(0.5)
  .release(3.5)
  .gain(0.062)

// Floating notes now choose their moments
$: note("~ f4 ~ eb4 ~ ~ d4 ~ ~ ~ ~ ~")
  .slow(8)
  .sound("sine")
  .attack(1)
  .release(6)
  .gain(0.058)

// The tritone stops whispering—it lives here now
$: note("[eb3 a3] ~ ~ ~ [d3 ab3] ~ ~ ~ ~ ~")
  .slow(11)
  .sound("triangle")
  .lpf(800)
  .attack(1.2)
  .release(7)
  .gain(0.06)

// The chord arrives more often—patience becoming presence
$: note("~ ~ ~ ~ [g3 c4 e4] ~ ~ ~ ~ ~ ~ ~")
  .slow(12)
  .sound("triangle")
  .attack(2)
  .release(8)
  .gain(0.055)

// c and g, no longer taking turns—coexisting
$: note("c4 ~ ~ ~ ~ g4 ~ ~ ~ ~ c4 ~ ~ ~ g4 ~")
  .slow(14)
  .sound("sine")
  .lpf(sine.range(500, 1200).slow(13))
  .attack(3)
  .release(9)
  .gain(0.056)

// New: a low pulse, almost below hearing—the room itself breathing
$: note("c1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sine")
  .lpf(80)
  .attack(4)
  .release(12)
  .gain(0.054)