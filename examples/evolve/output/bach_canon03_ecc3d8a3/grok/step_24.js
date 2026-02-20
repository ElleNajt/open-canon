setcps(0.52)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity,stars,galaxy,void')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.24)
  .lpf(sine.range(240,3800).slow(32))
  .lpq(20)
  .room(0.72)
  .delay(0.28)
  .dt(0.18)
  .dfb(0.45)
  .attack(0.008)
  .decay(0.42)
  .sustain(0.65)
  .release(1.8)
  .detune(sine.range(-28,28).slow(28))
  .tremolo(0.42)
  .tremolosync(3.5)
  .fmi(0.82)
  .phaser(0.72)
  .vowel("a o i u e".slow(20))
  .postgain(0.68)

let padVoice = x => x
  .sound("triangle")
  .gain(0.26)
  .lpf(saw.range(68,2800).slow(20))
  .lpq(16)
  .room(0.98)
  .size(0.92)
  .phaser(0.85)
  .phasersweep(sine.range(38,1200).slow(18))
  .delay(0.32)
  .dt(0.24)
  .dfb(0.48)
  .attack(2.8)
  .decay(3.2)
  .sustain(0.55)
  .release(5)
  .fmenv(0.78)
  .leslie(0.92)
  .detune(perlin.range(-22,22).slow(40))

let subPulse = x => x
  .sound("sine")
  .gain(0.38)
  .lpf(68)
  .hpf(28)
  .room(0.62)
  .pan(0.12)
  .attack(0.14)
  .decay(0.52)
  .sustain(0.55)
  .release(2)
  .fm(0.68)
  .detune(-12)

let arpVoice = x => x
  .sound("saw")
  .gain(0.16)
  .lpf(1800)
  .lpq(17)
  .hpf(120)
  .room(0.82)
  .crush(12)
  .distort(0.25)
  .attack(0.006)
  .decay(0.24)
  .sustain(0.38)
  .release(1.05)
  .detune(18)
  .pan(0.88)

let drone = x => x
  .sound("sine")
  .gain(0.22)
  .lpf(55)
  .hpf(22)
  .room(1)
  .size(0.98)
  .pan(0.5)
  .attack(5.2)
  .decay(7.2)
  .sustain(0.75)
  .release(10)
  .detune(sine.range(-16,16).slow(52))
  .tremolo(0.35)
  .tremolosync(1.6)

let drums = stack(
  s("bd*2 [~ sn bd], bd [bd sn], [bd ~ sn] bd, bd sn [bd ~]").room(0.42).gain(0.4),
  s("cp*2 [~ cp cp], [cp cp] ~ cp*3, cp*4 ~, [cp ~] cp*2").room(0.38).gain(0.28),
  "<euclid(5,16), euclid(8,16), euclid(3,8), euclid(9,16)>".s("hh*4 oh, [oh hh*3], hh*2 [oh ~ hh], oh hh*3").gain(0.32).hpf(5200).pan(tri.range(0.15,0.85)).degradeBy(0.25),
  s("rim*4 [cb rim], cb*2 [rim ~], [rim cb*2] ~, rim [cb rim cb]").gain(0.24).hpf(380).pan(0.85).room(0.35),
  s("[lt*4 ~] [ht*2 lt], [ht lt*2 ~] lt*3, [~ ht lt] ht*2, lt*2 [ht lt]").gain(0.28).room(0.68).hpf(175)
).swing(0.28).compressor().compressorRatio(4.8).every(16, x=>x.sometimes(x=>x.rev()))

let mel = note("[c5 eb5 g5 bb5] ~, [ab5 c6 eb6 g6] ~, [bb5 d6 f6] [eb6 ~], [g5 bb5 d6] [f6 eb6 c6]")
  .scale("C:minor")
  .sometimesBy(0.38, x => x.rev())
  .sometimesBy(0.42, x => x.arp("up down"))
  .sometimesBy(0.32, x => x.octave(1))
  .sometimesBy(0.26, x => x.voicing())
  .sometimesBy(0.22, x => x.scale("C:phrygian"))
  .sometimesBy(0.18, x => x.scale("C:major"))

stack(
  drums,
  
  drone(note("c1").slow(28))
    .sometimesBy(0.28, x=>x.add(7))
    .off(0.3, x=>x.note("ab1").pan(0.92)),
  
  subPulse(note("c1 [eb1 ab1*4], eb1*3 [ab1 bb1 g1], [ab1 bb1] [g1 eb1 c1], c1 eb1*2 [g1 bb1]").slow(4))
    .sometimesBy(0.3, x=>x.add(7)),
  
  padVoice(chord("Cm Ab Eb Gm Fm Bb Ab Eb Cm Gm Ab Eb").voicing().slow(20))
    .off(0.6, x=>x.transpose(-12).pan(0.15).gain(0.68))
    .pan(sine.range(0.1,0.9).slow(40)),
  
  arpVoice(chord("Cm Ab Eb Gm Fm Bb Ab Eb").scale("C:minor").arp("up down random").slow(3.2))
    .every(5, x => x.add(12).detune(-16))
    .off(0.4, x => x.transpose(24).gain(0.65).pan(0.2)),
  
  upperVoice(mel)
    .every(7, x => x.gain(1.45).lpf(2400).fmi(0.85))
    .every(9, x => x.add(7))
    .jux(x => x.transpose(7).late(0.25).gain(0.72).sometimesBy(0.42, x=>x.rev())),
    
  s("forever eternal*2, [infinite endless] time, [space universe] cosmos, eternity [stars galaxy], void*2 [forever infinite]").slow(4)
    .gain(0.28)
    .room(1)
    .size(0.98)
    .hpf(58)
    .lpf(2900)
    .pan(saw.range(0.1,0.9).slow(32))
    .vowel("a e o i u".slow(18))
    .stretch(perlin.range(1.3,3))
    .chop(rand.range(12,26))
    .speed(sine.range(0.7,1.4).slow(18))
    .sometimesBy(0.28, x=>x.speed(0.65))
    .sometimesBy(0.22, x=>x.speed(-0.98).begin(0.2))
    .echo(16, 0.28, 0.75)
    .begin(rand.range(0,0.3))
    .ring(0.25)
    .jux(x=>x.speed(1.15).pan(1-x.pan()).gain(0.68))
    .every(12, x=>x.rev())
)