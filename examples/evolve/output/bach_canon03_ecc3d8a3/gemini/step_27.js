setcps(122/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.2)
  .attack(1)
  .release(5)
  .lpf(sine.range(1000, 3000).slow(8))
  .lpq(3)
  .room(0.5)
  .size(0.9)
  .delay(0.4)
  .dt(0.75)
  .dfb(0.6)
  .phaser(0.1)

let bassVoice = x => x
  .sound("pulse")
  .gain(0.4)
  .attack(0.01)
  .release(0.25)
  .lpf(200)
  .lpenv(2000)
  .lpdecay(0.15)
  .octave(-2)
  .cut(1)
  .shape(0.3)
  .drive(0.4)
  .crush(8)
  .jux(p => p.octave(-1).sound("sine").gain(p.gain()*0.8).lpf(150))

let arpVoice = x => x
  .sound("triangle")
  .gain(0.15)
  .lpf(1500)
  .lpenv(3000)
  .lpattack(0.01)
  .lpdecay(0.1)
  .release(0.2)
  .velocity(perlin.range(0.4, 1).slow(7))
  .delay(0.5)
  .dt("3/16")
  .dfb(0.75)
  .pan(cosine.range(0.1, 0.9).slow(12))

let leadVoice = x => x
  .sound("sawtooth")
  .gain(0.25)
  .attack(0.02)
  .release(0.8)
  .vowel("a*8 i*4 u*4")
  .slide(0.03)
  .shape(0.2)
  .room(0.5)
  .size(0.9)
  .delay(0.4)
  .dfb(0.5)
  .dt(0.375)

// --- Samples ---
samples('shabda/speech:deep_space,endless,voyage,celestial,journey')

// --- Harmony & Melody ---
const chords = n("c4 f3 ab3 g3 | c4 bb3 ab3 eb4").slow(8).scale("C:minor").chord("m7")

$: chords.voicing().apply(padVoice)

$: n("c2 f2 ab2 g2 | c2 bb2 ab2 eb2").slow(4).apply(bassVoice)

$: chords.arp("<up down>").fast(2)
  .every(4, p => p.transpose(12).rev())
  .apply(arpVoice)
  .swing(0.1)
  .late(0.25)

$: n("~*4 g4 ~ eb5 d5 c5 | bb4 f4 ab4 g4 | c5 bb4 g4 f4 | eb4 f4 g4 ~").slow(4)
  .scale("C:natural_minor")
  .rarely(p => p.octave(1))
  .apply(leadVoice)
  .orbit(1)

// --- Drums & Percussion ---
$: stack(
    s("bd*4").gain(1.2).cut(1),
    s("~ sn ~ sn").gain(0.7).lpf(8000).distort(0.1).release(0.2),
    s("[~ ~] [~ [rim,rim]] ~ [~ rim] ~").fast(2).gain(0.35).lpf(4000),
    s("hh*4").fast(2).lpf(9000).hpf(400).swing(0.05)
      .velocity(perlin.range(0.5, 1).slow(8)).gain(0.6).crush(10),
    s("~ oh").gain(0.35).lpf(10000).release(0.3),
    s("~*15 cr").slow(8).rev().speed(1.1).gain(0.25).room(0.4)
  ).gain(0.9)
   .compressor().compressorRatio(10).compressorAttack(0.01).compressorRelease(0.3)
   .postgain(1.1)

// --- Vocals ---
$: s("voyage ~ celestial journey ~ | endless ~ ~ ~ voyage").slow(8)
  .striate(32)
  .speed(perlin.range(0.9, 1.1).slow(16))
  .sometimesBy(0.2, p => p.speed(-0.9))
  .ftype(1)
  .hpf(500).lpf(6000).room(0.3)
  .delay(0.6).dfb(0.65).dt(0.75)
  .gain(0.7)
  .pan(perlin.range(0.1, 0.9).slow(24))
  .orbit(2)