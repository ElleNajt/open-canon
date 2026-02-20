setcps(0.5)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity,stars,galaxy,void')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.26)
  .lpf(sine.range(280,3600).slow(28))
  .lpq(18)
  .room(0.68)
  .delay(0.3)
  .dt(0.15)
  .dfb(0.42)
  .attack(0.01)
  .decay(0.38)
  .sustain(0.68)
  .release(1.5)
  .detune(sine.range(-22,22).slow(32))
  .tremolo(0.38)
  .tremolosync(4)
  .fmi(0.75)
  .phaser(0.65)
  .vowel("a o u i e".slow(16))
  .postgain(0.72)

let padVoice = x => x
  .sound("triangle")
  .gain(0.28)
  .lpf(saw.range(75,2600).slow(18))
  .lpq(14)
  .room(0.95)
  .size(0.9)
  .phaser(0.8)
  .phasersweep(sine.range(45,1100).slow(16))
  .delay(0.35)
  .dt(0.26)
  .dfb(0.52)
  .attack(2.5)
  .decay(3)
  .sustain(0.58)
  .release(4.5)
  .fmenv(0.75)
  .leslie(0.88)
  .detune(perlin.range(-18,18).slow(36))

let subPulse = x => x
  .sound("sine")
  .gain(0.4)
  .lpf(65)
  .hpf(25)
  .room(0.58)
  .pan(0.1)
  .attack(0.12)
  .decay(0.48)
  .sustain(0.58)
  .release(1.8)
  .fm(0.65)
  .detune(-14)

let arpVoice = x => x
  .sound("saw")
  .gain(0.18)
  .lpf(1700)
  .lpq(15)
  .hpf(110)
  .room(0.78)
  .crush(11)
  .distort(0.22)
  .attack(0.007)
  .decay(0.22)
  .sustain(0.42)
  .release(0.95)
  .detune(16)
  .pan(0.85)

let drone = x => x
  .sound("sine")
  .gain(0.2)
  .lpf(52)
  .hpf(20)
  .room(0.99)
  .size(0.99)
  .pan(0.5)
  .attack(4.8)
  .decay(6.8)
  .sustain(0.78)
  .release(9.5)
  .detune(sine.range(-12,12).slow(48))
  .tremolo(0.32)
  .tremolosync(1.4)

let drums = stack(
  s("bd*2 [sn ~ bd], bd bd [sn bd], bd [~ sn bd], [bd bd] sn").room(0.38).gain(0.38),
  s("[cp ~ cp*2] cp*3 [~ cp], cp*4 [cp ~], ~ [cp cp cp], cp*2 [cp ~ cp]").room(0.35).gain(0.25),
  "<euclid(6,16), euclid(7,16), euclid(4,8), euclid(10,16)>".s("hh*3 [oh ~], oh [hh*2 oh], [~ hh oh] hh*2").gain(0.3).hpf(5100).pan(saw.range(0.1,0.9)).degradeBy(0.28),
  s("~ rim*3 [cb ~], [rim cb] rim cb, cb [rim*2 ~], rim cb [~ rim]").gain(0.22).hpf(360).pan(0.8).room(0.3),
  s("[lt*3 ~] [ht lt ht], [ht*3 ~ lt] lt*2, ~ [lt ht*2], [ht lt*3]").gain(0.26).room(0.65).hpf(160)
).swing(0.3).compressor().compressorRatio(5).every(14, x=>x.sometimes(x=>x.rev()))

let mel = note("[c5 eb5 g5] [bb5 ~], [ab5 c6 eb6] [g6 ~], [bb5 d6 f6] eb6, [g5 bb5 c6] [f6 eb6]")
  .scale("C:minor")
  .sometimesBy(0.4, x => x.rev())
  .sometimesBy(0.45, x => x.arp("up down"))
  .sometimesBy(0.3, x => x.octave(1))
  .sometimesBy(0.28, x => x.voicing())
  .sometimesBy(0.2, x => x.scale("C:phrygian"))

stack(
  drums,
  
  drone(note("c1").slow(24))
    .sometimesBy(0.25, x=>x.add(7))
    .off(0.25, x=>x.note("ab1").pan(0.9)),
  
  subPulse(note("c1 [eb1 ab1*3], eb1*2 [ab1 bb1 g1], ab1 [bb1 g1 eb1*2], [c1 eb1] [g1 bb1 c2]").slow(3.8))
    .sometimesBy(0.28, x=>x.add(7)),
  
  padVoice(chord("Cm Gm Ab Eb Bb Fm Ab Eb").voicing().slow(16))
    .off(0.55, x=>x.transpose(-12).pan(0.12).gain(0.65))
    .pan(sine.range(0.08,0.92).slow(36)),
  
  arpVoice(chord("Cm Gm Ab Eb Bb Fm Ab Eb").scale("C:minor").arp("up down random").slow(3))
    .every(4, x => x.add(12).detune(-14))
    .off(0.35, x => x.transpose(24).gain(0.6).pan(0.18)),
  
  upperVoice(mel)
    .every(6, x => x.gain(1.4).lpf(2200).fmi(0.8))
    .every(8, x => x.add(7))
    .jux(x => x.transpose(7).late(0.22).gain(0.7).sometimesBy(0.4, x=>x.rev())),
    
  s("[forever eternal] [infinite endless], [time space] [universe cosmos], [eternity stars] [galaxy void], [forever infinite] [eternal time]").slow(4.5)
    .gain(0.26)
    .room(1)
    .size(0.96)
    .hpf(55)
    .lpf(2800)
    .pan(saw.range(0.08,0.92).slow(28))
    .vowel("a e i o u".slow(16))
    .stretch(perlin.range(1.4,2.9))
    .chop(rand.range(14,24))
    .speed(sine.range(0.72,1.38).slow(16))
    .sometimesBy(0.3, x=>x.speed(0.68))
    .sometimesBy(0.25, x=>x.speed(-0.95).begin(0.18))
    .echo(14, 0.25, 0.72)
    .begin(rand.range(0,0.28))
    .ring(0.22)
    .jux(x=>x.speed(1.12).pan(1-x.pan()).gain(0.65))
)