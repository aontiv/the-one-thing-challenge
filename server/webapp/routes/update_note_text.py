from webapp.app import app
from ..db.setup import db, Day
from flask import request, jsonify

@app.route("/update_note_text/<user_id>/<day_number>", methods=["UPDATE"])
def update_note_text(user_id, day_number):
    rq_data = request.get_data(as_text=True)

    day = Day.query.filter_by(user_id = user_id, day = int(day_number)).first()
    day.note_text = rq_data

    db.session.commit()

    return jsonify({ "message": "Note updated" })
