from webapp.app import app
from flask import jsonify
from ..db.setup import Day

@app.route("/get_day_list/<user_id>", methods=["GET"])
def get_day_list(user_id):
    day_list = Day.query.filter_by(user_id = user_id).all()

    if len(day_list) > 0:
        day_list_match = []

        for day in day_list:
            day_list_match.append({
                "day": day.day,
                "complete": day.complete,
                "incomplete": day.incomplete,
                "note_text": day.note_text,
                "user_id": day.user_id
            })

        return jsonify(day_list_match)
    else:
        return jsonify({ "message": "no day list" })
