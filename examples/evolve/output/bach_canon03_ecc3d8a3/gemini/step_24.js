setcps(118/60/4)

// --- Voices ---
let padVoice = x => x
  .sound("supersaw")
  .gain(0.25)
  .attack(1.5)
  .release(5)
  .bpf(sine.range(600, 2000).slow(18))
  .bpq(8)
  .trem(sine.range(0.1, 0.2).slow(16))
  .room(0.5)
  .size(0.9)
  .delay(0.4)
  .dt(0.75)
  .dfb(0.6)

let bassVoice = x => x
  .sound("pulse")
  .gain(0.4)
  .attack(0.01)
  .release(0.3)
  .lpf(sine.range(180, 250).slow(17))
  .lpenv(3500)
  .lpdecay(0.08)
  .octave(-2)
  .cut(1)
  .shape(0.1)
  .drive(0.2)
  .jux(p => p.octave(-1).sound("sine").gain(p.gain()*0.8).lpf(120))

let arpVoice = x => x
  .sound("square")
  .gain(0.15)
  .lpf(800)
  .lpenv(4000)
  .lpdecay(0.1)
  .release(0.15)
  .velocity(perlin.range(0.4, 1).slow(7))
  .delay(0.5)
  .dt(0.25)
  .dfb(0.7)
  .pan(perlin.range(0.1, 0.9).slow(11))
  .crush(12)

let leadVoice = x => x
  .sound("supersaw")
  .gain(0.25)
  .attack(0.02)
  .release(1)
  .lpf(1500)
  .lpenv(4000)
  .lpdecay(0.5)
  .shape(0.2)
  .phaser(sine.range(0.1, 2).slow(9))
  .room(0.7)
  .size(0.95)
  .delay(0.5)
  .dfb(0.6)
  .dt(0.375)

// --- Samples ---
samples('shabda/speech:deep_space,endless,voyage,celestial,journey')

// --- Harmony & Melody ---
const chords = n("c4 g3 ab3 f3").slow(4).scale("C:minor").chord("m9 m7 M7 m7")

$: chords.voicing().apply(padVoice)

$: n("c ~ [c c c]/2 g ~ ab ~ <f f f>/2").slow(4).apply(bassVoice)

$: chords.arp("updown").fast(2).ply(perlin.range(1, 2).slow(8).round()).every(4, p => p.transpose(7))
  .apply(arpVoice).late(2).degradeBy(0.02)

$: n("g4~4 eb5 d5 c5~2 g5 f5 ab5~").slow(4).scale("C:natural_minor")
  .slide(-0.1)
  .sometimesBy(0.3, p => p.octave(1))
  .apply(leadVoice)
  .orbit(1)
  .late(4)

// --- Drums & Percussion ---
$: stack(
    s("bd*4").gain(1.1).cut(1),
    s("~ [sn cp] ~ [sn cp]~").every(4, p => p.s("[~ cp]!4").slow(2)).gain(0.8),
    s("[hh hh] [~ hh] hh [~ hh]").fast(2)
      .velocity(perlin.range(0.5, 1).slow(5)).gain(0.4)
      .crush(10).lpf(9000).hpf(100).swing(0.05),
    s("~ ~ ~ <oh mt>").gain(0.4).lpf(11000).release(0.3).dt("1/16").dfb(0.3),
    s("~ rim ~ rim").fast(2).gain(0.3).delay(0.6).dt("3/16").dfb(0.7).pan(perlin.range(0.2, 0.8).slow(9)),
    s("~*3 cr").slow(4).every(2, p => p.rev()).gain(0.3).room(0.5).lpf(12000)
  ).gain(0.9)
   .compressor()
   .compressorRatio(10)
   .compressorAttack(0.01)
   .compressorRelease(0.25)
   .postgain(1.1)

// --- Vocals ---
$: s("<voyage celestial> <journey ~> <deep_space endless>").slow(8)
  .chop(32)
  .speed(perlin.range(0.8, 1.2).slow(16))
  .sometimesBy(0.2, p => p.speed(-1))
  .hpf(400).lpf(7000).room(0.4)
  .delay(0.5).dfb(0.6).dt(0.375)
  .gain(0.65)
  .pan(perlin.range(0.2, 0.8).slow(10))
  .late(4)