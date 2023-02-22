from flask import Flask
import pymongo
import private.credentials as creds

app = Flask(__name__)


client = pymongo.MongoClient("mongodb+srv://" + creds.username + ":<" + creds.password + ">@cluster0.vgbagff.mongodb.net/?retryWrites=true&w=majority")
db = client.test



@app.route('/')
def hello():
    return '<h1>Hello, World!</h1>'
