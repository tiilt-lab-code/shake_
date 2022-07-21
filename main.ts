input.onButtonPressed(Button.A, function () {
    basic.showNumber((finish - start) / 1000)
})
input.onGesture(Gesture.Shake, function () {
    shake += 1
})
let finish = 0
let start = 0
basic.showString("start")
let shake = 0
let max = 20
start = control.millis()
basic.forever(function () {
    if (shake == max) {
        music.playTone(262, music.beat(BeatFraction.Breve))
        finish = control.millis()
        basic.showNumber((finish - start) / 1000)
    }
    led.plotBarGraph(
    shake,
    max
    )
})
