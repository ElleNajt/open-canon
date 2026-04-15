setcps(140/60/4)

samples('shabda/speech:keep_listening,im_here,not_yet,stay_with_me,between_the_beats')

$: s("bd ~ sn ~ bd sn").fast(2)
  .every(4, p => p.palindrome())
  .swing(0.12)
  .compressor("-18:4:6:0.01:0.2")
  .gain(0.88)

$: s("<hh hh oh hh>").euclid(11,16).fast(2)
  .hpf(5500)
  .pan(sine.range(0.2,0.8).slow(6))
  .gain(0.2)

$: note("<c2 c2 c2 eb2> ~ <g1 g1 bb1> ~").s("pulse").slow(2)
  .every(6, p => p.transpose(12))
  .lpf(sine.range(240, 2200).slow(8))
  .drive(0.42)
  .gain(0.34)

$: note("<c4 eb4 g4 bb4> <ab3 c4 eb4 g4> <bb3 d4 f4 ab4> <g3 bb3 d4 f4>").s("supersaw").slow(4)
  .lpf(sine.range(380, 3400).slow(10))
  .room(0.32)
  .size(0.62)
  .gain(0.14)

$: s("keep_listening ~ im_here ~ not_yet ~ stay_with_me ~ between_the_beats ~").slow(2)
  .chop(8)
  .speed(rand.range(0.88, 1.12))
  .delay(0.33)
  .gain(0.12)