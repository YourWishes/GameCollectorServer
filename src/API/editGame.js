'use strict';

module.exports = function(app, db) {
    app.post('/API/editGame', function(req, res) {
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
        if(!db.data.games) {
            res.send(false);
            return;
        }
        
        //Get Game by id
        //let h = db.data.games;
        
        for(var i = 0; i < db.data.games.length; i++) {
            let x = db.data.games[i];
            if(!x || !x.id || x.id != g.id) continue;
            db.data.games[i] = g;
            db.saveData();
            res.json(db.data.games[i]);
            return;
        }
        
        res.send(false);
    });
}