from flask import Flask, render_template
from database.dbsetup import Base, User, Tracker, Habit, Day
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

app = Flask(__name__, static_folder='./templates/static')

# Database Setup
engine = create_engine('sqlite:///database/database.db')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')
