setcps(0.55)

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

let padVoice = x => x
  .sound("triangle")
  .gain(0.42)
  .lpf(sine.range(500,1800).slow(3))
  .lpq(2.5)
  .room(0.6)
  .size(0.8)
  .phaser(0.3)
  .delay(0.2)
  .dt(0.25)
  .dfb(0.4)
  .attack(0.8)
  .decay(1.2)
  .sustain(0.6)
  .release(1.8)

let subPulse = x => x
  .sound("pulse")
  .gain(0.36)
  .lpf(120)
  .hpf(50)
  .room(0.2)
  .pan(0.3)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.4)
  .release(0.6)

let drums = stack(
  s("bd*2, sn bd sn, bd*2, bd sn*2").room(0.1).gain(0.28),
  s("cp*2 ~, ~ cp cp, cp ~ cp, cp cp ~").room(0.1).gain(0.2),
  s("~ hh*8, hh*12 ~, hh*8, hh*6 ~").gain(0.22).hpf(4000).pan(saw.range(0.3,0.7)).degradeBy(0.12),
  s("~ rim cb, rim ~ rim, cb rim ~, rim cb").gain(0.15).hpf(300).pan(0.7).room(0.05)
).swing(0.08).compressor()

let mel = note("g4 bb4 c5 eb5, bb4 c5 eb5 g5, eb5 d5 c5 bb4, g4 f4 eb4 d4").scale("C:minor")
  .sometimesBy(0.15, x => x.rev())

stack(
  drums,
  
  subPulse(note("c1 ab1 g1 eb1").scale("C:minor")),
  
  padVoice(chord("Cm:1,2,5 Ab:1,2,5 Gm:1,2,5 Eb:1,2,5").voicing().slow(2))
    .off(0.5, x=>x.transpose(-12).pan(0.3))
    .pan(sine.range(0.4,0.6).slow(12)),
  
  upperVoice(mel)
    .jux(x => x.transpose(7).late(0.25).gain(0.9).sometimesBy(0.15, x=>x.rev()))
).slow(2)