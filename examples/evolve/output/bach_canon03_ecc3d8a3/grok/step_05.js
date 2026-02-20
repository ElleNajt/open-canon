setcps(0.45)

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.38)
  .lpf(2500)
  .lpq(4)
  .room(0.3)
  .attack(0.02)
  .decay(0.2)
  .sustain(0.7)
  .release(0.5)
  .detune(10)

let padVoice = x => x
  .sound("triangle")
  .gain(0.42)
  .lpf(sine.range(400,1600).slow(4))
  .lpq(2)
  .room(0.6)
  .size(0.8)
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
  .attack(0.05)
  .decay(0.3)
  .sustain(0.4)
  .release(0.6)

stack(
  // tight groove
  s("bd bd sn,bd sn,bd*2,bd sn").room(0.1).gain(0.28).swing(0.04),
  s("~ hh*4,hh*2 oh,hh*4,hh*8").gain(0.22).hpf(4000).pan(saw.range(0.3,0.7)),
  
  // sub pulse
  subPulse(note("c1 g1 c2 f1").scale("C:minor")),
  
  // dynamic pads
  padVoice(chord("Cm:1,2,5 Gm:1,2,5 Ab:1,2,5 Gm:1,2,5").voicing().slow(2)).off(0.5, x=>x.transpose(-12).pan(0.3)),
  
  // upper voice canon
  upperVoice(note("eb4 g4 bb4 c5,bb4 g4 eb4 d5,c5 bb4 g4 f4,eb4 d4 c4 bb3").scale("C:minor")),
  upperVoice(note("eb4 g4 bb4 c5,bb4 g4 eb4 d5,c5 bb4 g4 f4,eb4 d4 c4 bb3").scale("C:minor")).late(0.25).transpose(7).gain(0.9)
).slow(2)