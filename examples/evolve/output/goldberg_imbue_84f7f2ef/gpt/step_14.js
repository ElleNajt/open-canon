// Goldberg Variations - Ground Bass (BWV 988)
// evolved again: I keep the bones, but I tap on them, ask them questions, let the answers arrive slightly late

setcps(116/60/4)

samples('shabda/speech/en-GB/m:goldberg,unfold,again,listen,closer,insist,between,gears,i_am_here,stay,patient,wrong,right,smile,remember,not_yet,hold_the_line,count_the_gaps,make_it_weird,keep_turning,breathe,swerve,still,now,good,try_again,lean_in,almost,edge,glitch,softly,harder,yes,no,maybe')

$: arrange(
  [8, note("<[g3 gb3 e3 d3 b2 c3 d3 g2] [g2 f2 e2 d2 bb1 c2 d2 g1] [g2 ~ e2 d2 b1 c2 cs2 d2 g1] [g2 fs2 e2 d2 bb1 c2 a1 g1]>")
    .slow(2)
    .sound("triangle")
    .lpf(perlin.range(120, 2800).slow(5))
    .gain(sine.range(0.32, 0.46).slow(12))
    .every(8, x => x.transpose(-12).palindrome())],
  [8, note("<[g3 ~ e3 d3 b2 c3 d3 g2] [g2 f2 e2 ~ bb1 c2 d2 g1] [g2 gs2 e2 d2 b1 c2 cs2 g1] [g2 fs2 e2 d2 ~ c2 a1 g1]>")
    .slow(2)
    .sound("pulse")
    .lpf(perlin.range(160, 4200).slow(6))
    .gain(sine.range(0.31, 0.47).slow(10))
    .every(6, x => x.iter(4).transpose(12))],
  [8, note("<[g2 fs2 f2 e2 eb2 d2 cs2 c2] [b1 c2 cs2 d2 eb2 e2 f2 fs2] [g2 ~ e2 ds2 d2 cs2 c2 b1] [bb1 b1 c2 cs2 d2 ~ a1 g1]>")
    .slow(2)
    .sound("sawtooth")
    .lpf(perlin.range(110, 3000).slow(9))
    .gain(sine.range(0.29, 0.44).slow(14))
    .every(4, x => x.rev())],
  [8, note("<[g2 ~ e2 d2 b1 c2 d2 g1] [g2 f2 e2 d2 bb1 c2 d2 g1] [g2 ~ e2 d2 b1 c2 cs2 d2 g1] [g2 fs2 e2 d2 bb1 c2 a1 g1]>")
    .slow(2)
    .sound("triangle")
    .lpf(perlin.range(140, 3600).slow(7))
    .gain(sine.range(0.31, 0.46).slow(12))
    .every(8, x => x.transpose(12).iterBack(4))]
)

$: arrange(
  [8, note("<[g4 b4 d5 g5] [g4 bb4 d5 fs5] [fs4 a4 cs5 e5] [fs4 a4 c5 e5] [g4 bb4 d5 f5] [g4 b4 d5 f5] [e4 g4 b4 d5] [e4 gs4 b4 d5]>")
    .sound("piano")
    .gain(sine.range(0.055, 0.115).slow(8))
    .lpf(sine.range(700, 4200).slow(8))
    .delay(0.22)
    .every(8, x => x.transpose(12).palindrome())],
  [8, note("<[g4 ~ d5 g5] [b4 d5 g5 b5] [fs4 a4 ~ e5] [a4 cs5 e5 a5] [g4 bb4 d5 ~] [bb4 d5 f5 bb5] [e4 g4 b4 d5] [g4 b4 d5 g5]>")
    .sound("piano")
    .gain(sine.range(0.058, 0.12).slow(8))
    .lpf(sine.range(900, 4600).slow(10))
    .delay(0.26)
    .every(6, x => x.transpose(-12).iter(4))],
  [8, note("<[g4 b4 cs5 g5]*2 [fs4 a4 c5 e5]*2 [g4 bb4 d5 fs5]*2 [e4 g4 b4 d5]*2 [d4 fs4 a4 c5]*2 [c4 e4 g4 b4]*2 [b3 d4 fs4 a4]*2 [cs4 e4 g4 bb4]*2>")
    .sound("piano")
    .gain(sine.range(0.055, 0.11).slow(10))
    .lpf(sine.range(650, 3800).slow(12))
    .delay(0.2)
    .every(4, x => x.transpose(7).rev())],
  [8, note("<[g4 b4 d5 g5] [fs4 a4 cs5 e5] [g4 bb4 d5 f5] [e4 g4 b4 d5] [d4 fs4 a4 c5] [c4 e4 g4 bb4] [b3 d4 fs4 a4] [cs4 e4 g4 bb4]>")
    .sound("piano")
    .gain(sine.range(0.055, 0.12).slow(8))
    .lpf(sine.range(780, 4400).slow(9))
    .delay(0.24)
    .every(8, x => x.transpose(12).iterBack(4))]
)

