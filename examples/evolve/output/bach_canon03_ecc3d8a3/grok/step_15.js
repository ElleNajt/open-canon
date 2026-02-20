setcps(0.58)

samples('shabda/speech:forever,eternal,infinite,endless')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.38)
  .lpf(sine.range(800,3800).slow(12))
  .lpq(7)
  .room(0.45)
  .delay(0.22)
  .dt(0.1)
  .dfb(0.35)
  .attack(0.015)
  .decay(0.18)
  .sustain(0.75)
  .release(0.7)
  .detune(sine.range(-20,20).slow(16))
  .tremolo(0.25)
  .tremolosync(3.5)
  .fmi(0.4)
  .phaser(0.3)
  .vowel("a e o u i".slow(8))

let padVoice = x => x
  .sound("triangle")
  .gain(0.4)
  .lpf(saw.range(180,2400).slow(6))
  .lpq(5)
  .room(0.75)
  .size(0.9)
  .phaser(0.45)
  .phasersweep(sine.range(100,900).slow(7))
  .delay(0.28)
  .dt(0.28)
  .dfb(0.5)
  .attack(1.2)
  .decay(1.4)
  .sustain(0.65)
  .release(2.5)
  .fmenv(0.35)
  .leslie(0.55)

let subPulse = x => x
  .sound("sine")
  .gain(0.48)
  .lpf(90)
  .hpf(25)
  .room(0.35)
  .pan(0.25)
  .attack(0.04)
  .decay(0.25)
  .sustain(0.6)
  .release(0.9)
  .fm(0.3)
  .detune(-8)

let arpVoice = x => x
  .sound("saw")
  .gain(0.28)
  .lpf(2000)
  .lpq(7)
  .hpf(100)
  .room(0.55)
  .crush(16)
  .distort(0.12)
  .attack(0.008)
  .decay(0.12)
  .sustain(0.45)
  .release(0.55)
  .detune(10)
  .pan(0.75)

let drums = stack(
  s("bd*2 [~ sn bd], bd*2 [sn bd], [bd sn] bd, bd*2 [~ sn]").room(0.18).gain(0.38),
  s("~ cp*3 [cp ~], [cp cp ~ cp], cp*4 ~, [cp ~ cp*2]").room(0.18).gain(0.28),
  "<euclid(6,16), euclid(7,16), euclid(4,8), euclid(9,16)>".s("hh*2 oh, [hh oh ~ hh], oh*2 hh").gain(0.28).hpf(4500).pan(saw.range(0.25,0.75)).degradeBy(0.18),
  s("rim*2 ~ [cb rim], cb ~ rim*2, ~ [cb rim] cb, rim cb*2").gain(0.2).hpf(280).pan(0.85).room(0.12),
  s("[~ lt*2] [ht lt ~], [ht*2 lt] ~, lt*2 [ht ~], ht lt*3").gain(0.24).room(0.4).hpf(130)
).swing(0.2).compressor().compressorRatio(4.5)

let mel = note("ab4 [c5 eb5] [g5 bb5], [c5 eb5 g5] [bb5 d6], [eb5 g5 bb5] [d6 f6], g5 [bb5 d6 eb6] [g6 bb6]")
  .scale("C:minor")
  .sometimesBy(0.25, x => x.rev())
  .sometimesBy(0.35, x => x.arp("up down"))

stack(
  drums.every(16, x => x.gain(0.8)),
  
  subPulse(note("c1 eb1*4 ab1*4, eb1 ab1 bb1 g1*4, ab1 bb1*2 g1 c1*2, c1*4 eb1 g1").slow(4)),
  
  padVoice(chord("Cm:1,3,5 Eb:1,3,7 Ab:1,3,5 Bb:1,2,5 Gm:1,3,5 Cm:1,3,7").voicing().slow(10))
    .off(0.5, x=>x.transpose(-12).pan(0.15).gain(0.8))
    .pan(sine.range(0.25,0.75).slow(20)),
  
  arpVoice(chord("Cm Eb Ab Bb Gm Cm").scale("C:minor").arp("up down random").slow(2.5))
    .every(4, x => x.add(12).detune(-12))
    .off(1/3, x => x.transpose(19).gain(0.75).pan(0.25)),
  
  upperVoice(mel)
    .every(4, x => x.gain(1.25).lpf(2200).fmi(0.55))
    .jux(x => x.transpose(7).late(0.2).gain(0.85).sometimesBy(0.2, x=>x.rev())),
    
  s("<forever eternal*2, infinite*3 endless, eternal infinite*2, forever*2 endless eternal>").slow(4)
    .gain(0.2)
    .room(0.98)
    .size(0.95)
    .hpf(75)
    .lpf(3000)
    .pan(saw.range(0.05,0.95).slow(14))
    .stretch(perlin.range(1.1,2.4))
    .chop(rand.range(8,18))
    .speed(sine.range(0.85,1.15).slow(8))
    .sometimesBy(0.25, x=>x.speed(0.7))
    .echo(8, 0.22, 0.7)
    .begin(rand.range(0,0.25))
).slow(1.4)