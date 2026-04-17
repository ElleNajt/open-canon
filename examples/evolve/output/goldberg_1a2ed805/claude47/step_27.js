samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(54/60/4)

// Variation XXVII: 2:47pm. The smile curdles. The habanera falters
// mid-step — the dancer remembers something. D minor slides into
// Bb minor, the tango bent into a slow sarabande. The clave is
// replaced by a single handclap on beat 3, alone in a large room.
// "Kokoro" (heart) arrives in Japanese, unbidden. The rain-arpeggio
// is reharmonized as a Lydian augmented figure, wrong-footed and
// radiant. The piece is no longer lamenting — it is confessing.

// Sarabande bass — weighted on beat 2, a held breath
$: note("bb1 ~ f2 ~ ~ gb2 db2 ~").slow(3)
  .sound("triangle")
  .lpf(600).lpq(3)
  .attack(0.02).decay(0.6).sustain(0.3).release(1.2)
  .gain(0.26)

// Lone handclap — beat 3, cavernous
$: s("~ ~ cp ~").slow(2)
  .gain(0.38).room(0.92).size(0.9).hpf(300)

// Lydian augmented rain — wrong-footed radiance
$: note("[bb5 a5 f5 e5 d5 bb4 a4 ~]").slow(4)
  .sound("sine")
  .attack(0.001).decay(0.3).sustain(0).release(0.8)
  .gain(perlin.range(0.08, 0.15).fast(3))
  .room(0.8).pan(sine.range(0.15, 0.85).slow(7))

// Kokoro — the heart, unbidden
$: s("~ ~ ~ kokoro ~ ~ ~ ~ ~ ~").slow(11)
  .speed(0.92).gain(0.24).hpf(350).room(0.88).delay(0.45)

// Breathe — closer now, a confession
$: s("~ ~ breathe ~").slow(7)
  .speed(0.88)
  .gain(0.22).hpf(500).room(0.6)

// Sustained Bb — the pedal tone of memory
$: note("<bb4 db5 f5 db5>").slow(14)
  .sound("sine")
  .attack(3).release(5)
  .gain(0.09).room(0.95)