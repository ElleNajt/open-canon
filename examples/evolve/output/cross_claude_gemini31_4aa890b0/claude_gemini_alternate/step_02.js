samples('shabda/speech/fr-FR/m:souviens_toi,oubli')

setcps(72/60/4)

// The bass pulled deeper into a dark minor/Phrygian descent, stuttering
$: note("g1 f1 eb1 d1 c1 ab1 d2 g1")
  .slow(4)
  .sound("sawtooth")
  .chop(8)
  .lpf(sine.range(150, 400).slow(4))
  .lpq(2)
  .gain(0.45)
  .room(0.4)

// The shadow weeps - shifted to minor, twisted with FM synthesis
$: note("g5 a5 bb5 c6 d6 c6 bb5 a5")
  .slow(4)
  .sound("sine")
  .fm(2)
  .fmh(0.5)
  .gain(0.15)
  .delay(0.6)
  .delaytime(0.25)
  .delayfeedback(0.6)
  .pan(sine.range(0.2, 0.8).slow(4))

// Replaced harpsichord glich with a fractured, crushed pulse box
$: note("g5 eb5 bb5 f5 c5 ab5 d5 fs5")
  .slow(2)
  .sound("pulse")
  .crush(4)
  .decay(0.1)
  .sustain(0)
  .gain(0.2)
  .jux(x => x.rev().speed(2).pan(0.8))
  .room(0.3)

// Swells turned to tragic, detuned minor chords
$: note("<[g3,bb3,d4] [f3,a3,c4] [eb3,g3,bb3] [d3,fs3,a3]>")
  .slow(4)
  .sound("supersaw")
  .lpf(600)
  .attack(1)
  .decay(2)
  .sustain(0.3)
  .release(2)
  .gain(0.12)
  .room(0.6)
  .detune(12)

// A phantom's plea, slowed and drifting through the stereofield
$: s("~ souviens_toi ~ oubli")
  .slow(4)
  .speed(0.85)
  .room(0.8)
  .gain(0.6)
  .jux(x => x.slow(1.5).pan(0.1).speed(0.8))