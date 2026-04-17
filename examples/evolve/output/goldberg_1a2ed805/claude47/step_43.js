samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(42/60/4)

// Variation XLIII: 5:34pm. Someone has closed the piano lid — not
// violently, just decisively. The room answers with its own music:
// the kettle beginning to rise toward a whistle (but never arriving),
// a wind chime in the neighbor's yard catching a gust, and a single
// word — "kokoro" (heart) — spoken so softly it could be mistaken
// for a sigh. The harmony has shifted to D phrygian, darker, with
// a flat second that keeps wanting to fall. A plucked bass pulse
// has replaced the refrigerator drone. Something is about to happen,
// or has just happened, and we are caught in the space between.

// Plucked bass pulse — heartbeat replacing the drone
$: note("d2 ~ ~ d2 ~ ~ d2 ~").slow(2)
  .sound("triangle")
  .attack(0.002).decay(0.4).sustain(0).release(0.3)
  .lpf(380).gain(0.18).pan(0.5)

// Kettle rising toward a whistle that never comes
$: note("a5").sound("sine")
  .gain(sine.range(0.04, 0.11).slow(12))
  .lpf(sine.range(1200, 3800).slow(12))
  .room(0.7).pan(0.3)

// Wind chimes — neighbor's yard, caught in a gust
$: n("<0 2 4 ~ 3 ~ 1 5 ~ ~ 2 ~>").scale("D:phrygian").add(24)
  .sound("triangle").slow(6)
  .attack(0.001).decay(0.8).sustain(0).release(1.4)
  .gain(0.1).lpf(4500).room(0.85).delay(0.3).dt(0.375)
  .pan(sine.range(0.6, 0.9).slow(7))

// The phrygian descent — flat second falling toward the tonic
$: note("<[~ eb4 d4 c4 bb3] ~ ~ [~ f4 eb4 d4] ~>").slow(12)
  .sound("sine")
  .attack(0.01).decay(1.4).sustain(0.1).release(2.2)
  .lpf(1800).gain(0.13).room(0.9)

// kokoro — heart — mistaken for a sigh
$: s("~ ~ ~ ~ ~ ~ kokoro ~ ~ ~ ~ ~").slow(11)
  .speed(0.72).gain(0.13)
  .lpf(1100).room(0.9).pan(0.55)