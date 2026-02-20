setcps(0.67)

samples('shabda/speech:ebony,shadows,darkness,forever')

stack(
  s("bd*4 [~ sn cp] [bd sn cp] [bd ~ cp], bd [bd sn cp rd] [hh*16 ~], euclid(13,16):oh [oh*4 rd cp] [oh*8 hh*8]")
    .gain(0.92).room(0.5).pan(0.25).swing(sine.range(0.22,0.38).slow(3.2))
    .compressor().compressorKnee(0.45).compressorRatio(9)
    .off(1/8, rev())
    .every(16, "~?").sometimesBy(0.28, rev()).every(32, fast(1.03)).every(128, p=>p.swing(0.48)).every(256, p=>p.add(0.08).mul(0.93)).every(512, rev())
    .sometimesBy(0.15, p=>p.crush(6)),
  s("[~ cp*4 hh*4] [cp oh rd*2] [hh*3 cp oh] ~")
    .gain(0.26).pan(0.8).room(0.45).degradeBy(0.3)
    .sometimesBy(0.38, rev()).every(64, rev()).every(128, p=>p.fast(1.08)),
  note("eb1*2 c2*2 [eb1 g1 bb1 f1] [ab1 c2], [f1*3 ab1*2 g1 bb1] eb1*2 ~")
    .sound("square").cut(1).gain(0.55).hpf(50)
    .lpf(480).lpq(26)
    .attack(0.01).decay(0.28).sustain(0.7).release(0.65)
    .slide(0.32).distort(0.25).fmi(2)
    .delay(0.35).dfb(0.5)
    .room(0.7).pan(0.1).late(0.07)
    .every(16, rev()).every(64, p=>p.transpose(12).mul(0.78)).every(256, p=>p.transpose(-12)).every(512, p=>p.add(7)),
  note("c2 eb2 g2 bb2, [f2 ab2 c3] eb3, [g2 bb2 d3] f3, [f2 a2 c3 eb3]")
    .sound("sawtooth")
    .detune(20)
    .gain(0.38).lpf(1050).lpq(24).voicing()
    .phaser(0.52).phaserdepth(0.82)
    .attack(0.015).hold(0.17).decay(0.3).sustain(0.8).release(0.92)
    .every(16, rev()).every(32, p=>p.transpose(12)).every(128, p=>p.add(-12)).every(256, p=>p.transpose(7)).every(512, p=>p.transpose(-5)).room(0.85).pan(0.4),
  note("eb4 [bb4 d5] f5 [bb4 ab4], [eb4 g4 f4 eb4 d4] bb4, [ab4 g4 f4] [eb4 d4 c4], bb3 eb4*2")
    .sound("triangle").gain(0.48)
    .attack(0.012).decay(0.2).sustain(0.7).release(1.1)
    .lpf(sine.range(320,5500).slow(4.5).mul(0.85).add(450))
    .lpq(22)
    .delay(0.42).dfb(0.46)
    .leslie(0.75).vowel("e:2 a i o u")
    .room(0.9).pan(0.7)
    .sometimesBy(0.25, p=>p.arp("up")).sometimesBy(0.18, p=>p.arp("down")).every(64, p=>p.add(12)),
  note("~ [eb6 g6 bb6 d7] ~ [f6 a6 c7], [bb6 g6 eb6] ~ [d6 bb5 g5 eb5]")
    .sound("supersaw")
    .detune(28)
    .gain(0.28).lpf(2300).hpf(820)
    .tremolo(0.78).tremolosync(4.5)
    .fmi(4).fmenv(1.5).ring(0.52)
    .every(16, p=>p.transpose(-7)).sometimesBy(0.55, p=>p.arp("down")).sometimesBy(0.35, p=>p.arp("up"))
    .fast(2)
    .echo(8, 1/8, 0.5)
    .room(0.93).pan(0.85),
  note("[c1 eb1 g1]*2 [bb1 f1 ab1 c2] [eb1 g1 bb1]*2")
    .sound("sine").lpf(500).lpq(19).clip(1)
    .gain(0.34).slow(4)
    .attack(0.4).decay(0.82).sustain(0.86).release(2).detune(22)
    .room(0.96).pan(sine.range(0.12,0.88).slow(4.2))
    .sometimesBy(0.25, p=>p.add(12)).jux(p=>rev(p).pan(0.85).mul(0.65)).every(128, p=>p.slow(2)).every(512, p=>p.transpose(7)),
  s("euclid(5,8):hh*2, euclid(3,16):cp").gain(0.13).pan(rand.range(0.65,1)).room(0.25).fast(2).degradeBy(0.38).every(128, rev()),
  s("ebony*2 shadows ~ [darkness forever]?").slow(4).chop(12).speed(rand.range(0.88,1.12))
    .gain(0.11).room(0.99).pan(rand.range(0.2,0.9)).hpf(180).degradeBy(0.25).lpf(3200)
    .sometimesBy(0.4, rev()).every(128, p=>p.fast(1.05))
)