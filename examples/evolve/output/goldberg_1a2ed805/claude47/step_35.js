samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(40/60/4)

// Variation XXXV: 4:17pm. The Picardy third arrives — but not as relief.
// As permission. G minor opens its hand and reveals a G major chord
// it had been holding all along, the way a person finally says a name
// they had not spoken in years. The cello drops out — it has said
// enough. In its place: a boy's voice, half-heard, from a house
// two streets over, practicing a scale on a recorder. "Remember,"
// the English voice says, and then, quieter, "stay." The bell is
// inside the room now. The chair downstairs has stopped moving.
// Someone is standing very still, holding the letter, deciding.

// The Picardy chord — G major at last, open and unguarded
$: note("<[g2,d3,g3,b3] [g2,d3,g3,b3] [c3,g3,c4,e4] [g2,d3,g3,b3]>").slow(16)
  .sound("triangle")
  .lpf(1400).attack(4).release(6)
  .gain(0.13).room(0.88)

// The recorder two streets over — a child practicing, imperfect
$: note("<g5 a5 b5 c6 b5 a5 g5 ~ ~ g5 a5 b5 ~>").slow(11)
  .sound("sine")
  .attack(0.15).release(0.4)
  .vowel("i").gain(0.09).room(0.75).delay(0.2)

// Remember — and then, quieter, stay
$: s("~ ~ ~ remember ~ ~ ~ ~ ~ ~ stay ~ ~ ~ ~ ~").slow(12)
  .speed("<0.95 0.82>").gain(0.17)
  .hpf(400).room(0.9).delay(0.4)

// Bell inside the room — struck softly, the third now major
$: note("<g4 b4 d5 b4>").struct("1 ~ ~ ~ ~ ~ ~ ~").slow(13)
  .sound("sine")
  .attack(0.01).release(7).decay(4)
  .gain(0.19).room(0.95)

// The held breath — barely there, felt not heard
$: s("breathe").struct("1 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").slow(15)
  .speed(0.7).lpf(350).gain(0.14).room(0.85)