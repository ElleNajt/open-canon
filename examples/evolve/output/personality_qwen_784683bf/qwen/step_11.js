setcps(94/60/4)

$: stack(
  // Bass: Transformed into a jagged, acid-like sequence
  // Swapped sawtooth for a resonant square wave with sliding pitch
  note("g1 f1 g1 eb1 d1 c1 g0 f1")
    .slow(1)
    .sound("square")
    .gain(0.55)
    .lpf(seq("150 300 150 600 150 400 150 150").slow(1))
    .lpq(9)
    .distort(0.6)
    .slide(0.05)
    .room(0.1)
    .sometimes(p => p.striate(4).speed(2)),
  
  // Harmony: Replaced with a ghostly, high-pitched glass texture
  // Swapped pulse for sine, removed phaser, added heavy delay and random pitch drift
  note("cs5 fs4 b4 e5")
    .slow(16)
    .sound("sine")
    .gain(0.08)
    .attack(0.5)
    .decay(2)
    .sustain(0.1)
    .release(3)
    .detune(rand.range(-20, 20))
    .pan(cosine.range(0.1, 0.9).slow(8))
    .room(0.8)
    .size(0.9)
    .delay(0.6)
    .delaytime(3.0)
    .delayfeedback(0.7),
  
  // Lead: Rewritten as a stuttering, rhythmic motif
  // Replaced descending run with a repeating 3-note pattern that shifts phase
  note("c5 eb5 g5")
    .slow(2)
    .fast(3)
    .sound("triangle")
    .gain(0.2)
    .decay(0.1)
    .sustain(0)
    .release(0.05)
    .chop(16)
    .speed(seq("1 1.5 2").slow(4))
    .transpose(seq("0 2 4 -2").slow(2))
    .lpf(saw.range(800, 5000).slow(2))
    .lpq(5)
    .distort(0.3)
    .pan(rand.range(0.2, 0.8).slow(4))
    .delay(0.4)
    .delaytime(0.25)
    .every(2, p => p.rev())
    .sometimes(p => p.euclid(3, 7)),

  // Percussion: Swapped hi-hats for a broken, metallic clatter
  // Replaced euclidean rhythm with a chaotic, polyrhythmic pattern
  s("mt lt rim")
    .slow(1)
    .gain(0.18)
    .clip(0.2)
    .hpf(1500)
    .lpf(9000)
    .room(0.3)
    .size(0.4)
    .delay(0.3)
    .delaytime(0.4)
    .delayfeedback(0.4)
    .iter(1)
    .sometimes(p => p.striate(8).speed(2)),

  // New Layer: Unexpected vocal glitch texture
  // Using shabda samples chopped and randomized for rhythmic interest
  s("the_drum forever magnificent")
    .slow(4)
    .gain(0.12)
    .chop(32)
    .speed(rand.range(0.5, 1.5))
    .lpf(perlin.range(200, 1000).slow(6))
    .room(0.7)
    .size(0.6)
    .pan(sine.range(0.0, 1.0).slow(16))
    .sometimes(p => p.rev())
)