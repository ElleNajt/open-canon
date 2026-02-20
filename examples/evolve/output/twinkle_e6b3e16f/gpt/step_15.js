setcps(70/60/4)

$: stack([
  note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
    .sound("triangle")
    .room(0.67)
    .lpf(sine.range(1100, 3600).slow(16))
    .attack(0.03)
    .release(0.51)
    .delay(0.19)
    .delayfeedback(0.31)
    .every(8, x => x.distort(0.47).resonance(44))
    .every(6, x => x.rev())
    .sometimes(x => x.pan(0.17))
    .sometimes(x => x.vowel("a o")),
  note("c3 ~ g3 ~ f3 ~ e3 ~ d3 ~ c3 ~")
    .sound("sine")
    .gain(0.11)
    .room(0.33)
    .lpf(370)
    .attack(0.16)
    .release(0.53)
    .cutoff(tri.range(350, 1900).slow(14))
    .every(8, x => x.hpf(670).room(0.47).pan(0.82)),
  "[bd ~] [bd bd] ~"
    .sound("bd")
    .gain(0.15)
    .room(0.19)
    .every(4, x => x.gain(0.22).attack(0.15))
    .degradeBy(0.2),
  "[~ cp] cp ~"
    .sound("cp")
    .gain(0.09)
    .attack(0.01)
    .release(0.07)
    .room(0.21)
    .every(4, x => x.gain(0.13).pan(0.60))
    .degradeBy(0.16),
  "[hh hh] [~ hh] hh ~"
    .sound("hh")
    .gain(0.07)
    .room(0.12)
    .attack(0.01)
    .release(0.04)
    .every(4, x => x.pan(0.84))
    .degradeBy(0.11)
])