setcps(0.48)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity,stars,galaxy,void')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.22)
  .lpf(sine.range(180,3200).slow(36))
  .lpq(18)
  .room(0.68)
  .delay(0.32)
  .dt(0.22)
  .dfb(0.42)
  .attack(0.01)
  .decay(0.38)
  .sustain(0.68)
  .release(2.2)
  .detune(sine.range(-32,32).slow(32))
  .tremolo(0.38)
  .tremolosync(4)
  .fmi(0.78)
  .phaser(0.68)
  .vowel("a o u i e".slow(24))
  .postgain(0.65)

let padVoice = x => x
  .sound("triangle")
  .gain(0.24)
  .lpf(saw.range(72,2600).slow(24))
  .lpq(14)
  .room(0.95)
  .size(0.88)
  .phaser(0.82)
  .phasersweep(sine.range(42,1100).slow(20))
  .delay(0.28)
  .dt(0.26)
  .dfb(0.45)
  .attack(3.2)
  .decay(3.8)
  .sustain(0.58)
  .release(6)
  .fmenv(0.75)
  .leslie(0.88)
  .detune(perlin.range(-24,24).slow(48))

let subPulse = x => x
  .sound("sine")
  .gain(0.35)
  .lpf(72)
  .hpf(32)
  .room(0.65)
  .pan(0.18)
  .attack(0.16)
  .decay(0.48)
  .sustain(0.58)
  .release(2.4)
  .fm(0.72)
  .detune(-14)

let arpVoice = x => x
  .sound("saw")
  .gain(0.14)
  .lpf(1600)
  .lpq(15)
  .hpf(110)
  .room(0.78)
  .crush(14)
  .distort(0.22)
  .attack(0.008)
  .decay(0.22)
  .sustain(0.42)
  .release(1.2)
  .detune(16)
  .pan(0.82)

let drone = x => x
  .sound("sine")
  .gain(0.2)
  .lpf(52)
  .hpf(26)
  .room(1)
  .size(0.95)
  .pan(0.5)
  .attack(6)
  .decay(8)
  .sustain(0.78)
  .release(12)
  .detune(sine.range(-18,18).slow(56))
  .tremolo(0.32)
  .tremolosync(1.8)

let drums = stack(
  s("bd*2 [~ sn bd], bd [bd sn], [bd ~ sn] bd, bd sn [bd ~]").room(0.45).gain(0.38),
  s("cp*2 [~ cp cp], [cp cp] ~ cp*3, cp*4 ~, [cp ~] cp*2").room(0.35).gain(0.26),
  "<euclid(5,16), euclid(8,16), euclid(3,8), euclid(9,16)>".s("hh*4 oh, [oh hh*3], hh*2 [oh ~ hh], oh hh*3").gain(0.3).hpf(4800).pan(tri.range(0.12,0.88)).degradeBy(0.28),
  s("rim*4 [cb rim], cb*2 [rim ~], [rim cb*2] ~, rim [cb rim cb]").gain(0.22).hpf(420).pan(0.82).room(0.38),
  s("[lt*4 ~] [ht*2 lt], [ht lt*2 ~] lt*3, [~ ht lt] ht*2, lt*2 [ht lt]").gain(0.26).room(0.65).hpf(160)
).swing(0.32).compressor().compressorRatio(5).every(16, x=>x.sometimes(x=>x.rev()))

let mel = note("[c5 eb5 g5 bb5] ~, [ab5 c6 eb6 g6] ~, [bb5 d6 f6 ab5] [eb6 ~], [g5 bb5 d6 f6] [eb6 c6 ab5]")
  .scale("C:minor")
  .sometimesBy(0.35, x => x.rev())
  .sometimesBy(0.4, x => x.arp("up down"))
  .sometimesBy(0.3, x => x.octave(1))
  .sometimesBy(0.24, x => x.voicing())
  .sometimesBy(0.2, x => x.scale("C:phrygian"))
  .sometimesBy(0.16, x => x.scale("C:major"))

stack(
  drums,
  
  drone(note("c1").slow(32))
    .sometimesBy(0.25, x=>x.add(7))
    .off(0.25, x=>x.note("ab1").pan(0.88)),
  
  subPulse(note("c1 [eb1 ab1*4], eb1*3 [ab1 bb1 g1], [ab1 bb1] [g1 eb1 c1], c1 eb1*2 [g1 bb1]").slow(4.2))
    .sometimesBy(0.28, x=>x.add(7)),
  
  padVoice(chord("Cm Ab Eb Gm Fm Bb Ab Eb Cm Gm Fm Ab").voicing().slow(24))
    .off(0.65, x=>x.transpose(-12).pan(0.12).gain(0.65))
    .pan(sine.range(0.08,0.92).slow(44)),
  
  arpVoice(chord("Cm Ab Eb Gm Fm Bb Ab Eb").scale("C:minor").arp("up down random").slow(3.5))
    .every(6, x => x.add(12).detune(-14))
    .off(0.35, x => x.transpose(24).gain(0.62).pan(0.18)),
  
  upperVoice(mel)
    .every(8, x => x.gain(1.42).lpf(2200).fmi(0.82))
    .every(10, x => x.add(7))
    .jux(x => x.transpose(7).late(0.22).gain(0.7).sometimesBy(0.4, x=>x.rev())),
    
  s("forever*2 eternal, [infinite endless time] ~, [space universe cosmos] eternity, [stars galaxy void] infinite*2").slow(4.5)
    .gain(0.26)
    .room(1)
    .size(0.95)
    .hpf(62)
    .lpf(2800)
    .pan(saw.range(0.08,0.92).slow(36))
    .vowel("a e i o u".slow(20))
    .stretch(perlin.range(1.4,2.8))
    .chop(rand.range(14,24))
    .speed(sine.range(0.75,1.35).slow(20))
    .sometimesBy(0.25, x=>x.speed(0.68))
    .sometimesBy(0.2, x=>x.speed(-0.95).begin(0.18))
    .echo(18, 0.25, 0.72)
    .begin(rand.range(0,0.28))
    .ring(0.28)
    .jux(x=>x.speed(1.12).pan(1-x.pan()).gain(0.65))
    .every(14, x=>x.rev()),
    
  s("eternity stars universe void [cosmos galaxy] ~, forever infinite [endless time space]").slow(8)
    .gain(0.18)
    .room(0.92)
    .hpf(85)
    .lpf(2400)
    .pan(tri.range(0.2,0.8).slow(12))
    .speed(perlin.range(0.6,1.2).slow(16))
    .chop(8)
    .stretch(2.2)
    .sometimesBy(0.35, x=>x.rev())
    .off(1/3, x=>x.speed(0.85).gain(0.22).pan(0.3))
)