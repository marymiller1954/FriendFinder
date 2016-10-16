var path = require('path');
var friends = require('../data/friends.js');


module.exports = function(app){
	app.get('/api/friends', function(req, res){

        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        

        var counterArray = [];
        var counter = 0
        var user = req.body;
        var bestFriend = {};

        for(x=0; x<friends.length; x++){

            for(i=0; i<user.scores.length; i++) {
                    
                counter += Math.abs(user.scores[i] - friends[x].scores[i]);

            };
            counterArray.push(counter);
            console.log(counter);
            counter = 0;

        };

        console.log(counterArray);

        var closestMatch = Math.min.apply(Math, counterArray);

        console.log(closestMatch);
         
        for(x=0; x<friends.length; x++){

            for(i=0; i<user.scores.length; i++) {
                    
                counter += Math.abs(user.scores[i] - friends[x].scores[i]);

            };
            if(counter === closestMatch) {
                bestFriend = friends[x];
            }
            
            counter = 0;

        };
              
        friends.push(req.body);
        res.json(bestFriend);
        

	});

}
