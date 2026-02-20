setcps(115/60/4)

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

// Lead voice with more texture
let leadVoice = x => x
  .s("supersaw")
  .gain(0.3)
  .lpf(800)
  .lpenv(3000)
  .lpdecay(0.4)
  .resonance(8)
  .attack(0.01)
  .release(0.5)
  .fmi(0.1) // Add subtle FM glassiness
  .fmenv(2)
  .fmdecay(0.2)
  .delay(0.4)
  .delaytime("3/8")
  .delayfeedback(0.45)
  .room(0.3)

// --- The Music ---

// Main theme and its canons
$: note(theme)
  .apply(leadVoice)
  .pan(0.3)
  .off(0.5, x => x.pan(0.7).transpose(-5).gain(0.9)) // Canon at the 4th below
  .off(1, x => x.pan(0.5).transpose(-12).gain(0.7).lpf(500)) // Canon an octave down

// Grooving bass line
$: note("g2 g2 c2 d2")
  .slow(2)
  .euclid(5, 8)
  .s("sawtooth")
  .gain(0.6)
  .cutoff(350)
  .resonance(4)
  .attack(0.02)
  .release(0.3)

// Rich, sweeping pad
$: n("gmaj7 cmaj7 dsus4 g7")
  .slow(2)
  .chord()
  .s("supersaw")
  .gain(0.25)
  .attack(1.5)
  .release(2)
  .lpf(sine.range(400, 2000).slow(16))
  .resonance(10)
  .room(0.5)
  .pan(cosine.range(0.1, 0.9).slow(20))
  .detune(4)

// Driving, danceable beat
$: s("bd ~ [~ bd] bd")
  .gain(0.9)
  .lpf(4000)

$: s("~ sn")
  .slow(2)
  .gain(0.6)
  .room(0.2)
  .hpf(1000)

$: s("hh*8")
  .gain(0.45)
  .hpf(8000)
  .velocity(perlin.range(0.6, 1).slow(2))
  .swing(0.5)

$: s("~ oh").slow(2)
  .gain(0.6)
  .decay(0.25)
  .hpf(7000)
  .room(0.1)