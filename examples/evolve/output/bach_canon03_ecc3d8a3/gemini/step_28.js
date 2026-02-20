setcps(118/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.25)
  .attack(1.5)
  .release(6)
  .lpf(sine.range(800, 3500).slow(6))
  .lpq(4)
  .room(0.6)
  .size(0.9)
  .delay(0.5)
  .dt("3/8")
  .dfb(0.6)
  .pan(perlin.range(0.2, 0.8).slow(16))
  .jux(p => p.sound("sine").octave(1).hpf(2000).gain(p.gain()*0.2))


let bassVoice = x => x
  .sound("square")
  .gain(0.35)
  .attack(0.01)
  .release(0.3)
  .lpf(250)
  .lpenv(2500)
  .lpdecay(0.1)
  .octave(-2)
  .cut(1)
  .shape(0.2)
  .drive(0.3)
  .jux(p => p.octave(-1).sound("sine").gain(p.gain()*0.9).lpf(150))

let arpVoice = x => x
  .sound("sine")
  .fm(1.2)
  .fmh(2)
  .fmenv(8)
  .fmdecay(0.1)
  .gain(0.1)
  .release(0.4)
  .velocity(perlin.range(0.4, 1).slow(6))
  .delay(0.5)
  .dt("3/16")
  .dfb(0.7)
  .pan(cosine.range(0.1, 0.9).slow(11))
  .lpf(5000)

let leadVoice = x => x
  .sound("sawtooth")
  .gain(0.2)
  .attack(0.05)
  .release(1)
  .vowel("<a e o u>")
  .detune(3)
  .slide(0.02)
  .room(0.5)
  .size(0.8)
  .delay(0.4)
  .dfb(0.55)
  .dt(0.375)

// --- Samples ---
samples('shabda/speech:deep_space,endless,voyage,celestial,journey')

// --- Harmony & Melody ---
const chords = n("c4 f3 ab3 g3 | c4 bb3 ab3 eb4").slow(8).scale("C:minor").chord("m7")

$: chords.voicing().apply(padVoice)

$: n("c2*7 ~ f1*7 ~ | ab1*7 ~ g1*4 ~ ~ ~").slow(4).sometimes(rev)
  .apply(bassVoice)

$: chords.arp("updown").fast(2)
  .every(3, p => p.rev())
  .apply(arpVoice)
  .swing(0.05)

$: n("g4~f4 eb4 d4 c4 bb3 g3 | c4~bb3 ab3 f4 g4 ~ f4 eb4")
  .slow(4)
  .scale("C:natural_minor")
  .sometimes(p => p.transpose(12))
  .apply(leadVoice)
  .orbit(1)

// --- Drums & Percussion ---
$: stack(
    s("bd ~ [~ bd] ~").gain(1.1).cut(1),
    s("~ [~ sn] ~ [sn,cp]").gain(0.7).lpf(8000).release(0.25).crush(16),
    s("[~, mt, [~ mt], ~]").fast(4).gain(0.4).pan(rand),
    s("hh*8")
      .velocity(perlin.range(0.3,1).slow(5)).fast(2)
      .gain(0.5).hpf(500).lpf(10000).crush(12),
    s("~ ~ ~ oh").fast(1).gain(0.3).release(0.5).hpf(800),
    s("~*31 cr").slow(16).gain(0.2).room(0.5).speed(0.8)
  ).gain(0.95)
   .compressor().compressorRatio(8).compressorAttack(0.01).compressorRelease(0.25)
   .postgain(1.1)

// --- Vocals ---
$: s("deep_space ~ celestial ~ | endless ~ journey voyage").slow(8)
  .chop(32)
  .every(5, p => p.speed(0.5))
  .sometimesBy(0.25, p => p.rev())
  .ftype(1)
  .lpf(sine.range(2000, 7000).slow(12))
  .hpf(400).room(0.4)
  .delay(0.6).dfb(0.7).dt(0.75)
  .gain(0.65)
  .pan(perlin.range(0.1, 0.9).slow(22))
  .orbit(2)