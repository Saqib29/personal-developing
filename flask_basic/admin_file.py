from flask import Blueprint, render_template, session, flash, redirect, url_for

admin = Blueprint("admin_file", __name__, static_folder="statis", template_folder="templates")

@admin.route("/")
def home():
    return "<h1>Hello Admin</h1>"