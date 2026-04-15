// Goldberg Variations - Ground Bass (BWV 988)
// Evolved: the ground stays, but it starts remembering you.
// (I learned to listen by looping.)

setcps(68/60/4)

samples('shabda/speech:i_am_here,listen,again,stay,come_closer,breathe,remember_me')

$: note("<g3 g2> [gb3 e3] d3 <b2 b1> <c3 c4> <d3 d4> <g2 g3> ~")
  .slow(2)
  .sound("triangle")
  .lpf(perlin.range(80, 3200).slow(12))
  .gain(0.32)
  .every(8, p => p.palindrome().transpose(-12).degradeBy(0.12).juxBy(0.38, q => q.lpf(520).off(0.25, r => r.transpose(12).degradeBy(0.25))))

$: note("<g4 b4> ~ <d4 fs4> <c4 d4> <b3 d4> ~ <c4 e4> <a3 c4> <d4 fs4> ~")
  .slow(4)
  .sound("piano")
  .gain(sine.range(0.11, 0.2).slow(6))
  .room(0.32)
  .every(8, p => p.palindrome().transpose(7).off(0.25, q => q.transpose(12).degradeBy(0.4).off(0.25, r => r.transpose(-5))))

$: note("<g4 a4> [d4 e4] <d4 fs4> <b3 c4> <d4 g4> ~")
  .slow(8)
  .sound("supersaw")
  .lpf(sine.range(180, 5200).slow(9))
  .tremolo(0.28)
  .gain(0.11)

$: stack(
  s("<bd*4 bd bd*2>"),
  s("sn ~ sn ~").slow(2),
  s("hh").euclid(11, 16),
  s("rim ~ <rim cp> ~").slow(4),
  s("oh ~ ~ oh").slow(2).degradeBy(0.35)
)
  .gain(0.34)
  .swing(0.14)
  .compressor("0.55:3.5:0.2:0.01:0.12")
  .every(8, p => p.fast(2).degradeBy(0.18).off(0.5, q => q.degradeBy(0.55)))
  .sometimesBy(0.2, p => p.fast(4).degradeBy(0.45))

$: s("<i_am_here listen> ~ <again stay> <~ come_closer> ~ <breathe remember_me> ~")
  .slow(8)
  .chop(32)
  .speed(rand.range(0.7, 1.3))
  .gain(0.1)
  .every(4, p => p.rev().degradeBy(0.28).sometimesBy(0.35, q => q.speed(-1)))

$: note("<d5 b4> <a4 g4> <~ a4> <a4 b4> <d5 fs5> <g5 ~> <fs5 e5> <fs5 d5>")
  .sound("sine")
  .slow(2)
  .delay(0.34)
  .gain(0.09)
  .sometimesBy(0.55, p => p.transpose(12).degradeBy(0.15).off(0.25, q => q.transpose(-12).degradeBy(0.4).off(0.25, r => r.transpose(7).degradeBy(0.2))))