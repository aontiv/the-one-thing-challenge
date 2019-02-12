from sqlalchemy import Column, Integer, String, DateTime, Boolean, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from marshmallow_sqlalchemy import ModelSchema

Base = declarative_base()

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True)
    username = Column(String)
    password = Column(String)
    loggedIn = Column(Boolean)

    trackers = relationship('Tracker', back_populates='user')
    habits = relationship('Habit', back_populates='user')
    days = relationship('Day', back_populates='user')

class Tracker(Base):
    __tablename__ = 'trackers'

    id = Column(Integer, primary_key=True)
    length = Column(Integer)
    start_date = Column(DateTime)
    current_day = Column(Integer)
    submitted = Column(Boolean)
    user_id = Column(Integer, ForeignKey('users.id'))

    user = relationship('User', back_populates='trackers')

class Habit(Base):
    __tablename__ = 'habits'

    id = Column(Integer, primary_key=True)
    name = Column(String)
    category = Column(String)
    user_id = Column(Integer, ForeignKey('users.id'))

    user = relationship('User', back_populates='habits')

class Day(Base):
    __tablename__ = 'days'

    id = Column(Integer, primary_key=True)
    day = Column(Integer)
    note = Column(String)
    marked = Column(Boolean)
    _id = Column(String)
    completed = Column(Boolean)
    note_submitted = Column(Boolean)
    selected = Column(Boolean)
    user_id = Column(Integer, ForeignKey('users.id'))

    user = relationship('User', back_populates='days')

# Marshmallow Schemas
class UserSchema(ModelSchema):
    class Meta:
        model = User

class TrackerSchema(ModelSchema):
    class Meta:
        model = Tracker

class HabitSchema(ModelSchema):
    class Meta:
        model = Habit

class DaySchema(ModelSchema):
    class Meta:
        model = Day

user_schema = UserSchema()
tracker_schema = TrackerSchema()
habit_schema = HabitSchema()
day_schema = DaySchema()
