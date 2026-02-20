setcps(0.75)

samples('shabda/speech:ebony,shadows,darkness,forever,night,eternal')

stack(
  s("bd*4 [~ sn cp] [bd sn cp] [bd ~ cp], bd [bd sn cp rd] [hh*16 ~], euclid(13,16):oh [oh*4 rd cp] [oh*8 hh*8]")
    .gain(0.95).room(0.72).pan(0.25).swing(sine.range(0.25,0.48).slow(3))
    .compressor().compressorKnee(0.45).compressorRatio(14)
    .off(1/8, rev())
    .every(16, "~?").sometimesBy(0.38, rev()).every(32, fast(1.04)).every(128, p=>p.swing(0.58)).every(256, p=>p.add(0.03).mul(0.97)).every(512, rev()).every(1024, p=>p.fast(1.15)),
  s("[~ cp*4 hh*4] [cp oh rd*2] [hh*3 cp oh] ~")
    .gain(0.25).pan(0.82).room(0.65).degradeBy(0.28).coarse(10)
    .sometimesBy(0.42, rev()).every(64, rev()).every(128, p=>p.fast(1.1)),
  note("eb1*2 c2*2 [eb1 g1 bb1 f1 ab1] [c2 eb2], [f1*3 ab1*2 g1 bb1 c2] eb1*2 ~")
    .sound("square").cut(1).gain(0.6).hpf(50)
    .lpf(sine.range(320,820).slow(8).mul(0.8).add(280)).lpq(28)
    .attack(0.01).decay(0.22).sustain(0.82).release(0.9)
    .slide(0.42).distort(0.35).fmi(2.8)
    .delay(0.45).dfb(0.65)
    .room(0.85).pan(0.15).late(0.12)
    .every(16, rev()).every(64, p=>p.transpose(12).mul(0.72)).every(256, p=>p.transpose(-12)).every(512, p=>p.add(7)).every(1024, p=>p.lpf(320)).every(2048, p=>p.octave(-1)),
  note("c2 eb2 g2 bb2, [f2 ab2 c3] eb3, [g2 bb2 d3] f3, [f2 a2 c3 eb3]")
    .sound("sawtooth")
    .detune(28)
    .gain(0.42).lpf(1200).lpq(24).voicing()
    .phaser(0.72).phaserdepth(0.88)
    .attack(0.015).hold(0.26).decay(0.24).sustain(0.92).release(1.1)
    .every(16, rev()).every(32, p=>p.transpose(12)).every(128, p=>p.add(-12)).every(256, p=>p.transpose(7)).every(512, p=>p.transpose(-5)).room(0.92).pan(0.5),
  note("eb4 [bb4 d5] f5 [bb4 ab4], [eb4 g4 f4 eb4 d4] bb4, [ab4 g4 f4] [eb4 d4 c4], bb3 eb4*2")
    .sound("triangle").gain(0.52)
    .attack(0.012).decay(0.18).sustain(0.78).release(1.3)
    .lpf(sine.range(300,6800).slow(3.2).mul(0.88).add(320))
    .lpq(28)
    .delay(0.5).dfb(0.55)
    .leslie(0.9).vowel("e:4 a i o u")
    .room(0.95).pan(0.75)
    .sometimesBy(0.32, p=>p.arp("up")).sometimesBy(0.25, p=>p.arp("down")).every(64, p=>p.add(12)).every(512, p=>p.rev()),
  note("~ [eb6 g6 bb6 d7] ~ [f6 a6 c7], [bb6 g6 eb6] ~ [d6 bb5 g5 eb5]")
    .sound("supersaw")
    .detune(32)
    .gain(0.32).lpf(2500).hpf(780)
    .tremolo(0.88).tremolosync(4.2)
    .fmi(5).fmenv(1.8).ring(0.65)
    .every(16, p=>p.transpose(-7)).sometimesBy(0.65, p=>p.arp("down")).sometimesBy(0.38, p=>p.arp("up"))
    .fast(2)
    .echo(10, 1/8, 0.65)
    .room(0.96).pan(0.94),
  note("[c1 eb1 g1]*2 [bb1 f1 ab1 c2] [eb1 g1 bb1]*2")
    .sound("sine").lpf(480).lpq(24).clip(1)
    .gain(0.38).slow(4)
    .attack(0.45).decay(0.85).sustain(0.92).release(2.4).detune(30)
    .room(0.99).pan(sine.range(0.08,0.92).slow(4.2))
    .sometimesBy(0.35, p=>p.add(12)).jux(p=>rev(p).pan(0.94).mul(0.7)).every(128, p=>p.slow(2)).every(512, p=>p.transpose(7)).every(1024, p=>p.add(-7)),
  s("euclid(5,8):hh*2, euclid(3,16):cp").gain(0.16).pan(rand.range(0.75,0.98)).room(0.45).fast(2).degradeBy(0.4).every(128, rev()).every(512, p=>p.fast(1.5)),
  s("[ebony*2 shadows] [darkness*2 forever] [night eternal ~]").slow(2.6).chop(24).speed(rand.range(0.75,1.25))
    .gain(0.28).room(0.99).pan(rand.range(0.12,0.94)).hpf(140).degradeBy(0.22).lpf(3800)
    .sometimesBy(0.58, rev()).every(128, p=>p.fast(1.1)).every(512, p=>p.chop(16)).every(1024, p=>p.add("ebony? shadows?")).every(2048, p=>p.speed(0.85))
)