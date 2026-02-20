setcps(0.5)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.32)
  .lpf(sine.range(600,3800).slow(16))
  .lpq(9)
  .room(0.52)
  .delay(0.28)
  .dt(0.11)
  .dfb(0.42)
  .attack(0.01)
  .decay(0.25)
  .sustain(0.68)
  .release(0.9)
  .detune(sine.range(-22,22).slow(20))
  .tremolo(0.32)
  .tremolosync(3.5)
  .fmi(0.5)
  .phaser(0.4)
  .vowel("a o u e i".slow(10))
  .postgain(0.9)

let padVoice = x => x
  .sound("triangle")
  .gain(0.35)
  .lpf(saw.range(140,2400).slow(8))
  .lpq(7)
  .room(0.82)
  .size(0.88)
  .phaser(0.55)
  .phasersweep(sine.range(70,900).slow(9))
  .delay(0.32)
  .dt(0.28)
  .dfb(0.48)
  .attack(1.6)
  .decay(1.8)
  .sustain(0.58)
  .release(3)
  .fmenv(0.45)
  .leslie(0.65)
  .detune(perlin.range(-12,12).slow(24))

let subPulse = x => x
  .sound("sine")
  .gain(0.42)
  .lpf(92)
  .hpf(32)
  .room(0.42)
  .pan(0.18)
  .attack(0.05)
  .decay(0.32)
  .sustain(0.55)
  .release(1.1)
  .fm(0.4)
  .detune(-12)

let arpVoice = x => x
  .sound("saw")
  .gain(0.24)
  .lpf(1700)
  .lpq(9)
  .hpf(105)
  .room(0.62)
  .crush(14)
  .distort(0.16)
  .attack(0.008)
  .decay(0.16)
  .sustain(0.4)
  .release(0.65)
  .detune(14)
  .pan(0.82)

let drums = stack(
  s("bd*2 [~ sn bd], bd*2 [sn bd], [bd sn] bd, bd*2 [~ sn]").room(0.22).gain(0.34),
  s("~ cp*3 [cp ~], [cp cp ~ cp], cp*4 ~, [cp ~ cp*2]").room(0.22).gain(0.24),
  "<euclid(5,16), euclid(8,16), euclid(3,8), euclid(10,16)>".s("hh*2 oh, [hh oh ~ hh], oh*2 hh").gain(0.24).hpf(4800).pan(saw.range(0.2,0.8)).degradeBy(0.25),
  s("rim*2 ~ [cb rim], cb ~ rim*2, ~ [cb rim] cb, rim cb*2").gain(0.16).hpf(300).pan(0.85).room(0.16),
  s("[~ lt*2] [ht lt ~], [ht*2 lt] ~, lt*2 [ht ~], ht lt*3").gain(0.2).room(0.45).hpf(135)
).swing(0.18).compressor().compressorRatio(5).every(16, x=>x.sometimes(x=>x.rev()))

let mel = note("ab4 c5 [eb5 g5 bb5], [bb5 d6 eb6] [g5 bb5], c5 eb5 [g5 bb5 d6], [eb5 g5 bb5] [d6 f6 g6]")
  .scale("C:minor")
  .sometimesBy(0.3, x => x.rev())
  .sometimesBy(0.35, x => x.arp("up down"))
  .sometimesBy(0.2, x => x.octave(1))

stack(
  drums,
  
  subPulse(note("c1 eb1*4 ab1*4, eb1 ab1 [bb1 g1*3], ab1 bb1 g1 eb1*4, [c1 eb1 g1] bb1 c2").slow(4)),
  
  padVoice(chord("Cm:1,3,5 Eb:1,3,7 Ab:1,3,5 Bb:1,2,5 Gm:1,3,5 Cm:1,3,7 Eb:1,3,5").voicing().slow(16))
    .off(0.5, x=>x.transpose(-12).pan(0.15).gain(0.72))
    .pan(sine.range(0.15,0.85).slow(24)),
  
  arpVoice(chord("Cm Eb Ab Bb Gm Cm Eb").scale("C:minor").arp("up down random").slow(3))
    .every(4, x => x.add(12).detune(-12))
    .off(1/3, x => x.transpose(19).gain(0.68).pan(0.25)),
  
  upperVoice(mel)
    .every(4, x => x.gain(1.4).lpf(2200).fmi(0.65))
    .every(8, x => x.add(7))
    .jux(x => x.transpose(7).late(0.2).gain(0.75).sometimesBy(0.25, x=>x.rev())),
    
  s("forever*4, [eternal infinite]*2, [endless time space], universe*2 [cosmos eternity], eternal infinite endless").slow(5)
    .gain(0.24)
    .room(0.98)
    .size(0.94)
    .hpf(75)
    .lpf(2900)
    .pan(saw.range(0.05,0.95).slow(18))
    .vowel("a e o i".slow(7))
    .stretch(perlin.range(1.3,2.8))
    .chop(rand.range(8,22))
    .speed(sine.range(0.75,1.25).slow(10))
    .sometimesBy(0.28, x=>x.speed(0.7))
    .sometimesBy(0.18, x=>x.speed(-0.95).begin(0.35))
    .echo(10, 0.28, 0.68)
    .begin(rand.range(0,0.35))
    .jux(x=>x.speed(1.15).pan(1-x.pan()).gain(0.65))
)