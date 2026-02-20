setcps(128/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.3)
  .attack(1)
  .release(3.5)
  .lpf(sine.range(300, 3000).slow(12))
  .lpq(5)
  .phaser(0.1)
  .room(0.5)
  .size(0.9)
  .pan(perlin.range(0.2, 0.8).slow(16))
  .delay(0.2)
  .dt(0.75)
  .dfb(0.2)

let bassVoice = x => x
  .sound("pulse")
  .gain(0.6)
  .release(0.1)
  .lpf(200)
  .lpenv(1000)
  .lpdecay(0.05)
  .octave(-2)
  .cut(1)
  .drive(0.4)

let arpVoice = x => x
  .sound("triangle")
  .gain(0.4)
  .fmi(3)
  .fmdecay(0.1)
  .attack(0.01)
  .release(0.2)
  .velocity(perlin.range(0.5, 1).slow(3))
  .delay(0.4)
  .dt(3/8)
  .dfb(0.3)
  .pan(perlin.range(0.3, 0.7).slow(12))

let leadVoice = x => x
  .sound("square")
  .shape(0.3)
  .gain(0.35)
  .release(0.6)
  .lpf(2000)
  .lpenv(2500)
  .lpdecay(0.3)
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

$: note("<c2*3 g1> <ab1*3 eb2>").slow(2).scale("C:minor")
  .apply(bassVoice)

$: chords.arp("updown").fast(2)
  .apply(arpVoice)

$: note("~ g4 f4 eb4 [g4 c5 g4]/2 ~ ab4 g4").slow(4).scale("C:minor")
  .apply(leadVoice)
  .sometimesBy(0.4, x => x.slide(0.05))

// --- Drums ---
$: s("bd*4")
  .compressor()
  .compressorRatio(10)
  .gain(0.95)
  .every(4, x => x.s("bd [~ bd] bd bd"))

$: stack(
  s("~ sn ~ sn").shape(0.2).gain(0.8),
  s("~ ~ ~ ~ [<~ sn/2> <sn sn>/3] ~ ~").gain(rand.range(0.2, 0.4)).pan(0.4)
).room(0.2)

$: s("hh [hh oh] hh [hh oh]").fast(2)
  .velocity("<0.9 0.5 1 0.6>")
  .gain(0.8)
  .djf(saw.slow(16).range(0.1, 0.9))

$: s("<~ mt> <lt ~ ht [lt mt]>").slow(2)
  .gain(0.6)
  .crush(8)
  .pan(perlin.range(0.2, 0.8).slow(8))
  .delay(0.25)
  .dt(1/6)
  .dfb(0.5)
  .room(0.3)

// --- Vocals ---
$: s("<work_it*2 make_it*2 do_it*2 makes_us*2> ~").slow(2)
  .every(3, x => x.speed(1.5))
  .sometimesBy(0.4, x => x.crush(6))
  .gain(0.8)
  .room(0.4)
  .lpf(4000)
  .delay(0.5)
  .dfb(0.4)
  .dt(3/16)