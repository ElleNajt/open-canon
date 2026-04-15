// Goldberg Variations - Variation XXIII.b: The Laughing Flame
// What was solemn becomes playful; embers dance, not just glow;
// a jester's spark ignites the cathedral — sacred meets absurd

setcps(72/60/4)

samples('shabda/speech:eternal')
samples('shabda/speech:shatter')
samples('shabda/speech:breathe')
samples('shabda/speech:dancing')

// Bouncing bass: staccato Lydian leaps — fire hops, not crawls
$: note("e2 ~ gs2 ~ e3 ~ gs2 ~ b2 ~ cs3 ~ a2 ~ fs2 ~")
  .slow(4)
  .sound("square")
  .gain(0.32)
  .lpf(cosine.range(80, 400).slow(6))
  .lpq(5)
  .attack(0.005)
  .decay(0.2)
  .sustain(0.1)
  .release(0.3)
  .room(0.5)
  .size(0.6)
  .pan(0.5)
  .shape(0.4)

// Giggling choir: rapid alternating thirds — voices tease each other
$: note("<e4 gs4> <gs4 b4> <b4 ds5> <a4 cs5>").fast(3)
  .slow(4)
  .sound("sine")
  .gain(0.14)
  .fmi(3)
  .fmh(2)
  .attack(0.02)
  .decay(0.3)
  .sustain(0.2)
  .release(0.8)
  .room(0.7)
  .pan(rand.range(0.2, 0.8))
  .tremolo(0.9)
  .tremolosync(0.25)

// Toy piano bells: detuned innocence — childhood memory in flame
$: note("e5 gs5 b5 e6 b5 gs5 e5 cs5")
  .slow(2)
  .sound("triangle")
  .gain(0.2)
  .detune(15)
  .attack(0.001)
  .decay(0.6)
  .sustain(0.05)
  .release(2)
  .lpf(4000)
  .hpf(800)
  .room(0.85)
  .size(0.7)
  .pan(sine.range(0.3, 0.7).slow(3))
  .delay(0.25)
  .delaytime(0.166)
  .delayfeedback(0.35)

// Mischievous drums: off-kilter groove — the jester's footwork
$: stack(
    s("bd ~ bd:1 ~").euclid(3,8).gain(0.13).lpf(200).shape(0.25),
    s("rim*4").degradeBy(0.6).gain(0.1).hpf(2000).pan(rand),
    s("~ ~ cp ~").gain(0.08).room(0.6).delay(0.3).delaytime(0.125),
    s("hh hh oh hh").fast(2).gain(0.06).sometimes(x => x.speed(1.5))
  )
  .every(3, x => x.rev())

// Cackling whispers: playful speech fragments
$: s("dancing shatter ~ breathe ~ eternal ~ ~")
  .slow(6)
  .gain(0.16)
  .speed("<1 1.4 0.7 1.2>")
  .lpf(3500)
  .hpf(400)
  .room(0.75)
  .pan(saw.range(0.1, 0.9).slow(5))
  .delay(0.5)
  .delaytime(0.333)
  .delayfeedback(0.45)
  .chop(6)

// Drunken melody: stumbling Lydian — the hero laughs at fate
$: note("e5 ~ fs5 gs5 ~ ~ b5 a5 ~ gs5 ~ fs5 e5 ~ ds5 ~")
  .slow(3)
  .sound("sawtooth")
  .gain(0.12)
  .lpf(2200)
  .lpq(4)
  .attack(0.08)
  .decay(0.3)
  .sustain(0.5)
  .release(1)
  .slide(0.15)
  .pan(perlin.range(0.25, 0.75).slow(7))
  .room(0.6)
  .phaser(0.8)
  .phaserdepth(3)

// Circus organ: wheeling arpeggios — the carousel of renewal
$: note("e3 gs3 b3 e4 gs4 b4 e5 b4 gs4 e4 b3 gs3")
  .fast(1.5)
  .slow(4)
  .sound("pulse")
  .gain(0.11)
  .lpf(1800)
  .leslie(4)
  .lrate(6)
  .attack(0.01)
  .decay(0.2)
  .sustain(0.7)
  .release(0.4)
  .room(0.55)
  .pan(0.5)