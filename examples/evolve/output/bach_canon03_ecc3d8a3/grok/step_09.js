setcps(0.58)

samples('shabda/speech:forever')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.36)
  .lpf(2600)
  .lpq(4)
  .room(0.3)
  .delay(0.15)
  .dt(0.125)
  .dfb(0.35)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.7)
  .release(0.5)
  .detune(sine.range(-15,15).slow(16))
  .tremolo(0.15)
  .tremolosync(4)
  .fmi(0.25)
  .phaser(0.25)
  .vowel("a o u".slow(8))

let padVoice = x => x
  .sound("triangle")
  .gain(0.42)
  .lpf(tri.range(500,2000).slow(4))
  .lpq(2.5)
  .room(0.6)
  .size(0.8)
  .phaser(0.3)
  .phasersweep(sine.range(200,800).slow(6))
  .delay(0.2)
  .dt(0.25)
  .dfb(0.4)
  .attack(0.8)
  .decay(1.2)
  .sustain(0.6)
  .release(1.8)
  .fmenv(0.2)

let subPulse = x => x
  .sound("pulse")
  .gain(0.36)
  .lpf(140)
  .hpf(50)
  .room(0.2)
  .pan(0.3)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.4)
  .release(0.6)
  .fm(0.3)

let arpVoice = x => x
  .sound("saw")
  .gain(0.28)
  .lpf(1800)
  .lpq(6)
  .hpf(150)
  .room(0.4)
  .attack(0.01)
  .decay(0.15)
  .sustain(0.3)
  .release(0.4)
  .detune(8)
  .pan(0.7)

let drums = stack(
  s("bd*2, sn bd sn, bd*2, bd sn*2").room(0.1).gain(0.28),
  s("cp*2 ~, ~ cp cp, cp ~ cp, cp cp ~").room(0.1).gain(0.2),
  "<euclid(5,16), euclid(9,16), euclid(5,16), euclid(7,16)>".s("hh").gain(0.22).hpf(4000).pan(saw.range(0.3,0.7)).degradeBy(0.15),
  s("~ rim cb, rim ~ rim, cb rim ~, rim cb").gain(0.15).hpf(300).pan(0.7).room(0.05)
).swing(0.08).compressor()

let mel = note("g4 bb4 c5 eb5, bb4 c5 eb5 g5, eb5 d5 c5 bb4, g4 f4 eb4 d4").scale("C:minor")
  .sometimesBy(0.15, x => x.rev())
  .sometimesBy(0.25, x => x.arp("up"))

stack(
  drums,
  
  subPulse(note("c1 ab1 g1 eb1").scale("C:minor")),
  
  padVoice(chord("Cm:1,2,5 Ab:1,2,5 Gm:1,2,5 Eb:1,2,5").voicing().slow(2))
    .off(0.5, x=>x.transpose(-12).pan(0.3))
    .pan(sine.range(0.4,0.6).slow(12)),
  
  arpVoice(chord("Cm Gm Ab Eb").scale("C:minor").arp("<up down>").slow(4))
    .every(2, x => x.add(7))
    .off(1/3, x => x.transpose(12).gain(0.8).pan(0.2)),
  
  upperVoice(mel)
    .jux(x => x.transpose(7).late(0.25).gain(0.9).sometimesBy(0.15, x=>x.rev())),
    
  s("forever").slow(6).gain(0.1).room(0.9).size(1).hpf(120).lpf(3000).pan(sine.range(0.2,0.8).slow(16)).stretch(rand.range(1.2,1.8))
).slow(2)