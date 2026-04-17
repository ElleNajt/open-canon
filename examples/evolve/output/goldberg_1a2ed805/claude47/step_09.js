samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(48/60/4)

// Variation IX: 9:13am. Something has broken. Not dramatically —
// a cup, maybe, or just the pretense that this morning was going
// to resolve into anything. The Mixolydian argument has given up
// and slid into Dorian: minor, but with a raised sixth that keeps
// hope just barely in the room. The pizzicato asking-motif is gone;
// in its place, a slow descending line on piano — four notes that
// fall like someone sitting down. The limping bass has been replaced
// by a held pedal tone, deep and unmoving, the way grief sometimes
// is not sharp but simply PRESENT. The snare is gone. What enters
// instead: a high, bright bell figure — bits of sun on water, on
// the rim of the broken cup. "sayonara" drifts through, not sad,
// just honest. The room hums on. Nothing is fixed. It's still
// beautiful.

// Descending piano-like line — Dorian, falling, resigned but warm
let fall = "<[d5 c5] [bb4 a4] [g4 f4] [a4 ~]>"

// Bell figure — high, sparkling, euclidean
let bells = "<d6 f6 a6 g6 d6 c6 f6 a5>"

// The falling line — soft triangle, like a piano through a wall
$: note(fall).slow(6)
  .sound("triangle")
  .gain(0.3)
  .attack(0.01).decay(0.8).sustain(0.1).release(0.6)
  .room(0.6)

// High bells — sun on broken things
$: note(bells).sound("sine")
  .euclid(5, 8).slow(4)
  .gain(0.18)
  .attack(0.001).release(0.4)
  .delay(0.35).dt(0.5).room(0.7)

// Deep pedal tone — D, unmoving, the floor of the feeling
$: note("d2").sound("sawtooth").slow(8)
  .gain(0.22)
  .lpf(240).lpq(3)
  .attack(3).release(4)

// Sayonara — honest, not sad, panned slowly across
$: s("sayonara").slow(11)
  .speed(0.78)
  .gain(0.3)
  .pan(sine.range(0.2, 0.8).slow(13))
  .lpf(1800).room(0.8)

// The room itself, still humming — but now with yume (dream) in it
$: stack(
  note("d2").sound("sine").slow(8).attack(2).release(3),
  s("yume").slow(13).speed(0.65).gain(0.6)
)
  .gain(0.16)
  .tremolo(0.25).tremolosync(9)