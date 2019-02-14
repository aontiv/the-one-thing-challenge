from sqlalchemy import Column, Integer, String, DateTime, Text, Boolean, ForeignKey
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
    days = relationship('Days', back_populates='user')

class Tracker(Base):
    __tablename__ = 'trackers'

    id = Column(Integer, primary_key=True)
    length = Column(Integer)
    startDate = Column(DateTime)
    currentDay = Column(Integer)
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

class Days(Base):
    __tablename__ = 'days'

    id = Column(Integer, primary_key=True)
    days = Column(Text)
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

class DaysSchema(ModelSchema):
    class Meta:
        model = Days

user_schema = UserSchema()
tracker_schema = TrackerSchema()
habit_schema = HabitSchema()
days_schema = DaysSchema()
