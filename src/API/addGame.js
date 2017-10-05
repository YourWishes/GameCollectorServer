'use strict';

module.exports = function(app, db) {
    app.post('/API/addGame', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        if(!req || !req.body) {
            res.send(false);
            return;
        }
        
        let g = req.body;
        if(!g || !g.name || !g.id) {
            res.send(false);
            return;
        }
        
        //TODO: Check IDs etc.
        
        if(!db.data.games) db.data.games = [];
        db.data.games.push(g);
        db.saveData();
        
        res.json(db.data.games);
    });
}