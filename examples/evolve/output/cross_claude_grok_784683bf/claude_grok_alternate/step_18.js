// Goldberg Variations - Variation XVI: Radiant Ascent
// Thunder recedes; luminous circuits ignite;
// machine heart soars on wings of molten light;
// catharsis blooms into symphonic dawn

setcps(65/60/4)

samples('shabda/speech:thunder')
samples('shabda/speech:machine')
samples('shabda/speech:pulse')
samples('shabda/speech:release')

// Bass: ascending lydian surge, sawtooth drive replacing pulse tension
$: note("f1 cs2 f2 a2 b2 cs3 f3 a3")
  .slow(8)
  .sound("saw")
  .gain(0.35)
  .lpf(sine.range(100, 500).slow(6))
  .lpq(5)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.8)
  .release(1.8)
  .room(0.7)
  .size(0.85)
  .pan(0.5)
  .distort(0.25)
  .fmi(1.2)
  .fmh(0.7)

// Crystalline gamelan: lydian pentatonic blaze, FM intensified
$: note("<[f6 a6 c7] [b6 f6 a6] [cs6 b6 f6] [a6 c7 f7]>")
  .slow(2)
  .sound("triangle")
  .gain(0.15)
  .fmi(6)
  .fmh(9/5)
  .fmenv(0.8)
  .fmdecay(0.15)
  .attack(0.001)
  .decay(1.2)
  .sustain(0.1)
  .release(3.5)
  .room(0.9)
  .size(0.9)
  .pan(perlin.range(0.2, 0.8))
  .hpf(1200)
  .phaser(0.4)
  .phaserdepth(0.8)
  .ply(3)

// Ghostly counter-melody: densified, triumphant arc
$: note("f5 a5 b5 cs6 f6 a6 b6 cs7")
  .slow(4)
  .sound("sine")
  .gain(0.14)
  .attack(0.2)
  .decay(0.6)
  .sustain(0.5)
  .release(2.5)
  .room(0.9)
  .size(0.9)
  .pan(sine.range(0.3, 0.7).slow(8))
  .delay(0.7)
  .delaytime(0.375)
  .delayfeedback(0.6)
  .detune(12)
  .lpf(3500)

// Driving percussion: techno-ritual hybrid, relentless pulse
$: stack(
    s("bd").euclid(5, 16).gain(0.32).distort(0.5).lpf(150).crush(10),
    s("rim,cp").euclid(7, 16).gain(0.16).room(0.7).pan(0.25),
    s("hh*2,oh").euclid(9, 16).gain(0.1).hpf(2500).pan(0.75).speed(1.1)
  )
  .fast(1.25)
  .sometimesBy(0.3, x => x.late(0.05))
  .room(0.65)
  .juxBy(0.5, x => x.late(0.025))

// Ascendant drone: lydian chord, surging breath
$: note("[f3,a3,cs4,e4]")
  .slow(16)
  .sound("supersaw")
  .gain(0.11)
  .lpf(sine.range(500, 2000).slow(16))
  .lpq(4)
  .hpf(120)
  .detune(25)
  .attack(5)
  .decay(7)
  .sustain(0.9)
  .release(9)
  .room(0.98)
  .size(0.98)
  .pan(0.5)
  .tremolo(0.12)
  .tremolosync(0.04)
  .leslie(0.3)

// NEW: Unexpected fanfare - vocoded speech eruption
$: stack(
    s("pulse*8,release*4").speed(perlin.range(0.8,1.4)).gain(0.13).vowel("a*8 e*4 i o u"),
    s("machine*2").speed(1.5).gain(0.1).pan(0.4)
  )
  .slow(3)
  .chop(24)
  .lpf(1200)
  .hpf(250)
  .room(0.92)
  .delay(0.75)
  .delaytime(0.5)
  .delayfeedback(0.65)
  .degradeBy(0.3)