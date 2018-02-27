// get route "/api/friends"
// post routes "/api/friends" will also hold compatability logic

var surveyData = require("../data/surveyData");

module.exports = function(app) {
	app.post("/api/survey", function (req, res) {
		var newUser = req.body;
		console.log(newUser);
		surveyData.push(newUser);
		//none of this works

		// var compArray = [];
  //       for (i=0;i<(surveyData.length-1);i++) {
  //       var totComp = 0;
  //         for (j=0;surveyData[i].resVals.length;j++) {
  //         	var placeComp = surveyData[i].resVals[j] - newUser.resVals[j];
  //         totComp+=abs(placeComp);
  //         }
  //        compArray.push(totComp);
  //       }
		res.json(surveyData);
	})

	app.post("/api/clear", function() {
    // Empty out the arrays of data
    surveyData = [];
    console.log(tableData);
  });
};

// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5