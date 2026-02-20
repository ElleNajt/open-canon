setcps(0.415)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity,stars,galaxy,void')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.24)
  .lpf(sine.range(140,3200).slow(48))
  .lpq(22)
  .room(0.85)
  .delay(0.38)
  .dt(0.32)
  .dfb(0.42)
  .attack(0.01)
  .decay(0.48)
  .sustain(0.75)
  .release(3.4)
  .detune(sine.range(-24,24).slow(56))
  .tremolo(0.38)
  .tremolosync(4)
  .fmi(0.88)
  .phaser(0.68)
  .vowel("a o u e i".slow(42))
  .postgain(0.65)

let padVoice = x => x
  .sound("triangle")
  .gain(0.28)
  .lpf(saw.range(72,2600).slow(42))
  .lpq(18)
  .room(0.95)
  .size(0.88)
  .phaser(0.72)
  .phasersweep(sine.range(42,1100).slow(28))
  .delay(0.42)
  .dt(0.28)
  .dfb(0.45)
  .attack(5.2)
  .decay(4.8)
  .sustain(0.72)
  .release(7.8)
  .fmenv(0.82)
  .leslie(0.88)
  .detune(perlin.range(-24,24).slow(72))

let subPulse = x => x
  .sound("sine")
  .gain(0.42)
  .lpf(72)
  .hpf(32)
  .room(0.78)
  .pan(0.28)
  .attack(0.32)
  .decay(0.58)
  .sustain(0.72)
  .release(3.8)
  .fm(0.85)
  .detune(-14)

let arpVoice = x => x
  .sound("saw")
  .gain(0.15)
  .lpf(1600)
  .lpq(20)
  .hpf(140)
  .room(0.85)
  .crush(14)
  .distort(0.16)
  .attack(0.008)
  .decay(0.28)
  .sustain(0.55)
  .release(1.6)
  .detune(12)
  .pan(0.82)

let drone = x => x
  .sound("sine")
  .gain(0.24)
  .lpf(52)
  .hpf(28)
  .room(0.98)
  .size(0.95)
  .pan(0.5)
  .attack(8.8)
  .decay(10.2)
  .sustain(0.85)
  .release(16.8)
  .detune(sine.range(-18,18).slow(88))
  .tremolo(0.32)
  .tremolosync(2.2)

let drums = stack(
  s("bd*4, [bd ~ bd bd], [bd bd ~] bd, bd [bd bd*2]").room(0.52).gain(0.42),
  s("~ [cp ~ cp], [cp cp] cp*2, cp [cp ~ cp cp]").room(0.42).gain(0.32),
  "<euclid(6,16), euclid(7,16), euclid(4,8)>".s("hh*4 [oh*2 hh], oh [hh*3 oh] [hh oh], [oh*4 ~] hh").gain(0.34).hpf(4800).pan(tri.range(0.22,0.78)).degradeBy(0.28),
  s("[rim cb*2] [cb ~ rim], rim*2 [cb rim], [cb rim cb ~]").gain(0.26).hpf(420).pan(0.75).room(0.45),
  s("[lt*2 ht] [ht*2 lt ~], [lt ht*3] lt*2, [ht lt*2] [ht*2]").gain(0.3).room(0.72).hpf(220)
).swing(0.42).compressor().compressorRatio(6).every(16, x=>x.sometimes(x=>x.rev()))

let mel = note("[c5 eb5 g5 bb5 f5] ~, [ab5 d6 f6 eb6 bb5] [g5 ab5], [c6 eb6 g5 f5] ab5, [bb5 c6 eb6] [g5 ab5]")
  .scale("C:minor")
  .sometimesBy(0.42, x => x.rev())
  .sometimesBy(0.38, x => x.arp("up down"))
  .sometimesBy(0.28, x => x.octave(1))
  .sometimesBy(0.25, x => x.voicing())
  .sometimesBy(0.22, x => x.scale("C:phrygian"))
  .sometimesBy(0.15, x => x.scale("C:locrian"))

stack(
  drums,
  
  drone(note("c1").slow(52))
    .sometimesBy(0.38, x=>x.add(7))
    .off(0.42, x=>x.note("ab1").pan(0.82)),
  
  subPulse(note("c1 [eb1 ab1*3], eb1 [ab1*2 bb1], [ab1 eb1] [c1 g1 bb1], eb1 c1*2 ab1").slow(5.4))
    .sometimesBy(0.35, x=>x.add(7)),
  
  padVoice(chord("Cm Ab Eb Fm Gm Bb Cm Ab Fm").voicing().slow(42))
    .off(0.72, x=>x.transpose(-12).pan(0.25).gain(0.72))
    .pan(sine.range(0.18,0.82).slow(62)),
  
  arpVoice(chord("Cm Gm Ab Bb Fm Eb").scale("C:minor").arp("up down random").slow(5))
    .every(8, x => x.add(12).detune(-14))
    .off(0.52, x => x.transpose(24).gain(0.68).pan(0.32)),
  
  upperVoice(mel)
    .every(12, x => x.gain(1.42).lpf(2200).fmi(0.88))
    .every(16, x => x.add(7))
    .jux(x => x.transpose(7).late(0.28).gain(0.68).sometimesBy(0.38, x=>x.rev())),
    
  s("forever eternal*2 [infinite endless], [time*2 space] [universe cosmos], [eternity stars] galaxy void").slow(6.2)
    .gain(0.3)
    .room(0.98)
    .size(0.95)
    .hpf(62)
    .lpf(2800)
    .pan(saw.range(0.15,0.85).slow(52))
    .vowel("a e o i u".slow(28))
    .stretch(perlin.range(1.8,2.8))
    .chop(rand.range(18,26))
    .speed(sine.range(0.75,1.38).slow(36))
    .sometimesBy(0.38, x=>x.speed(0.68))
    .sometimesBy(0.32, x=>x.speed(-0.88).begin(0.25))
    .echo(28, 0.42, 0.72)
    .begin(rand.range(0,0.28))
    .ring(0.42)
    .jux(x=>x.speed(1.18).pan(1-x.pan()).gain(0.72))
    .every(16, x=>x.rev()),
    
  s("[eternal universe] [cosmos galaxy] [eternity void] [infinite forever], [stars endless] [time space]").slow(12)
    .gain(0.22)
    .room(0.98)
    .hpf(72)
    .lpf(2400)
    .pan(tri.range(0.22,0.78).slow(22))
    .speed(perlin.range(0.58,1.25).slow(28))
    .chop(16)
    .stretch(2.8)
    .sometimesBy(0.42, x=>x.rev())
    .off(1/3, x=>x.speed(0.85).gain(0.28).pan(0.45))
)