samples('shabda/speech/en-GB/f:forever,aria,remember'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(44/60/4)

// Variation VI: 7:43am. The blinds are open now. Light falls in stripes across
// the floor and we realize we've been awake the whole time. Phrygian softens
// into Phrygian dominant — that raised third, a single candle lit in the grey.
// The descending pizzicato staircase is gone; in its place, an ascending
// question, a figure that keeps *asking* and never resolves. We lose the
// sustained drone entirely — silence where it was, and into that silence
// comes a low heartbeat again, slower than before, almost reluctant. The
// bells fracture into a wider interval, further apart in pitch and time.
// And the voices — the voices finally speak at the same moment, overlapping,
// the Japanese word for "light" (hikari) threading through the English
// "stay". Not a haunting. Not a conversation. A chord of meaning.

// Ascending Phrygian dominant figure — the question that won't settle
let ask = "e3 f3 gs3 a3 b3 a3 gs3 f3 ~ e3 gs3 b3 d4 b3 gs3 f3"

// Bells, wider, sparser, almost a carillon in fog
let bells = "e6 ~ ~ ~ ~ b5 ~ ~ gs6 ~ ~ ~ f6 ~ ~ ~"

// Reluctant heartbeat — slower than a resting pulse
$: s("bd ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~").slow(3)
  .gain(0.55)
  .lpf(180)
  .attack(0.01).release(0.4)

// The ascending question, plucked, patient
$: note(ask).slow(8)
  .sound("triangle")
  .gain(0.3)
  .attack(0.004).decay(0.22).sustain(0).release(0.3)
  .lpf(sine.range(1400, 3000).slow(13))
  .room(0.55)

// Bells as carillon, struck from far away
$: note(bells).slow(7)
  .sound("sine")
  .gain(perlin.range(0.08, 0.2).slow(4))
  .attack(0.005).decay(0.9).sustain(0).release(0.7)
  .delay(0.55).dt(1).dfb(0.45)

// Pen on desk, softer now, the letter almost finished
$: s("rim ~ ~ ~ rim ~ rim ~ ~ rim ~ ~").slow(2)
  .gain(0.3)
  .hpf(1400)
  .room(0.5)
  .pan(sine.range(0.25, 0.75).slow(9))

// The chord of meaning — voices overlapping, finally
$: stack(
  s("~!3 hikari ~!5").slow(7).speed(0.82).pan(0.25),
  s("~!6 stay ~!2").slow(7).speed(0.74).pan(0.75),
  s("~!2 breathe ~!6").slow(9).speed(0.8).pan(0.5)
)
  .gain(0.32)
  .lpf(1600)
  .room(0.9)