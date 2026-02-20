setcps(112/60/4)

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

let chords = "gmaj7 cmaj7 dsus4 g7"

// Lead voice with a warmer, rounder synth tone
let leadVoice = x => x
  .s("square")
  .gain(0.4)
  .lpf(800)
  .lpenv(2500)
  .lpdecay(0.3)
  .resonance(12)
  .attack(0.01)
  .release(0.5)
  .delay(0.5)
  .delaytime("3/8")
  .delayfeedback(0.4)
  .room(0.3)

// --- The Music ---

// Main theme and its canons
$: note(theme)
  .apply(leadVoice)
  .pan(0.3)
  .off(0.5, x => x.pan(0.7).transpose(-5).s("triangle").gain(0.85).lpf(600)) // Canon at a 4th
  .off(1, x => x.pan(0.5).transpose(-7).gain(0.7).lpf(400).room(0.5).delay(0.6)) // Canon at a 5th

// Grooving bass line
$: note("g2 c2 d2 g2")
  .slow(2)
  .euclid(5, 8)
  .s("pulse")
  .gain(0.7)
  .cutoff(300)
  .resonance(6)
  .attack(0.02)
  .release(0.3)
  .drive(0.2)

// Floating arpeggio
$: n(chords)
  .slow(2)
  .chord()
  .arp("updown")
  .s("sine")
  .octave(1)
  .gain(0.2)
  .release(0.3)
  .delay(0.7)
  .delaytime("3/16")
  .delayfeedback(0.55)
  .pan(perlin.range(0.1, 0.9).slow(13))
  .room(0.5)
  .hpf(400)

// Rich, sweeping pad
$: n(chords)
  .slow(2)
  .chord()
  .voicing()
  .s("supersaw")
  .gain(0.25)
  .attack(3)
  .release(3.5)
  .lpf(sine.range(400, 2200).slow(24))
  .resonance(10)
  .room(0.7)
  .pan(cosine.range(0.05, 0.95).slow(32))
  .detune(3)

// Minimalist House Beat
$: stack(
  s("bd*4").gain(1.1).lpf(4000).decay(0.3),
  s("~ [sn cp]").gain(0.8).hpf(1000).room(0.2),
  s("[hh*3 oh]*2").gain(0.6).hpf(8000).velocity(perlin.range(0.4, 1).slow(2)),
  s("~ ~ ~ rim").slow(0.5).gain(0.5).delay(0.5).delaytime("6/16").delayfeedback(0.4)
)