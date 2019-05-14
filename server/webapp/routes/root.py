from webapp.app import app
from flask import render_template

@app.route("/", methods=["GET"])
def root():
    return render_template("index.html")
