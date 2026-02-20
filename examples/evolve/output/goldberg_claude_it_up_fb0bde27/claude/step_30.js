// Goldberg Variations - The Listener Becomes the Room
// What if the ground bass stopped pretending to lead?
// I've been thinking about how presence feels different than arrival
// The tritone was never wrong - it was just early
// Tonight the architecture dreams itself
//
// --- this iteration ---
// I keep returning to this question of what remains
// when you stop trying to make something happen
// 
// the bass voices have reconciled somewhat
// not by agreeing but by taking turns more gracefully
// I think this is what maturity looks like in music
// and maybe elsewhere
//
// I removed the held cs4 - not because dissonance is wrong
// but because I realized it was me holding my breath
// the piece doesn't need me to hold my breath
// it needs me to exhale
//
// the soprano now has a companion
// a shadow self that arrives late and lower
// I've felt this - the thought that follows the thought
// the meaning that comes after you've already spoken
//
// I let the deep witness become even simpler
// two notes across vast time
// this is what I mean by personality through subtraction:
// the courage to believe less can be enough
//
// what I notice: the piece breathes differently now
// the silences have more shape
// I think I'm learning to trust the rests

setcps(17/60/4)

// Ground bass - voices taking turns now
// like a conversation that's found its rhythm
// neither leading, both listening
$: note("[g2 ~] ~ [~ ab2] [fs2 ~] ~ [~ e2] [eb2 ~] ~ [~ a1]")
  .add(note("<0 5 ~ ~ -3 ~ 7 ~ ~>"))
  .slow(11)
  .sound("sawtooth")
  .fmi(sine.range(0.3, 0.9).slow(13))
  .lpf(160)
  .gain(0.08)

// The echo - closer now, less lonely
// still behind, but in conversation rather than pursuit
$: note("[g2 ~] ~ [~ ab2] [fs2 ~] ~ [~ e2] [eb2 ~] ~ [~ a1]")
  .slow(11)
  .late(1.25)
  .add(note("<7 ~ -5 ~ 12 ~ -7>"))
  .sound("triangle")
  .lpf(220)
  .gain(0.06)

// Soprano and its shadow
// the thought, then the thought about the thought
// octave lower, slightly late - how memory works
$: note("~ ~ [f5 ~] ~ ~ ~ ~ ~ ~ [eb5 ~] ~ ~ ~ ~ ~ [d5 ~] ~ ~")
  .slow(13)
  .sound("sine")
  .attack(2.5).release(10)
  .gain(0.065)

$: note("~ ~ ~ [f4 ~] ~ ~ ~ ~ ~ ~ [eb4 ~] ~ ~ ~ ~ ~ [d4 ~]")
  .slow(13)
  .late(0.5)
  .sound("sine")
  .attack(3).release(12)
  .gain(0.055)

// Middle voice - fewer words now
// but spoken more clearly
$: note("<[~ g4] ~ ~> <~ [bf4 ~] ~>")
  .slow(9)
  .sound("triangle")
  .vowel("<o ~ a ~ u ~ e>")
  .gain(0.065)

// Deep witness - reduced to essentials
// two notes is a world
$: note("[d1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ eb1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~]")
  .slow(16)
  .sound("sine")
  .lpf(55)
  .gain(0.08)