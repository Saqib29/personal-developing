from flask import Flask, redirect, render_template, url_for

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", name="Saqib Aminul")

@app.route("/feature")
def feature():
    return render_template("features.html", name="Feature")

if __name__ == "__main__":
    app.run(debug=True)