setcps(120/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.25)
  .attack(2)
  .release(6)
  .lpf(sine.range(500, 4000).slow(24))
  .lpq(4)
  .tremolo(0.2)
  .tremolosync(8)
  .room(0.5)
  .size(0.9)
  .delay(0.3)
  .dt(0.75)
  .dfb(0.5)

let bassVoice = x => x
  .sound("square")
  .gain(0.45)
  .attack(0.01)
  .release(0.2)
  .lpf(250)
  .lpenv(2000)
  .lpdecay(0.1)
  .lpq(3)
  .octave(-2)
  .cut(1)
  .drive(0.2)
  .sometimes(p => p.slide(0.02).detune(2))

let arpVoice = x => x
  .sound("sawtooth")
  .gain(0.25)
  .hpf(600)
  .lpf(3000)
  .lpenv(2000)
  .lpdecay(0.2)
  .release(0.2)
  .velocity(perlin.range(0.4, 0.9).slow(6))
  .delay(0.6)
  .dt(0.25)
  .dfb(0.7)
  .pan(perlin.range(0.2, 0.8).slow(8))

// --- Samples ---
samples('shabda/speech:work_it,make_it,do_it,makes_us')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 f3").slow(4).scale("C:minor").chord("m9 m7 M7 m7")

$: chords.voicing()
  .apply(padVoice)

$: n("c g ab f").slow(4).euclid(13, 16)
  .apply(bassVoice)

$: chords.arp("random").fast(1).degradeBy(0.25)
  .apply(arpVoice)

// --- Drums & Percussion ---
$: stack(
    s("bd*4").gain(1).cut(1)
      .every(8, p=>p.s("[bd ~ [bd bd]/2]")),
    stack(
      s("~ sn").gain(0.8).shape(0.2).crush(8).lpf(12000),
      s("~ cp").gain(0.8)
    ).off(1/16, p => p.gain(0.4).hpf(1000).room(0.5)),
    s("hh*8").fast(2).gain(0.4).velocity(perlin.range(0.5, 0.9).slow(4))
      .lpf(9000).swing(0.08)
      .every(4, p=> p.lpf(13000).gain(0.5)),
    s("[~ oh]/2").gain(0.5).lpf(11000).room(0.2),
    s("~ ~ [~ rim] ~ ~ [rim ~]").gain(0.6).lpf(5000).shape(0.3)
  ).gain(0.95)
   .compressor()
   .compressorRatio(8)
   .compressorAttack(0.01)
   .compressorRelease(0.25)
   .postgain(1.1)

$: s("~ ~ ~ ~ ~ ~ ~ cr").slow(8)
  .gain(0.35)
  .room(1)
  .size(1)
  .roomlp(5000)
  .orbit(1)

// --- Vocals ---
$: s("[~ work_it] ~ make_it [~ do_it] [makes_us ~]").slow(2)
  .chop(8)
  .stretch(perlin.range(0.98, 1.02).slow(13))
  .rarely(p => p.rev())
  .sometimes(p => p.speed(perlin.range(-1.1, 1.1).slow(7)))
  .hpf(400)
  .lpf(5000)
  .room(0.4)
  .delay(0.5)
  .dfb(0.5)
  .dt("<3/16 5/16>")
  .gain(0.85)