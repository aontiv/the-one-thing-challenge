from webapp.app import app

if __name__ == "__main__":
    app.env = "development"
    app.debug = True
    app.run()
