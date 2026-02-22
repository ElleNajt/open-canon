setcps(152/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("eb4 [g4 bb4 d5 f5] f5 [ab5 c6 eb6 g6] [bb6 d7 f7 ab7]*2?*4 , bb4 [d5 f5 ab5 c6 eb6] [g6 bb6 d7]*2? , g5 [bb5 d6 f6 ab6 c7] [eb7 g7 bb7]*3? , eb6 [g6 bb6 d7 f7] [ab7 c8 eb8]*4?")
  .transpose(sine.range(-0.5,5).slow(2.5))
  .slow(perlin.range(1.1,14))
  .sound("sine")
  .vowel("o a e i u")
  .gain(0.45)

$: note("c1 [eb1 g1 bb1 d2] [f2 ab2 c3] [eb3 g3 bb3 d4]*3? [ab1 c2 eb2 g2]*2 , [eb4 g4 bb4 d5] [f5 ab5 c6 eb6]*4? [g1 bb2 d3 f3 ab3 ~]")
  .transpose(perlin.range(-1,3.5).slow(2.2))
  .slow(perlin.range(1.1,13))
  .sound("supersaw")
  .fmi(tri.range(5,30).slow(2.8))
  .gain(0.32)

$: note("g4 [bb4 d5 f5 ab5] [c6 eb6 g6 bb6] [d7 f7 ab7]*4? , g5 [d6 f6 ab6 c7] [eb7 g7 bb7]*2 , f5 [ab6 c7 eb7 g7] [bb7 d8 f8]*2 [ab8 c9 eb9 ~ ~]")
  .transpose(saw.range(-1.2,4.2).slow(4.5))
  .slow(perlin.range(1.2,13))
  .sound("pulse")
  .tremolo(saw.range(0.3,0.85).slow(4))
  .gain(0.48)

$: stack(
  s("bd*2 [bd ~ bd]").euclid(7,16).sometimesBy(0.25, rev),
  s("~ [sn cp] [sn ~ cp]").euclid(6,16).fast(perlin.range(1.2,2.2)),
  s("hh*4 ~ [oh*4 hh*2]").euclid(13,16).degradeBy(0.22),
  s("~ hh*8 [oh*2 cp*4 ~]").fast(perlin.range(1.8,3.8)).juxBy(0.7, rev).pan(sine.range(0.2,0.8).slow(2.5))
)
  .slow(perlin.range(1.5,5.5))
  .room(rand.range(0.7,0.95).slow(4))
  .delay(perlin.range(0.3,0.5))
  .swing(0.14)
  .gain(0.62)

$: s("goldberg*4 [cosmic*3 whisper*2 glitch]? [groove evolve*3 bach] [variations*3 spiral*2] , eternal*4 [cosmic*2 glitch groove evolve ~] [whisper*3 goldberg bach*2 variations eternal spiral*4 ~ glitch cosmic*4]")
  .slow(perlin.range(1.2,11))
  .speed(rand.range(-0.3,2.4).slow(1.8))
  .chop(saw.range(10,48).slow(3.8))
  .hpf(cosine.range(100,500).slow(2.8))
  .gain(0.68)

$: note("eb1*4 [bb1*2 eb2] , bb1*8 g1*4 eb2*8 , [g2*2 bb2 eb3 g3]*4? bb3*4 [eb3 g3 bb3]*2 eb4*4?")
  .transpose(perlin.range(-0.7,2.8).slow(4.5))
  .slow(perlin.range(1.5,8.5))
  .sound("square")
  .lpf(sine.range(120,950).slow(2.8))
  .gain(0.38)