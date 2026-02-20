// BWV 1087 Canon 9 - Variation: Cathedral Becomes Machine

// The sacred collapses into industry - gears where there were prayers
let machineGrind = x => x
  .sound("sawtooth")
  .gain(0.38)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.7)
  .release(0.3)
  .lpf(1800)
  .lpq(6)
  .shape(0.35)
  .room(0.4)
  .delay(0.2)
  .delaytime(0.125)
  .delayfeedback(0.4)

// Ghost of the organ, now filtered through static
let specterVoice = x => x
  .sound("sine")
  .gain(0.3)
  .attack(0.5)
  .decay(0.6)
  .sustain(0.5)
  .release(2)
  .fmi(2.5)
  .fmh(5)
  .fmdecay(1.2)
  .room(0.7)

setcps(88/60/4)

// Track 1 - The melody inverts, becomes a question asked backward
$: note("a4 g4 e4 fs4 g4 b4 d5 a4 g4 fs4 g4")
  .slow(6)
  .apply(machineGrind)
  .pan(0.4)
  .every(3, x => x.rev().transpose(5))

// Track 2 - Harmony becomes parallel fifths - forbidden, defiant
$: note("<[c4,g4] [d4,a4] [e4,b4] [f4,c5] [eb4,bb4] [db4,ab4]>")
  .slow(8)
  .apply(specterVoice)
  .pan(0.6)
  .lpf(perlin.range(400, 2200).slow(10))

// Track 3 - Bass now pulses mechanically, abandoning melody for rhythm
$: note("[c2 c2 ~ c2] [eb2 ~ eb2 eb2] [f2 f2 f2 ~] [ab2 ~ ~ ab2]")
  .slow(4)
  .sound("square")
  .gain(0.32)
  .attack(0.005)
  .decay(0.1)
  .sustain(0.8)
  .release(0.1)
  .lpf(600)
  .shape(0.2)
  .pan(0.5)

// Track 4 - Industrial percussion replaces rain
$: s("bd:3 [~ cp] bd:3 [sn:2 cp]")
  .slow(2)
  .gain(0.25)
  .shape(0.3)
  .room(0.3)
  .lpf(3000)
  .sometimes(x => x.speed(0.8).crush(8))

// New: A transmission from somewhere else - pitched metallic loops
$: note("g5 ~ bb5 ~ g5 f5 ~ eb5")
  .slow(3)
  .sound("triangle")
  .gain(0.2)
  .attack(0.002)
  .decay(0.08)
  .sustain(0.2)
  .release(0.4)
  .hpf(2000)
  .ring(0.6)
  .ringf(880)
  .pan(sine.range(0.2, 0.8).slow(5))
  .delay(0.4)
  .delaytime(0.333)
  .delayfeedback(0.5)
  .degradeBy(0.3)

// The choir transformed - now a swarm, buzzing dissonance
$: note("<[c4,db4,f4] [d4,eb4,ab4] [eb4,e4,a4] [f4,gb4,b4]>")
  .slow(10)
  .sound("supersaw")
  .gain(0.18)
  .attack(1.2)
  .decay(1)
  .sustain(0.6)
  .release(2)
  .lpf(cosine.range(300, 1200).slow(14))
  .detune(25)
  .room(0.6)
  .phaser(0.3)
  .phaserdepth(0.8)

// Sub-bass drone - the machine's heartbeat
$: note("c1 ~ ~ eb1 ~ ~ f1 ~ ")
  .slow(8)
  .sound("sine")
  .gain(0.35)
  .attack(0.3)
  .decay(0.5)
  .sustain(0.9)
  .release(1)
  .lpf(100)
  .tremolo(0.4)
  .tremolosync(8)