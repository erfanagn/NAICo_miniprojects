var fs = require('fs');
var Alldecisions = [{"analyst": "ali", "signal": 1, "analyst_decision": "confirm"}, 
					{"analyst": "ali", "signal": 2, "analyst_decision": "reject"}, 
					{"analyst": "ali", "signal": 3, "analyst_decision": "confirm"}, 
					{"analyst": "erfan", "signal": 1, "analyst_decision": "reject"}, 
					{"analyst": "erfan", "signal": 2, "analyst_decision": "confirm"}, 
					{"analyst": "erfan", "signal": 3, "analyst_decision": "reject"}, 
					{"analyst": "shay", "signal": 1, "analyst_decision": "confirm"}, 
					{"analyst": "shay", "signal": 2, "analyst_decision": "confirm"} ]
fs.writeFile('decisions.json', JSON.stringify(Alldecisions), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });



var Allsignals = [{"signal_number": 1, "status": "stop"}, 
				  {"signal_number": 2, "status": "target"}, 
				  {"signal_number": 3, "status": "open"} ]
fs.writeFile('signals.json', JSON.stringify(Allsignals), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
