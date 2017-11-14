'use strict';
const _ = require("lodash");

module.exports = {
    flight: flight,
    flights: flights
};

function flight(req, res) {
    console.log('looking for flight')
    var flightNumber = req.swagger.params.flightNumber.value;
    if (+flightNumber == 123) {
        var now = new Date();
        var soon = new Date(now);
        soon.setHours(soon.getHours() + 4);

        var flightSegment = {
            "flightNumber": "123",
            "originCode": "DFW",
            "originCity": "Dallas/Fort Worth",
            "destinationCode": "LAX",
            "destinationCity": "Los Angeles",
            "estimatedDeparture": now.toISOString(),
            "scheduledDeparture": now.toISOString(),
            "estimatedArrival": soon.toISOString(),
            "scheduledArrival": soon.toISOString()
        };

        res.json(flightSegment);
    } else {
        res.status(500).json({"error": "Flight could not be found"})
    }

}

function flights(req, res) {
    var now = new Date();
    var soon = new Date(now);
    soon.setHours(soon.getHours() + 4);

    var flightSegment = {
        "flightNumber": "123",
        "originCode": "DFW",
        "originCity": "Dallas/Fort Worth",
        "destinationCode": "LAX",
        "destinationCity": "Los Angeles",
        "estimatedDeparture": now.toISOString(),
        "scheduledDeparture": now.toISOString(),
        "estimatedArrival": soon.toISOString(),
        "scheduledArrival": soon.toISOString()
    };

    let flightSegments = _.fill(Array(5), flightSegment)

    res.json(flightSegments);
}
