from flask import Blueprint

admin = Blueprint("admin_file", __name__)

@admin.route("/")
def home():
    return "<h1>Hallo from admin</h1>"