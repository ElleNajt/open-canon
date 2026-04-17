samples('shabda/speech/en-GB/f:forever,aria,remember,listen'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(52/60/4)

// Variation XXV: 2:17pm. The reckoning breaks into dance.
// What was processional becomes ritual — a limping 7/8 pulse,
// the octatonic now clipped into a jagged ostinato that spins
// rather than climbs. The tritone drone is exorcised; in its
// place, a pizzicato bass walks a chromatic line, nervous and
// alive. The bells scatter into bright points of light. A new
// voice emerges: "listen" in English, a command, an invitation.
// The lament remembers it has a body.

// Limping ostinato — octatonic fragment, 7-beat loop
$: note("c3 eb3 gb3 f3 eb3 c3 b2").fast(1.4).slow(2)
  .sound("pulse")
  .lpf(perlin.range(700, 2200).slow(5))
  .attack(0.01).release(0.18).gain(0.17)

// Pizzicato chromatic bass — nervous walk
$: note("<a1 bb1 b1 c2 b1 bb1 a1 gs1>").slow(6)
  .sound("triangle")
  .attack(0.002).decay(0.3).sustain(0).release(0.2)
  .gain(0.2).lpf(1200)

// Scattered bell points — pointillist light
$: note("[gb5 ~ db6] ~ [bb5 ~] [f6 eb6 ~ gb5]").slow(4)
  .sound("sine")
  .attack(0.001).decay(0.6).sustain(0).release(1.1)
  .gain(0.14).room(0.88).delay(0.35)

// Listen — the command, close and dry
$: s("~ ~ listen ~ ~ ~ ~ ~ ~ ~ listen ~").slow(9)
  .speed("<0.92 1.05 0.88>")
  .gain(0.26).hpf(300).room(0.4)

// Kokoro still answers — but distant now, a memory of the turn
$: s("~ ~ ~ ~ kokoro ~ ~ ~").slow(12)
  .speed(0.72).gain(0.19).hpf(500).room(0.98).delay(0.7)

// High shimmer — refracted, faster breath
$: note("<f6 gb6 db6 eb6 b5 c6>").slow(10)
  .sound("sine")
  .attack(1.5).release(3)
  .gain(perlin.range(0.06, 0.1).slow(5))
  .room(0.96)