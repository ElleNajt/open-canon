setcps(118/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.25)
  .attack(1.5)
  .release(6)
  .lpf(sine.range(900, 3800).slow(8))
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
  .sound("triangle")
  .gain(0.15)
  .release(0.4)
  .velocity(perlin.range(0.4, 1).slow(6))
  .delay(0.5)
  .dt("3/16")
  .dfb(0.7)
  .pan(cosine.range(0.1, 0.9).slow(11))
  .lpf(4000)
  .phaser(0.1)
  .phaserdepth(4)

let leadVoice = x => x
  .sound("sawtooth")
  .gain(0.22)
  .attack(0.05)
  .release(1)
  .lpf(sine.range(1200, 4500).slow(6))
  .lpq(3)
  .detune(3)
  .slide(0.02)
  .room(0.5)
  .size(0.8)
  .delay(0.4)
  .dfb(0.55)
  .dt(0.375)

// --- Samples ---
samples('shabda/speech:celestial,voyage,infinite,dream')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 g3").slow(8).scale("C:minor").chord("<m7 m7 M7 sus4>")

$: chords.voicing().apply(padVoice)

$: n("c2*2 c2 eb2 | g1*2 g1 bb1 | ab1*2 ab1 c2 | g1*2 g1 f1")
  .slow(4)
  .scale("C:minor")
  .apply(bassVoice)

$: chords.arp("up").fast(2)
  .degradeBy(0.2)
  .every(4, p => p.rev())
  .apply(arpVoice)
  .swing(0.05)

$: n("~ g4 ~ f4 | eb4 ~ d4 c4 | ~ ab4 ~ g4 | f4 eb4 g4 ~")
  .slow(4)
  .scale("C:minor")
  .sometimes(p => p.transpose(12))
  .apply(leadVoice)
  .orbit(1)

// --- Drums & Percussion ---
$: stack(
    s("bd ~ [~ bd] bd ~ ~ bd").gain(1.1).cut(1),
    s("~ sn ~ ~ ~ [sn cp] ~ ~").gain(0.8).lpf(9000).release(0.2).crush(16),
    s("hh").euclid(5, 8).fast(2)
      .velocity(perlin.range(0.4,1).slow(7)).gain(0.4).hpf(6000),
    s("~*7 oh").slow(2).gain(0.3).release(0.4).hpf(800),
    s("rim").euclid(3, 16).fast(2).gain(0.6).pan(perlin.range(0.2, 0.8).slow(3)),
    s("~*63 cr").slow(32).gain(0.25).room(0.5).speed(0.9)
  ).gain(0.9)
   .compressor().compressorRatio(10).compressorAttack(0.005).compressorRelease(0.3)
   .postgain(1.1)

// --- Vocals ---
$: s("celestial ~ voyage ~ | infinite dream ~ ~").slow(8)
  .striate(16)
  .speed(perlin.range(0.7, 1.3).slow(8))
  .every(3, p => p.speed(p.speed() * 0.5))
  .hpf(400)
  .bpf(sine.range(1500, 5000).slow(6))
  .bpq(10)
  .room(0.4)
  .delay(0.6).dfb(0.7).dt(0.75)
  .gain(0.7)
  .pan(perlin.range(0.1, 0.9).slow(20))
  .orbit(2)