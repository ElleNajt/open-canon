setcps(128/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.4)
  .attack(3)
  .release(5)
  .lpf(sine.range(600, 2800).slow(4))
  .lpq(8)
  .phasersweep(8)
  .room(0.5)
  .size(0.9)
  .pan(perlin.range(0.1, 0.9).slow(10))
  .delay(0.2)
  .dt(0.75)
  .dfb(0.3)

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.5)
  .release(0.05)
  .lpf(180)
  .lpenv(2000)
  .lpdecay(0.1)
  .octave(-2)
  .cut(1)
  .drive(0.6)
  .shape(0.1)

let arpVoice = x => x
  .sound("sine")
  .gain(0.5)
  .lpf(1200)
  .lpenv(5000)
  .lpdecay(0.05)
  .release(0.4)
  .velocity(perlin.range(0.5, 1).slow(6))
  .delay(0.5)
  .dt(3/8)
  .dfb(0.6)
  .pan(perlin.range(0.2, 0.8).slow(12))

let leadVoice = x => x
  .sound("triangle")
  .gain(0.35)
  .release(1.5)
  .lpf(2500)
  .lpenv(3000)
  .lpdecay(0.6)
  .room(0.4)
  .delay(0.4)
  .dt(3/16)
  .dfb(0.6)
  .slide(0.05)

// --- Samples ---
samples('shabda/speech:work_it,make_it,do_it,makes_us')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 eb4").slow(4).scale("C:minor").chord("m7 m7 M7 M7")

$: chords.voicing()
  .apply(padVoice)

$: n("c1 g0 ab0 eb1").slow(4).euclid(11,16)
  .apply(bassVoice)

$: chords.arp("updown").fast(4)
  .every(6, p => p.rev())
  .apply(arpVoice)

$: note("~ g4 f4 eb4 [~ eb4] g4 ab4 g4").slow(4).scale("C:minor")
  .apply(leadVoice)
  .sometimesBy(0.4, x => x.add(7))

// --- Drums & Percussion ---
$: s("bd*4")
  .gain(0.95)
  .every(8, p => p.s("bd*2 [bd bd/2]"))

$: stack(
  s("~ cp ~ <sn cp>").gain(0.8).shape(0.1),
  s("~ ~ [rim*2] ~").fast(2).gain(rand.range(0.3, 0.5)).crush(8)
).room(0.25)

$: s("hh*3 oh").fast(2)
  .velocity("<1 0.6 0.8 1>")
  .gain(0.55)
  .lpf(9000)
  .djf(saw.slow(8).range(0.1, 0.9))

$: s("~ ~ ~ cr").slow(8)
  .gain(0.5)
  .room(0.6)
  .roomlp(4000)
  .size(0.95)
  .orbit(1)

// --- Vocals ---
$: s("<work_it make_it do_it makes_us>!2").slow(8)
  .chop(16)
  .speed(perlin.range(-1.5, 1.5).slow(7))
  .gain(0.7)
  .shape(0.2)
  .room(0.3)
  .pan(perlin.range(0.3, 0.7).slow(3))
  .delay(0.5)
  .dfb(0.4)
  .dt(3/16)