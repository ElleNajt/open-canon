// Goldberg Variations - Variation XIV: The Gathering Storm
// Tension coils beneath crystalline surfaces;
// ancient rhythms pulse through digital veins;
// the machine dreams of thunder

setcps(58/60/4)

samples('shabda/speech:thunder')
samples('shabda/speech:machine')
samples('shabda/speech:pulse')

// Bass: low growl with octave leaps - tension building
$: note("[c2 ~ c3 ~] [g2 g1 ~ g2] [ab2 ~ eb2 ~] [bb1 ~ f2 bb2]")
  .slow(4)
  .sound("sawtooth")
  .gain(0.28)
  .lpf(cosine.range(120, 400).slow(6))
  .lpq(6)
  .attack(0.02)
  .decay(0.8)
  .sustain(0.7)
  .release(1.5)
  .room(0.75)
  .size(0.85)
  .pan(0.5)
  .distort(0.15)
  .slide(0.3)

// Metallic bells: minor key shards glinting
$: note("<[c6 eb6 g6] [ab5 c6 eb6] [bb5 d6 f6] [g5 bb5 d6]>")
  .slow(2)
  .sound("triangle")
  .gain(0.14)
  .fmi(3.5)
  .fmh(7)
  .fmdecay(0.2)
  .attack(0.001)
  .decay(1.8)
  .sustain(0.05)
  .release(3)
  .room(0.9)
  .size(0.88)
  .pan(rand.range(0.1, 0.9))
  .hpf(800)
  .ring(0.3)
  .ringf(1200)
  .iter(4)

// Storm voices: fragmented prophecy
$: stack(
    s("thunder").speed(0.5).gain(0.12).pan(0.2),
    s("machine").speed(1.4).gain(0.1).pan(0.6).late(1.5),
    s("pulse").speed(0.8).gain(0.11).pan(0.9).late(0.6)
  )
  .slow(5)
  .chop(32)
  .speed(saw.range(0.6, 1.5).slow(3))
  .lpf(1800)
  .hpf(300)
  .room(0.85)
  .size(0.9)
  .delay(0.6)
  .delaytime(0.375)
  .delayfeedback(0.55)
  .distort(0.2)
  .degradeBy(0.3)

// Driving arpeggios: relentless mechanical pulse
$: note("c4 eb4 g4 c5 bb4 g4 eb4 c4").fast(2)
  .slow(4)
  .sound("pulse")
  .gain(0.13)
  .lpf(sine.range(600, 3500).slow(8))
  .lpq(8)
  .attack(0.002)
  .decay(0.15)
  .sustain(0.3)
  .release(0.4)
  .room(0.6)
  .pan(tri.range(0.3, 0.7).fast(2))
  .delay(0.4)
  .delaytime(0.25)
  .delayfeedback(0.45)
  .every(3, x => x.rev())

// Sub-bass pulse: the machine's heartbeat
$: note("c1 ~ c1 c1 ~ c1 ~ c1")
  .slow(2)
  .sound("sine")
  .gain(0.25)
  .lpf(80)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.6)
  .release(0.5)
  .pan(0.5)
  .room(0.3)

// Industrial percussion: chaos beneath order
$: stack(
    s("bd bd ~ bd bd ~ bd ~").gain(0.26).distort(0.25),
    s("~ cp ~ [cp cp] ~ cp ~ cp?").gain(0.18).room(0.5),
    s("hh*16").gain(0.09).hpf(5000).pan(rand),
    s("~ ~ ~ ~ mt ~ ~ lt").gain(0.15).crush(10)
  )
  .sometimes(x => x.speed(1.5))
  .rarely(x => x.rev())
  .room(0.4)
  .juxBy(0.5, x => x.late(0.0625))

// Tension strings: sustained dissonance
$: note("c4, eb4, gb4, bb4")
  .slow(16)
  .sound("sawtooth")
  .gain(0.08)
  .lpf(1400)
  .lpq(3)
  .hpf(200)
  .detune(8)
  .attack(6)
  .decay(4)
  .sustain(0.85)
  .release(8)
  .room(0.95)
  .size(0.92)
  .pan(0.5)
  .tremolo(0.08)
  .tremolosync(0.15)
  .phaser(0.4)
  .phaserdepth(1.2)