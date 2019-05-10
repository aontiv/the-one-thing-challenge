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
        return jsonify({ "_id": user_match["_id"], "username": user_match["username"] })

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
        return jsonify({ "_id": rq_data["_id"], "username": rq_data["username"] })
    else:
        db_file.close()
        return make_response((json.dumps({ "message": "Username already exists" }), 400, { "Content-Type": "application/json" }))

@app.route("/get_habit/<id>", methods=["GET"])
def get_habit(id):
    db_file = open("./db/database.json", "r")
    db_data = json.load(db_file)

    habit_match = None
    for habit in db_data["habits"]:
        if habit["user_id"] == id:
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

@app.route("/add_habit", methods=["POST"])
def set_habit():
    rq_data = request.get_json()
    db_file = open("./db/database.json", "r+")
    db_data = json.load(db_file)

    new_habits = []
    for habit in db_data["habits"]:
        new_habits.append(habit)
    new_habits.append({
        "habit_id": rq_data["habitId"],
        "user_id": rq_data["userId"],
        "category_name": rq_data["categoryName"],
        "habit_description": rq_data["habitDescription"]
    })

    db_data["habits"] = new_habits
    db_file.seek(0, 0)
    db_file.truncate()
    json.dump(db_data, db_file, indent=2)

    db_file.close()
    return jsonify({ "message": "New habit added" })

@app.route("/add_tracker", methods=["POST"])
def add_tracker():
    rq_data = request.get_json()
    db_file = open("./db/database.json", "r+")
    db_data = json.load(db_file)

    new_trackers = []
    for tracker in db_data["trackers"]:
        new_trackers.append(tracker)

    new_day_list = []
    for day in rq_data["dayList"]:
        new_day_list.append({
            "dayNumber": day["dayNumber"],
            "isComplete": day["isComplete"],
            "isIncomplete": day["isIncomplete"],
            "noteText": day["noteText"]
        })
    
    new_trackers.append({
        "complete": rq_data["complete"],
        "day_list": new_day_list,
        "start_date": rq_data["startDate"],
        "tracker_id": rq_data["trackerId"],
        "user_id": rq_data["userId"]
    })

    db_data["trackers"] = new_trackers
    db_file.seek(0, 0)
    db_file.truncate()
    json.dump(db_data, db_file, indent=2)

    db_file.close()
    return jsonify({ "message": "New tracker added" })

@app.route("/delete_habit/<user_id>", methods=["DELETE"])
def delete_habit(user_id):
    db_file = open("./db/database.json", "r+")
    db_data = json.load(db_file)

    new_habits = []
    for habit in db_data["habits"]:
        if habit["user_id"] != user_id:
            new_habits.append(habit)
    
    db_data["habits"] = new_habits
    db_file.seek(0, 0)
    db_file.truncate()
    json.dump(db_data, db_file, indent=2)

    db_file.close()
    return jsonify({ "message": "Habit deleted" })

@app.route("/delete_tracker/<user_id>", methods=["DELETE"])
def delete_tracker(user_id):
    db_file = open("./db/database.json", "r+")
    db_data = json.load(db_file)

    new_trackers = []
    for tracker in db_data["trackers"]:
        if tracker["user_id"] != user_id:
            new_trackers.append(tracker)
    
    db_data["trackers"] = new_trackers
    db_file.seek(0, 0)
    db_file.truncate()
    json.dump(db_data, db_file, indent=2)

    db_file.close()
    return jsonify({ "message": "Tracker deleted" })

@app.route("/update_note/<tracker_id>/<day_number>", methods=["UPDATE"])
def update_note(tracker_id, day_number):
    rq_data = request.get_data(as_text=True)
    db_file = open("./db/database.json", "r+")
    db_data = json.load(db_file)

    selected_tracker = None
    for tracker in db_data["trackers"]:
        print(tracker["tracker_id"])
        if tracker["tracker_id"] == tracker_id:
            selected_tracker = tracker
    
    for day in selected_tracker["day_list"]:
        if day["dayNumber"] == day_number:
            day["noteText"] = rq_data

    db_file.seek(0, 0)
    db_file.truncate()
    json.dump(db_data, db_file, indent=2)

    db_file.close()
    return jsonify({ "message": "Note updated" })

@app.route("/delete_note/<tracker_id>/<day_number>", methods=["DELETE"])
def delete_note(tracker_id, day_number):
    db_file = open("./db/database.json", "r+")
    db_data = json.load(db_file)

    selected_tracker = None
    for tracker in db_data["trackers"]:
        if tracker["tracker_id"] == tracker_id:
            selected_tracker = tracker
    
    for day in selected_tracker["day_list"]:
        if day["dayNumber"] == day_number:
            day["noteText"] = ""

    db_file.seek(0, 0)
    db_file.truncate()
    json.dump(db_data, db_file, indent=2)

    db_file.close()
    return jsonify({ "message": "Note deleted" })

@app.route("/update_is_complete/<tracker_id>/<day_number>", methods=["UPDATE"])
def update_is_complete(tracker_id, day_number):
    db_file = open("./db/database.json", "r+")
    db_data = json.load(db_file)

    selected_tracker = None
    for tracker in db_data["trackers"]:
        if tracker["tracker_id"] == tracker_id:
            selected_tracker = tracker

    for day in selected_tracker["day_list"]:
        if day["dayNumber"] == day_number:
            day["isComplete"] = True
            day["isIncomplete"] = False
    
    db_file.seek(0, 0)
    db_file.truncate()
    json.dump(db_data, db_file, indent=2)

    db_file.close()
    return jsonify({ "message": "Day 'isComplete' updated" })

@app.route("/update_is_incomplete/<tracker_id>/<day_number>", methods=["UPDATE"])
def update_is_incomplete(tracker_id, day_number):
    db_file = open("./db/database.json", "r+")
    db_data = json.load(db_file)

    selected_tracker = None
    for tracker in db_data["trackers"]:
        if tracker["tracker_id"] == tracker_id:
            selected_tracker = tracker

    for day in selected_tracker["day_list"]:
        if day["dayNumber"] == day_number:
            day["isIncomplete"] = True
            day["isComplete"] = False
    
    db_file.seek(0, 0)
    db_file.truncate()
    json.dump(db_data, db_file, indent=2)

    db_file.close()
    return jsonify({ "message": "Day 'isIncomplete' updated" })

if __name__ == "__main__":
    app.env = "development"
    app.debug = True
    app.run()
