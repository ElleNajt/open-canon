setcps(128/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.35)
  .attack(3)
  .release(6)
  .lpf(sine.range(500, 4000).slow(6))
  .lpq(8)
  .phaser(0.12)
  .room(0.5)
  .size(0.8)
  .delay(0.3)
  .dt(0.75)
  .dfb(0.5)

let bassVoice = x => x
  .sound("square")
  .gain(0.55)
  .release(0.1)
  .lpf(250)
  .lpenv(2500)
  .lpdecay(0.08)
  .octave(-2)
  .cut(1)
  .shape(0.2)

let arpVoice = x => x
  .sound("triangle")
  .fmi(sine.range(0.1, 0.4).slow(9))
  .fmh(2)
  .gain(0.4)
  .hpf(200)
  .lpf(3000)
  .lpenv(4000)
  .lpdecay(0.1)
  .release(0.2)
  .velocity(perlin.range(0.4, 1).slow(5))
  .delay(0.5)
  .dt(0.25)
  .dfb(0.65)
  .pan(perlin.range(0.2, 0.8).slow(12))

// --- Samples ---
samples('shabda/speech:work_it,make_it,do_it,makes_us')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 eb4").slow(4).scale("C:minor").chord("m7 m7 M7 M7")

$: chords.voicing()
  .apply(padVoice)

$: n("c*4 g*4 ab*4 eb*4").slow(4)
  .apply(bassVoice)

$: chords.arp("<up down updown>").fast(4)
  .apply(arpVoice)

// --- Drums & Percussion ---
$: s("bd*4").gain(1).cut(1)
  .every(4, p=>p.s("[bd bd] bd [bd bd] bd"))

$: stack(
    s("~ sn").shape(0.2).crush(8).lpf(12000),
    s("~ cp")
  ).gain(0.8).room(0.3).off(1/16, p => p.gain(0.6).hpf(800))

$: stack(
    s("hh").euclid(9, 16).fast(4)
      .velocity(perlin.range(0.6,1).slow(8))
      .lpf(9000),
    s("~ oh").euclid(5, 16).fast(4)
      .gain(0.7).lpf(11000).room(0.2)
  ).gain(0.65)

$: s("~ ~ ~ ~ ~ ~ ~ cr").slow(16)
  .gain(0.4)
  .room(1)
  .size(1)
  .roomlp(5000)
  .orbit(1)

// --- Vocals ---
$: s("<work_it*4 make_it*4 do_it*4 makes_us*4>").slow(4)
  .chop(4)
  .speed(perlin.range(0.95, 1.05).slow(13))
  .hpf(400)
  .lpf(5000)
  .distort(0.15)
  .room(0.4)
  .delay(0.5)
  .dfb(0.45)
  .dt(3/16)
  .gain(0.75)