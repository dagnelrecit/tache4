input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    if (input.lightLevel() < 126) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
