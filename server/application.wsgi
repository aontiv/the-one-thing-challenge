import sys
sys.path.insert(0, "/var/www/the-one-thing-challenge")

from webapp.app import app as application

if __name__ == "__main__":
    app.env = "development"
    app.debug = True
    app.run()
