from webapp.app import app
from flask import jsonify
from ..db.setup import db, Habit

@app.route("/delete_habit/<user_id>", methods=["DELETE"])
def delete_habit(user_id):
    habit = Habit.query.filter_by(user_id = user_id).first()

    db.session.delete(habit)
    db.session.commit()

    return jsonify({ "message": "Habit deleted" })
