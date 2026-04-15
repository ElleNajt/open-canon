setcps(114/60/4)

$: stack(
  // Bass: Transformed from acid to a heavy, syncopated industrial grind
  // Swapped sawtooth for pulse, added aggressive FM, and locked into a 3-over-4 polyrhythm
  note("f1")
    .sound("pulse")
    .gain(0.8)
    .lpf(tri.range(80, 400).slow(1))
    .lpq(6)
    .distort(0.7)
    .shape(0.6)
    .fmi(4)
    .fmh(0.5)
    .slide(0.1)
    .room(0.05)
    .size(0.2)
    .slow(4/3)
    .every(3, p => p.transpose(seq("-12 0 7").slow(2))), 
  
  // Harmony: Replaced suspended drone with a shifting, glassy FM chord cloud
  // Minor 9ths with high FM index creating metallic overtones, panning widely
  note("cs3 fs3 bs3 ds4")
    .slow(8)
    .sound("sine")
    .gain(0.2)
    .attack(0.5)
    .decay(1.5)
    .sustain(0.4)
    .release(1.5)
    .clip(4)
    .pan(sine.range(0.1, 0.9).slow(12))
    .room(0.8)
    .size(0.9)
    .lpf(1200)
    .fmi(seq("2 4 6 3").slow(8))
    .fmh(1.5)
    .every(4, p => p.transpose(seq("0 2 4 7").slow(4))),

  // Lead: DROPPED. Replaced with a glitched, staccato rhythmic stab
  // Short square bursts with heavy delay feedback creating a rhythmic echo tail
  note("c5 eb5 g5 ab5")
    .slow(2)
    .sound("square")
    .gain(0.15)
    .decay(0.05)
    .sustain(0)
    .release(0.05)
    .lpf(2000)
    .lpq(2)
    .distort(0.4)
    .pan(rand.range(0.3, 0.7))
    .delay(0.6)
    .delaytime(0.25)
    .delayfeedback(0.7)
    .chop(4)
    .swing(0.1)
    .every(2, p => p.rev()),

  // Percussion: Shifted to a broken, half-time feel with displaced kicks
  stack(
    s("bd*2")
      .slow(2)
      .gain(0.8)
      .clip(0.3)
      .lpf(80)
      .distort(0.2)
      .room(0.1)
      .late(0.0625), 
    s("sn~sn*2")
      .slow(1)
      .gain(0.5)
      .clip(0.15)
      .hpf(1800)
      .lpf(4500)
      .room(0.3)
      .late(0.125)
      .degradeBy(0.3), 
    s("hh*8")
      .slow(1)
      .gain(0.25)
      .clip(0.05)
      .hpf(7000)
      .lpf(14000)
      .room(0.15)
      .euclid(5, 8)
      .degradeBy(0.2), 
    s("cp")
      .slow(4)
      .gain(0.35)
      .clip(0.25)
      .hpf(500)
      .lpf(3000)
      .room(0.4)
      .delay(0.2)
      .delaytime(0.5)
      .euclid(2, 8)
  ),

  // New Layer: Unexpected Speech Sample Texture
  // Using shabda to create a rhythmic, spoken-word counterpoint
  // "chaos" and "order" chopped and reversed randomly
  s("chaos order system break")
    .slow(4)
    .gain(0.3)
    .lpf(1500)
    .hpf(400)
    .chop(8)
    .speed(seq("0.8 1.0 1.2 0.9").slow(4))
    .pan(cosine.range(0.2, 0.8).slow(6))
    .room(0.5)
    .size(0.6)
    .every(3, p => p.rev())
    .degradeBy(0.25),

  // Atmospheric: Granular Noise Swells evolved into a rising tension builder
  // Increased density and filter movement to create anticipation
  s("hh*16")
    .slow(16)
    .gain(0.1)
    .hpf(sine.range(2000, 8000).slow(16))
    .lpf(16000)
    .chop(32)
    .speed(seq("0.25 0.5 1 2").slow(16))
    .pan(rand.range(0, 1))
    .distort(0.5)
    .room(0.9)
    .size(0.95)
    .every(8, p => p.rev())
    .degradeBy(0.6)
)