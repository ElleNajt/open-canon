samples('shabda/speech/en-GB/f:forever,aria,remember,listen,breathe'), samples('shabda/speech/ja-JP/f:yume,sayonara,hikari,kokoro,tsuki'), samples('shabda/speech/en-US/m:breathe,hollow,stay')

setcps(36/60/4)

// Variation XLV: 6:13pm. The clock has stopped entirely. In the silence
// where its tick used to be, a new sound: water dripping in the sink,
// three rooms away, almost perfectly regular but not quite. The mode
// has shifted again — from phrygian dominant back through a doorway
// into D dorian, which feels almost hopeful by comparison, that raised
// sixth like a window cracked open. The short-wave is off. Someone
// (me? a memory of me?) is humming. "kokoro" — heart — arrives not as
// a question but as a small, stubborn fact. The violin ghost has
// become a cello, closer now, playing one long held note that bends.

// Water drip — almost regular, not quite
$: s("~ ~ ~ ~ ~ ~ cp ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ cp ~")
  .gain(0.09).hpf(3200).lpf(5500).room(0.7)

// Dorian pedal — the window cracked open
$: note("<d2 [d3,a3] d2 [d3,f3,a3] d2 [d3,b3,f3]>").slow(10)
  .sound("sine")
  .attack(3).release(5)
  .lpf(sine.range(200, 700).slow(16)).gain(0.13)

// Cello bend — one long note, alive
$: note("<d3 ~ f3 ~ e3 ~ g3 ~>").slow(12)
  .sound("sawtooth")
  .slide(0.4).detune(sine.range(-15, 15).slow(5))
  .attack(2).decay(2).sustain(0.6).release(4)
  .lpf(900).lpq(4).gain(0.11).room(0.88)

// Humming melody — dorian, stubborn and close
$: note("<[~ a3 d4 f4] [~ e4 d4 ~] [~ ~ f4 e4] [~ d4 ~ ~]>").slow(11)
  .sound("triangle")
  .attack(0.4).decay(1).sustain(0.3).release(2.5)
  .vowel("<o u o a>/4").gain(0.13).room(0.85).delay(0.2).dt(0.75)

// kokoro — heart — a small stubborn fact
$: s("~ ~ ~ ~ ~ ~ kokoro ~ ~ ~ ~ ~ ~ remember ~ ~").slow(14)
  .speed(0.72).gain(0.13)
  .lpf(1400).room(0.9).pan(sine.range(0.4, 0.65).slow(11))