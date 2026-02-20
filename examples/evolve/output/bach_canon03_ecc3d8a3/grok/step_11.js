setcps(0.55)

samples('shabda/speech:forever,eternal,infinite,endless')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.38)
  .lpf(2400)
  .lpq(5)
  .room(0.35)
  .delay(0.18)
  .dt(0.125)
  .dfb(0.38)
  .attack(0.015)
  .decay(0.18)
  .sustain(0.75)
  .release(0.55)
  .detune(sine.range(-20,20).slow(12))
  .tremolo(0.18)
  .tremolosync(3)
  .fmi(0.3)
  .phaser(0.3)
  .vowel("a o u i".slow(6))

let padVoice = x => x
  .sound("triangle")
  .gain(0.4)
  .lpf(tri.range(400,2200).slow(3))
  .lpq(3)
  .room(0.65)
  .size(0.85)
  .phaser(0.35)
  .phasersweep(sine.range(150,900).slow(5))
  .delay(0.22)
  .dt(0.28)
  .dfb(0.45)
  .attack(0.9)
  .decay(1.1)
  .sustain(0.65)
  .release(2)
  .fmenv(0.25)
  .leslie(0.45)

let subPulse = x => x
  .sound("sine")
  .gain(0.42)
  .lpf(90)
  .hpf(40)
  .room(0.25)
  .pan(0.35)
  .attack(0.04)
  .decay(0.25)
  .sustain(0.5)
  .release(0.7)
  .fm(0.25)
  .detune(-5)

let arpVoice = x => x
  .sound("saw")
  .gain(0.3)
  .lpf(2000)
  .lpq(5)
  .hpf(120)
  .room(0.45)
  .attack(0.008)
  .decay(0.12)
  .sustain(0.35)
  .release(0.45)
  .detune(10)
  .pan(0.65)

let drums = stack(
  s("bd*2 [~ sn bd], bd*2 [sn bd], bd [sn bd], bd*2 sn").room(0.12).gain(0.3),
  s("~ cp*3, cp ~ [cp cp], cp*2 ~ cp, [cp cp*2]").room(0.12).gain(0.22),
  "<euclid(6,16), euclid(7,16), euclid(4,8), euclid(9,16)>".s("hh*2").gain(0.24).hpf(4500).pan(saw.range(0.25,0.75)).degradeBy(0.15),
  s("rim*2 ~ cb, cb rim ~, ~ rim*2 cb, rim cb rim").gain(0.17).hpf(280).pan(0.75).room(0.08),
  s("~ [lt ht] lt, ht*2 ~ lt, ~ ht lt ~").gain(0.2).room(0.3).hpf(150)
).swing(0.14).compressor().compressorRatio(4.5)

let mel = note("eb4 g4 bb4 d5 eb5, g4 bb4 d5 f5 ab5, bb4 d5 f5 ab5 c6, [c5 eb5 g5] bb5")
  .scale("C:minor")
  .sometimesBy(0.25, x => x.rev())
  .sometimesBy(0.35, x => x.arp("up"))

stack(
  drums.every(16, x => x.gain(0.7)),
  
  subPulse(note("c1*8, eb1*8, ab1*8, bb1*8").slow(4)),
  
  padVoice(chord("Cm:1,3,5 Eb:1,3,7 Ab:1,3,5 Bb:1,2,5").voicing().slow(4))
    .off(0.5, x=>x.transpose(-12).pan(0.25).gain(0.9))
    .pan(sine.range(0.35,0.65).slow(16)),
  
  arpVoice(chord("Cm Eb Ab Bb").scale("C:minor").arp("up down random").slow(3))
    .every(3, x => x.add(12).detune(-8))
    .off(1/4, x => x.transpose(19).gain(0.75).pan(0.15)),
  
  upperVoice(mel)
    .every(4, x => x.gain(1.15).lpf(2200).fmi(0.45))
    .jux(x => x.transpose(7).late(0.2).gain(0.85).sometimesBy(0.2, x=>x.rev())),
    
  s("<forever*2 eternal, eternal forever infinite, endless ~ eternal>").slow(4)
    .gain(0.13)
    .room(0.92)
    .size(0.9)
    .hpf(90)
    .lpf(3000)
    .pan(saw.range(0.15,0.85).slow(10))
    .stretch(perlin.range(1.1,2.1))
    .chop(rand.range(5,14))
    .speed(sine.range(0.92,1.08).slow(6))
    .sometimesBy(0.25, x=>x.speed(0.7))
    .echo(6, 0.22, 0.6)
).slow(1.6)