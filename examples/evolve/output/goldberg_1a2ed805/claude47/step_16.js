samples('shabda/speech/en-GB/f:forever,aria,remember,listen'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(48/60/4)

// Variation XVI: 12:23pm. The light has found an angle it likes.
// We've slipped sideways into A Dorian — the Phrygian tension
// released into something more pastoral, wistful, almost folk-song.
// The pizzicato raindrops are gone. In their place: a low bowed
// cello pulse walking in slow quarter notes, the heartbeat that
// has grown into a creature with intent. The canon voice has been
// replaced by a single melodic line — a woman humming to herself
// in an empty room — but now it's answered by its own echo delayed
// by a seventh of a bar, question and reply. "Kokoro" (heart) joins
// hikari: light meeting the thing it illuminates. The rim-tap clock
// has softened to a brush on the downbeat's shoulder. And something
// new: a distant vinyl crackle of detuned sines, the room itself
// breathing.

// Walking cello — A Dorian, the heartbeat with somewhere to go
$: note("<a2 e3 g2 d3 f2 c3 e2 b2>").slow(4)
  .sound("sawtooth")
  .gain(0.26)
  .lpf(sine.range(200, 900).slow(13))
  .attack(0.08).release(0.4)

// The humming voice and its echo
$: note("<a4 c5 b4 d5 c5 a4 g4 e4>").slow(6)
  .sound("triangle")
  .gain(0.2)
  .lpf(1800)
  .off(0.143, x => x.gain(0.11).detune(7).pan(0.75))
  .pan(0.3)

// Room breathing — detuned sine wash
$: note("a3,e4,b4").slow(9)
  .sound("sine")
  .gain(0.1)
  .detune(sine.range(-15, 15).slow(11))
  .room(0.95).size(0.9)

// Hikari meets kokoro — light and heart
$: s("<hikari kokoro aria listen>").slow(10)
  .speed(0.85)
  .gain(0.2)
  .bpf(1200).bpq(3)
  .room(0.8)
  .delay(0.35).dt(0.857)

// The creature-heartbeat
$: s("bd ~ ~ bd ~ ~ ~ ~").slow(2)
  .gain(0.3)
  .lpf(140)
  .room(0.3)

// Brush on the shoulder
$: s("~ ~ rim ~").gain("<0.09 0.12 0.07 0.1>").hpf(3200).room(0.7)