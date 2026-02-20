setcps(0.48)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity,stars,galaxy,void')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.28)
  .lpf(sine.range(400,3400).slow(24))
  .lpq(12)
  .room(0.55)
  .delay(0.28)
  .dt(0.11)
  .dfb(0.38)
  .attack(0.01)
  .decay(0.25)
  .sustain(0.65)
  .release(1.05)
  .detune(sine.range(-18,18).slow(28))
  .tremolo(0.32)
  .tremolosync(3.5)
  .fmi(0.6)
  .phaser(0.5)
  .vowel("a o u e i".slow(16))
  .postgain(0.85)

let padVoice = x => x
  .sound("triangle")
  .gain(0.3)
  .lpf(saw.range(100,2400).slow(12))
  .lpq(9)
  .room(0.88)
  .size(0.88)
  .phaser(0.65)
  .phasersweep(sine.range(50,900).slow(12))
  .delay(0.32)
  .dt(0.28)
  .dfb(0.48)
  .attack(1.9)
  .decay(2.2)
  .sustain(0.55)
  .release(3.4)
  .fmenv(0.55)
  .leslie(0.75)
  .detune(perlin.range(-12,12).slow(32))

let subPulse = x => x
  .sound("sine")
  .gain(0.38)
  .lpf(80)
  .hpf(32)
  .room(0.48)
  .pan(0.18)
  .attack(0.07)
  .decay(0.38)
  .sustain(0.55)
  .release(1.3)
  .fm(0.48)
  .detune(-12)

let arpVoice = x => x
  .sound("saw")
  .gain(0.2)
  .lpf(1500)
  .lpq(11)
  .hpf(105)
  .room(0.68)
  .crush(12)
  .distort(0.2)
  .attack(0.008)
  .decay(0.16)
  .sustain(0.4)
  .release(0.75)
  .detune(14)
  .pan(0.82)

let drums = stack(
  s("bd*2 [~ sn bd], bd*2 [sn bd], bd [sn bd], bd*2 [~ sn]").room(0.28).gain(0.38),
  s("~ cp*3 [cp ~ cp], [cp cp ~ cp], cp*4 ~, cp*2 [~ cp]").room(0.28).gain(0.28),
  "<euclid(5,16), euclid(8,16), euclid(3,8), euclid(11,16)>".s("hh*2 oh, [hh oh ~ hh], oh*2 [hh ~]").gain(0.28).hpf(5200).pan(saw.range(0.12,0.88)).degradeBy(0.3),
  s("rim*2 ~ [cb rim], cb ~ [rim cb], ~ cb [rim cb], rim*2 cb").gain(0.2).hpf(340).pan(0.8).room(0.2),
  s("[~ lt*2] [ht lt ~], [ht*2 lt] ~, lt*2 [ht ~], [ht lt*2]").gain(0.24).room(0.5).hpf(150)
).swing(0.22).compressor().compressorRatio(5.8).every(16, x=>x.sometimes(x=>x.rev()))

let mel = note("c5 [eb5 g5 bb5], ab5 [c6 eb6 g6], [bb5 d6 f6] [eb6 d6], [g5 bb5 d6] [f6 eb6 c6]")
  .scale("C:minor")
  .sometimesBy(0.3, x => x.rev())
  .sometimesBy(0.35, x => x.arp("up down"))
  .sometimesBy(0.25, x => x.octave(1))
  .sometimesBy(0.18, x => x.voicing())

stack(
  drums,
  
  subPulse(note("c1 eb1*4 ab1*4, eb1 ab1 [bb1 g1*3], [ab1 bb1 g1] eb1*4, [c1 eb1 g1 bb1] c2").slow(4))
    .sometimesBy(0.2, x=>x.add(7)),
  
  padVoice(chord("Cm Ab Eb Bb Gm Cm Fm Ab").voicing().slow(11))
    .off(0.5, x=>x.transpose(-12).pan(0.1).gain(0.68))
    .pan(sine.range(0.1,0.9).slow(32)),
  
  arpVoice(chord("Cm Ab Eb Bb Gm Cm Fm Ab").scale("C:minor").arp("up down random").slow(2.9))
    .every(4, x => x.add(12).detune(-12))
    .off(1/3, x => x.transpose(20).gain(0.62).pan(0.2)),
  
  upperVoice(mel)
    .every(4, x => x.gain(1.4).lpf(2000).fmi(0.75))
    .every(8, x => x.add(7))
    .jux(x => x.transpose(7).late(0.2).gain(0.7).sometimesBy(0.3, x=>x.rev())),
    
  s("[forever eternal] [infinite endless], [time space universe] [cosmos eternity], stars galaxy [void eternal], [infinite forever] [endless cosmos]").slow(4.5)
    .gain(0.24)
    .room(0.95)
    .size(0.9)
    .hpf(68)
    .lpf(2600)
    .pan(saw.range(0.1,0.9).slow(24))
    .vowel("a e o i u".slow(10))
    .stretch(perlin.range(1.3,2.8))
    .chop(rand.range(12,22))
    .speed(sine.range(0.75,1.25).slow(14))
    .sometimesBy(0.28, x=>x.speed(0.7))
    .sometimesBy(0.22, x=>x.speed(-0.9).begin(0.3))
    .echo(14, 0.28, 0.68)
    .begin(rand.range(0,0.3))
    .jux(x=>x.speed(1.15).pan(1-x.pan()).gain(0.6))
)