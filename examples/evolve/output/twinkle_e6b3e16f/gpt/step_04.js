setcps(70/60/4)

$: stack([
  note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
    .sound("triangle")
    .room(0.47)
    .lpf(sine.range(900, 3200).slow(12))
    .attack(0.03)
    .release(0.19)
    .delay(0.22)
    .delayfeedback(0.34)
    .sometimes(x => x.hpf(400)),
  note("c3 ~ g3 ~ a3 ~ g3 ~ f3 ~ e3 ~ d3 ~ c3 ~")
    .sound("sine")
    .gain(0.22)
    .room(0.29)
    .lpf(540)
    .attack(0.03)
    .release(0.20)
    .cutoff(tri.range(300, 950).slow(10))
    .sometimes(x => x.lpf(350)),
  "[bd ~] [bd bd] ~ bd"
    .sound("bd")
    .gain(0.18)
    .room(0.13)
    .every(4, x => x.gain(0.29).attack(0.11))
    .degradeBy(0.09),
  "<[hh ~ hh] [oh ~] [~]>"
    .sound("hh")
    .gain(0.11)
    .room(0.14)
    .cutoff(6200)
    .every(6, x => x.room(0.5).cutoff(9500))
])