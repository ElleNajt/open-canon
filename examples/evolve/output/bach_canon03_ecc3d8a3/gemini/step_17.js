setcps(128/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.3)
  .attack(1.5)
  .release(5)
  .lpf(sine.range(400, 6000).slow(16))
  .lpq(5)
  .room(0.6)
  .size(0.9)
  .delay(0.4)
  .dt(0.75)
  .dfb(0.6)

let bassVoice = x => x
  .sound("sawtooth")
  .gain(0.5)
  .release(0.1)
  .lpf(150)
  .lpenv(3000)
  .lpdecay(0.05)
  .lpq(2)
  .octave(-2)
  .cut(1)
  .drive(0.4)

let arpVoice = x => x
  .sound("pulse")
  .shape(perlin.range(0.1, 0.9).slow(7))
  .gain(0.3)
  .hpf(400)
  .lpf(4000)
  .lpenv(5000)
  .lpdecay(0.15)
  .release(0.25)
  .velocity(perlin.range(0.3, 0.9).slow(5))
  .delay(0.5)
  .dt(0.25)
  .dfb(0.7)
  .pan(perlin.range(0.3, 0.7).slow(9))

// --- Samples ---
samples('shabda/speech:work_it,make_it,do_it,makes_us')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 f_3").slow(2).scale("C:minor").chord("m7 m7 M7 m7")

$: chords.voicing()
  .apply(padVoice)

$: n("c g ab f_").slow(2).euclid(5, 8)
  .apply(bassVoice)

$: chords.arp("up").fast(2)
  .apply(arpVoice)

// --- Drums & Percussion ---
$: s("bd*4").gain(1).cut(1)
  .every(8, p=>p.s("[bd ~ [bd bd]/2]"))

$: stack(
    s("~ sn").shape(0.2).crush(8).lpf(12000),
    s("~ cp")
  ).gain(0.8).off(1/16, p => p.gain(0.5).hpf(1000).room(0.5))

$: stack(
    s("hh*8").fast(2).velocity(rand.range(0.5, 0.9))
      .lpf(9000).swing(0.08),
    s("~ oh ~ oh").gain(0.7).lpf(11000).room(0.2)
  ).gain(0.6)

$: s("~ ~ ~ ~ ~ ~ ~ cr").slow(8)
  .gain(0.35)
  .room(1)
  .size(1)
  .roomlp(5000)
  .orbit(1)

// --- Vocals ---
$: s("work_it ~ make_it ~ do_it ~ makes_us ~").fast(2)
  .chop(16)
  .stretch(perlin.range(0.95, 1.05).slow(11))
  .sometimesBy(0.3, p => p.rev())
  .sometimes(p => p.phaser(perlin.range(0.05, 0.2).slow(7)))
  .hpf(500)
  .lpf(4000)
  .shape(0.1)
  .room(0.5)
  .delay(0.4)
  .dfb(0.5)
  .dt(3/16)
  .gain(0.8)