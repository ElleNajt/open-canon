setcps(108/60/4)

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

// Lead voice with a lush, filtered supersaw tone
let leadVoice = x => x
  .s("supersaw")
  .gain(0.35)
  .lpf(700)
  .lpenv(3500)
  .lpdecay(0.4)
  .resonance(15)
  .attack(0.01)
  .release(0.5)
  .delay(0.5)
  .delaytime("3/8")
  .delayfeedback(0.4)
  .room(0.3)
  .detune(1.5)

// --- The Music ---

// Main theme and its canons with distinct timbres
$: note(theme)
  .apply(leadVoice)
  .pan(0.25)
  .off(0.5, x => x.pan(0.75).transpose(-5).s("pulse").gain(0.4).lpf(1000).lpenv(2000).lpdecay(0.1).resonance(8))
  .off(1.0, x => x.pan(0.5).transpose(-7).s("triangle").gain(0.3).lpf(500).room(0.6).delay(0.7).delaytime("1/4").delayfeedback(0.6))

// Fat, grooving bass line
$: note("g2 c2 d2 g2")
  .slow(2)
  .euclid(5, 8)
  .s("sawtooth")
  .gain(0.6)
  .cutoff(250)
  .resonance(8)
  .attack(0.01)
  .release(0.2)
  .drive(0.3)

// Rhythmic, percussive arpeggio
$: n(chords)
  .slow(2)
  .chord()
  .arp("updown")
  .s("pulse")
  .octave(1)
  .gain(0.2)
  .release(0.4)
  .delay(0.6)
  .delaytime("3/16")
  .delayfeedback(0.6)
  .pan(perlin.range(0.1, 0.9).slow(16))
  .room(0.5)
  .hpf(500)

// Rich, sweeping pad
$: n(chords)
  .slow(2)
  .chord()
  .voicing()
  .s("supersaw")
  .gain(0.2)
  .attack(2.5)
  .release(4)
  .lpf(sine.range(500, 2500).slow(20))
  .resonance(8)
  .room(0.7)
  .pan(cosine.range(0.05, 0.95).slow(28))
  .detune(2)

// Groovy Breakbeat
$: stack(
  s("[bd ~ [~ bd] ~]*2").gain(1.1),
  s("~ cp ~ cp").gain(0.7).lpf(5000).room(0.25),
  s("hh").euclid(5, 8).swing(0.5).gain(0.5).hpf(7000).velocity(perlin.range(0.3, 0.9).slow(3)),
  s("~ ~ ~ [~ oh]").gain(0.6).hpf(7000).release(0.4)
)