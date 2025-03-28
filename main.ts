basic.forever(function () {
    if (input.temperature() > 25) {
        music.play(music.stringPlayable("C5 B C5 B B B C5 C5 ", 999), music.PlaybackMode.UntilDone)
        basic.showNumber(input.temperature())
        basic.showArrow(ArrowNames.North)
        basic.clearScreen()
    } else if (input.temperature() < 22) {
        music.play(music.stringPlayable("C5 G A G F B G G ", 999), music.PlaybackMode.UntilDone)
        basic.showNumber(input.temperature())
        basic.showArrow(ArrowNames.South)
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
        basic.showNumber(input.temperature())
    }
})
