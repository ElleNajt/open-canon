setcps(120/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.4)
  .attack(2)
  .release(4)
  .lpf(sine.range(400, 2500).slow(16))
  .lpq(8)
  .phaser(0.1)
  .room(0.5)
  .size(0.95)
  .pan(perlin.range(0.1, 0.9).slow(16))
  .delay(0.2)
  .dt(0.75)
  .dfb(0.25)

let bassVoice = x => x
  .sound("pulse")
  .gain(0.6)
  .release(0.1)
  .lpf(180)
  .lpenv(1200)
  .lpdecay(0.05)
  .octave(-2)
  .cut(1)
  .drive(0.4)

let arpVoice = x => x
  .sound("triangle")
  .gain(0.4)
  .fmi(2)
  .fmdecay(0.1)
  .lpf(500)
  .lpenv(3000)
  .lpdecay(0.2)
  .release(0.4)
  .velocity(perlin.range(0.5, 1).slow(3))
  .delay(0.4)
  .dt(3/8)
  .dfb(0.4)
  .pan(perlin.range(0.3, 0.7).slow(12))

let leadVoice = x => x
  .sound("square")
  .shape(0.3)
  .gain(0.3)
  .release(0.8)
  .lpf(1800)
  .lpenv(3000)
  .lpdecay(0.4)
  .phaser(0.2)
  .room(0.4)
  .delay(0.3)
  .dt(3/16)
  .dfb(0.5)

// --- Samples ---
samples('shabda/speech:work_it,make_it,do_it,makes_us')

// --- Harmony & Melody ---
const chords = n("0 7 8 3").slow(4).scale("C:minor").chord("m7 m7 M7 M7")

$: chords.voicing().add(12)
  .apply(padVoice)

$: note("<c1*2 c2> g1 <ab1*2 ab2> eb1").slow(2)
  .apply(bassVoice)

$: chords.arp("updown").fast(2)
  .sometimesBy(0.25, x => x.rev())
  .apply(arpVoice)

$: note("~ ~ g4 ~ eb4 [g4 c5] f4 ~").slow(4).scale("C:minor")
  .degradeBy(0.2)
  .apply(leadVoice)
  .sometimesBy(0.4, x => x.slide(0.05))

// --- Drums ---
$: s("bd*4")
  .compressor()
  .compressorRatio(10)
  .gain(0.9)
  .every(4, x => x.s("bd [~ bd] bd bd"))

$: stack(
  s("~ [sn cp] ~ [sn cp]").shape(0.2).gain(0.8),
  s("~ ~ ~ ~ [<~ sn/2> <sn sn>/3] ~ ~").gain(rand.range(0.2, 0.4)).pan(0.4).crush(8)
).room(0.25)

$: s("hh oh [hh oh] [~ oh]").fast(2)
  .velocity("<0.9 0.5 1 0.6>")
  .gain(0.7)
  .djf(saw.slow(16).range(0.1, 0.9))

$: s("<~ mt> <lt ~ ht [lt mt]>").slow(2)
  .gain(0.6)
  .crush(10)
  .pan(perlin.range(0.2, 0.8).slow(12))
  .delay(0.25)
  .dt(1/6)
  .dfb(0.5)
  .room(0.3)

// --- Vocals ---
$: s("<work_it make_it> <do_it makes_us>").slow(4)
  .every(2, x => x.jux(rev))
  .sometimesBy(0.3, x => x.speed([0.75, 1.5, 2].choose()))
  .gain(0.8)
  .shape(0.3)
  .room(0.4)
  .lpf(5000)
  .delay(0.5)
  .dfb(0.4)
  .dt(3/16)