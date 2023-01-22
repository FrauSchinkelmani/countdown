input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(5 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("LOS")
})
input.onButtonPressed(Button.B, function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
basic.forever(function () {
	
})
