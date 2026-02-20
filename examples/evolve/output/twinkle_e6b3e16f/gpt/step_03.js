setcps(70/60/4)

$: stack([
  note("c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~ g4 g4 f4 f4 e4 e4 d4 ~ g4 g4 f4 f4 e4 e4 d4 ~ c4 c4 g4 g4 a4 a4 g4 ~ f4 f4 e4 e4 d4 d4 c4 ~")
    .sound("triangle")
    .room(0.47)
    .lpf(sine.range(1200, 3400).slow(18))
    .attack(0.03)
    .release(0.21)
    .delay(0.22)
    .delayfeedback(0.32),
  note("c3 ~ g3 ~ a3 ~ g3 ~ f3 ~ e3 ~ d3 ~ c3 ~")
    .sound("sine")
    .gain(0.25)
    .room(0.26)
    .lpf(540)
    .attack(0.03)
    .release(0.23)
    .cutoff(tri.range(300, 950).slow(10)),
  "[bd ~] [bd bd] ~ bd"
    .sound("bd")
    .gain(0.21)
    .room(0.19)
    .every(4, x => x.gain(0.37).attack(0.07)),
  "<[hh ~ hh] [oh ~] [~]>".sound("hh").gain(0.11).room(0.14).cutoff(7000)
])