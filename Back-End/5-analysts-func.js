function eval_decision(status, decision) {
	if (status == 'target' && decision == 'confirm') {
		return 1;
	} else if (status == 'stop' && decision == 'reject') {
		return 1;
	} else {
		return 0;
	}
}

function analysts_list (Allsignals, Alldecisions) {
	var list = []
	for (var i = 0 ; i < Object.keys(Alldecisions).length; i++){

		// Finding the signal in Allsignals collection
		var signal = Allsignals.find(x => x.signal_number == Alldecisions[i].signal);

		// find if the desicion is true(1) or not(0)
		var eval_dec =  eval_decision(signal.status, Alldecisions[i].analyst_decision);

		// find if the analyst is already in the list
		if ( list.find(x => x.analyst == Alldecisions[i].analyst) != undefined ) {
			var index = list.findIndex(x => x.analyst == Alldecisions[i].analyst);
			list[index].correct_decisions += eval_dec;
			list[index].total_decisions += 1;
		} else {
			list.push({"analyst": Alldecisions[i].analyst, "correct_decisions": eval_dec, "total_decisions": 1})
		}

	}
	return list.sort((a, b) => {return b.correct_decisions - a.correct_decisions;});
}


// var fs = require('fs');
// const Allsignals = require("./test(5-analyst-func)/signals.json");
// const Alldecisions = require("./test(5-analyst-func)/decisions.json");
// console.log(analysts_list (Allsignals, Alldecisions));
// fs.writeFile('./test(5-analyst-func)/answer.json', JSON.stringify(analysts_list (Allsignals, Alldecisions)), function(err) {
//         if(err) {
//             return console.log(err);
//         }
//         console.log("The file was saved!");
//     });




