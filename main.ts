input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(randint(0, 100))
})
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.LoopingInBackground)
basic.showString("Love Meter!")
for (let index = 0; index < 2; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
