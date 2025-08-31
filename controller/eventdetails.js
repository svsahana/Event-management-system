const express = require('express');
const router = express.Router();
const { con } = require('../config/settings');

router.get("/", (req, res) => {
    const event_id = req.query.id;

    if (!event_id) return res.send("Invalid event ID");

    con.query("SELECT * FROM events WHERE event_id = ?", [event_id], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            const event = result[0];
            res.render("eventdetails", {
                event_name: event.event_name || '',
                creator: event.creator || ''
                
            });
        } else {
            res.send("Event not found");
        }
    });
});
router.get(["/logout","/EventDetails"],function (request,response) {	
	request.session.destroy();
	response.redirect('/Login');
	
});

module.exports = router;
