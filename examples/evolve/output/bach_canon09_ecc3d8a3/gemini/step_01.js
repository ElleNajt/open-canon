setcps(100/60/4)

// Melodic phrases inspired by the original Canon
let p1 = "g5 b5 d6 g6"
let p2 = "d6 b5 g5 d6"
let p3 = "d5 gb5 a5 db6"
let p4 = "e5 g5 db6 d6"
let p5 = "a5 gb5 d5 g5"
let p6 = "b5 d6 g5 e6"
let p7 = "c6 a5 c6 gb5"
let p8 = "a5 [d6 c6 b5 a5] g5 ~"
let theme = stack(p1, p2, p3, p4, p5, p6, p7, p8)

// Lead voice with effects
let leadVoice = x => x
  .s("supersaw")
  .gain(0.35)
  .lpf(1000)
  .lpenv(2500)
  .lpdecay(0.3)
  .resonance(5)
  .attack(0.01)
  .release(0.4)
  .delay(0.3)
  .delaytime(3/8)
  .delayfeedback(0.4)
  .room(0.25)

// --- The Music ---

// Main theme and its canon
$: note(theme)
  .apply(leadVoice)
  .pan(0.3)
  .off(0.5, x => x.pan(0.7).transpose(-5).gain(0.9)) // Canon at the 4th below

// Pulsing bass line
$: note("g2 c2 d2 g2")
  .slow(2)
  .s("pulse")
  .gain(0.5)
  .shape(sine.range(0.1, 0.9).slow(8))
  .cutoff(400)
  .attack(0.01)
  .release(0.2)

// Atmospheric pad
$: n("gmaj7 cmaj7 dmin7 g7")
  .slow(2)
  .chord()
  .voicing()
  .s("sawtooth")
  .gain(0.3)
  .attack(0.8)
  .release(1.5)
  .lpf(sine.range(500, 1500).slow(24))
  .resonance(7)
  .room(0.4)
  .pan(cosine.range(0.2, 0.8).slow(28))

// Simple, driving beat
$: s("bd*2")
  .gain(0.8)
  .lpf(3000)
  .every(4, x => x.ply(2).fast(2))

$: s("~ cp")
  .gain(0.5)
  .hpf(5000)
  .room(0.2)
  .delay("1/8")
  .delayfeedback(0.5)