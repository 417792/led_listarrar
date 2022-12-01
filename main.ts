input.onButtonPressed(Button.A, function () {
    list_2 = [
    10,
    50,
    100,
    150,
    225
    ]
    for (let index = 0; index <= 4; index++) {
        led.plotBrightness(index, 0, list_2[index])
        basic.pause(100)
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    list_4 = [
    [
    0,
    0,
    1,
    0,
    0
    ],
    [
    0,
    1,
    0,
    1,
    0
    ],
    [
    1,
    0,
    1,
    0,
    1
    ],
    [
    0,
    1,
    0,
    1,
    0
    ],
    [
    0,
    0,
    1,
    0,
    0
    ]
    ]
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (list_4[y][x] == 1) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
        }
    }
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    list_3 = [
    [
    225,
    150,
    100,
    50,
    10
    ],
    [
    10,
    50,
    100,
    150,
    225
    ],
    [
    10,
    100,
    225,
    100,
    10
    ],
    [
    225,
    100,
    10,
    100,
    215
    ],
    [
    10,
    50,
    150,
    200,
    10
    ]
    ]
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plotBrightness(x, y, list_3[y][x])
        }
        basic.pause(100)
    }
    basic.pause(2000)
    basic.clearScreen()
})
let list_3: number[][] = []
let list_4: number[][] = []
let list_2: number[] = []
let list_1 = [
0,
1,
0,
1,
0
]
for (let index = 0; index <= 4; index++) {
    if (list_1[index] == 1) {
        led.plot(index, 0)
    } else {
        led.unplot(index, 0)
    }
}
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
	
})
