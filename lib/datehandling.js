

function getDateFromString(dateString) {
    // We assume that the dateString variable is in the "YYYY-MM-DD HH:MM:SS" format

    try {

        var returnDate = new Date();

        returnDate.setYear(+(dateString.substring(0, 4)));
        returnDate.setMonth(+((dateString.substring(5, 7))) - 1);
        returnDate.setDate(+(dateString.substring(8, 10)));
        returnDate.setHours(+(dateString.substring(11, 13)));
        returnDate.setMinutes(+(dateString.substring(14, 16)));
        returnDate.setSeconds(+(dateString.substring(17, 20)));

        return returnDate;

    }
    catch(e) {
        return null;
    }
}

function dateToString(date){

    var dateString = date.toDateString();

    dateString += "  ";
    dateString += date.getHours();
    dateString += ":";
    if(date.getMinutes() < 10) dateString += "0";
    dateString += date.getMinutes();

    return dateString;
}

function timeStringFromDate(date){

    var timeString = "";

    timeString += "  ";
    timeString += date.getHours();
    timeString += ":";
    if(date.getMinutes() < 10) timeString += "0";
    timeString += date.getMinutes();

    return timeString;
}