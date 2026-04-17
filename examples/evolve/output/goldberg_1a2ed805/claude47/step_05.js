samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara'), samples('shabda/speech/en-US/m:breathe,hollow')

setcps(48/60/4)

// Variation V: 7:13am. The light finally comes, but sideways, through blinds.
// We leave Dorian behind and step into Phrygian — the mode of departure, of
// Andalusian dusk transposed to an English morning. The bass is gone; in its
// place, a plucked pizzicato motif that walks downward like someone descending
// a staircase they've descended a thousand times. The heartbeat kick is replaced
// by a soft rim tap — the sound of a pen on a desk, of someone finally writing
// something down. The choir becomes a single sustained drone, one pitch, the
// tonic, held like a held breath. And the ghosts have merged: the Japanese
// and English voices now answer each other in tighter conversation, closer,
// almost touching. The bells remain — they were always going to remain.

// E Phrygian drone — one note, one decision
let drone = "<e3 e3 e3 [e3,f3]>"

// Descending pizzicato — gravity made audible
let pizz = "e4 ~ d4 c4 ~ bb3 a3 ~ g3 f3 ~ e3 ~ f3 g3 ~"

// Bells persist, but sparser, further apart
let bells = "e6 ~ ~ ~ f6 ~ ~ c6 ~ ~ bb5 ~"

$: note(drone).slow(8)
  .sound("supersaw")
  .detune(0.3)
  .gain(0.18)
  .attack(4).release(5)
  .lpf(sine.range(300, 1100).slow(17))

$: note(pizz).slow(6)
  .sound("triangle")
  .gain(0.28)
  .attack(0.003).decay(0.18).sustain(0).release(0.25)
  .lpf(2200)
  .room(0.5)

$: note(bells).slow(5)
  .sound("sine")
  .gain(perlin.range(0.06, 0.18).slow(3))
  .attack(0.005).decay(0.6).sustain(0).release(0.5)
  .delay(0.5).dt(0.75).dfb(0.4)

// Pen on desk — someone writing the letter they'll never send
$: s("rim ~ ~ rim ~ ~ rim ~ ~ ~ rim ~").slow(2)
  .gain(0.35)
  .hpf(1200)
  .room(0.4)
  .pan(sine.range(0.3, 0.7).slow(7))

// The voices, closer now — a conversation instead of a haunting
$: s("~!4 breathe ~!3 yume ~!5 hollow ~!3 sayonara ~!4").slow(9)
  .speed(0.78)
  .gain(0.3)
  .lpf(1400)
  .room(0.85)
  .pan(sine.range(0.2, 0.8).slow(11))