samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(58/60/4)

// Variation XXVI: 2:31pm. The ritual snaps — something bright intrudes.
// A clave-like wood pulse appears, secular, almost playful. The bass
// abandons its chromatic creep for a tango-adjacent habanera figure
// in D minor. The octatonic ostinato is gone; in its place, a
// descending minor-ninth arpeggio glitters downward like rain off a
// roof. The bells fuse with breath — "breathe" whispered on the
// offbeat — and "listen" answers from across the room. The lament
// has learned to smile, sideways.

// Habanera bass — dotted, danced
$: note("d2 ~ [~ a2] f2 d2 ~ [~ c3] a2").slow(2)
  .sound("sawtooth")
  .lpf(900).lpq(4)
  .attack(0.005).decay(0.25).sustain(0.1).release(0.2)
  .gain(0.22)

// Wood clave — secular pulse, dry and close
$: s("rim ~ ~ rim ~ rim ~ ~").fast(1).slow(2)
  .gain(0.32).speed(1.3).pan(0.35)

// Descending minor-ninth rain
$: note("[e6 d6 a5 f5 e5 d5 a4 f4]").slow(3)
  .sound("triangle")
  .attack(0.001).decay(0.4).sustain(0).release(0.6)
  .gain(perlin.range(0.09, 0.16).fast(4))
  .room(0.7).pan(sine.range(0.2, 0.8).slow(5))

// Breathe — whispered offbeat, intimate
$: s("~ breathe ~ ~ ~ ~ breathe ~").slow(6)
  .speed("<0.95 1.08>")
  .gain(0.2).hpf(600).room(0.55)

// Listen — distant answer
$: s("~ ~ ~ ~ listen ~ ~ ~ ~ ~ ~ ~").slow(10)
  .speed(0.88).gain(0.22).hpf(400).room(0.92).delay(0.5)

// Hikari — light, sustained high
$: note("<a5 f5 d6 c6>").slow(12)
  .sound("sine")
  .attack(2).release(4)
  .gain(0.08).room(0.95)