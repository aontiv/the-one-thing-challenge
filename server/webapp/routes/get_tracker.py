from webapp.app import app
from flask import jsonify
from ..db.setup import Tracker

@app.route("/get_tracker/<user_id>", methods=["GET"])
def get_tracker(user_id):
    tracker = Tracker.query.filter_by(user_id = user_id).first()
    tracker_match = tracker is not None

    if tracker_match:
        return jsonify({
            "_id": tracker._id,
            "date": tracker.date,
            "user_id": tracker.user_id
        })
    else:
        return jsonify({ "message": "no tracker" })
