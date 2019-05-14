from flask import Flask

app = Flask(__name__, static_folder="./dist/static", template_folder="./dist")
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:////var/www/the-one-thing-challenge/webapp/db/database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

from webapp.routes import (
    add_day_list,
    add_habit,
    add_tracker,
    delete_day_list,
    delete_habit,
    delete_note_text,
    delete_tracker,
    get_day_list,
    get_habit,
    get_tracker,
    login,
    register,
    root,
    update_complete,
    update_incomplete,
    update_note_text
)
