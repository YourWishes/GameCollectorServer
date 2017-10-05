'use strict';

module.exports = function(app, db) {
    app.use('/API/getConsoles', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        
        let consoles;
        if(db.data && db.data.consoles) {
            consoles = db.data.consoles;
        } else {
            consoles = [];
        }
        res.json(consoles);
    });
}