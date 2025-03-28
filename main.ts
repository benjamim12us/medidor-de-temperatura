basic.forever(function () {
    if (input.temperature() > 25) {
        music.play(music.stringPlayable("C5 B C5 B B B C5 C5 ", 999), music.PlaybackMode.UntilDone)
        basic.showNumber(0)
    } else {
    	
    }
})
