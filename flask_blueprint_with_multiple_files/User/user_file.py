from flask import Blueprint

users = Blueprint("user_file", __name__)

@users.route("/")
def user():
    return "<h1>Hello from User</h1>"