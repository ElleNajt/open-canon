setcps(132/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.25)
  .attack(0.8)
  .release(2.5)
  .lpf(sine.range(300, 2000).slow(8))
  .lpq(4)
  .room(0.6)
  .size(0.8)
  .pan(perlin.range(0.1, 0.9).slow(16))
  .delay(0.2)
  .dt(0.5)

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.5)
  .release(0.1)
  .lpf(250)
  .lpenv(800)
  .lpdecay(0.1)
  .octave(-2)
  .cut(1)
  .drive(0.4)

let arpVoice = x => x
  .sound("triangle")
  .gain(0.35)
  .attack(0.01)
  .release(0.4)
  .lpf(800)
  .lpenv(2000)
  .lpdecay(0.2)
  .delay(0.5)
  .dt(3/8)
  .dfb(0.4)
  .pan(perlin.range(0.3, 0.7).slow(10))

let leadVoice = x => x
  .sound("square")
  .shape(0.2)
  .gain(0.3)
  .release(0.6)
  .lpf(1500)
  .lpenv(3000)
  .lpdecay(0.3)
  .room(0.4)
  .delay(0.3)
  .dt(3/16)
  .dfb(0.6)
  .pan(0.3)

// --- Harmony & Melody ---
const chords = n("0 7 8 3").slow(4).scale("C:minor").chord("m7 m7 M7 M7")

$: chords.voicing()
  .apply(padVoice)

$: n("0*4".ply(4)).slow(4).scale("C:minor")
  .apply(bassVoice)

$: chords.arp("updown").fast(2)
  .apply(arpVoice)

$: note("c5 ~ eb5 [g5 f5]/2 ~ ab5 ~ [c6 ab5 g5]/2").slow(4).scale("C:minor")
  .apply(leadVoice)
  .off(1/4, x => x.transpose(5).pan(0.7).gain(0.7).lpf(1000))

// --- Drums ---
$: s("bd*4")
  .compressor()
  .compressorRatio(8)
  .gain(0.9)
  .every(4, x => x.s("bd [~ bd] bd [bd bd]"))

$: stack(
  s("~ [sn cp] ~ [sn cp]").gain(0.7),
  s("~ ~ ~ sn ~ ~ sn ~").sometimesBy(0.6, x => x.gain(rand.range(0.2, 0.4)))
).room(0.15)

$: s("hh*7 oh").fast(2)
  .hpf(sine.range(7000, 10000).slow(8))
  .gain(0.7)
  .velocity("<0.9 0.4 0.7 0.4 0.8 0.4 0.7 1>")
  .pan(sine.range(0.4, 0.6).slow(6))

$: s("<~ rim> <[~ rim] [rim rim]>/2").slow(2)
  .gain(0.5)
  .delay(0.2)
  .dt(1/6)
  .pan(perlin.range(0.2, 0.8).slow(8))
  .shape(0.4)