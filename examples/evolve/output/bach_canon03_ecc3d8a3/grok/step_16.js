setcps(0.55)

samples('shabda/speech:forever,eternal,infinite,endless,time,space')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.35)
  .lpf(sine.range(700,3600).slow(14))
  .lpq(8)
  .room(0.48)
  .delay(0.25)
  .dt(0.12)
  .dfb(0.38)
  .attack(0.012)
  .decay(0.22)
  .sustain(0.72)
  .release(0.8)
  .detune(sine.range(-18,18).slow(18))
  .tremolo(0.28)
  .tremolosync(4)
  .fmi(0.45)
  .phaser(0.35)
  .vowel("a o u i e".slow(9))

let padVoice = x => x
  .sound("triangle")
  .gain(0.38)
  .lpf(saw.range(160,2200).slow(7))
  .lpq(6)
  .room(0.78)
  .size(0.92)
  .phaser(0.5)
  .phasersweep(sine.range(80,850).slow(8))
  .delay(0.3)
  .dt(0.3)
  .dfb(0.52)
  .attack(1.4)
  .decay(1.6)
  .sustain(0.62)
  .release(2.8)
  .fmenv(0.4)
  .leslie(0.6)

let subPulse = x => x
  .sound("sine")
  .gain(0.45)
  .lpf(85)
  .hpf(28)
  .room(0.38)
  .pan(0.2)
  .attack(0.045)
  .decay(0.28)
  .sustain(0.58)
  .release(1)
  .fm(0.35)
  .detune(-10)

let arpVoice = x => x
  .sound("saw")
  .gain(0.26)
  .lpf(1800)
  .lpq(8)
  .hpf(110)
  .room(0.58)
  .crush(15)
  .distort(0.14)
  .attack(0.007)
  .decay(0.14)
  .sustain(0.42)
  .release(0.6)
  .detune(12)
  .pan(0.8)

let drums = stack(
  s("bd*2 [~ sn bd], bd*2 [sn bd], [bd sn] bd, bd*2 [~ sn]").room(0.2).gain(0.36),
  s("~ cp*3 [cp ~], [cp cp ~ cp], cp*4 ~, [cp ~ cp*2]").room(0.2).gain(0.26),
  "<euclid(6,16), euclid(7,16), euclid(4,8), euclid(9,16)>".s("hh*2 oh, [hh oh ~ hh], oh*2 hh").gain(0.26).hpf(4600).pan(saw.range(0.25,0.75)).degradeBy(0.2),
  s("rim*2 ~ [cb rim], cb ~ rim*2, ~ [cb rim] cb, rim cb*2").gain(0.18).hpf(290).pan(0.88).room(0.14),
  s("[~ lt*2] [ht lt ~], [ht*2 lt] ~, lt*2 [ht ~], ht lt*3").gain(0.22).room(0.42).hpf(140)
).swing(0.22).compressor().compressorRatio(4.8).every(16, x=>x.sometimes(x=>x.rev()))

let mel = note("ab4 c5 [eb5 g5], [bb5 d6 eb6] [g5 bb5], c5 eb5 [g5 bb5 d6], [eb5 g5] [bb5 d6 f6 g6]")
  .scale("C:minor")
  .sometimesBy(0.28, x => x.rev())
  .sometimesBy(0.32, x => x.arp("up down"))

stack(
  drums,
  
  subPulse(note("c1 eb1*4 ab1*4, eb1 ab1 bb1 g1*4, ab1 [bb1 g1*3], [c1 eb1 g1 c2]").slow(4)),
  
  padVoice(chord("Cm:1,3,5 Eb:1,3,7 Ab:1,3,5 Bb:1,2,5 Gm:1,3,5 Cm:1,3,7 Eb:1,3,5").voicing().slow(12))
    .off(0.5, x=>x.transpose(-12).pan(0.12).gain(0.75))
    .pan(sine.range(0.2,0.8).slow(22)),
  
  arpVoice(chord("Cm Eb Ab Bb Gm Cm Eb").scale("C:minor").arp("up down random").slow(2.75))
    .every(4, x => x.add(12).detune(-14))
    .off(1/3, x => x.transpose(19).gain(0.7).pan(0.22)),
  
  upperVoice(mel)
    .every(4, x => x.gain(1.3).lpf(2000).fmi(0.6))
    .jux(x => x.transpose(7).late(0.18).gain(0.8).sometimesBy(0.22, x=>x.rev())),
    
  s("<forever*3 eternal, infinite*2 endless time, eternal*2 infinite, forever endless*2 space>").slow(4.2)
    .gain(0.22)
    .room(0.99)
    .size(0.96)
    .hpf(70)
    .lpf(2800)
    .pan(saw.range(0.1,0.9).slow(16))
    .stretch(perlin.range(1.2,2.6))
    .chop(rand.range(10,20))
    .speed(sine.range(0.8,1.2).slow(9))
    .sometimesBy(0.3, x=>x.speed(0.65))
    .sometimesBy(0.15, x=>x.speed(-0.9).begin(0.4))
    .echo(9, 0.25, 0.72)
    .begin(rand.range(0,0.3))
    .jux(x=>x.speed(1.1).pan(1-x.pan()).gain(0.6))
).slow(1.5)