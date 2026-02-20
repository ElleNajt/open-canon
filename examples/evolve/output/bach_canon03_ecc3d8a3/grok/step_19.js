setcps(0.52)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity,stars,galaxy,void')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.3)
  .lpf(sine.range(500,3600).slow(20))
  .lpq(10)
  .room(0.5)
  .delay(0.25)
  .dt(0.125)
  .dfb(0.4)
  .attack(0.01)
  .decay(0.22)
  .sustain(0.7)
  .release(0.95)
  .detune(sine.range(-20,20).slow(24))
  .tremolo(0.3)
  .tremolosync(4)
  .fmi(0.55)
  .phaser(0.45)
  .vowel("a o u e i".slow(14))
  .postgain(0.88)

let padVoice = x => x
  .sound("triangle")
  .gain(0.33)
  .lpf(saw.range(120,2200).slow(10))
  .lpq(8)
  .room(0.85)
  .size(0.9)
  .phaser(0.6)
  .phasersweep(sine.range(60,850).slow(10))
  .delay(0.3)
  .dt(0.3)
  .dfb(0.45)
  .attack(1.8)
  .decay(2)
  .sustain(0.6)
  .release(3.2)
  .fmenv(0.5)
  .leslie(0.7)
  .detune(perlin.range(-14,14).slow(28))

let subPulse = x => x
  .sound("sine")
  .gain(0.4)
  .lpf(85)
  .hpf(35)
  .room(0.45)
  .pan(0.2)
  .attack(0.06)
  .decay(0.35)
  .sustain(0.58)
  .release(1.2)
  .fm(0.45)
  .detune(-10)

let arpVoice = x => x
  .sound("saw")
  .gain(0.22)
  .lpf(1600)
  .lpq(10)
  .hpf(110)
  .room(0.65)
  .crush(13)
  .distort(0.18)
  .attack(0.007)
  .decay(0.14)
  .sustain(0.42)
  .release(0.7)
  .detune(12)
  .pan(0.8)

let drums = stack(
  s("bd*2 [~ sn bd], bd*2 [sn bd], [bd sn] bd, bd*2 [~ sn]").room(0.25).gain(0.36),
  s("~ cp*3 [cp ~], [cp cp ~ cp], cp*4 ~, [cp ~ cp*2]").room(0.25).gain(0.26),
  "<euclid(5,16), euclid(8,16), euclid(3,8), euclid(10,16)>".s("hh*2 oh, [hh oh ~ hh], oh*2 hh").gain(0.26).hpf(5000).pan(saw.range(0.15,0.85)).degradeBy(0.28),
  s("rim*2 ~ [cb rim], cb ~ rim*2, ~ [cb rim] cb, rim cb*2").gain(0.18).hpf(320).pan(0.82).room(0.18),
  s("[~ lt*2] [ht lt ~], [ht*2 lt] ~, lt*2 [ht ~], ht lt*3").gain(0.22).room(0.48).hpf(140)
).swing(0.2).compressor().compressorRatio(5.5).every(16, x=>x.sometimes(x=>x.rev()))

let mel = note("c5 [eb5 g5 bb5], ab5 [c6 eb6 g6], [bb5 d6 f6] eb6 d6, [g5 bb5 d6] [f6 eb6 c6]")
  .scale("C:minor")
  .sometimesBy(0.28, x => x.rev())
  .sometimesBy(0.32, x => x.arp("up down"))
  .sometimesBy(0.22, x => x.octave(1))
  .sometimesBy(0.15, x => x.voicing())

stack(
  drums,
  
  subPulse(note("c1 eb1*4 ab1*4, eb1 ab1 [bb1 g1*3], ab1 bb1 g1 eb1*4, [c1 eb1 g1] bb1 c2").slow(4))
    .sometimesBy(0.18, x=>x.add(7)),
  
  padVoice(chord("Cm Eb Ab Bb Gm Cm Eb Fm").voicing().slow(10))
    .off(0.5, x=>x.transpose(-12).pan(0.12).gain(0.7))
    .pan(sine.range(0.12,0.88).slow(28)),
  
  arpVoice(chord("Cm Eb Ab Bb Gm Cm Eb Fm").scale("C:minor").arp("up down random").slow(2.75))
    .every(4, x => x.add(12).detune(-14))
    .off(1/3, x => x.transpose(19).gain(0.65).pan(0.22)),
  
  upperVoice(mel)
    .every(4, x => x.gain(1.35).lpf(2100).fmi(0.7))
    .every(8, x => x.add(7))
    .jux(x => x.transpose(7).late(0.18).gain(0.72).sometimesBy(0.28, x=>x.rev())),
    
  s("forever eternal infinite, [endless time space] universe, cosmos*2 eternity stars, galaxy void*2 [eternal infinite]").slow(4.25)
    .gain(0.22)
    .room(0.96)
    .size(0.92)
    .hpf(72)
    .lpf(2800)
    .pan(saw.range(0.08,0.92).slow(20))
    .vowel("a e o i".slow(8))
    .stretch(perlin.range(1.4,2.6))
    .chop(rand.range(10,20))
    .speed(sine.range(0.8,1.2).slow(12))
    .sometimesBy(0.25, x=>x.speed(0.75))
    .sometimesBy(0.2, x=>x.speed(-0.92).begin(0.32))
    .echo(12, 0.25, 0.65)
    .begin(rand.range(0,0.32))
    .jux(x=>x.speed(1.12).pan(1-x.pan()).gain(0.62))
)