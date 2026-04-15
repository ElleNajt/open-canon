// Goldberg Variations - Variation XXIII.d: The Carnival of Ghosts
// What was poignant now turns spectral; the wise half-smile becomes a carnival mask;
// memories parade as harlequins — grotesque joy haunts the minor keys

setcps(82/60/4)

samples('shabda/speech:eternal')
samples('shabda/speech:shatter')
samples('shabda/speech:forgotten')
samples('shabda/speech:carnival')
samples('shabda/speech:ghost')

// Lurching bass: chromatic descent in tritones — the funhouse floor tilts
$: note("e2 bf1 ~ e2 a1 ~ eb2 a1 d2 ~ ab1 ~")
  .slow(4)
  .sound("sawtooth")
  .gain(0.28)
  .lpf(cosine.range(80, 400).slow(6))
  .lpq(6)
  .attack(0.001)
  .decay(0.15)
  .sustain(0.05)
  .release(0.4)
  .room(0.4)
  .size(0.7)
  .pan(sine.range(0.3, 0.7).slow(3))
  .distort(0.25)

// Wheezing calliope: detuned whole-tone clusters — carousel of specters
$: stack(
    note("e4 fs4 gs4 as4 c5 d5 e5 d5 c5 as4 gs4 fs4"),
    note("g4 a4 b4 cs5 ds5 f5 g5 f5 ds5 cs5 b4 a4").late(0.02)
  )
  .fast(2.2)
  .slow(4)
  .sound("pulse")
  .gain(0.11)
  .fmi(6)
  .fmh(2.5)
  .attack(0.01)
  .decay(0.1)
  .sustain(0.3)
  .release(0.5)
  .leslie(5)
  .lrate(7)
  .room(0.5)
  .pan(perlin.range(0.1, 0.9).slow(5))
  .detune(rand.range(-15, 15))

// Shambling drums: off-kilter waltz — the dead dance in 3/4 time
$: stack(
    s("bd ~ ~ bd ~ ~ bd ~ ~").slow(1.5).gain(0.18).lpf(200).shape(0.35),
    s("~ ~ sn ~ ~ sn ~ ~ rim").slow(1.5).gain(0.14).hpf(1400).pan(0.3),
    s("hh hh oh hh hh ~ hh oh hh").slow(1.5).gain(0.08).speed("<1 1.2 0.9>"),
    s("~ cp ~ ~ ~ cp ~ ~ ~").slow(1.5).gain(0.1).room(0.7).delay(0.5).dt(0.166)
  )
  .every(3, x => x.hurry(1.15))
  .sometimes(x => x.late(0.03))

// Ghost voices: pitched whispers circling — fragments of forgotten names
$: s("ghost carnival forgotten shatter eternal")
  .slow(6)
  .gain(0.2)
  .speed("<0.6 1.5 0.7 1.8 0.5>")
  .lpf(2800)
  .hpf(500)
  .room(0.9)
  .size(0.85)
  .pan(saw.range(0, 1).slow(3))
  .delay(0.6)
  .dt(0.333)
  .dfb(0.55)
  .crush(7)
  .rev()

// Weeping melody: phrygian descent with grace notes — tears behind the mask
$: note("f5 e5 ~ d5 db5 c5 ~ b4 bb4 a4 ~ gs4 g4 ~")
  .slow(4)
  .sound("triangle")
  .gain(0.15)
  .lpf(3200)
  .lpq(4)
  .attack(0.08)
  .decay(0.4)
  .sustain(0.5)
  .release(1.5)
  .slide(0.15)
  .pan(0.5)
  .room(0.65)
  .phaser(1.2)
  .phaserdepth(3)
  .jux(x => x.note("e5 ds5 ~ cs5 c5 b4 ~ as4 a4 gs4 ~ g4 fs4 ~").late(0.125))

// Mechanical drone: grinding organ cluster — the carnival never stops
$: stack(
    note("e2").s("square").gain(0.1).pan(0.2),
    note("bf2").s("square").gain(0.08).pan(0.5),
    note("e3").s("square").gain(0.06).pan(0.8)
  )
  .slow(8)
  .lpf(perlin.range(200, 700).slow(8))
  .lpq(5)
  .tremolo(0.6)
  .tremolosync(0.5)
  .attack(0.01)
  .decay(1)
  .sustain(0.9)
  .release(3)
  .room(0.85)
  .size(0.75)

// NEW: Phantom bells — struck glass ringing through the mist
$: note("<e5 b5> <g5 d6> <fs5 cs6> <a5 e6>")
  .slow(2)
  .sound("sine")
  .gain(0.12)
  .fmi(12)
  .fmh(5.5)
  .fmdecay(1.5)
  .attack(0.001)
  .decay(2)
  .sustain(0)
  .release(3)
  .room(0.95)
  .size(0.9)
  .pan(rand.range(0.2, 0.8))
  .delay(0.4)
  .dt(0.25)
  .dfb(0.35)