from webapp.app import app
from flask import jsonify
from ..db.setup import db, Day

@app.route("/delete_note_text/<user_id>/<day_number>", methods=["DELETE"])
def delete_note_text(user_id, day_number):
    day = Day.query.filter_by(user_id = user_id, day = int(day_number)).first()
    day.note_text = ""

    db.session.commit()

    return jsonify({ "message": "Note deleted" })
