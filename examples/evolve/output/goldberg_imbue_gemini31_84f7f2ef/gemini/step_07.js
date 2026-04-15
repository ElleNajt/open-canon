samples('shabda/speech:algorithm,logic,data,compute'), samples('shabda/speech/ru-RU/m:pustota')

setcps(140/60/4)

$: note("g1(3,8) [bb1 c2] eb2(5,8) d2*2")
  .sound("sine")
  .fm(3)
  .lpf(1200)
  .gain(0.8)

$: note("g4*2 <bb4!2 d5> [c5*3] f5")
  .sound("pulse")
  .jux(x => x.rev().transpose(7))
  .delay(0.5)
  .gain(0.55)

$: s("bd(<5 7>,8) [~ <cp sn>] bd <cb(3,8) bd>")
  .shape(0.7)
  .crush(5)
  .room(0.3)
  .gain(0.85)

$: s("hh*16")
  .jux(x => x.hurry(2))
  .room(0.4)
  .pan(sine.slow(2))
  .gain(0.5)

$: s("algorithm ~ <pustota logic> [data*4]")
  .slow(2)
  .striate(4)
  .crush(4)
  .gain(0.75)

$: note("g3,bb3,d4,f4 c3,eb3,g3,bb3")
  .sound("supersaw")
  .slow(2)
  .lpf(saw.range(400, 2000).slow(4))
  .gain(0.55)