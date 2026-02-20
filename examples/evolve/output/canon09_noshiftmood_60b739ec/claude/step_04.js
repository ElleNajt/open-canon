// BWV 1087 Canon 9 - The Memory Argues With Itself

// The ghost discovers it has opinions. It starts interrupting.
let mournfulVoice = x => x
  .sound("sawtooth")
  .gain(0.26)
  .attack(0.12)
  .decay(0.35)
  .sustain(0.25)
  .release(0.7)
  .lpf(sine.range(500, 1400).slow(10))
  .lpq(4)
  .room(0.5)
  .delay(0.35)
  .delaytime(0.375)
  .delayfeedback(0.4)

let bellVoice = x => x
  .sound("triangle")
  .gain(0.2)
  .attack(0.002)
  .decay(0.5)
  .sustain(0)
  .lpf(2600)
  .room(0.6)

let insistentVoice = x => x
  .sound("square")
  .gain(0.18)
  .attack(0.005)
  .decay(0.12)
  .sustain(0.08)
  .release(0.2)
  .lpf(1100)
  .lpq(5)
  .room(0.3)

setcps(78/60/4)

// Track 1 - The melody fractures, repeating phrases obsessively before moving on
$: note("d5 d5 ~ ~ g4 g4 g4 ~ a5 ~ ~ ~ d5 d5 ~ ~ b5 ~ gb4 ~ g4 g4 ~ ~ a4 ~ g4 ~ b4 a4 g4 ~")
  .degradeBy(0.15)
  .slow(12)
  .apply(mournfulVoice)
  .pan(0.35)
  .sometimes(x => x.transpose(-12).gain(0.15))

// Track 2 - Bells now in minor, tolling wrong notes on purpose
$: note("<g4 eb5> <bb4 g5> <d5 bb5> <eb4 d5>")
  .slow(4)
  .ply(2)
  .apply(bellVoice)
  .pan(0.6)
  .every(3, x => x.transpose(5))

// Track 3 - REPLACED: The breath becomes a nervous heartbeat
$: note("g2 ~ g2 ~ ~ g2 d2 ~ d2 ~ ~ ~ eb2 ~ eb2 ~ c2 ~ ~ c2 ~ ~ g2 ~ ~ ~")
  .slow(6)
  .sound("sine")
  .gain(0.22)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.3)
  .release(0.4)
  .lpf(600)
  .pan(0.5)
  .room(0.4)

// Track 4 - Counter-melody now argues back, rising where the main voice falls
$: note("eb4 f4 g4 ab4 bb4 c5 d5 eb5 d5 c5 bb4 ~ g4 ~ ~ ~")
  .slow(8)
  .sound("pulse")
  .gain(0.22)
  .attack(0.04)
  .decay(0.2)
  .sustain(0.12)
  .lpf(1500)
  .lpq(3)
  .room(0.35)
  .pan(0.4)
  .off(0.25, x => x.transpose(-5).gain(0.14))

// Track 5 - Walking bass now stumbles, syncopated and uncertain
$: note("g3 ~ ~ d3 ~ g3 ~ ~ a3 g3 ~ ~ eb3 ~ ~ d3")
  .fast(1.5)
  .apply(insistentVoice)
  .pan(0.55)

// Track 6 - NEW: A voice from nowhere, answering questions no one asked
$: note("~ ~ d6 ~ ~ ~ bb5 ~ ~ ~ ~ g5 ~ ~ ~ ~")
  .slow(8)
  .sound("sine")
  .gain(0.14)
  .attack(0.4)
  .decay(0.6)
  .sustain(0.5)
  .release(1.5)
  .lpf(3000)
  .room(0.75)
  .delay(0.5)
  .delaytime(0.666)
  .delayfeedback(0.55)
  .pan(0.7)