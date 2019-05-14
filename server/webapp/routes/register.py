import json
from webapp.app import app
from ..db.setup import db, User
from flask import request, jsonify, make_response

@app.route("/register", methods=["POST"])
def register():
    rq_data = request.get_json()

    user = User.query.filter_by(username = rq_data["username"]).first()
    user_match = user is not None

    if not user_match:
        new_user = User(_id=rq_data["_id"], username=rq_data["username"], password=rq_data["password"])
        db.session.add(new_user)
        db.session.commit()

        return jsonify({ "_id": rq_data["_id"], "username": rq_data["username"] })
    else:
        return make_response((json.dumps({ "message": "Username already exists" }), 400, { "Content-Type": "application/json" }))
