from flask import Flask, redirect, render_template, url_for, request, session
from datetime import timedelta

app = Flask(__name__)
# session needs a secrete key
app.secret_key = "secrete_key"
# time can be set for session as minutes/days/seconds
app.permanent_session_lifetime = timedelta(minutes=5)

@app.route("/")
def home():
    return render_template("index.html", name="Saqib Aminul")

@app.route("/login", methods=["POST", "GET"])
def login():
    if request.method == "POST":
        # if true then timeset will work
        session.permanent_session_lifetime = True
        name = request.form["nm"]
        session["name"] = name
        return redirect(url_for("user", usr=session["name"]))
    else:
        if "name" in session:
            return redirect(url_for("user"))

        return render_template("login.html")


@app.route("/user")
def user():
    if "name" in session:
        return render_template("features.html", name=session["name"])
    else:
        return redirect(url_for("login"))


@app.route("/logout")
def logout():
    # removing/destroying session
    session.pop("name", None)
    return redirect(url_for("login"))

if __name__ == "__main__":
    app.run(debug=True)