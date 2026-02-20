setcps(0.41)

samples('shabda/speech:forever,eternal,infinite,endless,time,space,universe,cosmos,eternity,stars,galaxy,void')

let upperVoice = x => x
  .sound("supersaw")
  .gain(0.25)
  .lpf(sine.range(120,3400).slow(52))
  .lpq(24)
  .room(0.82)
  .delay(0.42)
  .dt(0.28)
  .dfb(0.38)
  .attack(0.01)
  .decay(0.52)
  .sustain(0.72)
  .release(3.2)
  .detune(sine.range(-28,28).slow(48))
  .tremolo(0.42)
  .tremolosync(3.8)
  .fmi(0.92)
  .phaser(0.72)
  .vowel("a o u i e".slow(36))
  .postgain(0.68)

let padVoice = x => x
  .sound("triangle")
  .gain(0.3)
  .lpf(saw.range(68,2800).slow(36))
  .lpq(20)
  .room(0.98)
  .size(0.92)
  .phaser(0.78)
  .phasersweep(sine.range(38,1200).slow(32))
  .delay(0.38)
  .dt(0.34)
  .dfb(0.48)
  .attack(4.8)
  .decay(5.2)
  .sustain(0.68)
  .release(8)
  .fmenv(0.85)
  .leslie(0.92)
  .detune(perlin.range(-28,28).slow(64))

let subPulse = x => x
  .sound("sine")
  .gain(0.45)
  .lpf(68)
  .hpf(28)
  .room(0.75)
  .pan(0.32)
  .attack(0.28)
  .decay(0.62)
  .sustain(0.68)
  .release(3.6)
  .fm(0.82)
  .detune(-12)

let arpVoice = x => x
  .sound("saw")
  .gain(0.16)
  .lpf(1800)
  .lpq(21)
  .hpf(120)
  .room(0.88)
  .crush(12)
  .distort(0.18)
  .attack(0.006)
  .decay(0.32)
  .sustain(0.52)
  .release(1.8)
  .detune(14)
  .pan(0.78)

let drone = x => x
  .sound("sine")
  .gain(0.26)
  .lpf(48)
  .hpf(24)
  .room(1)
  .size(0.98)
  .pan(0.5)
  .attack(9)
  .decay(11)
  .sustain(0.88)
  .release(18)
  .detune(sine.range(-22,22).slow(80))
  .tremolo(0.36)
  .tremolosync(2)

let drums = stack(
  s("bd*4, [bd ~ bd bd], bd [bd ~] bd, [bd bd] bd*2").room(0.55).gain(0.45),
  s("~ [cp cp ~], cp*4, cp cp [~ cp cp], [cp*2 ~] cp").room(0.45).gain(0.35),
  "<euclid(5,16), euclid(8,16), euclid(3,8)>".s("hh*4 [oh hh], [oh*3 hh*2] oh, hh [oh*4 ~]").gain(0.36).hpf(5200).pan(tri.range(0.18,0.82)).degradeBy(0.32),
  s("[rim*2 cb] [cb rim ~], rim cb*2 rim, [cb ~ rim cb]").gain(0.28).hpf(380).pan(0.78).room(0.48),
  s("[lt ht*2] [ht lt ~], lt*3 [ht*3], [ht*2 lt] ~").gain(0.32).room(0.75).hpf(180)
).swing(0.45).compressor().compressorRatio(5.8).every(18, x=>x.sometimes(x=>x.rev()))

let mel = note("[c5 eb5 g5 bb5 ab5] ~, [bb5 d6 f6 ab5 eb6] [g5 bb5], [eb6 c6 g5 ab5] bb5, [c6 eb6 g5] [ab5 c6]")
  .scale("C:minor")
  .sometimesBy(0.45, x => x.rev())
  .sometimesBy(0.42, x => x.arp("up down random"))
  .sometimesBy(0.32, x => x.octave(1))
  .sometimesBy(0.28, x => x.voicing())
  .sometimesBy(0.22, x => x.scale("C:phrygian"))
  .sometimesBy(0.18, x => x.scale("C:locrian"))

stack(
  drums,
  
  drone(note("c1").slow(48))
    .sometimesBy(0.35, x=>x.add(7))
    .off(0.38, x=>x.note("ab1").pan(0.85)),
  
  subPulse(note("c1 [eb1 ab1*4], eb1*3 [ab1 bb1 g1], [ab1 eb1 c1] bb1, c1 eb1*2 [g1 ab1]").slow(5.2))
    .sometimesBy(0.32, x=>x.add(7)),
  
  padVoice(chord("Cm Ab Eb Gm Fm Bb Eb Cm Fm Ab Gm").voicing().slow(36))
    .off(0.68, x=>x.transpose(-12).pan(0.22).gain(0.75))
    .pan(sine.range(0.12,0.88).slow(56)),
  
  arpVoice(chord("Cm Ab Gm Bb Fm Eb Ab").scale("C:minor").arp("up down").slow(4.8))
    .every(9, x => x.add(12).detune(-12))
    .off(0.48, x => x.transpose(24).gain(0.65).pan(0.28)),
  
  upperVoice(mel)
    .every(11, x => x.gain(1.48).lpf(2400).fmi(0.85))
    .every(14, x => x.add(7))
    .jux(x => x.transpose(7).late(0.32).gain(0.72).sometimesBy(0.42, x=>x.rev())),
    
  s("forever [eternal infinite] endless*2, [time space universe] [cosmos eternity], stars galaxy [void eternal]").slow(5.8)
    .gain(0.32)
    .room(1)
    .size(0.98)
    .hpf(58)
    .lpf(3000)
    .pan(saw.range(0.12,0.88).slow(48))
    .vowel("a e i o u".slow(32))
    .stretch(perlin.range(1.6,3))
    .chop(rand.range(16,28))
    .speed(sine.range(0.72,1.42).slow(32))
    .sometimesBy(0.35, x=>x.speed(0.65))
    .sometimesBy(0.28, x=>x.speed(-0.85).begin(0.22))
    .echo(24, 0.38, 0.75)
    .begin(rand.range(0,0.32))
    .ring(0.38)
    .jux(x=>x.speed(1.22).pan(1-x.pan()).gain(0.75))
    .every(18, x=>x.rev()),
    
  s("[eternity stars] [universe cosmos] [galaxy void forever], [infinite endless time] [space eternity]").slow(11)
    .gain(0.24)
    .room(1)
    .hpf(78)
    .lpf(2600)
    .pan(tri.range(0.18,0.82).slow(18))
    .speed(perlin.range(0.55,1.28).slow(24))
    .chop(12)
    .stretch(3.2)
    .sometimesBy(0.45, x=>x.rev())
    .off(1/3, x=>x.speed(0.82).gain(0.3).pan(0.42))
)