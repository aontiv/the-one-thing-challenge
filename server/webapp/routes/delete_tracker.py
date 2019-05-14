from webapp.app import app
from flask import jsonify
from ..db.setup import db, Tracker

@app.route("/delete_tracker/<user_id>", methods=["DELETE"])
def delete_tracker(user_id):
    tracker = Tracker.query.filter_by(user_id = user_id).first()

    db.session.delete(tracker)
    db.session.commit()

    return jsonify({ "message": "Tracker deleted" })
