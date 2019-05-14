from webapp.app import app
from flask import jsonify
from ..db.setup import db, Day

@app.route("/update_complete/<user_id>/<day_number>", methods=["UPDATE"])
def update_complete(user_id, day_number):
    day = Day.query.filter_by(user_id = user_id, day = int(day_number)).first()
    day.complete = True
    day.incomplete = False

    db.session.commit()

    return jsonify({ "message": "Day 'complete' updated" })
