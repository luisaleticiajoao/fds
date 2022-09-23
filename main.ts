let p1 = 0
let p2 = 0
input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("start!")
    basic.clearScreen()
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # # . . .
            # # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            # # . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            # # # . .
            # # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # . .
            . # # . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . # # .
            . . # # .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # #
            . . . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . # #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # #
            . . # # #
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            . . # # .
            . . # # .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . # # . .
            . # # . .
            . # . . .
            . . # . .
            . . . # .
            `)
        basic.showLeds(`
            # # . . .
            # # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    }
    basic.pause(2000)
})
input.onButtonPressed(Button.A, function () {
    if (p1 > p2) {
        basic.showString("p1 won!")
    } else {
        basic.showString("p2 won!")
    }
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . . # # #
        . # . . #
        . . . # .
        . . # . .
        . # # # .
        `)
    p2 += 1
    basic.pause(100)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # . # . .
        . . # . .
        . . # . .
        `)
    p1 += 1
    basic.pause(100)
    basic.clearScreen()
})
basic.forever(function () {
	
})
