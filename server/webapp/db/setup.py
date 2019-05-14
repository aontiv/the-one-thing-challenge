from webapp.app import app
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    _id = db.Column(db.String, unique=True, nullable=False)
    username = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)

    def __repr__(self):
        return "<User %r>" % self.username

class Habit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    _id = db.Column(db.Integer, unique=True, nullable=False)
    category = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user._id"), nullable=False)

    def __repr__(self):
        return "<Habit %r>" % self.description

class Tracker(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    _id = db.Column(db.String, unique=True, nullable=False)
    date = db.Column(db.String, unique=True, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user._id"), nullable=False)

    def __repr__(self):
        return "<Tracker %r>" % self.date

class Day(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.Integer, nullable=True)
    complete = db.Column(db.Boolean, nullable=False)
    incomplete = db.Column(db.Boolean, nullable=False)
    note_text = db.Column(db.String, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user._id"), nullable=False)

    def __repr__(self):
        return "<Day %r>" % self.day

db.create_all()
