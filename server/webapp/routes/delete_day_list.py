from webapp.app import app
from flask import jsonify
from ..db.setup import db, Day

@app.route("/delete_day_list/<user_id>", methods=["DELETE"])
def delete_day_list(user_id):
    day_list = Day.query.filter_by(user_id = user_id).all()

    for day in day_list:
        db.session.delete(day)
        db.session.commit()

    return jsonify({ "message": "Day list deleted" })
