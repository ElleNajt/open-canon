setcps(128/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.35)
  .attack(4)
  .release(6)
  .lpf(sine.range(400, 3500).slow(8))
  .lpq(6)
  .crush(16)
  .room(0.6)
  .size(0.9)
  .delay(0.2)
  .dt(0.75)
  .dfb(0.4)

let bassVoice = x => x
  .sound("pulse")
  .gain(0.5)
  .release(0.05)
  .lpf(250)
  .lpenv(2500)
  .lpdecay(0.15)
  .octave(-1)
  .cut(1)
  .drive(0.4)

let arpVoice = x => x
  .sound("sine")
  .fmi(sine.range(0.1, 0.5).slow(7))
  .fmh(2)
  .gain(0.45)
  .lpf(1500)
  .lpenv(4000)
  .lpdecay(0.05)
  .release(0.5)
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

$: n("c2 g1 ab1 eb2").slow(4).ply("<2 1 1>")
  .apply(bassVoice)

$: chords.arp("updown").fast(4)
  .sometimesBy(0.2, p => p.arp("random"))
  .apply(arpVoice)

// --- Drums & Percussion ---
$: s("bd*4").gain(1).cut(1)
  .every(8, p=>p.s("[bd bd] [bd/2 bd/2 bd] bd"))

$: s("~ sn").gain(0.9)
  .shape(0.1)
  .room(0.2)
  .crush(8)
  .lpf(12000)

$: s("hh").euclid(7, 16).fast(4)
  .gain(0.6)
  .lpf(9000)
  .velocity(perlin.range(0.5,1).slow(8))

$: s("~ ~ ~ oh").fast(2)
  .gain(0.7)
  .room(0.3)

$: s("~ ~ ~ cr").slow(8)
  .gain(0.4)
  .room(1)
  .size(1)
  .roomlp(5000)
  .orbit(1)

// --- Vocals ---
$: s("<work_it make_it do_it makes_us>!2").slow(8).palindrome()
  .sustain(0.1)
  .lpf(2000)
  .hpf(200)
  .distort(0.2)
  .room(0.4)
  .delay(0.5)
  .dfb(0.45)
  .dt(3/16)
  .gain(0.75)