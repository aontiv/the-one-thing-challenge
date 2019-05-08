import json
from flask import Flask, request, render_template, jsonify, make_response

app = Flask(__name__, static_folder="./dist/static", template_folder="./dist")

@app.route("/", methods=["GET"])
def root():
    return render_template("index.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    rq_data = request.get_json()
    db_file = open("./db/database.json", "r")
    db_data = json.load(db_file)

    user_match = False
    for user in db_data["users"]:
        if user["username"] == rq_data["username"]:
            user_match = user

    password_match = False    
    if user_match != False:
        if user_match["password"] == rq_data["password"]:
            password_match = True

    db_file.close()

    if user_match == False:
        return make_response((json.dumps({ "message": "Username not found" }), 400, { "Content-Type": "application/json" }))
    elif user_match != False and password_match == False:
        return make_response((json.dumps({ "message": "Password is incorrect" }), 400, { "Content-Type": "application/json" }))
    else:
        return jsonify({ "userId": user_match["user_id"], "username": user_match["username"] })

@app.route("/register", methods=["POST"])
def register():
    rq_data = request.get_json()
    db_file = open("./db/database.json", "r+")
    db_data = json.load(db_file)

    user_match = False
    for user in db_data["users"]:
        if user["username"] == rq_data["username"]:
            user_match = True
    
    if not user_match:
        new_users = []
        for user in db_data["users"]:
            new_users.append(user)
        new_users.append(rq_data)

        db_data["users"] = new_users
        db_file.seek(0, 0)
        db_file.truncate()
        json.dump(db_data, db_file, indent=2)

        db_file.close()
        return jsonify({ "userId": rq_data["user_id"], "username": rq_data["username"] })
    else:
        db_file.close()
        return make_response((json.dumps({ "message": "Username already exists" }), 400, { "Content-Type": "application/json" }))

@app.route("/get_habit/<user_id>", methods=["GET"])
def get_habit(user_id):
    db_file = open("./db/database.json", "r")
    db_data = json.load(db_file)

    habit_match = None
    for habit in db_data["habits"]:
        if habit["user_id"] == user_id:
            habit_match = habit
    
    db_file.close()

    if habit_match:
        return jsonify(habit)
    else:
        return jsonify({ "message": "no habit" })

@app.route("/get_tracker/<user_id>", methods=["GET"])
def get_tracker(user_id):
    db_file = open("./db/database.json", "r")
    db_data = json.load(db_file)

    tracker_match = None
    for tracker in db_data["trackers"]:
        if tracker["user_id"] == user_id:
            tracker_match = tracker
    
    db_file.close()

    if tracker_match:
        return jsonify(tracker)
    else:
        return jsonify({ "message": "no tracker" })

    
if __name__ == "__main__":
    app.env = "development"
    app.debug = True
    app.run()
