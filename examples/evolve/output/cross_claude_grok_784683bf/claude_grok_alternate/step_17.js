// Goldberg Variations - Variation XV: Thunder's Catharsis
// Coiled fury erupts into soaring catharsis;
// digital veins flood with electric light;
// the machine ascends through iridescent skies

setcps(65/60/4)

samples('shabda/speech:thunder')
samples('shabda/speech:machine')
samples('shabda/speech:pulse')
samples('shabda/speech:release')

// Bass: descending phrygian darkness, pulse-driven tension
$: note("c2 db2 eb2 f2 g2 ab2 bb2 c3")
  .slow(8)
  .sound("pulse")
  .gain(0.32)
  .lpf(sine.range(80, 400).slow(6))
  .lpq(6)
  .attack(0.01)
  .decay(0.4)
  .sustain(0.7)
  .release(1.5)
  .room(0.7)
  .size(0.85)
  .pan(0.5)
  .distort(0.35)
  .fmi(0.8)
  .fmh(0.5)

// Crystalline gamelan: pentatonic shimmer replacing bells
$: note("<[c6 eb6 f6] [ab5 bb5 eb6] [f5 ab5 c6] [bb5 c6 eb6]>")
  .slow(2)
  .sound("triangle")
  .gain(0.13)
  .fmi(4)
  .fmh(7/4)
  .fmenv(0.6)
  .fmdecay(0.2)
  .attack(0.001)
  .decay(1.5)
  .sustain(0.05)
  .release(3)
  .room(0.9)
  .size(0.85)
  .pan(perlin.range(0.2, 0.8))
  .hpf(1500)
  .phaser(0.3)
  .phaserdepth(0.7)
  .ply(2)

// Storm voices: fragmented whispers, stretched time
$: stack(
    s("thunder").speed(0.25).gain(0.11).pan(0.2),
    s("release").speed(0.15).gain(0.09).pan(0.6).late(1.5)
  )
  .slow(6)
  .chop(32)
  .speed(perlin.range(0.5, 1.2).slow(8))
  .lpf(1800)
  .hpf(300)
  .room(0.95)
  .size(0.95)
  .delay(0.8)
  .delaytime(0.666)
  .delayfeedback(0.7)
  .degradeBy(0.4)

// NEW: Ghostly counter-melody - lydian hope piercing darkness
$: note("~ f5 ~ a5 b5 ~ cs6 ~ e6 ~ fs6 ~ a6 ~ ~ ~")
  .slow(4)
  .sound("sine")
  .gain(0.1)
  .attack(0.3)
  .decay(0.8)
  .sustain(0.3)
  .release(2)
  .room(0.9)
  .size(0.9)
  .pan(sine.range(0.3, 0.7).slow(8))
  .delay(0.6)
  .delaytime(0.375)
  .delayfeedback(0.55)
  .detune(8)
  .lpf(3000)

// Ritual percussion: sparse, ceremonial weight
$: stack(
    s("bd").euclid(3, 16).gain(0.3).distort(0.4).lpf(200),
    s("rim").euclid(5, 12).gain(0.14).room(0.7).pan(0.3),
    s("oh").euclid(2, 16).gain(0.08).hpf(3000).pan(0.7).speed(0.8)
  )
  .slow(1.5)
  .sometimesBy(0.25, x => x.late(0.0625))
  .room(0.6)
  .juxBy(0.4, x => x.late(0.03125))

// Catharsis drone: frozen chord, breathing texture
$: note("[c3,eb3,ab3,bb3]")
  .slow(16)
  .sound("supersaw")
  .gain(0.09)
  .lpf(sine.range(400, 1800).slow(16))
  .lpq(3)
  .hpf(100)
  .detune(20)
  .attack(6)
  .decay(8)
  .sustain(0.95)
  .release(8)
  .room(0.98)
  .size(0.98)
  .pan(0.5)
  .tremolo(0.08)
  .tremolosync(0.05)