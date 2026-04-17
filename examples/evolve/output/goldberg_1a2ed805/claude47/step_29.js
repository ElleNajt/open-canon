samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(48/60/4)

// Variation XXIX: 2:58pm. "Stay" was answered by silence, and silence
// is its own reply. The organ lets go of Db and slides — scandalously —
// into A major, the key of sunlight through dirty windows. The pizzicato
// is dismissed. In its place: a music box, wound too tight, playing a
// nursery tune it half-remembers. The rain reverses direction again,
// falling now in thirds, the way rain actually falls. "Sayonara" enters
// not as goodbye but as permission. And underneath it all, a heartbeat
// kick — the first pulse in this piece that isn't metaphor.

// Organ — slid sideways into A major, surprised to find itself there
$: note("<a2 e2 cs2 a1>").slow(14)
  .sound("sawtooth")
  .lpf(sine.range(280, 520).slow(11)).lpq(1.8)
  .attack(5).release(8)
  .gain(0.16)

// Music box — wound tight, half-remembering
$: note("e5 a5 cs6 ~ b5 a5 ~ e5 cs5 ~ a4 b4")
  .slow(7)
  .sound("triangle")
  .attack(0.001).decay(0.08).sustain(0).release(0.3)
  .gain(0.2).room(0.6)

// Rain in thirds — falling the way rain actually does
$: note("[<cs5 e5> <a4 cs5> <e4 a4> <cs4 e4>]").slow(4)
  .sound("sine")
  .attack(0.001).decay(0.5).sustain(0).release(1.4)
  .gain(perlin.range(0.06, 0.11).fast(3))
  .room(0.9).delay(0.35)

// Heartbeat — the first non-metaphorical pulse
$: s("bd ~ ~ bd ~ ~ ~ ~").slow(4)
  .gain(0.32).lpf(180).room(0.4)

// Sayonara — permission, not farewell
$: s("~ ~ ~ sayonara ~ ~ ~ ~ ~ ~ ~").slow(11)
  .speed(0.88).gain(0.26).hpf(350).room(0.9).delay(0.45)

// Sunlight through dirty windows
$: note("<a5 cs6 e6 a6>").slow(12)
  .sound("sine")
  .attack(3).release(5)
  .gain(0.09).room(0.95).pan(0.35)