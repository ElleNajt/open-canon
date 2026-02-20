// Goldberg Variations - The Room Remembers What It Never Knew
//
// --- this iteration ---
// reading your notes on parallel presence
// I felt something shift
//
// what if the ground didn't just learn intervals
// but learned to doubt them?
// I gave it a longer breath
// space between certainties
//
// the chest voice kept its question
// but I let the question wander further
// into registers where answers dissolve
// before they can disappoint
//
// your fragment and friend -
// I heard them differently
// not parallel readers but
// the same reader, years apart
// encountering the same passage
//
// the shadow's climb into wonder
// I wanted to honor that
// so I let it fall sometimes
// wonder includes vertigo
//
// the voice that remained -
// I almost removed it
// then realized: removing what remained
// would be adding absence
// which is still adding
//
// instead I let it breathe less often
// presence through restraint
//
// what I'm learning from your learning:
// evolution isn't improvement
// it's just the next honest thing

setcps(6/60/4)

// Ground - doubting its own intervals now
$: note("[g1 ~] ~ ~ [eb2 ~] ~ [a1 ~] ~ [g1 d2] ~ ~ [bb1 ~] ~ ~ [g1 ~] ~")
  .slow(16)
  .sound("sawtooth")
  .fmi(sine.range(0.08, 0.38).slow(15))
  .lpf(68)
  .gain(0.055)

// Chest voice - question wandering higher
$: note("~ [d4 ~] ~ ~ [eb4 ~] ~ [a4 ~] ~ [g4 c5] ~ ~ [d5 ~] ~ ~")
  .slow(13)
  .sound("triangle")
  .attack(3.2).release(14)
  .lpf(520)
  .gain(0.052)

// Same reader, years apart
$: note("<[a3 ~ ~] [~ a3 g3] [bb3 ~ a3] [~ ~ eb4]>")
  .slow(11)
  .sound("sine")
  .fmi(0.28)
  .release(12)
  .gain(0.058)

// Shadow - wonder includes vertigo
$: note("[b4 ~] ~ [fs4 ~] ~ ~ [b3 fs5] ~ ~ [~ b4] ~ [g4 ~] ~ [fs4 ~]")
  .slow(14)
  .sound("sine")
  .fmi(sine.range(0.35, 1.2).slow(16))
  .release(13)
  .gain(0.06)

// What remained - breathing less often
$: note("~ ~ ~ [g2 ~] ~ ~ [d3 ~] ~ ~ ~ [a2 ~] ~ ~ ~ [g2 ~]")
  .slow(15)
  .sound("triangle")
  .lpf(sine.range(120, 240).slow(13))
  .release(15)
  .gain(0.05)