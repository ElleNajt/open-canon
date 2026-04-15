// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: the ground stays, but it learns to breathe, answer, and confess.

samples('shabda/speech/en-GB/m:goldberg,variations,dream_in_counterpoint')

setcps(72/60/4)

$: note("g3 gb3 e3 d3 b2 c3 d3 g2")
  .slow(2)
  .every(4, p => p.transpose(12))
  .sound("triangle")
  .lpf(sine.range(140, 1400).slow(8))
  .gain(0.42)

$: note("d4 e4 fs4 g4 a4 b4 c5 b4")
  .slow(2)
  .sound("piano")
  .gain(0.16)
  .delay(0.28)
  .room(0.18)

$: s("[hh*6 ~ hh*2]")
  .fast(2)
  .gain(0.11)
  .hpf(5200)
  .pan(0.68)
  .room(0.08)

$: s("~ sn ~ sn")
  .slow(1)
  .gain(0.12)
  .lpf(6500)
  .room(0.22)
  .pan(0.45)

$: note("<g4 b4 d5 g5> <fs4 a4 cs5 fs5> <e4 g4 b4 e5> <d4 fs4 a4 d5>")
  .slow(4)
  .sound("supersaw")
  .lpf(sine.range(280, 2400).slow(12))
  .gain(0.14)
  .room(0.32)

$: s("goldberg ~ variations ~ dream_in_counterpoint ~")
  .slow(4)
  .gain(0.19)
  .delay(0.35)
  .room(0.28)
  .hpf(180)