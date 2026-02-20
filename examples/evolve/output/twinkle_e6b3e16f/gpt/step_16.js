setcps(70/60/4)

$: stack([
  note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
    .sound("triangle")
    .room(0.59)
    .lpf(sine.range(800, 3600).slow(10))
    .attack(0.03)
    .release(0.38)
    .delay(0.15)
    .delayfeedback(0.24)
    .every(8, x => x.distort(0.19).resonance(26))
    .every(4, x => x.rev())
    .sometimes(x => x.pan(0.13))
    .sometimes(x => x.vowel("o u")),
  note("c3 ~ g3 ~ f3 ~ e3 ~ d3 ~ c3 ~")
    .sound("sine")
    .gain(0.10)
    .room(0.21)
    .lpf(300)
    .attack(0.10)
    .release(0.41)
    .cutoff(tri.range(310, 900).slow(14))
    .every(8, x => x.hpf(630).room(0.37).pan(0.74)),
  "[bd ~] [bd bd] ~"
    .sound("bd")
    .gain(0.14)
    .room(0.13)
    .every(4, x => x.gain(0.18).attack(0.10))
    .degradeBy(0.29),
  "[hh hh] [~ hh] hh ~"
    .sound("hh")
    .gain(0.05)
    .room(0.05)
    .attack(0.01)
    .release(0.03)
    .every(2, x => x.pan(0.68))
    .degradeBy(0.19)
])