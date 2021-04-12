from flask import Blueprint, render_template, session, flash, redirect, url_for

second = Blueprint("second_file", __name__, static_folder="static", template_folder="templates")

@second.route("/home")
@second.route("/")
def home():
    if "name" not in session:
        flash("Login first!")
        return redirect(url_for('login'))
    return render_template("index.html", name=session["name"])