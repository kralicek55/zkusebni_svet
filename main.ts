input.onButtonPressed(Button.A, function () {
    leva_led.showRainbow(1, 360)
})
input.onButtonPressed(Button.B, function () {
    prava_led.showBarGraph(2, 2)
})
let prava_led: neopixel.Strip = null
let leva_led: neopixel.Strip = null
let pasek_led = neopixel.create(DigitalPin.P15, 2, NeoPixelMode.RGB)
leva_led = pasek_led.range(0, 1)
prava_led = pasek_led.range(1, 1)
