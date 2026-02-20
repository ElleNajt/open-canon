setcps(130/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.3)
  .attack(0.5)
  .release(2)
  .lpf(sine.range(400, 1500).slow(12))
  .lpq(3)
  .room(0.5)
  .pan(perlin.range(0.2, 0.8).slow(12))

let bassVoice = x => x
  .sound("pulse")
  .shape(sine.range(0.4, 0.6).slow(8))
  .gain(0.55)
  .release(0.4)
  .lpf(300)
  .lpenv(1000)
  .lpdecay(0.2)
  .octave(-2)
  .cut(1)
  .drive(0.3)

let leadVoice = x => x
  .sound("supersaw")
  .gain(0.3)
  .release(0.5)
  .lpf(1200)
  .lpenv(2500)
  .lpdecay(0.3)
  .room(0.3)
  .delay(0.4)
  .dt(3/16)
  .dfb(0.5)
  .phaser(0.2)
  .pan(0.3)

// --- Harmony & Melody ---
$: n("0 7 8 3").slow(4).scale("C:minor").chord("m7 m7 M7 M7").voicing()
  .apply(padVoice)

$: n("0 ~ 0 [0 0]/2 7 ~ 7 ~ 8 ~ 8 [8 8]/2 3 ~ 3 ~").slow(4).scale("C:minor")
  .apply(bassVoice)

$: note("~ g4 c5 [eb5 f5]/2 ~ ~ ab5 g5").slow(4).scale("C:minor")
  .apply(leadVoice)
  .jux(x => x.transpose(7).pan(0.7).gain(0.7))

// --- Drums ---
$: s("bd*4")
  .compressor()
  .compressorRatio(6)
  .gain(0.9)
  .every(8, x => x.s("[bd ~ bd] [~ bd bd]").gain(0.8))

$: s("<~ [sn cp] ~ [sn cp] ~ [sn cp] ~ sn>").slow(2)
  .gain(0.6)
  .room(0.2)

$: s("hh*7 oh")
  .hpf(sine.range(7000, 9000).slow(16))
  .gain(0.6)
  .velocity("<0.9 0.5 0.7 0.5 0.8 0.5 0.7 1>")
  .pan(sine.range(0.4, 0.6).slow(8))

$: s("~ mt ~ lt <~ cb> mt ~ lt").slow(2)
  .gain(0.4)
  .delay(0.3)
  .pan(perlin.range(0.2, 0.8).slow(6))
  .crush(8)