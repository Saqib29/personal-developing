from flask import Blueprint, render_template

homes = Blueprint("home_file", __name__, template_folder="templates")

@homes.route("/")
def home():
    return render_template("home.html")