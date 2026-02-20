setcps(124/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("sawtooth")
  .gain(0.2)
  .attack(2.5)
  .release(8)
  .lpf(saw.range(600, 3000).slow(32))
  .lpq(5)
  .room(0.6)
  .size(0.9)
  .delay(0.4)
  .dt(0.75)
  .dfb(0.6)

let bassVoice = x => x
  .sound("pulse")
  .shape(sine.range(0.2, 0.8).slow(12)) // PWM for movement
  .gain(0.4)
  .attack(0.01)
  .release(0.3)
  .lpf(300)
  .lpenv(2500)
  .lpdecay(0.15)
  .octave(-2)
  .cut(1)
  .drive(0.1)
  .sometimes(p => p.slide(0.03).detune(3))

let arpVoice = x => x
  .sound("triangle")
  .gain(0.25)
  .hpf(500)
  .lpf(4000)
  .release(0.4)
  .velocity(perlin.range(0.5, 1).slow(5))
  .delay(0.5)
  .dt(0.25)
  .dfb(0.6)
  .pan(perlin.range(0.1, 0.9).slow(7))
  .every(3, p => p.lpf(1200).gain(0.15).hpf(1000))

let leadVoice = x => x
  .sound("sine")
  .gain(0.35)
  .attack(0.01)
  .release(0.5)
  .lpf(1200)
  .lpenv(4000)
  .lpdecay(0.3)
  .delay(0.7)
  .dfb(0.7)
  .dt(0.375)
  .room(0.5)

// --- Samples ---
samples('shabda/speech:work_it,make_it,do_it,makes_us')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 f3").slow(4).scale("C:minor").chord("m9 m7 M7 m7")

$: chords.voicing().apply(padVoice)

$: n("c g ab f").slow(4).euclid(13, 16).apply(bassVoice)

$: chords.arp("updown").fast(2).apply(arpVoice)

$: n("c5 ~ g4 ~ eb5 d5 c5 r").slow(4).scale("C:natural_minor")
  .sometimesBy(0.75, p => p.transpose(12))
  .apply(leadVoice)
  .orbit(1)

// --- Drums & Percussion ---
$: stack(
    s("bd*4").gain(1).cut(1)
      .every(8, p => p.s("[bd, bd, ~]")),
    s("~ [sn,cp]").gain(0.9).lpf(10000).shape(0.1),
    s("hh*8").fast(2).gain(0.45).velocity(perlin.range(0.5, 0.9).slow(5))
      .lpf(9000).swing(0.07)
      .every(3, p => p.gain(p.gain()+0.2).lpf(12000)),
    s("~ oh").gain(0.5).lpf(11000).room(0.2).crush(10),
    s("<~ ~ ~ mt ~ lt ~ ht>").slow(2).gain(0.6).lpf(6000).pan(rand).delay(0.2)
  ).gain(0.9)
   .compressor()
   .compressorRatio(8)
   .compressorAttack(0.01)
   .compressorRelease(0.25)
   .postgain(1.1)

$: s("~ ~ ~ ~ ~ ~ ~ cr").slow(8).gain(0.35).room(1).size(1).orbit(2)

// --- Vocals ---
$: s("work_it make_it do_it makes_us")
  .chop(perlin.range(4,16).slow(5))
  .stretch(perlin.range(0.9, 1.1).slow(13))
  .sometimes(p => p.rev())
  .sometimes(p => p.speed(perlin.range(-1, 1.5).slow(7)))
  .sometimes(p => p.crush(rand.range(4,8)).distort(0.2))
  .hpf(400).lpf(6000).room(0.4)
  .delay(0.5).dfb(0.5).dt("<3/16 5/16>")
  .gain(0.85)