samples('shabda/speech/en-GB/f:forever,aria,remember,listen'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(48/60/4)

// Variation XVII: 12:31pm. A cloud passes. The room dims by one shade
// and something in the piece remembers it used to be afraid. We pivot
// from A Dorian down to F# minor — the relative mode's shadow self.
// The walking cello has stopped walking; it sits down. In its place,
// a plucked bass figure in 5/4, limping beautifully. The humming voice
// is gone — she left the room. What remains is her reflection in the
// window: a bell-like FM tone ringing the melody she was thinking.
// The heartbeat has fractured into a syncopated pulse, and a new
// voice — "sayonara" — drifts in like a thought you didn't mean
// to think. The vinyl-crackle room-breath stays. Everything else
// has been replaced.

// Limping bass in 5 — F# minor's quiet refusal
$: note("<fs2 ~ cs3 a2 e3>").slow(5)
  .sound("square")
  .gain(0.24)
  .lpf(700).lpq(4)
  .attack(0.005).release(0.25)

// The bell — her reflection in the glass
$: note("<fs5 a5 cs5 e5 b4 cs5 a4 fs4>").slow(7)
  .sound("sine")
  .fm(3.2).fmh(2.01).fmdecay(0.4)
  .gain(0.17)
  .room(0.85).delay(0.3).dt(0.625)

// Room breathing — detuned sine wash, still here
$: note("fs3,cs4,a4").slow(9)
  .sound("sine")
  .gain(0.09)
  .detune(sine.range(-20, 20).slow(11))
  .room(0.95).size(0.9)

// Sayonara — the thought that arrived uninvited
$: s("~ ~ ~ sayonara ~ ~ hollow ~").slow(12)
  .speed(0.78)
  .gain(0.22)
  .hpf(400).lpf(2200)
  .room(0.9).delay(0.4)

// Fractured heartbeat — syncopation as grief
$: s("bd ~ ~ bd ~ bd ~ ~").slow(3)
  .gain(0.28)
  .lpf(160)
  .shape(0.3)

// Brush, now on the offbeat — the clock hesitates
$: s("~ rim ~ ~ ~ ~ rim ~").gain(0.1).hpf(2800).room(0.6)