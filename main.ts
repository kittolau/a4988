let pause2 = 0
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.A)) && !(input.buttonIsPressed(Button.B))) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
basic.forever(function () {
    pause2 = 5
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        for (let index = 0; index < 512; index++) {
            pins.digitalWritePin(DigitalPin.P12, 1)
            basic.pause(pause2)
            pins.digitalWritePin(DigitalPin.P12, 0)
            basic.pause(pause2)
        }
    }
})
