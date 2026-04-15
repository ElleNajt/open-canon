setcps(94/60/4)

$: stack(
  // Bass: Transformed into a rolling, acid-techno sequence with aggressive slides
  note("g1 g1 f1 eb1 d1 d1 c1 g0")
    .slow(1)
    .sound("supersaw")
    .gain(0.65)
    .lpf(saw.range(400, 2000).slow(4))
    .lpq(8)
    .distort(0.55)
    .crush(6)
    .slide(0.25)
    .room(0.15),
  
  // Harmony: Replaced gamelan with a ghostly, detuned pluck choir
  // Creates an eerie, wide atmosphere contrasting the dry bass
  note("cs5 ~ fs4 ~ b4 ~ e5")
    .slow(2)
    .sound("triangle")
    .gain(0.18)
    .decay(0.3)
    .sustain(0.1)
    .release(1.2)
    .chop(8)
    .speed(1.1)
    .detune(perlin.range(-15, 15).slow(8))
    .pan(cosine.range(0, 1).slow(6))
    .room(0.85)
    .size(0.9)
    .delay(0.45)
    .delaytime(0.5),
  
  // Percussion: Swapped Euclidean hats for a frantic, shuffling breakbeat glitch
  s("hh*16")
    .euclid(11, 16)
    .gain(0.35)
    .hpf(7000)
    .lpf(22000)
    .sometimes(p => p.chop(12).speed(rand.range(0.8, 1.2)))
    .every(3, p => p.rev())
    .swing(0.65),
  
  // Kick: Harder, punchier industrial kick with tighter clipping
  s("bd*4")
    .gain(0.85)
    .clip(0.7)
    .distort(0.3)
    .lpf(120)
    .early(0.005),

  // New Layer: Rhythmic, granular speech synthesis acting as a lead instrument
  // Chopped and pitched to create a melodic motif from words
  s("evolve,machine,dream,wake")
    .slow(2)
    .gain(0.55)
    .lpf(tri.range(800, 4000).slow(2))
    .chop(16)
    .speed(perlin.range(0.9, 1.4).slow(4))
    .room(0.5)
    .delay(0.35)
    .delaytime(0.375)
    .delayfeedback(0.5)
    .pan(sine.range(0.3, 0.7).slow(3))
    .distort(0.2)
)