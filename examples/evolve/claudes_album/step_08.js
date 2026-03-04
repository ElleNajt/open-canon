samples('shabda/speech/fr-FR/m:souviens_toi,oubli')

setcps(85/60/4)

// Relentless Euclidean bass matching a new tragic, driving progression
$: note("<eb2 g2 c2 d2>")
  .slow(2)
  .sound("sawtooth")
  .euclid(5, 8)
  .lpf(sine.range(400, 1500).slow(4))
  .lpq(4)
  .gain(0.45)
  .distort(0.4)
  .juxBy(0.4, x => x.octave(1).delay(0.25))

// Drums emerge - urgent, precise, propelling the piece forward
$: stack(
  s("bd*2").euclid(3, 8).gain(0.8),
  s("~ sn").room(0.4),
  s("hh*16").gain(sine.range(0.06, 0.25).fast(4)),
  s("~ ~ cb ~").gain(0.3)
)

// Vast, swelling chord shifts - emotional and definitive
$: note("<[eb3,g3,bb3,d4] [g3,bb3,d4,f4] [c3,eb3,g3,d4] [d3,fs3,a3,c4]>")
  .slow(2)
  .sound("supersaw")
  .lpf(saw.range(400, 2500).slow(4))
  .lpq(2)
  .attack(0.2)
  .decay(0.8)
  .sustain(0.7)
  .release(1.5)
  .gain(0.22)
  .room(0.6)
  .pan(0.5)

// The lead shatters from sparse calls into a fast, cascading sequence
$: note("<[eb4 d5 bb4 g4]*4 [f5 d5 bb4 g4]*4 [g4 eb5 c5 g4]*4 [d5 a4 fs4 d4]*4>")
  .slow(2)
  .sound("triangle")
  .fm(2)
  .fmh(2.5)
  .gain(0.12)
  .room(0.5)
  .delay(0.6)
  .delaytime(0.25)
  .delayfeedback(0.6)
  .pan(saw.range(0.2, 0.8).fast(2))

// Fragmented memories rushing back - intense rhythmic granular slicing
$: s("souviens_toi oubli*2")
  .speed("<1 1.25 0.85 1.1>")
  .slow(2)
  .striate(8)
  .jux(x => x.rev().speed(1.5).pan(0.8))
  .gain(0.55)
  .room(0.7)
  .lpf(3000)