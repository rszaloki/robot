let megy = 1
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 15 && megy == 1) {
        megy = 0
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 128)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 128)
        basic.pause(300)
        maqueen.motorStop(maqueen.Motors.All)
        megy = 1
    }
    if (megy == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
    }
})
