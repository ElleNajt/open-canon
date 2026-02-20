setcps(0.42)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity,stars,galaxy,void')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.26)
  .lpf(sine.range(120,3400).slow(52))
  .lpq(20)
  .room(0.88)
  .delay(0.35)
  .dt(0.34)
  .dfb(0.38)
  .attack(0.01)
  .decay(0.52)
  .sustain(0.78)
  .release(3.2)
  .detune(sine.range(-22,22).slow(64))
  .tremolo(0.35)
  .tremolosync(3.8)
  .fmi(0.85)
  .phaser(0.65)
  .vowel("a o u e i".slow(48))
  .postgain(0.68)

let padVoice = x => x
  .sound("triangle")
  .gain(0.3)
  .lpf(saw.range(68,2800).slow(48))
  .lpq(16)
  .room(0.92)
  .size(0.9)
  .phaser(0.7)
  .phasersweep(sine.range(48,1200).slow(32))
  .delay(0.4)
  .dt(0.3)
  .dfb(0.42)
  .attack(4.8)
  .decay(5.2)
  .sustain(0.75)
  .release(8.2)
  .fmenv(0.85)
  .leslie(0.85)
  .detune(perlin.range(-22,22).slow(68))

let subPulse = x => x
  .sound("sine")
  .gain(0.45)
  .lpf(68)
  .hpf(28)
  .room(0.8)
  .pan(0.25)
  .attack(0.28)
  .decay(0.62)
  .sustain(0.75)
  .release(4)
  .fm(0.88)
  .detune(-12)

let arpVoice = x => x
  .sound("saw")
  .gain(0.18)
  .lpf(1800)
  .lpq(22)
  .hpf(120)
  .room(0.88)
  .crush(12)
  .distort(0.18)
  .attack(0.006)
  .decay(0.32)
  .sustain(0.58)
  .release(1.8)
  .detune(14)
  .pan(0.78)

let drone = x => x
  .sound("sine")
  .gain(0.26)
  .lpf(48)
  .hpf(25)
  .room(0.95)
  .size(0.92)
  .pan(0.5)
  .attack(9.2)
  .decay(11)
  .sustain(0.88)
  .release(18)
  .detune(sine.range(-16,16).slow(92))
  .tremolo(0.3)
  .tremolosync(2)

let drums = stack(
  s("bd*4, [bd ~ bd bd], [bd bd ~ bd], [bd bd] bd").room(0.55).gain(0.45),
  s("~ [cp ~ cp], [cp cp ~] cp, cp [cp cp cp]").room(0.45).gain(0.35),
  "<euclid(5,16), euclid(8,16), euclid(3,8)>".s("hh*4 [oh*2 hh], oh [hh*4] [oh*3 ~], [oh*4 hh] oh").gain(0.36).hpf(5200).pan(tri.range(0.2,0.8)).degradeBy(0.25),
  s("[rim cb*2] [cb rim ~], rim [cb rim*2], [cb*2 rim] cb").gain(0.28).hpf(450).pan(0.72).room(0.48),
  s("[lt*3 ht] [ht lt*2 ~], [lt*2 ht] lt*3, [ht*2 lt] [ht lt]").gain(0.32).room(0.75).hpf(240)
).swing(0.38).compressor().compressorRatio(5.5).every(32, x=>x.sometimes(x=>x.rev()))

let mel = note("c5 [eb5 g5] bb5, [ab5 d6 f6] [eb6 bb5 g5], c6 [eb6 ab5] [f5 g5], [bb5 c6] eb6 ab5")
  .scale("C:minor")
  .sometimesBy(0.45, x => x.rev())
  .sometimesBy(0.35, x => x.arp("up down"))
  .sometimesBy(0.3, x => x.octave(1))
  .sometimesBy(0.28, x => x.voicing())
  .sometimesBy(0.2, x => x.scale("C:phrygian"))

stack(
  drums,
  
  drone(note("c1").slow(56))
    .sometimesBy(0.42, x=>x.add(7))
    .off(0.38, x=>x.note("ab1").pan(0.85)),
  
  subPulse(note("c1 [eb1 ab1*2], eb1 [ab1 bb1 eb1], [ab1 eb1 c1] [g1 bb1], eb1 [c1 ab1]").slow(5.8))
    .sometimesBy(0.38, x=>x.add(7)),
  
  padVoice(chord("Cm Ab Eb Bb Fm Gm Cm Ab Eb").voicing().slow(48))
    .off(0.68, x=>x.transpose(-12).pan(0.28).gain(0.75))
    .pan(sine.range(0.15,0.85).slow(68))
    .every(64, x=>x.scale("Ab:minor")),
  
  arpVoice(chord("Cm Gm Bb Fm Ab Eb").scale("C:minor").arp("up down").slow(5.2))
    .every(8, x => x.add(12).detune(-12))
    .off(0.48, x => x.transpose(24).gain(0.7).pan(0.35)),
  
  upperVoice(mel)
    .every(14, x => x.gain(1.45).lpf(2400).fmi(0.85))
    .every(32, x => x.add(7))
    .jux(x => x.transpose(7).late(0.25).gain(0.7).sometimesBy(0.42, x=>x.rev())),
    
  s("forever*2 [eternal infinite], [endless time] [space universe], [cosmos eternity] [stars galaxy void]").slow(6.8)
    .gain(0.32)
    .room(0.95)
    .size(0.92)
    .hpf(58)
    .lpf(3000)
    .pan(saw.range(0.12,0.88).slow(58))
    .vowel("a e o i u".slow(32))
    .stretch(perlin.range(1.9,2.9))
    .chop(rand.range(16,28))
    .speed(sine.range(0.72,1.42).slow(42))
    .sometimesBy(0.42, x=>x.speed(0.65))
    .sometimesBy(0.35, x=>x.speed(-0.85).begin(0.22))
    .echo(32, 0.38, 0.75)
    .begin(rand.range(0,0.25))
    .ring(0.38)
    .jux(x=>x.speed(1.22).pan(1-x.pan()).gain(0.75))
    .every(32, x=>x.rev()),
    
  s("[eternal*2 universe] [cosmos galaxy] [eternity void], [infinite stars] [forever endless] [time space]").slow(13)
    .gain(0.25)
    .room(0.95)
    .hpf(68)
    .lpf(2600)
    .pan(tri.range(0.18,0.82).slow(26))
    .speed(perlin.range(0.55,1.28).slow(32))
    .chop(18)
    .stretch(2.9)
    .sometimesBy(0.45, x=>x.rev())
    .off(1/3, x=>x.speed(0.82).gain(0.3).pan(0.48))
    .every(64, x=>x.add("forever eternal"))
)