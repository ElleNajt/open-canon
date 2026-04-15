setcps(94/60/4)

$: stack(
  // Bass: Mutated into a squelching acid line, abandoning the broken glass for liquid mercury
  // Switched to sawtooth with heavy resonance and a moving cutoff sequence
  note("g1 f1 g1 eb1 d1 c1 g0 f1")
    .slow(2)
    .sound("sawtooth")
    .gain(0.6)
    .lpf(seq("200 400 800 1200 600 300 150 200").slow(1))
    .lpq(8.5)
    .distort(0.3)
    .slide(0.05)
    .room(0.05)
    .sometimes(p => p.striate(8).speed(0.5)),
  
  // Harmony: Abandoned the gamelan for a drifting, dissonant cloud pad
  // Long sustains, heavy chorus effect via detune, and random pitch wobbles
  note("cs5 fs4 b4 e5")
    .slow(8)
    .sound("triangle")
    .gain(0.12)
    .attack(2)
    .decay(1)
    .sustain(0.8)
    .release(4)
    .detune(rand.range(-15, 15).slow(4))
    .pan(sine.range(0.2, 0.8).slow(12))
    .room(0.8)
    .size(0.9)
    .chorus(0.6)
    .delay(0.4)
    .delaytime(0.75)
    .delayfeedback(0.6),
  
  // Percussion: Replaced the rigid march with a skittering, organic insect rhythm
  // Using euclid with odd steps and random sample selections from metallic hits
  s("mt,lt,rim,cb")
    .euclid(5, 8)
    .slow(0.5)
    .gain(0.35)
    .hpf(3000)
    .lpf(12000)
    .chop(rand.range(4, 16))
    .speed(rand.range(0.8, 1.2))
    .sometimes(p => p.rev())
    .swing(0.15)
    .room(0.3),
  
  // Kick: Transformed into a distant, muffled thud, pushing it to the background
  s("bd")
    .euclid(3, 16)
    .gain(0.5)
    .clip(0.6)
    .lpf(80)
    .room(0.4)
    .size(0.6)
    .early(0.02),

  // New Layer: A chaotic, glitchy melodic sequencer replacing the static
  // Short, staccato pulses playing a random scale fragment, heavily processed
  note("c4 d4 eb4 f4 g4 ab4 bb4")
    .slow(1)
    .sound("pulse")
    .gain(0.25)
    .decay(0.05)
    .sustain(0)
    .release(0.1)
    .chop(8)
    .speed(1.5)
    .lpf(saw.range(500, 3000).slow(4))
    .lpq(4)
    .distort(0.5)
    .crush(6)
    .pan(rand.range(0, 1).slow(2))
    .delay(0.2)
    .delaytime(0.375)
    .every(3, p => p.palindrome())
)