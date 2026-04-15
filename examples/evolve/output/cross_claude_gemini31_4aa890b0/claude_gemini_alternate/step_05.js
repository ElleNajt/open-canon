samples('shabda/speech/fr-FR/m:souviens_toi,oubli,reviens')

setcps(85/60/4)

// Bass drops to minor mode, syncopation intensified with rests
$: note("<c2 ~ ab1 ~ bb1 ~ g1 ~>")
  .slow(2)
  .sound("square")
  .euclid(7, 16)
  .lpf(sine.range(300, 1200).slow(8))
  .lpq(6)
  .gain(0.5)
  .distort(0.55)
  .juxBy(0.5, x => x.octave(1).delay(0.3))

// Drums shift to halftime feel - spacious, breathing
$: stack(
  s("bd ~ ~ bd ~ ~ bd ~").gain(0.85),
  s("~ ~ ~ ~ sn ~ ~ ~").room(0.5).size(0.6),
  s("hh*8").degradeBy(0.4).gain(0.15),
  s("oh ~ ~ oh").gain(0.2).delay(0.4).delaytime(0.375)
)

// Chords become suspended, unresolved - yearning quality
$: note("<[c3,eb3,g3,bb3] [ab2,c3,eb3,g3] [bb2,d3,f3,ab3] [g2,bb2,d3,f3]>")
  .slow(2)
  .sound("sine")
  .fm(1.5)
  .fmh(3)
  .lpf(saw.range(600, 3000).slow(6))
  .attack(0.4)
  .decay(1.2)
  .sustain(0.5)
  .release(2)
  .gain(0.25)
  .room(0.7)
  .pan(sine.range(0.3, 0.7).slow(4))

// Lead transforms into descending lament - slower, more deliberate
$: note("<[g5 eb5 c5 bb4] ~ [f5 d5 bb4 ab4] ~ [eb5 c5 g4 f4] ~ [d5 bb4 g4 f4] ~>")
  .slow(2)
  .sound("sawtooth")
  .lpf(2000)
  .lpq(3)
  .gain(0.14)
  .room(0.6)
  .delay(0.5)
  .delaytime(0.5)
  .delayfeedback(0.7)
  .pan(0.6)

// NEW: Rising countermelody - hope emerging from darkness
$: note("<~ [c4 eb4 g4 c5] ~ [bb3 d4 f4 bb4]>")
  .slow(2)
  .sound("triangle")
  .attack(0.1)
  .release(0.8)
  .gain(0.18)
  .phaser(0.5)
  .phaserdepth(2)
  .room(0.5)
  .pan(0.3)

// Voices become a ghostly choir, stretched and haunting
$: s("<souviens_toi reviens oubli reviens>")
  .speed("<0.6 0.7 0.5 0.8>")
  .slow(4)
  .loop(1)
  .loopEnd(0.3)
  .room(0.9)
  .size(0.8)
  .gain(0.45)
  .lpf(1500)
  .pan(rand.range(0.2, 0.8))