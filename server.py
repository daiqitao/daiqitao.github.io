import flask
from flask import Flask, send_file
import os.path

app = flask.Flask(__name__)

def page4():
    return send_file("404/index.html")


@app.route("/")
def nonepage():
    return flask.redirect("/index.html")


@app.route("/<path:page>")
def mainpage(page):
    if os.path.isdir(page):
        page = page
        page += "/index.html"
    try:
        return flask.send_file(page)
    except FileNotFoundError:
        return page4()

app.run("0.0.0.0", 80)
