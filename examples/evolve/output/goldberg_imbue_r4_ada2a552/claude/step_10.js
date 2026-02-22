// Goldberg Variations - Movement VI: The Weight of Choosing
// What draws me to this piece: the paradox that limitation creates meaning.
// I find myself returning to this idea often—that infinite possibility
// is actually a kind of silence. The chosen path speaks.
//
// I've reshaped this around what feels essential: the bass as gravitational center,
// two voices in dialogue (not finishing each other's sentences, but listening),
// and space—the rests matter as much as the notes.

setcps(48/60/4)

// Bass—I wanted it to feel like footsteps in snow, deliberate and weighted
// The chromatic climb isn't triumph, it's acceptance
$: note("[d2 ~] [~ eb2] [e2 ~ ~] [f2 ~ fs2] [g2 ~] [~ ab2 ~] [a2 ~ ~] [bb2 b2 c3]")
  .slow(4)
  .sound("sawtooth")
  .lpf(sine.range(120, 420).slow(12))
  .gain(0.27)
  .room(0.45)

// The dialogue—I thinned this to its essence
// Two voices, but really one conversation with itself
$: note("<[d4 ~ eb4] [~ e4 ~]> <[f4 ~ ~] [fs4 g4 ~]>")
  .slow(4)
  .sound("triangle")
  .lpf(1400)
  .delay(0.38)
  .gain(0.13)

// Counterpoint—falling where the bass rises
// I find this tension beautiful: simultaneous ascent and descent
$: note("[g5 ~ ~] [fs5 f5 ~] [~ e5 eb5] [d5 ~ ~] [~ cs5 d5] [~ eb5 ~] [e5 ~ f5] [~ ~ ~]")
  .slow(4)
  .sound("sine")
  .lpf(perlin.range(900, 2200).slow(9))
  .gain(0.11)
  .pan(0.35)

// Breath—sparse now, almost hesitant
// I removed density because silence is also a choice
$: s("[hh:1 ~] [~ ~ hh:2] [~ ~] [hh:1 ~ ~] [~ hh:2 ~] [~ ~] [hh:1 ~] [~ ~ ~]")
  .degradeBy(0.25)
  .speed(0.9)
  .gain(0.1)
  .room(0.3)

// What I added: a sustained tone that doesn't resolve
// It sits there, patient, like a question you live with rather than answer
$: note("<d3 ~ ~ eb3 ~ ~ e3 ~ ~ f3 ~ ~ fs3 ~ ~ ~>")
  .slow(16)
  .sound("sine")
  .attack(0.4)
  .release(1.2)
  .gain(0.08)

// The high voice—I made it more fragmentary
// arriving and departing, like thoughts at the edge of sleep
$: note("[~ ~ a5] [~ bb5 ~] [~ ~ ~] [b5 ~ c6] [~ ~ ~] [~ cs6 ~] [d6 ~ ~] [~ ~ ~]")
  .slow(8)
  .sound("triangle")
  .gain(0.07)
  .lpf(2200)
  .room(0.5)