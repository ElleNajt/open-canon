// Goldberg Variations - Aria, reimagined as a midnight jazz club ballad
// The Aria's soprano line survives, but transplanted into a noir context:
// walking upright bass, brushed drums, a warm Rhodes-ish pad, and a
// breathy vocal sample whispering "forever" across the bar lines.

samples('shabda/speech/en-GB/f:forever,aria')

setcps(60/60/4)

// The original soprano melody — preserved, but reharmonized by context
let soprano = "g5 ~!7 g5 ~!7 a5 ~!5 b5 ~ a5 ~!2 g5 gb5 ~!2 e5 d5 ~!15 g4 ~!7 g4 ~!11 gb4 ~ g4 ~ a4 g4 gb4 ~ g4 gb4 e4!2 d4 ~!15 d5 ~!7 d5 ~!7 e5 ~!5 f5 ~ e5 ~!2 d5 c5 ~!2 b4 a4 ~!11 gb5 ~!3 g5 gb5 ~!2 a5 g5 ~!2 gb5 e5 ~!2 d5 c5 ~ c5 a5 ~!5 c5 ~ b4 g4 ~!2 gb4 ~!2 gb4 g4 ~!15 b4 ~!7 b4 ~!7 db5 ~!5 d5 ~ d5 ~ db5 ~ b4 ~ a4 ~!31"

// Walking jazz bass — reharmonizing Bach's G major into Gmaj7 / Em7 / Am7 / D7
let walkingBass = "<g2 b2 d3 e3 e2 g2 b2 d3 a2 c3 e3 g3 d2 fs2 a2 c3>"

// Rhodes-ish chord stabs (syncopated, on the "and")
let rhodes = "<[~ <g3,b3,d4,fs4>] [~ <e3,g3,b3,d4>] [~ <a3,c4,e4,g4>] [~ <d3,fs3,a3,c4>]>"

// Soprano — the Aria singing through a smoky filter, slowed and pensive
$: note(soprano).slow(16)
  .sound("sine")
  .gain(0.35)
  .attack(0.08).release(0.6)
  .lpf(sine.range(1200, 3200).slow(12))
  .room(0.5)

// Rhodes comping — warm, slightly detuned
$: note(rhodes).slow(2)
  .sound("triangle")
  .gain(0.3)
  .attack(0.01).decay(0.4).sustain(0.1).release(0.3)
  .lpf(1800)
  .room(0.35)
  .pan(0.35)

// Walking bass — the heartbeat of the club
$: note(walkingBass).slow(2)
  .sound("sawtooth")
  .gain(0.5)
  .attack(0.01).decay(0.25).sustain(0.3).release(0.15)
  .lpf(450)
  .pan(0.55)

// Brushed drums — jazz ride pattern with soft kick
$: s("[bd ~ ~ ~] , [~ ~ sn ~] , [hh*8]")
  .gain("0.55 0.3 0.45 0.3 0.35 0.3 0.4 0.3")
  .hpf(200)
  .room(0.25)
  .swing(2)

// The whispered word drifting through — unexpected, intimate
$: s("forever ~ ~ ~ ~ ~ ~ aria").slow(8)
  .speed(0.85)
  .gain(0.4)
  .lpf(2200)
  .room(0.7)
  .pan(sine.range(0.2, 0.8).slow(7))