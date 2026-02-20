setcps(72/60/4)

$: arrange(
  // Aria - The original theme, simple and tender
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("triangle").gain(0.4).room(0.2),
    note("d4 d4 e4 fs4 g4 a4 fs4 g4").slow(2).sound("sine").gain(0.25).delay(0.2).late(0.5)
  )],
  
  // Variation 1 - A gentle polonaise, ornamental grace
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("sawtooth").lpf(800).gain(0.35),
    note("[g4 a4 b4] [fs4 g4 a4] [e4 fs4 g4] [d4 e4 fs4] [b3 cs4 d4] [c4 d4 e4] [d4 e4 fs4] [g3 a3 b3]").slow(2).sound("triangle").gain(0.3).pan(sine.range(0.3, 0.7).slow(4))
  )],
  
  // Variation 2 - Two voices in gentle dialogue
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("sine").gain(0.3),
    note("b4 a4 g4 fs4 d4 e4 fs4 b3").slow(2).sound("triangle").gain(0.25).late(0.25),
    note("d4 d4 b3 a3 g3 g3 a3 d3").slow(2).sound("triangle").gain(0.25).late(0.5)
  )],
  
  // Variation 3 - Canon at the unison, voices chasing
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("triangle").gain(0.3),
    note("g4 fs4 e4 d4 b3 c4 d4 g3").slow(2).sound("sine").gain(0.3),
    note("g4 fs4 e4 d4 b3 c4 d4 g3").slow(2).sound("sine").gain(0.25).late(1).pan(0.3)
  )],
  
  // Variation 4 - Passepied dance, light feet
  [8, stack(
    note("g2 fs2 e2 d2 b1 c2 d2 g1").slow(2).sound("sawtooth").lpf(600).gain(0.35),
    note("[g4 ~] [a4 b4] [fs4 ~] [g4 a4] [e4 ~] [fs4 g4] [d4 ~] [e4 fs4]").slow(2).sound("triangle").gain(0.3),
    s("~ hh ~ hh ~ hh ~ hh").slow(2).gain(0.15)
  )],
  
  // Variation 5 - Virtuosic crossing hands
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("sine").gain(0.3),
    note("[g5 d5 b4 g4] [fs5 d5 a4 fs4] [e5 b4 g4 e4] [d5 a4 fs4 d4] [b4 g4 d4 b3] [c5 g4 e4 c4] [d5 a4 fs4 d4] [g4 d4 b3 g3]").slow(2).sound("triangle").gain(0.28).lpf(3000)
  )],
  
  // Variation 6 - Canon at the second, bittersweet
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("triangle").gain(0.3).room(0.25),
    note("g4 fs4 e4 d4 b3 c4 d4 g3").slow(2).sound("sine").gain(0.28),
    note("a4 g4 fs4 e4 c4 d4 e4 a3").slow(2).sound("sine").gain(0.25).late(0.5)
  )],
  
  // Variation 7 - Siciliano, a gentle lullaby in 6/8 feel
  [8, stack(
    note("g3 ~ fs3 ~ e3 ~ d3 ~ b2 ~ c3 ~ d3 ~ g2 ~").slow(2).sound("triangle").gain(0.32),
    note("[g4 b4 d5] ~ [fs4 a4 d5] ~ [e4 g4 b4] ~ [d4 fs4 a4] ~").slow(2).sound("sine").gain(0.22).room(0.3)
  )],
  
  // Variation 8 - Two-part invention, lively counterpoint
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("sawtooth").lpf(900).gain(0.3),
    note("[g5 fs5 e5 d5] [d5 e5 fs5 g5] [e5 d5 c5 b4] [b4 c5 d5 e5]").slow(2).sound("triangle").gain(0.25),
    note("[b3 c4 d4 e4] [a3 b3 c4 d4] [g3 a3 b3 c4] [fs3 g3 a3 b3]").slow(2).sound("triangle").gain(0.25).late(0.5)
  )],
  
  // Variation 9 - Canon at the third, serene
  [8, stack(
    note("g2 fs2 e2 d2 b1 c2 d2 g1").slow(2).sound("sine").gain(0.35),
    note("d4 cs4 b3 a3 fs3 g3 a3 d3").slow(2).sound("triangle").gain(0.28),
    note("b4 a4 g4 fs4 d4 e4 fs4 b3").slow(2).sound("triangle").gain(0.25).late(0.75)
  )],
  
  // Variation 10 - Fughetta, learned and formal
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("triangle").gain(0.3),
    note("~ ~ g4 fs4 e4 d4 b3 c4").slow(2).sound("triangle").gain(0.28).late(0.5),
    note("~ ~ ~ ~ g4 fs4 e4 d4").slow(2).sound("sine").gain(0.25).late(1),
    note("~ ~ ~ ~ ~ ~ g3 fs3").slow(2).sound("sine").gain(0.22).late(1.5)
  )],
  
  // Variation 11 - Gigue, joyful dance
  [8, stack(
    note("[g3 ~] [~ fs3] [e3 ~] [~ d3] [b2 ~] [~ c3] [d3 ~] [~ g2]").slow(2).sound("sawtooth").lpf(1000).gain(0.32),
    note("[b4 d5 g5] [a4 d5 fs5] [g4 b4 e5] [fs4 a4 d5] [d4 g4 b4] [e4 g4 c5] [fs4 a4 d5] [g4 b4 d4]").slow(2).sound("triangle").gain(0.25)
  )],
  
  // Variation 12 - Canon at the fourth, inverted
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("sine").gain(0.32).room(0.2),
    note("d4 e4 fs4 g4 b4 a4 g4 d5").slow(2).sound("triangle").gain(0.28),
    note("g3 a3 b3 c4 e4 d4 c4 g4").slow(2).sound("triangle").gain(0.25).late(0.5)
  )],
  
  // Variation 13 - Sarabande, the weeping heart
  [8, stack(
    note("g3 fs3 e3 eb3 b2 c3 d3 g2").slow(2).sound("triangle").gain(0.35).room(0.35),
    note("[b4,d5] [a4,d5] [g4,b4] [fs4,a4] [d4,g4] [e4,g4] [fs4,a4] [g4,b4]").slow(2).sound("sine").gain(0.22).attack(0.1).release(0.8)
  )],
  
  // Variation 14 - Toccata brillante
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("sawtooth").lpf(700).gain(0.3),
    note("[g5 fs5 g5 a5] [fs5 e5 fs5 g5] [e5 d5 e5 fs5] [d5 cs5 d5 e5] [b4 a4 b4 cs5] [c5 b4 c5 d5] [d5 cs5 d5 e5] [g4 fs4 g4 a4]").slow(2).sound("triangle").gain(0.25).lpf(4000)
  )],
  
  // Variation 15 - Canon at the fifth in G minor, the dark center
  [8, stack(
    note("g3 f3 eb3 d3 bb2 c3 d3 g2").slow(2).sound("triangle").gain(0.35).lpf(1200),
    note("d4 c4 bb3 a3 f3 g3 a3 d3").slow(2).sound("sine").gain(0.3).room(0.3),
    note("a4 g4 f4 e4 c4 d4 e4 a3").slow(2).sound("sine").gain(0.25).late(0.5).pan(0.35)
  )],
  
  // Variation 16 - Overture, the grand return (French style)
  [8, stack(
    note("[g3 ~ ~] [fs3 ~ ~] [e3 ~ ~] [d3 ~ ~] [b2 ~ ~] [c3 ~ ~] [d3 ~ ~] [g2 ~ ~]").slow(4).sound("sawtooth").lpf(800).gain(0.38),
    note("[g4,b4,d5] ~ ~ [fs4,a4,d5] ~ ~ [e4,g4,b4] ~ ~ [d4,fs4,a4] ~ ~").slow(4).sound("triangle").gain(0.25).attack(0.02)
  )],
  
  // Variation 17 - Running sixteenths, perpetual motion
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("sine").gain(0.32),
    note("[d5 e5 fs5 g5] [cs5 d5 e5 fs5] [b4 cs5 d5 e5] [a4 b4 cs5 d5] [fs4 g4 a4 b4] [g4 a4 b4 c5] [a4 b4 c5 d5] [d4 e4 fs4 g4]").slow(2).sound("triangle").gain(0.25).lpf(3500)
  )],
  
  // Variation 18 - Canon at the sixth, peaceful
  [8, stack(
    note("g2 fs2 e2 d2 b1 c2 d2 g1").slow(2).sound("triangle").gain(0.35),
    note("b4 a4 g4 fs4 d4 e4 fs4 b3").slow(2).sound("sine").gain(0.28).room(0.2),
    note("e5 d5 c5 b4 g4 a4 b4 e4").slow(2).sound("sine").gain(0.25).late(0.5)
  )],
  
  // Variation 19 - Minuet, elegant simplicity
  [8, stack(
    note("[g3 d3] [fs3 d3] [e3 b2] [d3 a2] [b2 g2] [c3 g2] [d3 a2] [g2 ~]").slow(2).sound("triangle").gain(0.32),
    note("[b4 d5] [a4 d5] [g4 b4] [fs4 a4] [d4 g4] [e4 g4] [fs4 a4] [g4 ~]").slow(2).sound("sine").gain(0.25)
  )],
  
  // Variation 20 - Virtuoso etude, chains of trills
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("sawtooth").lpf(600).gain(0.3),
    note("[g5 a5]*4 [fs5 g5]*4 [e5 fs5]*4 [d5 e5]*4").slow(2).sound("triangle").gain(0.2).lpf(4500),
    note("[b4 c5]*4 [c5 d5]*4 [d5 e5]*4 [g4 a4]*4").slow(2).sound("sine").gain(0.18).late(0.5)
  )],
  
  // Variation 21 - Canon at the seventh, chromatic lament
  [8, stack(
    note("g3 fs3 f3 e3 eb3 d3 cs3 c3").slow(2).sound("triangle").gain(0.35).room(0.25),
    note("fs4 f4 e4 eb4 d4 cs4 c4 b3").slow(2).sound("sine").gain(0.28),
    note("e5 eb5 d5 cs5 c5 b4 bb4 a4").slow(2).sound("sine").gain(0.25).late(0.5).pan(0.65)
  )],
  
  // Variation 22 - Alla breve, stately fugue
  [8, stack(
    note("[g3 ~] [fs3 ~] [e3 ~] [d3 ~] [b2 ~] [c3 ~] [d3 ~] [g2 ~]").slow(4).sound("triangle").gain(0.35),
    note("[~ d4] [~ d4] [~ b3] [~ a3] [~ g3] [~ g3] [~ a3] [~ b3]").slow(4).sound("triangle").gain(0.3),
    note("[~ ~] [g4 ~] [~ fs4] [e4 ~] [~ d4] [e4 ~] [~ fs4] [g4 ~]").slow(4).sound("sine").gain(0.25).late(0.5)
  )],
  
  // Variation 23 - Sparkling scales, hands in contrary motion
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("sine").gain(0.3),
    note("[g4 a4 b4 c5 d5 e5 fs5 g5] [fs5 e5 d5 c5 b4 a4 g4 fs4]").slow(2).sound("triangle").gain(0.22).lpf(5000),
    note("[g5 fs5 e5 d5 c5 b4 a4 g4] [a4 b4 c5 d5 e5 fs5 g5 a5]").slow(2).sound("triangle").gain(0.2).pan(0.7)
  )],
  
  // Variation 24 - Canon at the octave, noble
  [8, stack(
    note("g2 fs2 e2 d2 b1 c2 d2 g1").slow(2).sound("triangle").gain(0.38),
    note("g4 fs4 e4 d4 b3 c4 d4 g3").slow(2).sound("sine").gain(0.3).room(0.2),
    note("g5 fs5 e5 d5 b4 c5 d5 g4").slow(2).sound("sine").gain(0.22).late(0.5)
  )],
  
  // Variation 25 - Adagio in G minor, the black pearl (most profound)
  [12, stack(
    note("g3 f3 eb3 d3 bb2 c3 d3 g2").slow(3).sound("triangle").gain(0.4).room(0.4).attack(0.05),
    note("[g4 bb4 d5] [f4 a4 c5] [eb4 g4 bb4] [d4 f4 a4] [bb3 d4 f4] [c4 eb4 g4] [d4 f4 a4] [g3 bb3 d4]").slow(3).sound("sine").gain(0.22).attack(0.15).release(1.2),
    note("d5 c5 bb4 a4 f4 g4 a4 bb4").slow(3).sound("sine").gain(0.18).late(0.375).room(0.35)
  )],
  
  // Variation 26 - Sarabande with virtuosic ornaments
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("sawtooth").lpf(700).gain(0.32),
    note("[g4 a4 g4] [fs4 g4 fs4] [e4 fs4 e4] [d4 e4 d4]").slow(2).sound("triangle").gain(0.25),
    note("[d5 e5 d5 c5 b4] [c5 d5 c5 b4 a4] [b4 c5 b4 a4 g4] [a4 b4 a4 g4 fs4]").slow(2).sound("sine").gain(0.2).late(0.5)
  )],
  
  // Variation 27 - Canon at the ninth, ethereal heights
  [8, stack(
    note("g2 fs2 e2 d2 b1 c2 d2 g1").slow(2).sound("sine").gain(0.35),
    note("a4 g4 fs4 e4 cs4 d4 e4 a3").slow(2).sound("triangle").gain(0.28).room(0.3),
    note("b5 a5 g5 fs5 d5 e5 fs5 b4").slow(2).sound("sine").gain(0.2).late(0.5).pan(0.7)
  )],
  
  // Variation 28 - Trills upon trills, glittering
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("triangle").gain(0.3),
    note("[g5 a5 g5 a5] [fs5 g5 fs5 g5] [e5 fs5 e5 fs5] [d5 e5 d5 e5] [b4 c5 b4 c5] [c5 d5 c5 d5] [d5 e5 d5 e5] [g4 a4 g4 a4]").slow(2).sound("sine").gain(0.22).lpf(6000),
    note("[d5 e5 d5 e5] [d5 e5 d5 e5] [b4 c5 b4 c5] [a4 b4 a4 b4] [g4 a4 g4 a4] [g4 a4 g4 a4] [a4 b4 a4 b4] [d4 e4 d4 e4]").slow(2).sound("sine").gain(0.18).late(0.25)
  )],
  
  // Variation 29 - Bravura finale, all forces unleashed
  [8, stack(
    note("[g3 g2] [fs3 fs2] [e3 e2] [d3 d2] [b2 b1] [c3 c2] [d3 d2] [g3 g2]").slow(2).sound("sawtooth").lpf(1000).gain(0.35),
    note("[g4 b4 d5 g5] [fs4 a4 d5 fs5] [e4 g4 b4 e5] [d4 fs4 a4 d5] [b3 d4 g4 b4] [c4 e4 g4 c5] [d4 fs4 a4 d5] [g4 b4 d5 g5]").slow(2).sound("triangle").gain(0.25),
    note("[d5 g5 b5 d6] [d5 fs5 a5 d6] [b4 e5 g5 b5] [a4 d5 fs5 a5]").slow(2).sound("sine").gain(0.18).late(0.25)
  )],
  
  // Variation 30 - Quodlibet (folk songs woven together)
  [8, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("triangle").gain(0.32),
    note("[d4 e4 fs4 g4] [fs4 e4 d4 c4] [b3 c4 d4 e4] [d4 c4 b3 a3]").slow(2).sound("sine").gain(0.25),
    note("[g4 g4 a4 b4] [a4 a4 b4 c5] [b4 b4 c5 d5] [c5 c5 d5 e5]").slow(2).sound("triangle").gain(0.22).late(0.25)
  )],
  
  // Variation 31 - Musette pastorale, drone and dance
  [8, stack(
    note("[g2,d3] ~ ~ ~ [g2,d3] ~ ~ ~").slow(2).sound("triangle").gain(0.35).room(0.2),
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("sine").gain(0.28),
    note("[b4 a4 g4] [a4 g4 fs4] [g4 fs4 e4] [fs4 e4 d4] [d4 cs4 b3] [e4 d4 c4] [fs4 e4 d4] [g4 fs4 e4]").slow(2).sound("triangle").gain(0.22).lpf(2500)
  )],
  
  // Variation 32 - Nocturne, moonlit reverie
  [10, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2.5).sound("sine").gain(0.32).room(0.45).attack(0.12),
    note("[g4,b4] [fs4,a4] [e4,g4] [d4,fs4] [b3,d4] [c4,e4] [d4,fs4] [g3,b3]").slow(2.5).sound("triangle").gain(0.18).attack(0.2).release(1.5).delay(0.25),
    note("d5 ~ e5 ~ fs5 ~ g5 ~ a5 ~ g5 ~ fs5 ~ d5 ~").slow(2.5).sound("sine").gain(0.15).lpf(2000).pan(sine.range(0.3, 0.7).slow(8))
  )],
  
  // Variation 33 - Tarantella, frenzied spider dance
  [8, stack(
    note("[g3 g3 g3] [fs3 fs3 fs3] [e3 e3 e3] [d3 d3 d3] [b2 b2 b2] [c3 c3 c3] [d3 d3 d3] [g2 g2 g2]").slow(2).sound("sawtooth").lpf(1200).gain(0.3),
    note("[b4 d5 g5] [a4 d5 fs5] [g4 b4 e5] [fs4 a4 d5] [d4 g4 b4] [e4 g4 c5] [fs4 a4 d5] [g4 b4 g5]").slow(2).sound("triangle").gain(0.25).fast(1.5),
    s("[~ hh hh] [~ hh hh] [~ hh hh] [~ hh hh]").slow(2).gain(0.12)
  )],
  
  // Aria da Capo - Return to the beginning, tender farewell
  [16, stack(
    note("g3 fs3 e3 d3 b2 c3 d3 g2").slow(2).sound("triangle").gain(0.38).room(0.3),
    note("d4 d4 e4 fs4 g4 a4 fs4 g4").slow(2).sound("sine").gain(0.22).delay(0.15).late(0.5).attack(0.08).release(0.6)
  )]
)
