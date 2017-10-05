'use strict';

module.exports = function(app, db) {
    app.use('/API/getGames', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        
        let games;
        if(db.data && db.data.games) {
            games = db.data.games;
        } else {
            games = [];
        }
        res.json(games);
    });
}