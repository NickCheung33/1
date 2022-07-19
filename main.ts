MakerCloud.registerTopicMessageHandler("BVKZV6T5", function (receivedMessage) {
    if (receivedMessage == "up") {
        powerbrick.Servo(powerbrick.Servos.S8, -45)
        powerbrick.Servo(powerbrick.Servos.S1, 225)
    } else if (receivedMessage == "down") {
        powerbrick.Servo(powerbrick.Servos.S8, -45)
        powerbrick.Servo(powerbrick.Servos.S1, 225)
    }
})
koi.koi_init_pw(koi.SerialPorts.PORT2)
koi.koi_lcd_direction(koi.LcdDirection.Front)
koi.koi_join_ap("WaiWai", "51352343")
MakerCloud.connectMakerCloudMQTT()
MakerCloud.subscribeTopic("BVKZV6T5")
