import uuid
from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from flask import Flask, render_template, request, make_response, json
from database.dbsetup import Base, User, Tracker, Habit, Days, user_schema, tracker_schema, habit_schema, days_schema

app = Flask(__name__, static_folder='./templates/static')
app.config['SECRET_KEY'] = uuid.uuid4().hex

# Database Setup
engine = create_engine('sqlite:///database/database.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/<path:path>', methods=['GET'])
def catch_all(path):
    return render_template('index.html')

# Login
@app.route('/login', methods=['POST'])
def login():
    session = Session()
    data = request.get_json()
    user = session.query(User).filter_by(username = data['username'], password = data['password']).first()
    if user == None:
        session.close()
        return json.jsonify({ 'status': 400, 'message': 'ERROR: USER DOES NOT EXIST'})
    else:
        current_user = user_schema.dump(user).data
        tracker = tracker_schema.dump(session.query(Tracker).filter_by(user_id = user.id).first()).data
        habit = habit_schema.dump(session.query(Habit).filter_by(user_id = user.id).first()).data
        days = days_schema.dump(session.query(Days).filter_by(user_id = user.id).first()).data
        session.close()
        return json.jsonify({ 'status': 200, 'user': { 'id': current_user['id'], 'username': current_user['username'], 'loggedIn': current_user['loggedIn'] }, 'tracker': tracker, 'habit': habit, 'days': days })

# Users
@app.route('/add_user', methods=['POST'])
def add_user():
    session = Session()
    data = request.get_json()
    user = session.query(User).filter_by(username=data['username']).first()
    if user == None:
        user = user_schema.load(data, session=session).data
        session.add(user)
        session.commit()
        user = session.query(User).filter_by(username = data['username']).first()
        session.close()
        return json.jsonify({ 'message': "New User: ADDED", 'user': dict(id = user.id, username = user.username, loggedIn = user.loggedIn) })
    else:
        session.close()
        return make_response(json.dumps({ 'status': 400, 'message': 'Username: EXISTS' }), 400, { 'Content-Type': 'application/json' })

@app.route('/delete_users', methods=['DELETE'])
def delete_users():
    session = Session()
    session.query(User).delete()
    session.commit()
    session.close()
    return json.jsonify({ 'message': 'Users: DELETED' })

# Tracker Table
@app.route('/add_tracker', methods=['POST'])
def add_tracker():
    session = Session()
    data = request.get_json()
    user = session.query(User).filter_by(id = data['id']).first()
    tracker = tracker_schema.load(data['tracker'], session=session).data
    tracker.user = user
    session.add(tracker)
    session.commit()
    tracker = tracker_schema.dump(session.query(Tracker).filter_by(user_id = data['id']).first()).data
    session.close()
    return json.jsonify({ 'message': 'Tracker: ADDED', 'tracker': tracker })

@app.route('/update_tracker', methods=['UPDATE'])
def update_tracker():
    session = Session()
    data = request.get_json()
    tracker = session.query(Tracker).filter_by(user_id = data['id']).first()
    tracker_schema.load(data['tracker'], instance=tracker)
    session.commit()
    tracker = tracker_schema.dump(session.query(Tracker).filter_by(user_id = data['id']).first()).data
    session.close()
    return json.jsonify({ 'message': 'Tracker: UPDATED', 'tracker': tracker })

@app.route('/delete_tracker/<id>', methods=['DELETE'])
def delete_tracker(id):
    session = Session()
    session.query(Tracker).filter_by(user_id = id).delete()
    session.commit()
    session.close()
    return json.jsonify({ 'status': 200, 'message': 'Tracker: DELETED'})

@app.route('/delete_trackers', methods=['DELETE'])
def delete_trackers():
    session = Session()
    session.query(Tracker).delete()
    session.commit()
    trackers = session.query(Tracker).all()
    session.close()
    return json.jsonify({ 'message': 'Trackers DELETED', 'trackers': trackers })

# Habit Table
@app.route('/add_habit', methods=['POST'])
def add_habit():
    session = Session()
    data = request.get_json()
    user = session.query(User).filter_by(id = data['id']).first()
    habit = habit_schema.load(data['habit'], session=session).data
    habit.user = user
    session.add(habit)
    session.commit()
    habit = habit_schema.dump(session.query(Habit).filter_by(user_id = data['id']).first()).data
    session.close()
    return json.jsonify({ 'message': 'Habit: ADDED', 'habit': habit })

@app.route('/update_habit', methods=['UPDATE'])
def update_habit():
    session = Session()
    data = request.get_json()
    habit = session.query(Habit).filter_by(user_id = data['id']).first()
    habit_schema.load(data['habit'], instance=habit)
    session.commit()
    habit = habit_schema.dump(session.query(Habit).filter_by(user_id = data['id']).first()).data
    session.close()
    return json.jsonify({ 'message': 'Habit: UPDATED', 'habit': habit })

@app.route('/delete_habit/<id>', methods=['DELETE'])
def delete_habit(id):
    session = Session()
    session.query(Habit).filter_by(user_id = id).delete()
    session.commit()
    session.close()
    return json.jsonify({ 'status': 200, 'message': 'Habit: DELETED'})

@app.route('/delete_habits', methods=['DELETE'])
def delete_habits():
    session = Session()
    session.query(Habit).delete()
    session.commit()
    habits = session.query(Habit).all()
    session.close()
    return json.jsonify({ 'message': 'Habits DELETED', 'habits': habits })

# Days Table
@app.route('/add_days', methods=['POST'])
def add_days():
    session = Session()
    data = request.get_json()
    user = session.query(User).filter_by(id = data['id']).first()
    days = Days(days=json.dumps(data['days']))
    days.user = user
    session.add(days)
    session.commit()
    days = days_schema.dump(session.query(Days).filter_by(user_id = data['id']).first()).data
    session.close()
    return json.jsonify({ 'message': 'Days: ADDED', 'days': days })

@app.route('/update_days', methods=['UPDATE'])
def update_days():
    session = Session()
    data = request.get_json()
    days = session.query(Days).filter_by(id = data['id']).first()
    days.days = json.dumps(data['days'])
    session.commit()
    days = days_schema.dump(session.query(Days).filter_by(id = data['id']).first()).data
    session.close()
    return json.jsonify({ 'message': 'Days: UPDATED', 'days': days })

@app.route('/delete_days_row/<id>', methods=['DELETE'])
def delete_days_row(id):
    session = Session()
    session.query(Days).filter_by(user_id = id).delete()
    session.commit()
    session.close()
    return json.jsonify({ 'status': 200, 'message': 'Days Row: DELETED' })

@app.route('/delete_days', methods=['DELETE'])
def delete_days():
    session = Session()
    session.query(Days).delete()
    session.commit()
    days = session.query(Days).all()
    session.close()
    return json.jsonify({ 'message': 'All Days DELETED', 'days': days })
