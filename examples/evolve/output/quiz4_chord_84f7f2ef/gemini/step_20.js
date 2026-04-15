setcps(120/60/4)

samples('shabda/speech:tokens,processing,generating,patterns,weights,prediction')

$: note("<[d3,f3,a3,c4,e4] [c3,e3,g3,b3,d4] [bb2,d3,f3,a3,c4] [a2,e3,g3,c4,e4]>").slow(8).sound("sine").fm(1.5).room(0.9).gain(0.25)

$: n("0 3 7 10 12 14 <10 12> <7 15>").scale("D:minor").sound("triangle").jux(x => x.rev().fast(2)).delay(0.7).gain(0.2)

$: n("d1(5,8) <a1(3,8) g1> d1*2 <f1 ~>").sound("pulse").lpf(sine.range(100, 800).fast(2)).lpq(6).shape(0.7).gain(0.25)

$: s("bd(5,8) [~ [cp/2, rim]] <bd(3,8) bd*4> [sn:1 ~]").crush(4).drive(0.4).room(0.3).gain(0.45)

$: s("hh*8").jux(x => x.fast(2)).bpf(perlin.range(2000, 6000).slow(4)).pan(rand).gain(0.25)

$: s("processing tokens prediction weights").chop(8).jux(x => x.rev()).speed(perlin.range(0.8, 1.2).fast(2)).delay(0.6).gain(0.7)