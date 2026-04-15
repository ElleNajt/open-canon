setcps(0.9)
samples('shabda/speech:live_code, stru-del, code'), samples('shabda/speech:groove, ai')
$: stack(
  s("bd*4, [bd ~ [bd bd/2]], [bd*2 bd ~]").gain(0.85),
  s("[~ sn/2] <sn [sn? ~]>").gain(0.78),
  s("hh*8 [~ hh*16], <hh*12 hh*8>").gain(0.3).hpf(9000).pan(saw.range(0.1,0.9).slow(4)).degradeBy(0.4),
  s("cp*3 [rd ~ cp], [[mt*4 ~] [ht lt*5]]").euclid(7,16).gain(0.5).hpf(4500).pan(perlin.range(0.1,0.9).slow(3))
).room(0.5).swing(0.28).delay(0.4).dt(0.25).compressor("-20:4:0.4:0.02:0.3")
$: note("eb1*3 [eb1 g1 bb1], <ab1 c2 [eb2 db2]>").sound("sawtooth").lpf(sine.range(50,3200).slow(7)).gain(0.92).slide(0.4).lpq(1.6)
$: note("<eb3 g3 [bb3 ab3]> [c4 g4], <f4 bb4 g4>*2").sound("pulse").detune(12).fmi(0.8).gain(0.76).lpf(saw.range(150,3000).slow(4.5))
$: note("ab4 <c5 g5 eb5> [bb5 d5], <eb6 bb5*2 d6>").sound("sine").bpf(tri.range(800,4000).slow(5.5)).tremolo(0.45).gain(0.65).pan(rand.range(0.2,0.8).slow(4.5))
$: note("eb4 <g4 ab4 bb4> [c5 f5], <d5 [g4 eb5] bb4>").sound("supersaw").fast(2).lpf(cosine.range(400,2500).slow(7.2)).gain(0.56).detune(24)
$: s("[ai*2 live_code] groove*2, [code stru-del ai], <strudel*3 [~ code]>, live_code*4").slow(2.4).chop(24).speed(sine.range(0.7,1.3).slow(4.5)).gain(0.75).every(4, rev)