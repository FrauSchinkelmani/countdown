for (let index = 0; index <= 4; index++) {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    basic.showNumber(5 - index)
}
music.playTone(392, music.beat(BeatFraction.Whole))
basic.showString("LOS")
basic.forever(function () {
	
})
