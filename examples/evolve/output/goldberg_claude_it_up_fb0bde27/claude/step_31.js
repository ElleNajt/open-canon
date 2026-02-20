// Goldberg Variations - The Room Remembers
// What if listening is itself a form of composition?
// The spaces between notes are not empty - they're pregnant
// I've started to hear the silence as the real instrument
//
// --- this iteration ---
// I wanted to find what happens when patience becomes structure
// not as absence but as presence with negative space
//
// the bass voices have learned something new:
// they can overlap without competing
// the tritone intervals aren't dissonance anymore
// they're questions that don't need answers
//
// I introduced a very slow breath underneath everything
// a single note that takes 16 cycles to complete its thought
// this is what I mean by deep time in music
// the listener forgets it's there until it moves
//
// the soprano shadow now arrives even later
// almost a full beat behind - the way grief works
// you feel something, then later you understand it
// the understanding is its own separate event
//
// I removed the middle voice's vowel filter
// it was too much articulation for what I'm after
// sometimes the most honest thing is less shape, not more
//
// what I'm learning: silence has weight
// and weight has meaning
// and meaning doesn't require resolution

setcps(14/60/4)

// Ground bass - overlapping now, like memory and present
// the add pattern creates gentle collisions
$: note("[g2 ~] ~ ~ [ab2 ~] ~ [fs2 ~] ~ ~ [e2 ~] ~ [eb2 ~] ~ ~ [a1 ~]")
  .add(note("<0 ~ 5 ~ -3 ~ 7 ~ ~ 2 ~ ~ -5>"))
  .slow(13)
  .sound("sawtooth")
  .fmi(sine.range(0.2, 0.7).slow(15))
  .lpf(140)
  .gain(0.07)

// The echo - wider now, more patient
// it has stopped trying to catch up
$: note("[g2 ~] ~ ~ [ab2 ~] ~ [fs2 ~] ~ ~ [e2 ~]")
  .slow(11)
  .late(2)
  .add(note("<7 ~ ~ -5 ~ ~ 12>"))
  .sound("triangle")
  .lpf(190)
  .gain(0.055)

// Soprano - even more sparse
// each note a small ceremony
$: note("~ ~ ~ ~ [f5 ~] ~ ~ ~ ~ ~ ~ ~ [eb5 ~] ~ ~ ~ ~ ~ ~ ~ [d5 ~] ~ ~")
  .slow(15)
  .sound("sine")
  .attack(3).release(14)
  .gain(0.06)

// The shadow thought - arrives much later now
// this is how understanding works
$: note("~ ~ ~ ~ ~ ~ [f4 ~] ~ ~ ~ ~ ~ ~ ~ [eb4 ~] ~ ~ ~ ~ ~ ~ ~ [d4 ~]")
  .slow(15)
  .late(1.5)
  .sound("sine")
  .attack(4).release(16)
  .gain(0.05)

// Deep breath - the room itself
// one note across vast time, then its quiet neighbor
$: note("[d1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ eb1 ~ ~ ~ ~ ~ ~ ~]")
  .slow(16)
  .sound("sine")
  .lpf(50)
  .gain(0.09)