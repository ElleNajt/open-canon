setcps(0.52)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity,stars,galaxy,void')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.28)
  .lpf(sine.range(320,3800).slow(24))
  .lpq(16)
  .room(0.65)
  .delay(0.28)
  .dt(0.14)
  .dfb(0.45)
  .attack(0.01)
  .decay(0.35)
  .sustain(0.65)
  .release(1.4)
  .detune(sine.range(-24,24).slow(28))
  .tremolo(0.4)
  .tremolosync(3.5)
  .fmi(0.8)
  .phaser(0.6)
  .vowel("a o u i e".slow(18))
  .postgain(0.75)

let padVoice = x => x
  .sound("triangle")
  .gain(0.3)
  .lpf(saw.range(80,2800).slow(16))
  .lpq(12)
  .room(0.92)
  .size(0.88)
  .phaser(0.75)
  .phasersweep(sine.range(50,1200).slow(14))
  .delay(0.32)
  .dt(0.28)
  .dfb(0.55)
  .attack(2.3)
  .decay(2.8)
  .sustain(0.55)
  .release(4.2)
  .fmenv(0.7)
  .leslie(0.85)
  .detune(perlin.range(-16,16).slow(32))

let subPulse = x => x
  .sound("sine")
  .gain(0.42)
  .lpf(70)
  .hpf(28)
  .room(0.55)
  .pan(0.12)
  .attack(0.1)
  .decay(0.45)
  .sustain(0.55)
  .release(1.7)
  .fm(0.6)
  .detune(-12)

let arpVoice = x => x
  .sound("saw")
  .gain(0.2)
  .lpf(1800)
  .lpq(14)
  .hpf(120)
  .room(0.75)
  .crush(10)
  .distort(0.25)
  .attack(0.008)
  .decay(0.2)
  .sustain(0.4)
  .release(0.9)
  .detune(18)
  .pan(0.88)

let drone = x => x
  .sound("sine")
  .gain(0.22)
  .lpf(55)
  .hpf(22)
  .room(0.98)
  .size(0.98)
  .pan(0.5)
  .attack(4.5)
  .decay(6.5)
  .sustain(0.75)
  .release(9)
  .detune(sine.range(-10,10).slow(42))
  .tremolo(0.3)
  .tremolosync(1.25)

let drums = stack(
  s("bd*2 [sn ~ bd], bd bd [sn bd], bd [~ sn bd], [bd bd] sn").room(0.35).gain(0.42),
  s("[cp ~ cp*2] cp*3 [~ cp], cp*4 [cp ~], ~ [cp cp cp], cp*2 [cp ~ cp]").room(0.32).gain(0.28),
  "<euclid(6,16), euclid(7,16), euclid(4,8), euclid(10,16)>".s("hh*3 [oh ~], oh [hh*2 oh], [~ hh oh] hh*2").gain(0.32).hpf(5200).pan(saw.range(0.12,0.88)).degradeBy(0.25),
  s("~ rim*3 [cb ~], [rim cb] rim cb, cb [rim*2 ~], rim cb [~ rim]").gain(0.24).hpf(380).pan(0.82).room(0.28),
  s("[lt*3 ~] [ht lt ht], [ht*3 ~ lt] lt*2, ~ [lt ht*2], [ht lt*3]").gain(0.28).room(0.6).hpf(170)
).swing(0.28).compressor().compressorRatio(5.5).every(12, x=>x.sometimes(x=>x.rev()))

let mel = note("c5 eb5 [g5 bb5], ab5 c6 [eb6 g6 bb6], [bb5 d6 f6] eb6 [d6 bb5], [g5 bb5 c6] [f6 eb6 ab5]")
  .scale("C:minor")
  .sometimesBy(0.38, x => x.rev())
  .sometimesBy(0.42, x => x.arp("up down random"))
  .sometimesBy(0.28, x => x.octave(1))
  .sometimesBy(0.25, x => x.voicing())
  .sometimesBy(0.18, x => x.scale("C:phrygian"))

stack(
  drums,
  
  drone(note("c1").slow(20))
    .sometimesBy(0.22, x=>x.add(7))
    .off(0.3, x=>x.note("ab1").pan(0.92)),
  
  subPulse(note("c1 [eb1 ab1*3], eb1*2 [ab1 bb1 g1], ab1 [bb1 g1 eb1*2], [c1 eb1] [g1 bb1 c2]").slow(3.5))
    .sometimesBy(0.25, x=>x.add(7)),
  
  padVoice(chord("Cm Eb Ab Bb Fm Gm Ab Eb").voicing().slow(14))
    .off(0.6, x=>x.transpose(-12).pan(0.1).gain(0.68))
    .pan(sine.range(0.1,0.9).slow(32)),
  
  arpVoice(chord("Cm Eb Ab Bb Fm Gm Ab Eb").scale("C:minor").arp("up down").slow(2.8))
    .every(3, x => x.add(12).detune(-16))
    .off(0.4, x => x.transpose(24).gain(0.62).pan(0.2)),
  
  upperVoice(mel)
    .every(5, x => x.gain(1.5).lpf(2400).fmi(0.85))
    .every(7, x => x.add(7))
    .jux(x => x.transpose(7).late(0.25).gain(0.72).sometimesBy(0.38, x=>x.rev())),
    
  s("[forever infinite] [eternal endless], [time universe cosmos] [eternity stars], [galaxy void eternal] [infinite forever], [endless time space] [cosmos galaxy]").slow(4.2)
    .gain(0.28)
    .room(0.99)
    .size(0.95)
    .hpf(60)
    .lpf(3000)
    .pan(saw.range(0.1,0.9).slow(24))
    .vowel("a e i o u".slow(14))
    .stretch(perlin.range(1.3,2.8))
    .chop(rand.range(12,22))
    .speed(sine.range(0.75,1.35).slow(14))
    .sometimesBy(0.28, x=>x.speed(0.7))
    .sometimesBy(0.22, x=>x.speed(-1).begin(0.2))
    .echo(12, 0.28, 0.75)
    .begin(rand.range(0,0.25))
    .ring(0.2)
    .jux(x=>x.speed(1.15).pan(1-x.pan()).gain(0.68))
)