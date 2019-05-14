import json
from webapp.app import app
from ..db.setup import User
from flask import request, render_template, jsonify, make_response

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        rq_data = request.get_json()

        user = User.query.filter_by(username = rq_data["username"]).first()

        user_match = user is not None
        password_match = False

        if user is not None:
            password_match = user.password == rq_data["password"]

        if user_match == False:
            return make_response((json.dumps({ "message": "Username not found" }), 400, { "Content-Type": "application/json" }))
        elif user_match != False and password_match == False:
            return make_response((json.dumps({ "message": "Password is incorrect" }), 400, { "Content-Type": "application/json" }))
        else:
            return jsonify({ "_id": user._id, "username": user.username })
    else:
        return render_template("index.html")
