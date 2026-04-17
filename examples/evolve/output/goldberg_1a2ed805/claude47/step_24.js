samples('shabda/speech/en-GB/f:forever,aria,remember,listen'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(44/60/4)

// Variation XXIV: 2:03pm. Something cracks. The lament has been
// holding its breath too long — now it exhales into motion.
// The bells become a tolling ostinato, insistent, a processional.
// The M-voice abandons Phrygian for something darker: an octatonic
// stagger, two whole-steps and a half, climbing where it used to
// fall. The heartbeat is gone — replaced by a bowed drone on the
// tritone, the diabolus itself, humming beneath everything.
// "kokoro" (heart) answers "sayonara" — the farewell becomes
// a reckoning. A low pulse of "hollow" breath punctuates the turn.

// M-voice: octatonic ascent, dark and staggered
$: note("<c3 d3 eb3 f3 gb3 ab3 a3 b3 a3 gb3 f3 eb3>").slow(11)
  .sound("square")
  .lpf(sine.range(500, 1400).slow(9))
  .attack(0.3).release(2).gain(0.16)

// Tolling bells — processional, insistent
$: note("[f4,c5] ~ [f4,c5] ~ [eb4,bb4] [eb4,bb4] ~ [gb4,db5]").slow(6)
  .sound("triangle")
  .attack(0.002).decay(1.4).sustain(0).release(2.2)
  .gain(0.17).room(0.92)

// Tritone drone — the diabolus hums
$: note("<[c2,gb2] [b1,f2]>").slow(14)
  .sound("sawtooth")
  .lpf(320).attack(5).release(6)
  .gain(0.13).room(0.9)

// Kokoro answers sayonara — heart meets farewell
$: s("~ ~ sayonara ~ ~ ~ kokoro ~ ~").slow(13)
  .speed("<0.78 0.7 0.85>")
  .gain(0.25).hpf(420).room(0.97).delay(0.6)

// Hollow breath — the turn made audible
$: s("~ ~ ~ ~ ~ hollow ~ ~").slow(10)
  .speed(0.55).gain(0.22).lpf(600).room(0.95)

// High shimmer — memory refracted, brittle now
$: note("<f6 gb6 eb6 b5>").slow(15)
  .sound("sine")
  .attack(3).release(5)
  .gain(perlin.range(0.05, 0.09).slow(7))
  .room(0.98).delay(0.4)