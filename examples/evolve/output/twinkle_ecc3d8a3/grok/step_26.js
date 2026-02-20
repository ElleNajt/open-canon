setcps(0.7)

samples('shabda/speech:ebony,shadows,darkness,forever')

stack(
  s("bd*4 [~ sn cp] [bd sn cp] [bd ~ cp], bd [bd sn cp rd] [hh*16 ~], euclid(13,16):oh [oh*4 rd cp] [oh*8 hh*8]")
    .gain(0.92).room(0.6).pan(0.25).swing(sine.range(0.2,0.45).slow(3.2))
    .compressor().compressorKnee(0.45).compressorRatio(12)
    .off(1/8, rev())
    .every(16, "~?").sometimesBy(0.35, rev()).every(32, fast(1.03)).every(128, p=>p.swing(0.55)).every(256, p=>p.add(0.08).mul(0.92)).every(512, rev()).every(1024, p=>p.fast(1.12)),
  s("[~ cp*4 hh*4] [cp oh rd*2] [hh*3 cp oh] ~")
    .gain(0.26).pan(0.8).room(0.55).degradeBy(0.3).coarse(12)
    .sometimesBy(0.45, rev()).every(64, rev()).every(128, p=>p.fast(1.08)),
  note("eb1*2 c2*2 [eb1 g1 bb1 f1] [ab1 c2], [f1*3 ab1*2 g1 bb1] eb1*2 ~")
    .sound("square").cut(1).gain(0.55).hpf(55)
    .lpf(sine.range(350,850).slow(8).mul(0.7).add(300)).lpq(25)
    .attack(0.008).decay(0.24).sustain(0.75).release(0.75)
    .slide(0.38).distort(0.3).fmi(2.4)
    .delay(0.4).dfb(0.55)
    .room(0.78).pan(0.12).late(0.1)
    .every(16, rev()).every(64, p=>p.transpose(12).mul(0.74)).every(256, p=>p.transpose(-12)).every(512, p=>p.add(7)).every(1024, p=>p.lpf(350)),
  note("c2 eb2 g2 bb2, [f2 ab2 c3] eb3, [g2 bb2 d3] f3, [f2 a2 c3 eb3]")
    .sound("sawtooth")
    .detune(25)
    .gain(0.38).lpf(1200).lpq(22).voicing()
    .phaser(0.6).phaserdepth(0.85)
    .attack(0.012).hold(0.2).decay(0.26).sustain(0.85).release(1)
    .every(16, rev()).every(32, p=>p.transpose(12)).every(128, p=>p.add(-12)).every(256, p=>p.transpose(7)).every(512, p=>p.transpose(-5)).room(0.9).pan(0.48),
  note("eb4 [bb4 d5] f5 [bb4 ab4], [eb4 g4 f4 eb4 d4] bb4, [ab4 g4 f4] [eb4 d4 c4], bb3 eb4*2")
    .sound("triangle").gain(0.48)
    .attack(0.01).decay(0.2).sustain(0.7).release(1.2)
    .lpf(sine.range(320,6200).slow(3.5).mul(0.85).add(380))
    .lpq(26)
    .delay(0.48).dfb(0.5)
    .leslie(0.85).vowel("e:3 a i o u")
    .room(0.94).pan(0.72)
    .sometimesBy(0.3, p=>p.arp("up")).sometimesBy(0.22, p=>p.arp("down")).every(64, p=>p.add(12)),
  note("~ [eb6 g6 bb6 d7] ~ [f6 a6 c7], [bb6 g6 eb6] ~ [d6 bb5 g5 eb5]")
    .sound("supersaw")
    .detune(28)
    .gain(0.28).lpf(2600).hpf(900)
    .tremolo(0.85).tremolosync(4.5)
    .fmi(4.5).fmenv(1.7).ring(0.6)
    .every(16, p=>p.transpose(-7)).sometimesBy(0.6, p=>p.arp("down")).sometimesBy(0.3, p=>p.arp("up"))
    .fast(2)
    .echo(9, 1/8, 0.55)
    .room(0.96).pan(0.92),
  note("[c1 eb1 g1]*2 [bb1 f1 ab1 c2] [eb1 g1 bb1]*2")
    .sound("sine").lpf(500).lpq(22).clip(1)
    .gain(0.34).slow(4)
    .attack(0.4).decay(0.8).sustain(0.9).release(2.2).detune(26)
    .room(0.99).pan(sine.range(0.05,0.95).slow(4))
    .sometimesBy(0.3, p=>p.add(12)).jux(p=>rev(p).pan(0.92).mul(0.6)).every(128, p=>p.slow(2)).every(512, p=>p.transpose(7)),
  s("euclid(5,8):hh*2, euclid(3,16):cp").gain(0.13).pan(rand.range(0.65,0.95)).room(0.35).fast(2).degradeBy(0.38).every(128, rev()),
  s("ebony*4 [shadows*2 darkness] [forever ebony] ~").slow(3.2).chop(18).speed(rand.range(0.8,1.2))
    .gain(0.16).room(1).pan(rand.range(0.1,1)).hpf(150).degradeBy(0.25).lpf(3600)
    .sometimesBy(0.5, rev()).every(128, p=>p.fast(1.08)).every(512, p=>p.chop(10))
)