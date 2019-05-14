from webapp.app import app
from ..db.setup import db, Day
from flask import request, jsonify

@app.route("/add_day_list", methods=["POST"])
def add_day_list():
    rq_data = request.get_json()

    for day in rq_data["dayList"]:
        new_day = Day(
            day = day["day"],
            complete = day["complete"],
            incomplete = day["incomplete"],
            note_text = day["note_text"],
            user_id = rq_data["userId"]
        )

        db.session.add(new_day)
        db.session.commit()
    
    return jsonify({ "message": "New day list added" })