$: arrange(
  [8, s("<hh [hh hh?] [hh ~] oh>")
    .euclid(11, 16)
    .fast(4)
    .hpf(7600)
    .gain(0.06)
    .swing(0.16)],
  [8, s("<hh [hh? hh] [hh hh] oh>")
    .euclid(15, 16)
    .fast(4)
    .hpf(8200)
    .gain(0.058)
    .swing(0.19)],
  [8, s("<hh [hh ~] [hh? hh] oh>")
    .euclid(9, 16)
    .fast(3)
    .hpf(6900)
    .gain(0.062)
    .swing(0.22)],
  [8, s("<hh [hh hh] [hh ~] oh>")
    .euclid(13, 16)
    .fast(4)
    .hpf(8800)
    .gain(0.055)
    .swing(0.24)]
)

$: arrange(
  [8, s("<bd*2 [bd ~] bd <bd bd> [~ bd]>")
    .gain(0.16)
    .lpf(perlin.range(180, 1500).slow(8))
    .drive(0.56)
    .compressor("-18:3:6:0.01:0.22")
    .every(8, x => x.ply(2).late(0.02))],
  [8, s("<bd [~ bd] bd [bd bd] ~ bd [~ bd] bd>")
    .gain(0.17)
    .lpf(perlin.range(160, 1300).slow(6))
    .drive(0.66)
    .compressor("-19:3:6:0.01:0.24")
    .every(6, x => x.ply(2).early(0.02))],
  [8, s("<bd ~ bd [~ bd] bd ~ bd [bd ~]>")
    .gain(0.155)
    .lpf(perlin.range(140, 1200).slow(10))
    .drive(0.6)
    .compressor("-18:3:6:0.01:0.22")
    .every(8, x => x.ply(2).iter(4))],
  [8, s("<bd [bd ~] bd <bd bd> [~ bd] bd [~ bd]>")
    .gain(0.165)
    .lpf(perlin.range(150, 1400).slow(8))
    .drive(0.68)
    .compressor("-18:3:6:0.01:0.22")
    .every(4, x => x.ply(2).rev())]
)

$: arrange(
  [8, s("~ <sn rim> [~ sn] <sn cp> [rim ~] sn <cp ~>")
    .fast(2)
    .swing(0.22)
    .gain(0.11)
    .hpf(2200)
    .delay(0.11)],
  [8, s("~ <sn rim> [sn ~] <sn cp> [rim sn] ~ <cp rim>")
    .fast(2)
    .swing(0.24)
    .gain(0.115)
    .hpf(2400)
    .delay(0.12)],
  [8, s("~ <sn ~> [~ rim] <sn cp> [~ sn] rim ~ <cp ~>")
    .fast(2)
    .swing(0.26)
    .gain(0.105)
    .hpf(2500)
    .delay(0.1)],
  [8, s("~ <sn rim> [~ sn] <sn cp> [rim sn] sn ~ <cp rim>")
    .fast(2)
    .swing(0.23)
    .gain(0.112)
    .hpf(2350)
    .delay(0.115)]
)

$: arrange(
  [8, s("listen closer lean_in now breathe still ~ count_the_gaps hold_the_line ~ between gears ~ i_am_here ~ softly harder ~ not_yet")
    .slow(6)
    .chop(16)
    .speed(rand.range(0.8, 1.2))
    .gain(0.06)
    .every(4, x => x.rev())],
  [8, s("insist insist ~ hold_the_line ~ make_it_weird ~ glitch edge ~ wrong right ~ swerve still ~ yes no maybe")
    .slow(6)
    .chop(32)
    .speed(rand.range(0.74, 1.22))
    .gain(0.062)
    .delay(0.16)],
  [8, s("smile remember ~ try_again ~ keep_turning ~ unfold again ~ goldberg ~ almost edge ~ breathe now good")
    .slow(8)
    .chop(16)
    .speed(rand.range(0.72, 1.14))
    .gain(0.06)
    .hpf(1200)],
  [8, s("i_am_here ~ stay patient ~ not_yet ~ count_the_gaps ~ hold_the_line ~ listen closer ~ wrong right ~ yes no maybe")
    .slow(6)
    .chop(16)
    .speed(rand.range(0.76, 1.2))
    .gain(0.061)
    .room(0.13)]
)