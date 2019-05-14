from webapp.app import app
from ..db.setup import db, Tracker
from flask import request, jsonify

@app.route("/add_tracker", methods=["POST"])
def add_tracker():
    rq_data = request.get_json()

    tracker = Tracker(
        _id = rq_data["_id"],
        date = rq_data["date"],
        user_id = rq_data["userId"]
    )

    db.session.add(tracker)
    db.session.commit()

    return jsonify({ "message": "New tracker added" })
