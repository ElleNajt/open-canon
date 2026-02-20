setcps(0.5)

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.38)
  .lpf(2800)
  .lpq(3.5)
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
  .sound("sine")
  .gain(0.35)
  .lpf(90)
  .hpf(40)
  .room(0.2)
  .pan(0.35)
  .attack(0.05)
  .decay(0.3)
  .sustain(0.4)
  .release(0.6)

let drums = stack(
  s("bd*2 sn, bd sn bd, bd*2, bd sn*2").room(0.1).gain(0.28),
  s("~ cp cp, cp ~ cp, ~ cp, cp cp ~").room(0.1).gain(0.2),
  s("~ hh*8, hh*4 oh, hh*8 ~, hh*6").gain(0.22).hpf(4000).pan(saw.range(0.3,0.7)).degradeBy(0.1)
).swing(0.06)

stack(
  drums,
  
  subPulse(note("c1 g1 ab1 g1").scale("C:minor")),
  
  padVoice(chord("Cm:1,2,5 Ab:1,2,5 Gm:1,2,5 Eb:1,2,5").voicing().slow(2))
    .off(0.5, x=>x.transpose(-12).pan(0.3))
    .pan(sine.range(0.4,0.6).slow(12)),
  
  upperVoice(note("g4 bb4 c5 eb5, bb4 c5 eb5 g5, eb5 d5 c5 bb4, g4 f4 eb4 d4").scale("C:minor")
    .sometimesBy(0.15, rev)),
  upperVoice(note("g4 bb4 c5 eb5, bb4 c5 eb5 g5, eb5 d5 c5 bb4, g4 f4 eb4 d4").scale("C:minor")
    .sometimesBy(0.15, rev))
    .late(0.25)
    .transpose(7)
    .gain(0.9)
).slow(2)