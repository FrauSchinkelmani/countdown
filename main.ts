input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.showNumber(5 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("go!")
})
input.onButtonPressed(Button.B, function () {
    if (Math.randomBoolean()) {
        basic.showString("LOST!!!")
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.showString("WON!!!")
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.happy), SoundExpressionPlayMode.UntilDone)
    }
})
basic.forever(function () {
	
})
