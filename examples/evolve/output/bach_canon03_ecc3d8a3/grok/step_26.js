setcps(0.46)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity,stars,galaxy,void')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.24)
  .lpf(sine.range(160,3400).slow(42))
  .lpq(20)
  .room(0.72)
  .delay(0.35)
  .dt(0.24)
  .dfb(0.38)
  .attack(0.012)
  .decay(0.42)
  .sustain(0.72)
  .release(2.6)
  .detune(sine.range(-28,28).slow(36))
  .tremolo(0.42)
  .tremolosync(3.8)
  .fmi(0.82)
  .phaser(0.72)
  .vowel("a o u i e".slow(28))
  .postgain(0.68)

let padVoice = x => x
  .sound("triangle")
  .gain(0.26)
  .lpf(saw.range(68,2800).slow(28))
  .lpq(16)
  .room(0.98)
  .size(0.92)
  .phaser(0.85)
  .phasersweep(sine.range(38,1200).slow(24))
  .delay(0.32)
  .dt(0.28)
  .dfb(0.48)
  .attack(3.6)
  .decay(4.2)
  .sustain(0.62)
  .release(6.8)
  .fmenv(0.78)
  .leslie(0.92)
  .detune(perlin.range(-28,28).slow(52))

let subPulse = x => x
  .sound("sine")
  .gain(0.38)
  .lpf(68)
  .hpf(28)
  .room(0.68)
  .pan(0.22)
  .attack(0.18)
  .decay(0.52)
  .sustain(0.62)
  .release(2.8)
  .fm(0.75)
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
  .attack(0.01)
  .decay(0.26)
  .sustain(0.46)
  .release(1.4)
  .detune(18)
  .pan(0.78)

let drone = x => x
  .sound("sine")
  .gain(0.22)
  .lpf(48)
  .hpf(24)
  .room(1)
  .size(0.98)
  .pan(0.5)
  .attack(7)
  .decay(9)
  .sustain(0.82)
  .release(14)
  .detune(sine.range(-22,22).slow(64))
  .tremolo(0.36)
  .tremolosync(2)

let drums = stack(
  s("bd*2 [~ sn bd], bd [bd sn], [bd ~ sn] bd, bd sn [bd ~]").room(0.48).gain(0.4),
  s("cp*2 [~ cp cp], [cp cp] ~ cp*3, cp*4 ~, [cp ~] cp*2").room(0.38).gain(0.28),
  "<euclid(5,16), euclid(8,16), euclid(3,8), euclid(9,16)>".s("hh*4 oh, [oh hh*3], hh*2 [oh ~ hh], oh hh*3").gain(0.32).hpf(5200).pan(tri.range(0.15,0.85)).degradeBy(0.32),
  s("rim*4 [cb rim], cb*2 [rim ~], [rim cb*2] ~, rim [cb rim cb]").gain(0.24).hpf(440).pan(0.78).room(0.42),
  s("[lt*4 ~] [ht*2 lt], [ht lt*2 ~] lt*3, [~ ht lt] ht*2, lt*2 [ht lt]").gain(0.28).room(0.68).hpf(180)
).swing(0.36).compressor().compressorRatio(5.5).every(16, x=>x.sometimes(x=>x.rev()))

let mel = note("[c5 eb5 g5 bb5] ~, [ab5 c6 eb6 g6] ~, [bb5 d6 f6 ab5] [eb6 ~], [g5 bb5 d6 f6] [eb6 c6 ab5]")
  .scale("C:minor")
  .sometimesBy(0.38, x => x.rev())
  .sometimesBy(0.42, x => x.arp("up down"))
  .sometimesBy(0.32, x => x.octave(1))
  .sometimesBy(0.26, x => x.voicing())
  .sometimesBy(0.22, x => x.scale("C:phrygian"))
  .sometimesBy(0.18, x => x.scale("C:major"))

stack(
  drums,
  
  drone(note("c1").slow(36))
    .sometimesBy(0.28, x=>x.add(7))
    .off(0.28, x=>x.note("ab1").pan(0.85)),
  
  subPulse(note("c1 [eb1 ab1*4], eb1*3 [ab1 bb1 g1], [ab1 bb1] [g1 eb1 c1], c1 eb1*2 [g1 bb1]").slow(4.6))
    .sometimesBy(0.32, x=>x.add(7)),
  
  padVoice(chord("Cm Ab Eb Gm Fm Bb Ab Eb Cm Gm Fm Ab").voicing().slow(28))
    .off(0.68, x=>x.transpose(-12).pan(0.15).gain(0.68))
    .pan(sine.range(0.12,0.88).slow(48)),
  
  arpVoice(chord("Cm Ab Eb Gm Fm Bb Ab Eb").scale("C:minor").arp("up down random").slow(3.8))
    .every(7, x => x.add(12).detune(-12))
    .off(0.38, x => x.transpose(24).gain(0.65).pan(0.22)),
  
  upperVoice(mel)
    .every(9, x => x.gain(1.48).lpf(2400).fmi(0.85))
    .every(11, x => x.add(7))
    .jux(x => x.transpose(7).late(0.25).gain(0.72).sometimesBy(0.42, x=>x.rev())),
    
  s("forever*2 eternal, [infinite endless time] ~, [space universe cosmos] eternity, [stars galaxy void] infinite*2").slow(4.8)
    .gain(0.28)
    .room(1)
    .size(0.98)
    .hpf(58)
    .lpf(3000)
    .pan(saw.range(0.12,0.88).slow(40))
    .vowel("a e i o u".slow(24))
    .stretch(perlin.range(1.6,3))
    .chop(rand.range(16,26))
    .speed(sine.range(0.72,1.38).slow(24))
    .sometimesBy(0.28, x=>x.speed(0.65))
    .sometimesBy(0.22, x=>x.speed(-0.92).begin(0.22))
    .echo(20, 0.28, 0.75)
    .begin(rand.range(0,0.32))
    .ring(0.32)
    .jux(x=>x.speed(1.15).pan(1-x.pan()).gain(0.68))
    .every(16, x=>x.rev()),
    
  s("eternity stars universe void [cosmos galaxy] ~, forever infinite [endless time space]").slow(9)
    .gain(0.2)
    .room(0.95)
    .hpf(78)
    .lpf(2600)
    .pan(tri.range(0.18,0.82).slow(14))
    .speed(perlin.range(0.55,1.25).slow(18))
    .chop(9)
    .stretch(2.5)
    .sometimesBy(0.38, x=>x.rev())
    .off(1/3, x=>x.speed(0.82).gain(0.25).pan(0.35))
)