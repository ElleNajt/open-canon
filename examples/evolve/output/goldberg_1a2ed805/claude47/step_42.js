samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(38/60/4)

// Variation XLII: 5:17pm. The child has stopped practicing. In the
// silence afterward, something the piano wasn't saying becomes
// audible — a clock two rooms away, and the word "tsuki" (moon)
// arriving from the Japanese voice as if through a window left open.
// The harmony has tilted: F lydian b7 bent toward its subdominant,
// a Bb major 7 suspended with the 9th hanging unresolved. The
// refrigerator hum has split into two pitches, beating slowly against
// each other — the kind of interference that makes a room feel alive.
// No more ascending scales. Instead, a single descending figure,
// played once, and then the memory of it.

// Two refrigerator sines, beating — the room breathing through itself
$: stack(
    note("f2").sound("sine").gain(0.12),
    note("f2").sound("sine").detune(14).gain(0.10)
  ).attack(10).release(14).lpf(200)

// The clock — wooden, two rooms away
$: s("rim ~ ~ ~ rim ~ ~ ~").slow(2)
  .gain(0.09).lpf(1800).hpf(400).room(0.6).pan(0.15)

// Descending figure — played once, then only remembered
$: note("<[bb4 a4 g4 f4 eb4] ~ ~ [~ a4 ~ f4 ~] ~ ~ ~>").slow(14)
  .sound("triangle")
  .attack(0.004).decay(1.1).sustain(0.08).release(1.8)
  .lpf(2200).gain(0.13).room(0.8)

// tsuki — moon — through the open window
$: s("~ ~ ~ ~ tsuki ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").slow(13)
  .speed(0.78).gain(0.14)
  .lpf(1400).room(0.88).delay(0.38).dt(0.5).pan(0.68)

// Suspended 9th — the Bb maj7 hanging unresolved
$: note("<c5 ~ ~ d5 ~ ~ ~ ~>").slow(10)
  .sound("sine")
  .attack(0.02).decay(3).sustain(0).release(3)
  .gain(0.09).room(0.92).pan(sine.range(0.35, 0.65).slow(15))