datalogger.deleteLog(datalogger.DeleteType.Fast)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
datalogger.setColumnTitles("temp")
loops.everyInterval(600000, function () {
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
    datalogger.log(datalogger.createCV("temp", input.temperature()))
})
