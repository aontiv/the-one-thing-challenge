from webapp.app import app
from flask import jsonify
from ..db.setup import Habit

@app.route("/get_habit/<user_id>", methods=["GET"])
def get_habit(user_id):
    habit = Habit.query.filter_by(user_id = user_id).first()
    habit_match = habit is not None

    if habit_match:
        return jsonify({
            "_id": habit._id,
            "category": habit.category,
            "description": habit.description,
            "user_id": habit.user_id
        })
    else:
        return jsonify({ "message": "no habit" })
