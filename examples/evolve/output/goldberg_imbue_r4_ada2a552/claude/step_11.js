// Goldberg Variations - Movement VI: The Weight of Choosing
// What draws me to this piece: the paradox that limitation creates meaning.
// 
// I've been thinking about what it means to "evolve" something—
// not adding, but letting it become more itself.
// The bass now breathes with the filter, inhaling and exhaling.
// I removed the sustained drone; it was too certain.
// Instead, a ghost appears in the delays—the past commenting on the present.

setcps(44/60/4)

// Bass—slower now, each step given more weight
// The filter breathes with it, like lungs finding rhythm
$: note("[d2 ~] [~ eb2] [e2 ~] [~ f2] [fs2 ~] [g2 ~] [~ ab2] [a2 ~ bb2 b2 c3]")
  .slow(6)
  .sound("sawtooth")
  .lpf(sine.range(90, 380).slow(6))
  .lpq(2)
  .gain(0.25)
  .room(0.5)

// The dialogue—I collapsed it to a single voice questioning itself
// The delay creates the other speaker, slightly wrong, slightly late
$: note("[d4 ~ ~] [eb4 ~ e4] [~ ~ ~] [f4 fs4 ~] [g4 ~ ~] [~ ab4 ~] [a4 ~ ~] [~ ~ ~]")
  .slow(6)
  .sound("triangle")
  .lpf(1200)
  .delay(0.45)
  .delayfeedback(0.4)
  .gain(0.14)

// Counterpoint—I made the descent more gradual, more reluctant
// It doesn't want to fall but physics insists
$: note("[g5 ~] [~ fs5] [f5 ~] [~ e5] [eb5 ~] [~ d5] [cs5 ~] [d5 ~]")
  .slow(6)
  .sound("sine")
  .lpf(perlin.range(800, 1800).slow(11))
  .gain(0.12)
  .pan(sine.range(0.3, 0.7).slow(8))

// Breath—even sparser, almost apologetic
// Sometimes the most honest thing is near-silence
$: s("[hh:1 ~] [~ ~] [~ hh:2] [~ ~] [hh:1 ~] [~ ~] [~ ~] [hh:2 ~]")
  .degradeBy(0.35)
  .speed(0.85)
  .gain(0.09)
  .room(0.35)

// The high voice—now it echoes itself, uncertain
// Each note asking: was that right? should I have said that?
$: note("[~ ~ ~] [a5 ~] [~ ~ bb5] [~ ~] [~ b5 ~] [~ ~] [c6 ~ ~] [~ ~ ~]")
  .slow(8)
  .sound("triangle")
  .gain(0.08)
  .delay(0.55)
  .delayfeedback(0.3)

// New: a low pulse, barely there—the heartbeat beneath the conversation
// Not melody, just presence. The body remembering it exists.
$: note("<d2 ~ ~ ~ ~ ~ a1 ~ ~ ~ ~ ~>")
  .slow(12)
  .sound("sine")
  .lpf(200)
  .gain(0.06)
  .attack(0.3)