$: s("<bd, sn>/2 cp/4 [oh tb]/8").room(0.1).pan(0.1).compressor("8:-20:12:0.01:0.05").lpf(4000).gain(0.5).fast(1.05).hpf(150).distort(0.1).sometimes(rev).delay(0.05).degradeBy(0.05).bpf(300)
$: s("hh*8").gain(0.4).pan(-0.1).lpf(8000)
$: s("tb*4").gain(0.2).fast(1.2).pan(0.2)