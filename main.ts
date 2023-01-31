datalogger.setColumnTitles("temp")
loops.everyInterval(500, function () {
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
    datalogger.log(datalogger.createCV("temp", input.temperature()))
})
basic.forever(function () {
	
})
