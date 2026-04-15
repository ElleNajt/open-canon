setcps(72/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or')

$: note("g3 ab3 e3 d3 bb2 c3 d3 g2")
.slow(2)
.sound("triangle")
.lpf(saw.range(100,1200).slow(8))
.gain(0.5)
.detune(sine.range(-20,20).slow(16))

$: note("g4 ab4 e4 d4 b3 c4 d4 g3 fs3 eb3")
.slow(2)
.sound("sawtooth")
.gain(0.3)
.pan(0.25)
.delay(0.25)

$: note("d5 eb5 fs5 g5 b5 a5 g5 fs5 e5 d5")
.slow(2)
.sound("piano")
.gain(0.35)
.attack(0.005)
.release(1.2)

$: stack(
  euclid(3,8,"bd"),
  euclid(2,8,"sn"),
  euclid(3,16,"cp?"),
  euclid(6,16,"hh")
).slow(2)
.gain(0.25)
.hpf(120)
.room(0.15)
.swing(0.08)

$: s("strudel*8?,evolve*4,gro_ove*2,min_or*4")
.fast(4)
.gain(0.18)
.hpf(4000)
.chop(12)
.pan(sine.range(0.2,0.8).slow(4))

$: n("[0 2 4][2 4 7][0 3 7]")
.scale("G:minor")
.slow(2)
.sound("supersaw")
.gain(0.2)
.detune(saw.range(-25,25).slow(8))
.room(0.25)