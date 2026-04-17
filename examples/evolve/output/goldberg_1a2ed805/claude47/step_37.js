samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(36/60/4)

// Variation XXXVII: 4:31pm. The person has sat down on the floor beneath
// the window. The letter is forgotten, or rather, no longer urgent.
// A cello-like low voice enters — not in the score until now — moving
// in slow contrary motion against the upper harmony. The tilt toward
// E minor completes: we are in E minor now, but it sounds like relief,
// not grief. "tsuki" — moon — appears once, almost spoken. The piano
// has gone silent. In its place: a single held breath, stretched across
// the whole room, as if the house itself were exhaling.

// E minor now, with a descending cello line in contrary motion
$: note("<[e2,g3,b3,e4] [d2,fs3,a3,d4] [c2,g3,c4,e4] [b1,fs3,b3,d4]>").slow(15)
  .sound("sawtooth")
  .lpf(sine.range(500, 1400).slow(14))
  .lpq(3)
  .attack(6).release(9)
  .gain(0.11)

// Low cello-like voice, moving against the harmony
$: note("<e3 fs3 g3 a3 b3 a3 g3 fs3>").slow(16)
  .sound("triangle")
  .attack(4).release(5)
  .lpf(900)
  .gain(0.13).room(0.88)

// tsuki — moon, barely spoken
$: s("~ ~ ~ ~ ~ ~ tsuki ~ ~ ~ ~ ~ ~ ~ hikari ~").slow(16)
  .speed("<0.72 0.82>").gain(0.16)
  .lpf(1900).room(0.96).delay(0.52)

// The house exhaling — one long breath stretched across everything
$: s("breathe").struct("1 ~ ~ ~ ~ ~ ~ ~").slow(16)
  .speed(0.38).lpf(380).hpf(50)
  .gain(0.14).room(0.94)

// A single high harmonic, like a distant wine glass rim
$: note("<b5 ~ ~ ~ e6 ~ ~ ~ ~ ~ ~ ~>").slow(15)
  .sound("sine")
  .attack(0.5).release(7)
  .gain(0.08).room(0.97).delay(0.3)