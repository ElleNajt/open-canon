setcps(0.42)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity,stars,galaxy,void')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.26)
  .lpf(sine.range(140,3200).slow(48))
  .lpq(22)
  .room(0.78)
  .delay(0.38)
  .dt(0.26)
  .dfb(0.42)
  .attack(0.01)
  .decay(0.48)
  .sustain(0.68)
  .release(2.8)
  .detune(sine.range(-24,24).slow(42))
  .tremolo(0.38)
  .tremolosync(4)
  .fmi(0.85)
  .phaser(0.68)
  .vowel("a o u i e".slow(32))
  .postgain(0.72)

let padVoice = x => x
  .sound("triangle")
  .gain(0.28)
  .lpf(saw.range(72,2600).slow(32))
  .lpq(18)
  .room(0.95)
  .size(0.88)
  .phaser(0.82)
  .phasersweep(sine.range(42,1100).slow(28))
  .delay(0.35)
  .dt(0.32)
  .dfb(0.52)
  .attack(4.2)
  .decay(4.8)
  .sustain(0.65)
  .release(7.2)
  .fmenv(0.82)
  .leslie(0.88)
  .detune(perlin.range(-24,24).slow(56))

let subPulse = x => x
  .sound("sine")
  .gain(0.42)
  .lpf(72)
  .hpf(32)
  .room(0.72)
  .pan(0.28)
  .attack(0.22)
  .decay(0.58)
  .sustain(0.65)
  .release(3.2)
  .fm(0.78)
  .detune(-14)

let arpVoice = x => x
  .sound("saw")
  .gain(0.18)
  .lpf(1600)
  .lpq(19)
  .hpf(140)
  .room(0.85)
  .crush(14)
  .distort(0.22)
  .attack(0.008)
  .decay(0.28)
  .sustain(0.48)
  .release(1.6)
  .detune(16)
  .pan(0.82)

let drone = x => x
  .sound("sine")
  .gain(0.24)
  .lpf(52)
  .hpf(28)
  .room(0.98)
  .size(0.95)
  .pan(0.5)
  .attack(8)
  .decay(10)
  .sustain(0.85)
  .release(16)
  .detune(sine.range(-18,18).slow(72))
  .tremolo(0.32)
  .tremolosync(2.2)

let drums = stack(
  s("bd*4, [bd ~ bd] bd, bd bd [~ bd], bd*2 [bd bd]").room(0.52).gain(0.42),
  s("~ cp [cp ~ cp], cp*3 ~, [cp cp] cp*2, cp*4 ~").room(0.42).gain(0.32),
  "<euclid(6,16), euclid(7,16), euclid(4,8)>".s("hh*4 [oh ~], oh*2 [hh*2 oh], [hh oh*3] ~").gain(0.34).hpf(4800).pan(tri.range(0.2,0.8)).degradeBy(0.28),
  s("[rim cb] rim*2 [cb ~], cb rim cb, [rim*2 cb] ~").gain(0.26).hpf(420).pan(0.82).room(0.45),
  s("[lt*3 ht] ~ [ht lt], lt*2 [ht*2], [ht lt ~] ht*3").gain(0.3).room(0.72).hpf(200)
).swing(0.42).compressor().compressorRatio(6).every(16, x=>x.sometimes(x=>x.rev()))

let mel = note("[c5 eb5 g5 bb5] [ab5 ~], [bb5 d6 f6 ab5] eb6, [g5 bb5 eb6] [c6 g5], [ab5 c6 eb6] bb5")
  .scale("C:minor")
  .sometimesBy(0.42, x => x.rev())
  .sometimesBy(0.38, x => x.arp("up down"))
  .sometimesBy(0.28, x => x.octave(1))
  .sometimesBy(0.24, x => x.voicing())
  .sometimesBy(0.22, x => x.scale("C:phrygian"))
  .sometimesBy(0.18, x => x.scale("C:major"))

stack(
  drums,
  
  drone(note("c1").slow(42))
    .sometimesBy(0.32, x=>x.add(7))
    .off(0.32, x=>x.note("ab1").pan(0.88)),
  
  subPulse(note("c1 [eb1 ab1*3], eb1*4 [ab1 bb1], [ab1 g1] [eb1 c1 bb1], c1*2 eb1 [g1 ab1]").slow(5))
    .sometimesBy(0.28, x=>x.add(7)),
  
  padVoice(chord("Cm Ab Eb Gm Fm Bb Gm Eb Cm Ab Fm Eb").voicing().slow(32))
    .off(0.72, x=>x.transpose(-12).pan(0.18).gain(0.72))
    .pan(sine.range(0.15,0.85).slow(52)),
  
  arpVoice(chord("Cm Ab Eb Gm Bb Fm Ab").scale("C:minor").arp("up down random").slow(4.2))
    .every(8, x => x.add(12).detune(-14))
    .off(0.42, x => x.transpose(24).gain(0.68).pan(0.25)),
  
  upperVoice(mel)
    .every(10, x => x.gain(1.52).lpf(2200).fmi(0.88))
    .every(12, x => x.add(7))
    .jux(x => x.transpose(7).late(0.28).gain(0.75).sometimesBy(0.38, x=>x.rev())),
    
  s("forever eternal*2, infinite [endless time space], universe [cosmos eternity] stars, galaxy void infinite").slow(5.2)
    .gain(0.3)
    .room(0.98)
    .size(0.95)
    .hpf(62)
    .lpf(2800)
    .pan(saw.range(0.15,0.85).slow(44))
    .vowel("a e i o u".slow(28))
    .stretch(perlin.range(1.8,2.8))
    .chop(rand.range(18,24))
    .speed(sine.range(0.75,1.35).slow(28))
    .sometimesBy(0.32, x=>x.speed(0.68))
    .sometimesBy(0.25, x=>x.speed(-0.88).begin(0.25))
    .echo(22, 0.32, 0.78)
    .begin(rand.range(0,0.28))
    .ring(0.35)
    .jux(x=>x.speed(1.18).pan(1-x.pan()).gain(0.72))
    .every(16, x=>x.rev()),
    
  s("eternity [universe stars] [cosmos galaxy void], forever [infinite endless] [time space]").slow(10)
    .gain(0.22)
    .room(0.98)
    .hpf(82)
    .lpf(2400)
    .pan(tri.range(0.22,0.78).slow(16))
    .speed(perlin.range(0.58,1.22).slow(20))
    .chop(10)
    .stretch(2.8)
    .sometimesBy(0.42, x=>x.rev())
    .off(1/3, x=>x.speed(0.85).gain(0.28).pan(0.38))
)