let tocar = false
let p1 = 0
let p2 = 0
input.onPinPressed(TouchPin.P0, function () {
    tocar = false
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("START!")
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
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
    if (p1 > p2) {
        basic.showString("p1 won!")
    }
    if (p2 > p1) {
        basic.showString("p2 won!")
    } else {
        basic.showString("EMPATE!")
        p1 = 0
        p2 = 0
    }
})
input.onPinPressed(TouchPin.P2, function () {
    p2 += 1
})
input.onPinPressed(TouchPin.P1, function () {
    p1 += 1
})
