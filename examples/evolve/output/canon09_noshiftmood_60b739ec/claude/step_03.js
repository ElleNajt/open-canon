// BWV 1087 Canon 9 - The Memory Speaks Back

// What if the ghost remembered something the original forgot?
let mournfulVoice = x => x
  .sound("sawtooth")
  .gain(0.28)
  .attack(0.15)
  .decay(0.4)
  .sustain(0.2)
  .release(0.8)
  .lpf(sine.range(400, 1200).slow(12))
  .lpq(3)
  .room(0.55)
  .delay(0.4)
  .delaytime(0.5)
  .delayfeedback(0.45)

let bellVoice = x => x
  .sound("triangle")
  .gain(0.22)
  .attack(0.002)
  .decay(0.6)
  .sustain(0)
  .lpf(2800)
  .room(0.65)

let breathVoice = x => x
  .sound("sine")
  .gain(0.18)
  .attack(0.3)
  .decay(0.5)
  .sustain(0.4)
  .release(1.2)
  .lpf(800)
  .room(0.7)

setcps(72/60/4)

// Track 1 - The melody now descends where it once rose, questioning turned to acceptance
$: note("d5 ~ ~ ~ g4 ~ ~ ~ g4 ~ ~ ~ d5 ~ ~ ~ a5 ~ ~ ~ d5 ~ ~ ~ b5 ~ ~ ~ gb4 ~ ~ ~ g4 ~ ~ ~ a4 ~ ~ ~ g4 ~ ~ ~ b4 ~ ~ ~ a4 ~ ~ ~ g4 ~ ~ ~")
  .degradeBy(0.2)
  .slow(16)
  .apply(mournfulVoice)
  .pan(0.3)

// Track 2 - Bells tolling the hours, not counterpoint but witness
$: note("<g4 d5> <b4 g5> <d5 b5> <g4 d5>")
  .slow(4)
  .ply(2)
  .apply(bellVoice)
  .pan(0.65)
  .sometimes(x => x.transpose(12).gain(0.1))

// Track 3 - The bass becomes breath, sustained tones that swell and fade
$: note("g2 ~ ~ ~ ~ ~ d3 ~ ~ ~ ~ ~ e2 ~ ~ ~ ~ ~ c3 ~ ~ ~ ~ ~ g2 ~ ~ ~")
  .slow(8)
  .apply(breathVoice)
  .pan(0.5)

// Track 4 - NEW: A counter-melody that never existed in Bach, but should have
$: note("b4 a4 g4 ~ e4 d4 ~ ~ g4 a4 b4 c5 d5 ~ b4 ~")
  .slow(8)
  .sound("pulse")
  .gain(0.24)
  .attack(0.05)
  .decay(0.25)
  .sustain(0.15)
  .lpf(1400)
  .lpq(2)
  .room(0.4)
  .pan(0.4)
  .off(0.125, x => x.transpose(7).gain(0.12))

// Track 5 - Rhythmic anchor: a walking pulse emerges from the dust
$: note("g3 ~ d3 ~ g3 ~ a3 ~ g3 ~ e3 ~ d3 ~ g3 ~")
  .fast(2)
  .sound("triangle")
  .gain(0.2)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.1)
  .lpf(900)
  .pan(0.55)
  .room(0.25)