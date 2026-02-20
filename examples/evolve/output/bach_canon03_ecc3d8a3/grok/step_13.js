setcps(0.55)

samples('shabda/speech:forever,eternal,infinite,endless')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.4)
  .lpf(sine.range(900,3600).slow(10))
  .lpq(6)
  .room(0.4)
  .delay(0.2)
  .dt(0.125)
  .dfb(0.4)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.7)
  .release(0.6)
  .detune(sine.range(-15,15).slow(14))
  .tremolo(0.2)
  .tremolosync(4)
  .fmi(0.35)
  .phaser(0.25)
  .vowel("a o i u e".slow(7))

let padVoice = x => x
  .sound("triangle")
  .gain(0.42)
  .lpf(saw.range(200,2200).slow(5))
  .lpq(4)
  .room(0.7)
  .size(0.88)
  .phaser(0.4)
  .phasersweep(sine.range(120,800).slow(6))
  .delay(0.25)
  .dt(0.3)
  .dfb(0.48)
  .attack(1)
  .decay(1.2)
  .sustain(0.6)
  .release(2.2)
  .fmenv(0.3)
  .leslie(0.5)

let subPulse = x => x
  .sound("sine")
  .gain(0.45)
  .lpf(100)
  .hpf(30)
  .room(0.3)
  .pan(0.3)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.55)
  .release(0.8)
  .fm(0.28)
  .detune(-7)

let arpVoice = x => x
  .sound("saw")
  .gain(0.3)
  .lpf(1800)
  .lpq(6)
  .hpf(110)
  .room(0.5)
  .crush(15)
  .distort(0.1)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.4)
  .release(0.5)
  .detune(12)
  .pan(0.7)

let drums = stack(
  s("bd*2 [~ sn bd], bd*2 [sn bd], bd [sn bd], bd*2 [sn ~]").room(0.15).gain(0.35),
  s("~ cp*4, [cp cp ~ cp], cp*3 ~ [cp ~], cp*2 [~ cp cp]").room(0.15).gain(0.25),
  "<euclid(5,16), euclid(8,16), euclid(3,8), euclid(10,16)>".s("hh*2 [hh oh ~], oh hh").gain(0.26).hpf(4200).pan(saw.range(0.2,0.8)).degradeBy(0.2),
  s("rim*3 ~ cb, [cb ~ rim], ~ rim cb*2, [rim cb ~]").gain(0.18).hpf(260).pan(0.8).room(0.1),
  s("[~ lt] [ht lt ~], ht*3 lt, lt ht*2 ~, [ht ~ lt]").gain(0.22).room(0.35).hpf(140)
).swing(0.18).compressor().compressorRatio(5)

let mel = note("ab4 c5 eb5 g5, c5 eb5 g5 bb5 d6, eb5 g5 bb5 d6 f6, [g5 bb5 d6] eb6 [g6 bb6]")
  .scale("C:minor")
  .sometimesBy(0.3, x => x.rev())
  .sometimesBy(0.4, x => x.arp("up down"))

stack(
  drums.every(16, x => x.gain(0.75)),
  
  subPulse(note("c1*8 eb1*8 ab1*8 bb1*8 g1*8").slow(4.5)),
  
  padVoice(chord("Cm:1,3,5 Eb:1,3,7 Ab:1,3,5 Bb:1,2,5 Gm:1,3,5 Cm:1,3,5").voicing().slow(9))
    .off(0.5, x=>x.transpose(-12).pan(0.2).gain(0.85))
    .pan(sine.range(0.3,0.7).slow(18)),
  
  arpVoice(chord("Cm Eb Ab Bb Gm").scale("C:minor").arp("up down random").slow(3))
    .every(4, x => x.add(12).detune(-10))
    .off(1/3, x => x.transpose(17).gain(0.8).pan(0.2)),
  
  upperVoice(mel)
    .every(4, x => x.gain(1.2).lpf(2000).fmi(0.5))
    .jux(x => x.transpose(7).late(0.18).gain(0.9).sometimesBy(0.25, x=>x.rev())),
    
  s("<forever*2 eternal, infinite endless*3, eternal*2 infinite, forever endless eternal>").slow(4.5)
    .gain(0.18)
    .room(0.95)
    .size(0.92)
    .hpf(80)
    .lpf(2800)
    .pan(saw.range(0.1,0.9).slow(12))
    .stretch(perlin.range(1.2,2.3))
    .chop(rand.range(6,16))
    .speed(sine.range(0.9,1.1).slow(7))
    .sometimesBy(0.3, x=>x.speed(0.75))
    .echo(7, 0.25, 0.65)
    .begin(rand.range(0,0.3))
).slow(1.5)