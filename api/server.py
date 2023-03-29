from flask import Flask, request, jsonify
# import pymongo
import private.credentials as creds
from helpers.model import PredictionModel

app = Flask(__name__)

# client = pymongo.MongoClient("mongodb+srv://" + creds.username + ":<" + creds.password + ">@cluster0.vgbagff.mongodb.net/?retryWrites=true&w=majority")
# db = client.test

model = PredictionModel()

@app.route('/')
def hello():
    return '<h1>Hello, World!</h1>'

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['cities']

    prediction = model.make_prediction(data)

    return jsonify(prediction.to_dict('dict'))

    

