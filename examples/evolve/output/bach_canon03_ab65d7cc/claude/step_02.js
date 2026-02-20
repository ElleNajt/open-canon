// BWV 1087 Canon 3 - Variation: Fractured Glass Cathedral

let bellVoice = x => x
  .sound("triangle")
  .gain(0.4)
  .attack(0.001)
  .decay(0.6)
  .sustain(0.1)
  .release(1.2)
  .lpf(3500)
  .room(0.6)
  .delay(0.35)
  .delaytime(0.25)
  .delayfeedback(0.45)

let choirPad = x => x
  .sound("sawtooth")
  .gain(0.2)
  .attack(0.8)
  .decay(0.3)
  .sustain(0.7)
  .release(2)
  .lpf(900)
  .lpq(2)
  .room(0.7)

let pulseVoice = x => x
  .sound("square")
  .gain(0.18)
  .attack(0.01)
  .decay(0.1)
  .sustain(0.2)
  .release(0.3)
  .lpf(1400)
  .lpq(4)

setcps(72/60/4)

// Track 1 - shattered melodic fragments, rhythmically displaced
$: note("a5 ~ e5 ~ cs5 ~ ~ a4 ~ ~ gs5 f5 ~ ~ e5 ~")
  .slow(4)
  .apply(bellVoice)
  .pan(0.2)
  .sometimes(x => x.speed(0.5).octave(5))

// Track 2 - the canon inverted and stretched into long tones
$: note("<a3 e3> <cs4 gs3> <f3 d3> <e3 b2>")
  .slow(8)
  .apply(choirPad)
  .pan(0.8)
  .jux(x => x.note("<e4 b3> <a4 f4> <d4 bb3> <cs4 gs3>"))

// Track 3 - nervous pulse, the heartbeat underneath
$: note("a2 ~ a2 e2 ~ a2 ~ ~ a2 e2 ~ ~ a2 ~ e2 ~")
  .slow(2)
  .apply(pulseVoice)
  .pan(0.5)
  .degradeBy(0.15)

// Track 4 - high crystalline arpeggios, new counter-melody
$: n("0 4 7 11 7 4 0 -5")
  .scale("A:minor")
  .octave(6)
  .slow(3)
  .sound("sine")
  .gain(0.22)
  .attack(0.01)
  .decay(0.4)
  .sustain(0.05)
  .release(0.8)
  .delay(0.5)
  .delaytime(0.333)
  .delayfeedback(0.5)
  .pan(cosine.range(0.1, 0.9).slow(6))
  .room(0.5)

// Track 5 - distant thunder, unexpected low rumble
$: note("d1 ~ ~ ~ ~ ~ ~ ~")
  .slow(16)
  .sound("sawtooth")
  .gain(0.3)
  .attack(1.5)
  .decay(2)
  .sustain(0.4)
  .release(3)
  .lpf(180)
  .room(0.8)
  .pan(0.5)