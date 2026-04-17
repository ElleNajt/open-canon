samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(38/60/4)

// Variation XLIV: 5:47pm. The kettle has been taken off the stove.
// In its place: a clock that ticks unevenly, because the battery is
// dying. D phrygian has tilted further — toward phrygian dominant,
// that Andalusian ache, the major third over a minor world. Someone
// turns on a short-wave radio two rooms away; we catch only the
// ghost of a violin, warped by distance and tuning drift. The word
// "hikari" (light) arrives like a question nobody asked. The plucked
// bass is gone. What remains is more skeletal, more honest.

// Uneven clock — dying battery, irregular tick
$: s("rim ~ ~ rim ~ rim ~ ~ ~ rim ~ ~")
  .gain("0.12 0 0 0.08 0 0.14 0 0 0 0.09 0 0")
  .hpf(2200).room(0.4).pan(0.38)

// Phrygian dominant pedal — the Andalusian ache
$: note("<d3 [d3,fs3] d3 [d3,bb3,fs3]>").slow(8)
  .sound("sawtooth")
  .attack(2).decay(3).sustain(0.4).release(4)
  .lpf(sine.range(280, 900).slow(14)).lpq(3)
  .gain(0.11)

// Ghost violin from the short-wave — warped, detuned
$: n("<0 3 ~ 2 ~ 4 3 ~ 1 ~>").scale("D:phrygian").add("<12 14>/4")
  .sound("sine").slow(7)
  .detune(sine.range(-40, 40).slow(3))
  .attack(0.6).decay(1.2).sustain(0.3).release(2)
  .gain(0.09).crush(6).room(0.92)

// The fallen melody — phrygian descent, sparser now
$: note("<[~ ~ fs4 ~ d4] [~ bb3 ~ c4 ~] [~ ~ ~ d4 ~]>").slow(10)
  .sound("triangle")
  .attack(0.02).decay(1.8).sustain(0.05).release(3)
  .lpf(1400).gain(0.14).room(0.95).delay(0.25).dt(0.5)

// hikari — light — a question nobody asked
$: s("~ ~ ~ ~ hikari ~ ~ ~ ~ ~ ~ ~ ~ ~ sayonara ~").slow(13)
  .speed(0.68).gain(0.12)
  .lpf(1300).hpf(300).room(0.95).pan(sine.range(0.35, 0.7).slow(9))