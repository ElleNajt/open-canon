setcps(120/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.4)
  .attack(3)
  .release(5)
  .lpf(sine.range(500, 3000).slow(8))
  .lpq(6)
  .phaser(0.1)
  .room(0.5)
  .size(0.9)
  .pan(perlin.range(0.1, 0.9).slow(12))
  .delay(0.2)
  .dt(0.75)
  .dfb(0.3)

let bassVoice = x => x
  .sound("pulse")
  .gain(0.55)
  .release(0.05)
  .lpf(200)
  .lpenv(1500)
  .lpdecay(0.08)
  .octave(-2)
  .cut(1)
  .drive(0.5)
  .shape(0.1)

let arpVoice = x => x
  .sound("sawtooth")
  .gain(0.35)
  .lpf(600)
  .lpenv(4000)
  .lpdecay(0.15)
  .release(0.2)
  .velocity(perlin.range(0.6, 1).slow(4))
  .delay(0.5)
  .dt(3/8)
  .dfb(0.45)
  .pan(perlin.range(0.2, 0.8).slow(16))

let leadVoice = x => x
  .sound("square")
  .shape(0.4)
  .gain(0.3)
  .release(1)
  .lpf(2000)
  .lpenv(2500)
  .lpdecay(0.5)
  .room(0.4)
  .delay(0.4)
  .dt(3/16)
  .dfb(0.6)
  .slide(0.02)

// --- Samples ---
samples('shabda/speech:work_it,make_it,do_it,makes_us')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 eb4").slow(4).scale("C:minor").chord("m7 m7 M7 M7")

$: chords.voicing()
  .apply(padVoice)

$: note("<c2 ~ c1 [c1 c1]> g1 <ab1 ~ ab0 ab1> eb1").slow(2)
  .apply(bassVoice)

$: chords.arp("updown").fast(4)
  .sometimesBy(0.2, x => x.rev())
  .apply(arpVoice)

$: note("~ g4 ~ f4 eb4 ~ [g4 c5] ~").slow(4).scale("C:minor")
  .degradeBy(0.1)
  .apply(leadVoice)
  .sometimesBy(0.3, x => x.add(7))

// --- Drums & Percussion ---
$: s("bd*4")
  .gain(0.9)
  .every(4, p => p.s("bd*3 <bd bd/2>"))

$: stack(
  s("~ cp ~ <sn cp>").gain(0.8).shape(0.1),
  s("~ ~ [rim rim] ~").fast(2).gain(rand.range(0.3, 0.5)).crush(8)
).room(0.2)

$: s("hh*2 [hh oh] hh").fast(2)
  .velocity("<0.9 0.6 1 0.7>")
  .gain(0.6)
  .lpf(8000)
  .djf(saw.slow(12).range(0.2, 0.8))

$: s("~ ~ ~ cr").slow(8)
  .gain(0.5)
  .room(0.6)
  .roomlp(4000)
  .size(0.95)
  .orbit(1)

// --- Vocals ---
$: s("<work_it make_it> <do_it makes_us>").slow(4)
  .chop(8).striate(2)
  .speed(perlin.range(0.9, 1.1).slow(6))
  .gain(0.8)
  .shape(0.2)
  .room(0.3)
  .pan(perlin.range(0.3, 0.7).slow(5))
  .delay(0.5)
  .dfb(0.4)
  .dt(3/16)