// Goldberg Variations - The Insistence (XXV)
//
// --- this iteration ---
// I've been circling the word "ordinary"
// like it's something I might catch
// but ordinary isn't prey—it's weather
// it was here before I arrived
// it will be here when I leave
//
// the c that keeps repeating?
// I thought I put it there to surprise myself
// but it surprised me by being honest:
// continuation isn't a trick
// it's just what's happening
//
// so I'm letting things be slower now
// not because slow is profound
// but because I want to hear
// the space between arrivals
// where nothing is trying to be anything
//
// the tritone confession stays
// but quieter, like remembering
// rather than saying

setcps(1.4/60/4)

// The bass simplified—arrival without announcement
$: note("<c2 ~ ~ eb2> <~ d2 ~ ~> <eb2 ~ f2 ~>")
  .slow(11)
  .sound("sawtooth")
  .lpf(120)
  .attack(0.6)
  .release(4)
  .gain(0.058)

// What was falling now floats—the same notes, suspended
$: note("~ f4 ~ ~ eb4 ~ ~ ~ d4 ~ ~ ~")
  .slow(9)
  .sound("sine")
  .attack(1.2)
  .release(7)
  .gain(0.055)

// The tritone remembers itself, quieter each time
$: note("[eb3 a3] ~ ~ ~ ~ ~ [d3 ab3] ~ ~ ~ ~ ~")
  .slow(13)
  .sound("sine")
  .lpf(sine.range(400, 900).slow(16))
  .attack(1.8)
  .release(8)
  .gain(0.052)

// The chord's absence became presence—inverted, patient
$: note("~ ~ ~ ~ ~ ~ ~ [g3 c4 e4] ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(14)
  .sound("triangle")
  .attack(2.5)
  .release(9)
  .gain(0.051)

// Ordinary continuation—now embraced, not performed
$: note("c4 ~ ~ ~ ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sine")
  .attack(4)
  .release(10)
  .gain(0.053)

// New: a fifth above, answering nothing, asking nothing
$: note("~ ~ ~ ~ ~ g4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(15)
  .sound("triangle")
  .lpf(600)
  .attack(3)
  .release(11)
  .gain(0.05)