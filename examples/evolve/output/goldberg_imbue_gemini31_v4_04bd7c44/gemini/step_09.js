samples('shabda/speech:strudel_is_awesome')

$: note("c4 d4 e4 g4 c5 b4 a4 g4")
  .s("strudel_is_awesome")
  .slow(4)
  .room(0.5)
  .size(0.8)
  .delay(0.4)
  .dt(0.25)
  .dfb(0.6)
  .jux(rev)

$: s("bd(<3 5>,8) [~ sn] bd [~ <sn cp>]")
  .room(0.2)
  .gain(1.2)

$: s("hh*16")
  .gain(sine.range(0.3, 0.8).fast(4))
  .pan(sine.range(0.2, 0.8).fast(2))