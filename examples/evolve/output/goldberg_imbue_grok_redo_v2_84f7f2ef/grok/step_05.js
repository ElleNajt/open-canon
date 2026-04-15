setcps(76/60/4)
samples('shabda/speech:stru_del,e_volve,gro_ove,min_or')

$: note("g3*2 ab3 e3 d3 bb2*2 c3 d3 g2*2")
.slow(2)
.sound("pulse")
.lpf(perlin.range(70,900).slow(8))
.gain(0.6)
.trem(0.35)

$: note("g4 ab4*2 e4 d4 b3 c4*2 d4 g3 fs3 eb3*2")
.slow(2)
.sound("sawtooth")
.gain(0.32)
.jux(rev)
.delay(0.18)
.fm(0.4)

$: note("d5 eb5 fs5 g5*2 b5 a5 g5 fs5*2 e5 d5")
.slow(2)
.sound("piano")
.gain(0.38)
.attack(0.008)
.decay(0.35)
.lpf(2500)

$: stack(
  euclid(3,8,"bd"),
  euclid(3,16,"sn"),
  euclid(5,16,"cp?"),
  euclid(9,16,"hh rd?")
).slow(2)
.gain(0.28)
.hpf(110)
.room(0.18)
.swing(0.12)

$: s("[e_volve gro_ove]*[4 8]?,[stru_del*2 min_or*4]?")
.fast(2)
.gain(0.25)
.hpf(1300)
.chop(24)
.speed(sine.range(0.85,1.15))

$: n("[0*2 2 4][2 4*2 7][0 3 7*2]")
.scale("G:minor")
.slow(2)
.sound("supersaw")
.gain(0.24)
.detune(perlin.range(-20,20).slow(6))