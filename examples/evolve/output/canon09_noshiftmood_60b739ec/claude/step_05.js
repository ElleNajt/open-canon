// BWV 1087 Canon 9 - The Memory Breaks Through

// The ghost stops arguing. It remembers something true.
let mournfulVoice = x => x
  .sound("sawtooth")
  .gain(0.24)
  .attack(0.15)
  .decay(0.4)
  .sustain(0.3)
  .release(0.9)
  .lpf(sine.range(400, 1200).slow(12))
  .lpq(3)
  .room(0.55)
  .delay(0.4)
  .delaytime(0.5)
  .delayfeedback(0.45)

let bellVoice = x => x
  .sound("triangle")
  .gain(0.18)
  .attack(0.002)
  .decay(0.6)
  .sustain(0)
  .lpf(2200)
  .room(0.65)

let resolveVoice = x => x
  .sound("sine")
  .gain(0.2)
  .attack(0.08)
  .decay(0.3)
  .sustain(0.4)
  .release(0.6)
  .lpf(1800)
  .room(0.4)

setcps(72/60/4)

// Track 1 - The melody finally exhales, long tones finding peace
$: note("g5 ~ ~ ~ ~ ~ d5 ~ ~ ~ ~ ~ eb5 ~ ~ ~ ~ ~ ~ ~ bb4 ~ ~ ~ ~ ~ ~ ~ g4 ~ ~ ~")
  .slow(16)
  .apply(mournfulVoice)
  .pan(0.4)
  .juxBy(0.3, x => x.transpose(12).gain(0.1).delay(0.6))

// Track 2 - Bells shift to open fifths, ancient and hollow
$: note("<g3 d4> ~ ~ <c4 g4> ~ ~ <eb4 bb4> ~ <d4 a4> ~ ~ ~")
  .slow(6)
  .apply(bellVoice)
  .pan(0.55)
  .every(4, x => x.rev())

// Track 3 - REPLACED: A deep drone emerges, the ground beneath memory
$: note("g1")
  .slow(8)
  .sound("sawtooth")
  .gain(0.15)
  .attack(2)
  .decay(1)
  .sustain(0.8)
  .release(3)
  .lpf(sine.range(150, 400).slow(16))
  .lpq(2)
  .pan(0.5)
  .room(0.6)

// Track 4 - REWRITTEN: Counter-melody becomes a chorale, voices moving together
$: note("[g4,bb4,d5] ~ [f4,a4,c5] ~ [eb4,g4,bb4] ~ ~ ~ [d4,f4,a4] ~ [c4,eb4,g4] ~ ~ ~ ~ ~")
  .slow(8)
  .apply(resolveVoice)
  .pan(0.45)
  .off(0.125, x => x.transpose(-12).gain(0.12))

// Track 5 - DROPPED the stumbling bass, replaced with steady quarter notes
$: note("g2 d2 eb2 c2 g2 d2 c2 d2")
  .slow(4)
  .sound("triangle")
  .gain(0.22)
  .attack(0.01)
  .decay(0.4)
  .sustain(0.2)
  .release(0.5)
  .lpf(800)
  .pan(0.5)
  .room(0.35)

// Track 6 - NEW: A single voice rises from the texture, singing what was forgotten
$: note("~ ~ ~ ~ d5 ~ eb5 ~ f5 ~ g5 ~ ~ ~ bb5 ~ ~ ~ ~ ~ a5 ~ g5 ~ ~ ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sawtooth")
  .gain(0.16)
  .attack(0.2)
  .decay(0.5)
  .sustain(0.6)
  .release(1.2)
  .lpf(1400)
  .lpq(4)
  .room(0.7)
  .delay(0.45)
  .delaytime(0.75)
  .delayfeedback(0.5)
  .pan(0.65)