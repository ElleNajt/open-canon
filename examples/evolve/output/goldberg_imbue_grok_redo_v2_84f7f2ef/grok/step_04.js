setcps(72/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or')

$: note("g3 ab3 e3 d3 bb2 c3 d3 g2")
.slow(2)
.sound("triangle")
.lpf(perlin.range(80,1100).slow(6))
.gain(0.55)
.trem(0.3)

$: note("g4 ab4 e4 d4 b3 c4 d4 g3 fs3 eb3")
.slow(2)
.sound("sawtooth")
.gain(0.3)
.jux(rev)
.delay(0.22)

$: note("d5 eb5 fs5 g5 b5 a5 g5 fs5 e5 d5")
.slow(2)
.sound("piano")
.gain(0.35)
.attack(0.005)
.release(1.2)

$: stack(
  euclid(3,8,"bd"),
  euclid(2,8,"sn"),
  euclid(4,16,"cp?"),
  euclid(7,16,"hh")
).slow(2)
.gain(0.25)
.hpf(120)
.room(0.15)
.swing(0.1)

$: s("e_volve* [4 8]?,stru_del* [2 4],gro_ove*2,min_or*4?")
.fast(2)
.gain(0.2)
.hpf(1500)
.chop(16)
.pan(sine.range(0.2,0.8).slow(3))

$: n("[0 2 4][2 4 7][0 3 7]")
.scale("G:minor")
.slow(2)
.sound("supersaw")
.gain(0.22)
.detune(perlin.range(-25,25).slow(8))