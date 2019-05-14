from webapp.app import app
from ..db.setup import db, Habit
from flask import request, jsonify

@app.route("/add_habit", methods=["POST"])
def set_habit():
    rq_data = request.get_json()

    habit = Habit(
        _id = rq_data["_id"],
        category = rq_data["category"],
        description = rq_data["description"],
        user_id = rq_data["userId"]
    )

    db.session.add(habit)
    db.session.commit()

    return jsonify({ "message": "New habit added" })
