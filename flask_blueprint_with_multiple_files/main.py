from flask import Flask, render_template
from home.home_file import homes
from admin.admin_file import admin
from User.user_file import users

app = Flask(__name__)

app.register_blueprint(homes, url_prefix="")
app.register_blueprint(admin, url_prefix="/admin")
app.register_blueprint(users, url_prefix="/user")

if __name__ == "__main__":
    app.run(debug=True)