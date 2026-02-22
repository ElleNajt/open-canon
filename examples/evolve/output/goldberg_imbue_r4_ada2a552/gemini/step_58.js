setcps(140/60/4)
samples('shabda/speech:binary,protocol,fragment,memory,corrupt,system,data,stream,glitch,error,reboot,sequence')

$: note("<d4 [d4 f4]? a4 c5? g4>").scale("d:minor").fast(2).every(3, rev)
  .sound("triangle").release(0.15)
  .crush(7)
  .lpf(perlin.range(400, 5000).slow(6)).lpq(9)
  .delay(0.5).dt("1/6").dfb(0.5)
  .room(0.3)
  .gain(0.08)

$: note("<d5 f5 a5 c6 d5 f5?>").scale("d:minor").euclid(7,16).fast(2)
  .sound("square").release(0.1)
  .penv(300).pdecay(0.04)
  .shape(0.4)
  .lpf(1800)
  .pan(saw.range(0, 1).slow(6))
  .gain(0.07)

$: s("<binary protocol fragment memory>? corrupt system <data stream>").degradeBy(0.25).slow(4)
  .every(4, x => x.speed("<1 2 -1>"))
  .vowel("a e i o u".slow(2))
  .ring(perlin.range(0.2, 0.8).slow(8))
  .delay(0.4).dfb(0.8)
  .gain(0.1)

$: note("<as3m7 ds4m9> <gs3maj7 cs4maj7>").chord().slow(16).jux(x => x.octave(-1))
  .sound("sawtooth").attack(1).release(8)
  .leslie(perlin.range(1, 8).slow(16))
  .phaser(perlin.range(0.1, 8).slow(12))
  .room(0.6)
  .gain(0.1)

$: stack(
  s("bd").euclid(4,8),
  s("[~ sn] [~ sn?]*2").fast(2),
  s("rim").euclid(5,16).fast(2)
).compressor("-28:10:4:0.01:0.25")
  .distort(0.5)
  .crush(6)
  .delay(0.2).dt("3/16").dfb(0.4)
  .gain(0.15)

$: s("[hh(<3 5 7>,16), <~ oh>]").fast(2)
  .coarse(8)
  .hpf(perlin.range(5000, 14000).slow(6)).hpq(4)
  .delay(0.3).dt("1/16").dfb(0.5)
  .pan(perlin.range(0.2, 0.8).slow(7))
  .gain(0.07)