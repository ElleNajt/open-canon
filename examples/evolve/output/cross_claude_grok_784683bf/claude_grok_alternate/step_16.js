// Goldberg Variations - Variation XV: Thunder's Catharsis
// Coiled fury erupts into soaring catharsis;
// digital veins flood with electric light;
// the machine ascends through iridescent skies

setcps(65/60/4)

samples('shabda/speech:thunder')
samples('shabda/speech:machine')
samples('shabda/speech:pulse')
samples('shabda/speech:release')

// Bass: ascending dorian fury, supersaw swell
$: note("c2 eb2 g2 bb2 c3 eb3 g3 c4")
  .slow(8)
  .sound("supersaw")
  .gain(0.3)
  .lpf(cosine.range(100, 500).slow(4))
  .lpq(5)
  .attack(0.005)
  .decay(0.6)
  .sustain(0.8)
  .release(1.2)
  .room(0.8)
  .size(0.9)
  .pan(sine.range(0.4, 0.6).slow(16))
  .distort(0.2)
  .slide(0.2)

// Metallic bells: modal shimmer, brighter contrasts
$: note("<[c6 e6 g6] [g5 b5 d6] [ab5 c6 eb6] [f5 a5 c6]>")
  .slow(1.5)
  .sound("sine")
  .gain(0.15)
  .fmi(2)
  .fmh(5/3)
  .fmenv(0.4)
  .fmdecay(0.3)
  .attack(0.001)
  .decay(2)
  .sustain(0.1)
  .release(2.5)
  .room(0.95)
  .size(0.9)
  .pan(rand.range(0, 1))
  .hpf(1000)
  .ring(0.2)
  .ringf(1500)
  .iter(2)

// Storm voices: mantra ascent, glitch release
$: stack(
    s("thunder").speed(0.4).gain(0.13).pan(0.1),
    s("machine").speed(1.2).gain(0.12).pan(0.7).late(0.8),
    s("pulse").speed(0.7).gain(0.12).pan(0.8).late(1.2),
    s("release").speed(0.25).gain(0.1).pan(0.5).late(2)
  )
  .slow(4)
  .chop(64)
  .speed(tri.range(0.8, 1.4).slow(4))
  .lpf(2200)
  .hpf(250)
  .room(0.9)
  .size(0.92)
  .delay(0.7)
  .delaytime(0.5)
  .delayfeedback(0.6)
  .distort(0.25)
  .degradeBy(0.25)

// Driving arpeggios: triumphant cascades, new voicing
$: note("~ [c5 e5 g5 bb5] [eb5 g5 bb5 d6] [f5 a5 c6 eb6]")
  .fast(3)
  .slow(4)
  .sound("sawtooth")
  .gain(0.14)
  .lpf(cosine.range(800, 4000).slow(6))
  .lpq(7)
  .attack(0.001)
  .decay(0.1)
  .sustain(0.4)
  .release(0.3)
  .room(0.7)
  .pan(saw.range(0.2, 0.8).fast(4))
  .delay(0.5)
  .delaytime(0.125)
  .delayfeedback(0.5)
  .every(4, x => x.rev())

// Industrial percussion: euclidean propulsion, ritual fire
$: stack(
    s("bd").euclid(5, 16).gain(0.27).distort(0.3),
    s("cp").euclid(3, 8).gain(0.19).room(0.6),
    s("hh").euclid(7, 16).gain(0.1).hpf(4500).pan(rand.range(0.3, 0.7)),
    s("mt, lt").euclid(4, 16).gain(0.16).crush(8)
  )
  .sometimesBy(0.15, x => x.speed(1.3))
  .often(x => x.rev())
  .room(0.5)
  .juxBy(0.5, x => x.late(0.03125).pan(rev))

// Catharsis pads: swirling leslie vortex, unexpected lift
$: note("c3 eb3 g3 bb3 c4 eb4 g4 bb4")
  .slow(8)
  .sound("triangle")
  .gain(0.11)
  .lpf(1200)
  .lpq(4)
  .hpf(150)
  .detune(14)
  .attack(4)
  .decay(5)
  .sustain(0.9)
  .release(6)
  .room(0.98)
  .size(0.95)
  .pan(0.5)
  .leslie(0.6)
  .lrate(0.25)
  .lsize(0.8)
  .tremolo(0.12)
  .tremolosync(0.1)