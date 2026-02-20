setcps(70/60/4)

$: stack([
  note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
    .sound("triangle")
    .room(0.48)
    .lpf(sine.range(350, 2200).slow(9))
    .attack(0.08)
    .release(0.36)
    .delay(0.14)
    .delayfeedback(0.22)
    .every(8, x => x.distort(0.28).resonance(10))
    .every(4, x => x.rev())
    .every(12, x => x.vowel("i o"))
    .every(16, x => x.shape(0.34).degradeBy(0.09)),
  note("c3 ~ g3 ~ f3 ~ e3 ~ d3 ~ c3 ~")
    .sound("supersaw")
    .gain(0.14)
    .room(0.28)
    .lpf(320)
    .attack(0.15)
    .release(0.35)
    .cutoff(tri.range(240, 690).slow(14))
    .every(8, x => x.hpf(520).room(0.38).pan(0.10)),
  "[bd ~] [bd bd] ~"
    .sound("bd")
    .gain(0.11)
    .room(0.17)
    .every(4, x => x.gain(0.17).attack(0.13)),
  "[~ cr] [~ cr] ~"
    .sound("cr")
    .gain(0.11)
    .room(0.12)
    .attack(0.01)
    .release(0.12)
    .pan(sine.range(0.1, 0.9).slow(8))
    .degradeBy(0.11)
    .every(8, x => x.rev())
])