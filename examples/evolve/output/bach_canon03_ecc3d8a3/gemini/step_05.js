setcps(130/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("triangle")
  .gain(0.4)
  .attack(0.2)
  .release(1.5)
  .lpf(sine.range(600, 1200).slow(16))
  .lpq(2)
  .room(0.5)
  .pan(perlin.range(0.2, 0.8).slow(12))

let bassVoice = x => x
  .sound("square")
  .gain(0.5)
  .release(0.3)
  .lpf(200)
  .lpenv(800)
  .lpdecay(0.1)
  .octave(-2)
  .cut(1)
  .drive(0.2)

let leadVoice = x => x
  .sound("supersaw")
  .gain(0.35)
  .release(0.5)
  .lpf(1000)
  .lpenv(3000)
  .lpdecay(0.4)
  .room(0.3)
  .delay(0.4)
  .dt(3/16)
  .dfb(0.5)

// --- Harmony & Melody ---
$: n("0 7 8 3").slow(4).scale("C:minor").chord("m m M M").voicing()
  .apply(padVoice)

$: n("0 ~ 0 0 7 ~ 7 ~ 8 ~ 8 8 3 ~ 3 3").scale("C:minor").slow(4)
  .apply(bassVoice)

$: note("~ g4 c5 eb5 ~ f5 ab5 g5").slow(4).scale("C:minor")
  .apply(leadVoice)
  .pan(0.3)
  .jux(x => x.transpose(4).pan(0.7).gain(0.8))

// --- Drums ---
$: s("bd*4")
  .gain(0.9)
  .every(8, x => x.s("[bd bd bd]/2").gain(0.8))

$: s("~ [sn cp]")
  .slow(2)
  .gain(0.6)
  .room(0.2)

$: s("hh*7 oh")
  .hpf(7000)
  .gain(0.6)
  .velocity("<0.9 0.5 0.7 0.5 0.8 0.5 0.7 1>")
  .pan(sine.range(0.4, 0.6).slow(8))

$: s("~ ~ ~ <mt ~ lt> ~ ~ ~ ~")
  .gain(0.4)
  .delay(0.3)
  .pan(perlin.range(0.2, 0.8).slow(6))
  .crush(8)