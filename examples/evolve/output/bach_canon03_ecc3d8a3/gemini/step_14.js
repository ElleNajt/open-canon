setcps(128/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.4)
  .attack(4)
  .release(8)
  .lpf(sine.range(400, 3500).slow(8))
  .lpq(6)
  .crush(12)
  .room(0.6)
  .size(0.9)
  .delay(0.2)
  .dt(0.75)
  .dfb(0.4)

let bassVoice = x => x
  .sound("pulse")
  .gain(0.5)
  .release(0.05)
  .lpf(300)
  .lpenv(3000)
  .lpdecay(0.1)
  .octave(-1)
  .cut(1)
  .shape(0.3)

let arpVoice = x => x
  .sound("triangle")
  .fmi(sine.range(0.1, 0.4).slow(9))
  .fmh(2)
  .gain(0.4)
  .hpf(200)
  .lpf(2500)
  .lpenv(4000)
  .lpdecay(0.1)
  .release(0.2)
  .velocity(perlin.range(0.4, 1).slow(5))
  .delay(0.5)
  .dt(3/8)
  .dfb(0.65)
  .pan(perlin.range(0.2, 0.8).slow(12))

// --- Samples ---
samples('shabda/speech:work_it,make_it,do_it,makes_us')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 eb4").slow(4).scale("C:minor").chord("m7 m7 M7 M7")

$: chords.voicing()
  .apply(padVoice)

$: n("c2*8 g1*4 ab1*4 eb2*8").slow(2)
  .apply(bassVoice)

$: chords.arp("<updown random>").fast(4)
  .apply(arpVoice)

// --- Drums & Percussion ---
$: s("bd*4").gain(1).cut(1)
  .every(4, p=>p.s("bd*3 [bd bd]"))

$: stack(
    s("~ sn").gain(0.8).shape(0.2).crush(8).lpf(12000),
    s("~ cp").gain(0.6)
  ).room(0.3)

$: s("hh").euclid(9, 16).fast(4)
  .gain(0.5)
  .lpf(9000)
  .velocity(perlin.range(0.6,1).slow(8))

$: s("~ oh").euclid(3, 8).fast(2)
  .gain(0.6)
  .room(0.3)
  .lpf(10000)

$: s("~ ~ ~ ~ ~ ~ ~ cr").slow(16)
  .gain(0.4)
  .room(1)
  .size(1)
  .roomlp(5000)
  .orbit(1)

// --- Vocals ---
$: s("<work_it make_it do_it makes_us>!2").slow(8).palindrome()
  .chop(8)
  .speed(perlin.range(0.9, 1.1).slow(13))
  .hpf(300)
  .lpf(4000)
  .distort(0.1)
  .room(0.4)
  .delay(0.5)
  .dfb(0.45)
  .dt(3/16)
  .gain(0.7)