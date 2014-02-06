var data = require("../data.json");

exports.addFriend = function(req, res) {   
	var name = req.query.name;
	var description = req.query.description;
	var picURL = 'http://lorempixel.com/400/400/people';
	var friend = {
		"name" : name,
		"description" : description,
		"imageURL" : picURL
	}; 
	data["friends"].push(friend);
	console.log(friend);
	res.render('add', {
		'data': data
	});
	
 }