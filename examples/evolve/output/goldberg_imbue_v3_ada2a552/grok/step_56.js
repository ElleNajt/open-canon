setcps(150/60/4)
samples('shabda/speech:groove,pulse,evolve,grok,mutate,change,strudel,livecode')

$: note("[eb1 [ab1 bb1 cs2]]*2 [c2 eb2 g2 bb2 c3 eb3] [ab2 d3 f3 ab3 c4 eb4 g4]").scale("Eb:minor").transpose(perlin.range(-4,14).slow(8))
  .slow(perlin.range(1.2,4))
  .sound("pulse")
  .lpf(sine.range(150,13000).slow(3.5))
  .fmi(perlin.range(3,14).slow(4))
  .gain(perlin.range(0.6,1.3)).pan(sine.range(0,1).slow(4))

$: note("eb2 [ab2 c3] eb3 [g3 bb3] c4 [eb4 g4 bb4]").transpose(sine.range(-6,13).slow(7))
  .sometimesBy(0.3, x=>x.rev())
  .slow(perlin.range(1.2,3.2))
  .sound("square")
  .lpf(perlin.range(200,9500).slow(2.8))
  .gain(perlin.range(0.5,1.1)).detune(sine.range(-25,45).slow(5))

$: note("g2 [c3 eb3] [g3 bb3] c4 [eb4 g4 bb4 d5]").slow(perlin.range(1.4,4))
  .sound("supersaw")
  .lpf(saw.range(180,17000).slow(3))
  .detune(sine.range(-50,55).slow(4.5))
  .gain(perlin.range(0.5,1.2)).leslie(perlin.range(0.3,0.8).slow(5))

$: stack(
  s("bd*4 ~ [bd bd]").euclid(8,16).slow(perlin.range(1.3,2.5)).gain(1.15).pan(0.15),
  s("[sn ~ cp]").euclid(10,16).slow(perlin.range(1.5,3)).gain(0.9).pan(sine.range(0.25,0.75)),
  s("hh*16? [oh hh*6 lt]").fast(perlin.range(4,10)).gain(0.8).hpf(4200).pan(cosine.range(0.1,0.9).slow(4))
).room(0.45)
  .delay(0.35)
  .dt(perlin.range(0.22,0.38).slow(3.5))
  .swing(perlin.range(0.3,0.5).slow(10))
  .juxBy(sine.range(-0.25,0.15).slow(4), rev)
  .compressor("-22:4.5:0.35:0.025:0.22")

$: note("ab1 [c2 eb2 g2] [bb2 d3 f3] [ab3 c4 eb4 g4]").every(12, x=>x.transpose(rand.range(-4,8)))
  .slow(perlin.range(1.4,4.2))
  .sound("triangle")
  .lpf(perlin.range(120,10500).slow(4.5))
  .fmi(saw.range(2,11).slow(3.5))
  .gain(perlin.range(0.55,1.15)).tremolo(perlin.range(0.25,0.55).slow(3.5))

$: s("[grok*3 strudel] [groove pulse evolve] [mutate*2 change] [grok livecode*2 ~] [pulse groove strudel]").sometimesBy(0.22, rev)
  .speed(perlin.range(0.65,1.6).slow(5))
  .chop(perlin.range(12,22).slow(4.5))
  .gain(perlin.range(0.75,1.35))
  .pan(sine.range(0.15,0.85).slow(2.5))
  .vowel("a e i o u".slow(2.8)).room(0.55)