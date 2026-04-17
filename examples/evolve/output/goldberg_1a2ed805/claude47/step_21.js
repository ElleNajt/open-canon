samples('shabda/speech/en-GB/f:forever,aria,remember,listen'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(40/60/4)

// Variation XXI: 1:34pm. The window is open now. The mist has
// become sun through cloud — pale, Scandinavian light. The lullaby
// in 5 dissolves; in its place, a chorale. Three voices in close
// harmony, a Pärt-like tintinnabuli: one voice walks the E aeolian
// scale, another arpeggiates the tonic triad, a third holds.
// The bass clarinet is gone. The bell is gone. Instead: a distant
// choir (square wave, filtered soft as felt) and "hikari" — light —
// whispered at the moment the sun finds the floor. No percussion.
// The piece has shed its pulse. Only breath remains, and geometry.

// M-voice: the walking line, E aeolian, patient
$: note("<e4 fs4 g4 a4 b4 a4 g4 fs4 e4 d4 e4 g4 fs4 e4>").slow(14)
  .sound("triangle")
  .attack(0.8).release(3.5)
  .gain(0.22).room(0.92)

// T-voice: tintinnabuli, only E-G-B, the triad as halo
$: note("<e5 g5 b4 e5 g5 b5 g5 e5 b4 g5>").slow(12)
  .sound("sine")
  .attack(0.3).release(4).gain(0.14)
  .room(0.97).delay(0.35).dt(0.75)

// Felt choir — square through heavy lowpass, the room breathing
$: note("<[e3,b3,e4] [d3,a3,d4] [c3,g3,c4] [b2,fs3,b3]>").slow(16)
  .sound("square")
  .lpf(sine.range(300, 900).slow(13)).lpq(2)
  .attack(2).release(5)
  .gain(0.09)

// Hikari — light, whispered when the sun finds the floor
$: s("~ ~ ~ ~ ~ ~ ~ ~ hikari ~ ~ ~ ~ ~ ~ ~").slow(15)
  .speed(0.78)
  .gain(0.22)
  .hpf(480).room(0.98).delay(0.55)

// A single sustained overtone — fifth above, barely there
$: note("b5").slow(16)
  .sound("sine")
  .attack(6).release(8)
  .gain(perlin.range(0.05, 0.09).slow(9))
  .room(0.98)