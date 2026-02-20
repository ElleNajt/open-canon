setcps(0.69)

samples('shabda/speech:ebony,shadows,darkness,forever')

stack(
  s("bd*4 [~ sn cp] [bd sn cp] [bd ~ cp], bd [bd sn cp rd] [hh*16 ~], euclid(13,16):oh [oh*4 rd cp] [oh*8 hh*8]")
    .gain(0.9).room(0.55).pan(0.3).swing(sine.range(0.25,0.4).slow(2.8))
    .compressor().compressorKnee(0.4).compressorRatio(10)
    .off(1/8, rev())
    .every(16, "~?").sometimesBy(0.3, rev()).every(32, fast(1.02)).every(128, p=>p.swing(0.5)).every(256, p=>p.add(0.07).mul(0.94)).every(512, rev()).every(1024, p=>p.fast(1.1)),
  s("[~ cp*4 hh*4] [cp oh rd*2] [hh*3 cp oh] ~")
    .gain(0.24).pan(0.85).room(0.5).degradeBy(0.28)
    .sometimesBy(0.4, rev()).every(64, rev()).every(128, p=>p.fast(1.06)),
  note("eb1*2 c2*2 [eb1 g1 bb1 f1] [ab1 c2], [f1*3 ab1*2 g1 bb1] eb1*2 ~")
    .sound("square").cut(1).gain(0.52).hpf(45)
    .lpf(520).lpq(28)
    .attack(0.01).decay(0.26).sustain(0.72).release(0.7)
    .slide(0.35).distort(0.28).fmi(2.2)
    .delay(0.38).dfb(0.52)
    .room(0.75).pan(0.15).late(0.08)
    .every(16, rev()).every(64, p=>p.transpose(12).mul(0.76)).every(256, p=>p.transpose(-12)).every(512, p=>p.add(5)).every(1024, p=>p.lpf(400)),
  note("c2 eb2 g2 bb2, [f2 ab2 c3] eb3, [g2 bb2 d3] f3, [f2 a2 c3 eb3]")
    .sound("sawtooth")
    .detune(22)
    .gain(0.36).lpf(1100).lpq(25).voicing()
    .phaser(0.55).phaserdepth(0.8)
    .attack(0.015).hold(0.18).decay(0.28).sustain(0.82).release(0.95)
    .every(16, rev()).every(32, p=>p.transpose(12)).every(128, p=>p.add(-12)).every(256, p=>p.transpose(7)).every(512, p=>p.transpose(-5)).room(0.88).pan(0.45),
  note("eb4 [bb4 d5] f5 [bb4 ab4], [eb4 g4 f4 eb4 d4] bb4, [ab4 g4 f4] [eb4 d4 c4], bb3 eb4*2")
    .sound("triangle").gain(0.46)
    .attack(0.012).decay(0.22).sustain(0.68).release(1.15)
    .lpf(sine.range(280,5800).slow(4).mul(0.88).add(420))
    .lpq(24)
    .delay(0.45).dfb(0.48)
    .leslie(0.8).vowel("e:2 a i o u")
    .room(0.92).pan(0.75)
    .sometimesBy(0.28, p=>p.arp("up")).sometimesBy(0.2, p=>p.arp("down")).every(64, p=>p.add(12)),
  note("~ [eb6 g6 bb6 d7] ~ [f6 a6 c7], [bb6 g6 eb6] ~ [d6 bb5 g5 eb5]")
    .sound("supersaw")
    .detune(30)
    .gain(0.26).lpf(2400).hpf(850)
    .tremolo(0.8).tremolosync(4.2)
    .fmi(4.2).fmenv(1.6).ring(0.55)
    .every(16, p=>p.transpose(-7)).sometimesBy(0.58, p=>p.arp("down")).sometimesBy(0.32, p=>p.arp("up"))
    .fast(2)
    .echo(8, 1/8, 0.52)
    .room(0.95).pan(0.9),
  note("[c1 eb1 g1]*2 [bb1 f1 ab1 c2] [eb1 g1 bb1]*2")
    .sound("sine").lpf(480).lpq(20).clip(1)
    .gain(0.32).slow(4)
    .attack(0.42).decay(0.85).sustain(0.88).release(2.1).detune(24)
    .room(0.98).pan(sine.range(0.1,0.9).slow(3.8))
    .sometimesBy(0.28, p=>p.add(12)).jux(p=>rev(p).pan(0.9).mul(0.62)).every(128, p=>p.slow(2)).every(512, p=>p.transpose(7)),
  s("euclid(5,8):hh*2, euclid(3,16):cp").gain(0.12).pan(rand.range(0.7,1)).room(0.3).fast(2).degradeBy(0.35).every(128, rev()),
  s("ebony*3 [shadows darkness] forever ~").slow(3.5).chop(16).speed(rand.range(0.85,1.15))
    .gain(0.14).room(1).pan(rand.range(0.15,0.95)).hpf(160).degradeBy(0.22).lpf(3400)
    .sometimesBy(0.45, rev()).every(128, p=>p.fast(1.06)).every(512, p=>p.chop(8))
)