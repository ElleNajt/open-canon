setcps(0.5)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity,stars,galaxy,void')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.3)
  .lpf(sine.range(350,3600).slow(28))
  .lpq(14)
  .room(0.6)
  .delay(0.3)
  .dt(0.12)
  .dfb(0.4)
  .attack(0.01)
  .decay(0.3)
  .sustain(0.7)
  .release(1.2)
  .detune(sine.range(-20,20).slow(32))
  .tremolo(0.35)
  .tremolosync(4)
  .fmi(0.7)
  .phaser(0.55)
  .vowel("a o u e i".slow(20))
  .postgain(0.8)

let padVoice = x => x
  .sound("triangle")
  .gain(0.32)
  .lpf(saw.range(90,2600).slow(14))
  .lpq(10)
  .room(0.9)
  .size(0.9)
  .phaser(0.7)
  .phasersweep(sine.range(40,1000).slow(16))
  .delay(0.35)
  .dt(0.3)
  .dfb(0.5)
  .attack(2.1)
  .decay(2.5)
  .sustain(0.6)
  .release(3.8)
  .fmenv(0.6)
  .leslie(0.8)
  .detune(perlin.range(-14,14).slow(36))

let subPulse = x => x
  .sound("sine")
  .gain(0.4)
  .lpf(75)
  .hpf(30)
  .room(0.5)
  .pan(0.15)
  .attack(0.08)
  .decay(0.4)
  .sustain(0.6)
  .release(1.5)
  .fm(0.5)
  .detune(-14)

let arpVoice = x => x
  .sound("saw")
  .gain(0.22)
  .lpf(1600)
  .lpq(12)
  .hpf(110)
  .room(0.7)
  .crush(11)
  .distort(0.22)
  .attack(0.009)
  .decay(0.18)
  .sustain(0.45)
  .release(0.85)
  .detune(16)
  .pan(0.85)

let drone = x => x
  .sound("sine")
  .gain(0.25)
  .lpf(60)
  .hpf(25)
  .room(0.95)
  .size(0.95)
  .pan(0.5)
  .attack(4)
  .decay(6)
  .sustain(0.8)
  .release(8)
  .detune(sine.range(-8,8).slow(48))
  .tremolo(0.25)
  .tremolosync(1.5)

let drums = stack(
  s("bd*2 [~ sn bd], bd*2 [sn bd], bd [sn bd], bd*2 [~ sn]").room(0.3).gain(0.4),
  s("~ cp*3 [cp ~ cp], [cp cp ~ cp], cp*4 ~, cp*2 [~ cp]").room(0.3).gain(0.3),
  "<euclid(5,16), euclid(8,16), euclid(3,8), euclid(11,16)>".s("hh*2 oh, [hh oh ~ hh], oh*2 [hh ~]").gain(0.3).hpf(5500).pan(saw.range(0.1,0.9)).degradeBy(0.28),
  s("rim*2 ~ [cb rim], cb ~ [rim cb], ~ cb [rim cb], rim*2 cb").gain(0.22).hpf(360).pan(0.85).room(0.25),
  s("[~ lt*2] [ht lt ~], [ht*2 lt] ~, lt*2 [ht ~], [ht lt*2]").gain(0.26).room(0.55).hpf(160)
).swing(0.25).compressor().compressorRatio(6).every(16, x=>x.sometimes(x=>x.rev()))

let mel = note("c5 [eb5 g5 bb5], ab5 [c6 eb6 g6], [bb5 d6 f6] [eb6 d6], [g5 bb5 d6] [f6 eb6 c6]")
  .scale("C:minor")
  .sometimesBy(0.35, x => x.rev())
  .sometimesBy(0.4, x => x.arp("up down"))
  .sometimesBy(0.3, x => x.octave(1))
  .sometimesBy(0.22, x => x.voicing())
  .sometimesBy(0.15, x => x.scale("C:dorian"))

stack(
  drums,
  
  drone(note("c1").slow(16))
    .sometimesBy(0.18, x=>x.add(7))
    .off(0.25, x=>x.note("ab1").pan(0.9)),
  
  subPulse(note("c1 eb1*4 ab1*4, eb1 ab1 [bb1 g1*3], [ab1 bb1 g1] eb1*4, [c1 eb1 g1 bb1] c2").slow(4))
    .sometimesBy(0.22, x=>x.add(7)),
  
  padVoice(chord("Cm Ab Eb Bb Gm Cm Fm Ab").voicing().slow(12))
    .off(0.5, x=>x.transpose(-12).pan(0.08).gain(0.7))
    .pan(sine.range(0.08,0.92).slow(36)),
  
  arpVoice(chord("Cm Ab Eb Bb Gm Cm Fm Ab").scale("C:minor").arp("up down random").slow(3))
    .every(4, x => x.add(12).detune(-14))
    .off(1/3, x => x.transpose(22).gain(0.65).pan(0.18)),
  
  upperVoice(mel)
    .every(4, x => x.gain(1.45).lpf(2200).fmi(0.8))
    .every(8, x => x.add(7))
    .jux(x => x.transpose(7).late(0.22).gain(0.75).sometimesBy(0.35, x=>x.rev())),
    
  s("[forever eternal] [infinite endless], [time space universe] [cosmos eternity], stars galaxy [void eternal], [infinite forever] [endless cosmos]").slow(5)
    .gain(0.26)
    .room(0.98)
    .size(0.92)
    .hpf(65)
    .lpf(2800)
    .pan(saw.range(0.08,0.92).slow(28))
    .vowel("a e o i u".slow(12))
    .stretch(perlin.range(1.4,3))
    .chop(rand.range(14,24))
    .speed(sine.range(0.7,1.3).slow(16))
    .sometimesBy(0.3, x=>x.speed(0.65))
    .sometimesBy(0.25, x=>x.speed(-0.95).begin(0.25))
    .echo(16, 0.3, 0.7)
    .begin(rand.range(0,0.28))
    .jux(x=>x.speed(1.2).pan(1-x.pan()).gain(0.65))
)