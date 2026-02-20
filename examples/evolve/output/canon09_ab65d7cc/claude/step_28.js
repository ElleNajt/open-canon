// BWV 1087 Canon 9 - Variation: Awakening from the Dream

// The stillness breaks - determination emerges from doubt
let risingVoice = x => x
  .sound("sawtooth")
  .gain(0.09)
  .attack(0.05)
  .decay(0.4)
  .sustain(0.5)
  .release(1)
  .lpf(2200)
  .room(0.4)

// Warmth returns - major inflections pierce through
let hopefulChord = x => x
  .sound("triangle")
  .gain(0.08)
  .attack(0.15)
  .decay(0.5)
  .sustain(0.5)
  .release(1.5)
  .lpf(3200)
  .room(0.45)

setcps(84/60/4)

// Track 1 - Melody ASCENDS with purpose - the answer to the question
$: note("d4 e4 fs4 a4 d5 e5 fs5 a5")
  .slow(4)
  .apply(risingVoice)
  .pan(0.5)
  .delay(0.3)
  .delaytime(0.25)
  .delayfeedback(0.4)

// Track 2 - Harmony shifts to D MAJOR - light breaking through
$: note("<[d3,fs3,a3] [g3,b3,d4] [e3,g3,b3] [a3,cs4,e4]>")
  .slow(2)
  .apply(hopefulChord)
  .pan(0.45)

// Track 3 - Bass becomes WALKING - forward momentum
$: note("d2 fs2 a2 d3 a2 fs2 e2 a1")
  .slow(2)
  .sound("triangle")
  .gain(0.11)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.4)
  .release(0.6)
  .lpf(400)

// Drums AWAKEN - a march forms from scattered rain
$: s("bd ~ sn ~ bd bd sn ~")
  .slow(2)
  .gain(0.1)
  .lpf(2000)
  .room(0.25)
  .pan(0.5)

// Hihat becomes MOMENTUM - driving forward
$: s("hh hh hh hh hh hh [hh hh] hh")
  .slow(2)
  .gain(0.07)
  .hpf(6000)
  .pan(sine.range(0.3, 0.7).slow(4))

// Wind chimes transform into BELLS OF ARRIVAL
$: note("d6 fs6 a6 d7")
  .slow(4)
  .euclid(5, 8)
  .sound("sine")
  .gain(0.065)
  .attack(0.01)
  .decay(0.5)
  .sustain(0.2)
  .release(1.5)
  .fmi(3)
  .fmh(5)
  .room(0.5)
  .pan(rand.range(0.2, 0.8))

// Triads become FANFARE - announcing transformation
$: note("[d4,fs4,a4] ~ [e4,gs4,b4] ~ [fs4,a4,cs5] [g4,b4,d5] [a4,cs5,e5] ~")
  .slow(4)
  .sound("pulse")
  .gain(0.07)
  .attack(0.02)
  .decay(0.4)
  .sustain(0.4)
  .release(0.8)
  .lpf(2800)
  .pan(0.55)
  .room(0.35)

// NEW: Countermelody - a second voice joins in canon
$: note("~ ~ d4 e4 fs4 a4 d5 e5")
  .slow(4)
  .sound("square")
  .gain(0.065)
  .attack(0.03)
  .decay(0.3)
  .sustain(0.4)
  .release(0.7)
  .lpf(1800)
  .pan(0.65)
  .delay(0.2)
  .delaytime(0.166)
  .delayfeedback(0.3)

// Drone transforms into PEDAL POINT - grounding the ascent
$: note("d2")
  .slow(8)
  .sound("sawtooth")
  .gain(0.08)
  .attack(1)
  .decay(2)
  .sustain(0.6)
  .release(2)
  .lpf(sine.range(300, 1200).slow(8))
  .pan(0.5)
  .room(0.4)

// NEW: Arpeggiated hope - cascading upward
$: note("d3 fs3 a3 d4 fs4 a4 d5 fs5")
  .slow(2)
  .sound("sine")
  .gain(0.06)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.3)
  .release(0.5)
  .lpf(4000)
  .pan(saw.range(0.3, 0.7).slow(2))
  .room(0.3)

// NEW: Timpani rolls - gathering strength
$: note("d2 ~ ~ a1 ~ d2 [d2 d2 d2 d2] ~")
  .slow(4)
  .sound("triangle")
  .gain(0.09)
  .attack(0.01)
  .decay(0.5)
  .sustain(0.2)
  .release(0.4)
  .lpf(250)
  .room(0.5)

// The open fifth RESOLVES - D major triad emerges triumphant
$: note("[d2,a2,d3,fs3]")
  .slow(8)
  .sound("sawtooth")
  .gain(0.1)
  .attack(2)
  .decay(3)
  .sustain(0.5)
  .release(3)
  .lpf(900)
  .room(0.5)
  .pan(0.5)

// NEW: Descant of joy - birdsong becomes celebration
$: note("a5 d6 fs6 a6 fs6 d6 a5 fs5")
  .slow(2)
  .sometimes(x => x.add(note("2")))
  .sound("triangle")
  .gain(0.06)
  .attack(0.01)
  .decay(0.1)
  .sustain(0.4)
  .release(0.3)
  .lpf(6000)
  .room(0.35)
  .pan(0.7)