import uuid
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from flask import Flask, render_template, request, make_response, json
from database.dbsetup import Base, User, Tracker, Habit, Day, user_schema, tracker_schema, habit_schema, day_schema

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

# USERS
@app.route('/add_user', methods=['POST'])
def add_user():
    session = Session()
    data = request.get_json()
    user = session.query(User).filter_by(username=data['username']).first()
    if user == None:
        user = user_schema.load(data, session=session).data
        session.add(user)
        session.commit()
        # serialize database object to python dict
        serialized = user_schema.dump(user).data
        session.close()
        return json.jsonify({ 'message': "user added", 'user': dict(id=serialized['id'], username=serialized['username'], loggedIn=serialized['loggedIn'])})
    else:
        return make_response(json.dumps({ 'message': 'username already exists' }), 400, { 'Content-Type': 'application/json' })

@app.route('/delete_users', methods=['DELETE'])
def delete_users():
    session = Session()
    session.query(User).delete()
    session.query(User).all()
    session.commit()
    session.close()
    return json.jsonify({ 'message': 'all users deleted' })

# HABITS
@app.route('/add_habit', methods=['POST'])
def add_habit():
    session = Session()
    data = request.get_json()
    habit = habit_schema.load(data, session=session).data
    session.add(habit)
    session.commit()
    session.close()
    return json.jsonify(habit_schema.dump(habit))