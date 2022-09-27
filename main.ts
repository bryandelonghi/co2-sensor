input.onButtonPressed(Button.A, function () {
    basic.showNumber(COZIR.Co2())
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.pause(500)
