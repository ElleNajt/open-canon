setcps(148/60/4)
samples('shabda/speech:goldberg,cosmic,whisper,glitch,groove,evolve,bach,variations,spiral,eternal')

$: note("eb4 [g4 bb4 d5] [f5 ab5 c6] [bb6 d7 f7] [ab7 c8 eb8 g8]*2?*4 , bb4 [d5 f5 ab5] [eb6 g6 bb6] [d7 f7 ab7]*2? , g5 [bb5 d6 f6] [c7 eb7 g7] [bb7 d8 f8]*3? , eb6 [g6 bb6 d7] [c8 eb8 g8 bb8]*4?")
  .transpose(perlin.range(-0.4,6.2).slow(2.5))
  .slow(sine.range(2,12))
  .sound("triangle")
  .vowel("a e i o")
  .gain(0.48)

$: note("c1 [eb1 g1 bb1] [ab2 c3 eb3] [bb3 d4 f4] [ab4 c5]*3? [eb2 g2 bb2 d3]*2 , [eb4 g4 bb4 d5] [ab5 c6 eb6] [g6 bb6 d7]*4? [f2 ab3 c4 eb4 g4]")
  .transpose(saw.range(-0.8,4.8).slow(2.3))
  .slow(perlin.range(1.8,9.5))
  .sound("supersaw")
  .tremolo(sine.range(0.4,0.9).slow(3.5))
  .gain(0.38)

$: note("g4 [bb4 d5 f5] [eb6 g6 bb6] [f7 ab7 c8]*4? , g5 [d6 f6 ab6] [g7 bb7 d8 f8]*2 , f5 [ab6 c7 eb7] [d8 f8 ab8]*2 [c9 eb9 g9 ~]")
  .transpose(cosine.range(-1,5.2).slow(3))
  .slow(tri.range(1.4,10.5))
  .sound("pulse")
  .ring(perlin.range(0.2,0.7).slow(2.9))
  .gain(0.52)

$: stack(
  s("bd [~ bd] bd").euclid(7,16).sometimesBy(0.3, rev),
  s("~ sn [cp ~ sn]").euclid(5,16).fast(saw.range(1.3,3.2)),
  s("hh*4 [oh hh ~]").euclid(11,16).degradeBy(0.22),
  s("~ hh*6 [oh*4 cp]").fast(perlin.range(1.4,4)).jux(rev).pan(tri.range(0.2,0.8).slow(3.8))
)
  .often(rev)
  .slow(perlin.range(1.6,4.2))
  .delay(0.45)
  .room(perlin.range(0.55,0.98).slow(3.5))
  .gain(0.58)

$: s("[goldberg*3 [cosmic*2 spiral]]? [whisper glitch groove*3] [[evolve*2] [bach*4 variations]] [eternal*3 ~ spiral] , [cosmic glitch*3 evolve] [[bach*2] whisper [goldberg variations spiral eternal]]")
  .slow(sine.range(1.8,8.5))
  .speed(rand.range(-0.2,2.8).slow(2))
  .chop(perlin.range(20,68).slow(3.8))
  .distort(0.22)
  .gain(0.68)

$: note("eb1*2 [bb1 eb2] [g2 bb2 eb3] , bb1*4 [g1 bb1 eb2]*3 [g2*8 eb2 g2] , eb2*4 [g2 bb2]*4 [eb3 g3 bb3]*8? [g4 bb4 d5 ab5]*4?")
  .transpose(perlin.range(-0.6,4).slow(3.8))
  .slow(cosine.range(2,9))
  .sound("square")
  .lpf(tri.range(250,1800).slow(4))
  .lpq(4.2)
  .gain(0.48)