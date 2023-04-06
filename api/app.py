from flask import Flask, request, jsonify
import private.credentials as creds
from pymongo import MongoClient
from helpers.model import PredictionModel
import csv

app = Flask(__name__)
app.config['TESTING'] = True

client = MongoClient("mongodb+srv://" + creds.username + ":" + creds.password + "@cluster0.vgbagff.mongodb.net/?retryWrites=true&w=majority")
db = client.VacayFinderDB

model = PredictionModel()

@app.route('/')
def hello():
    return '<h1>Hello, World!</h1>'

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json['cities']

    prediction = model.make_prediction(data, db)

    return jsonify(prediction.to_dict('dict'))

@app.route('/get-city')
def getCity():
    args = request.args
    cities = db.Cities

    findRes = cities.find_one({"name" : args.get("name")})

    del findRes['_id']

    return jsonify(findRes)

# ONLY MEANT FOR DEVELOPMENT
@app.route('/populate')
def populate():
    cities = db.Cities

    deleteRes = cities.delete_many({})

    # Parse csv
    data = []
    with open('cleaned_city_temperatures.csv', newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter='\n')
        
        for row in reader:
            document = {}
            dataRow = row[0].split(',')
            if(dataRow[1] == 'City'):
                continue
            
            document['name'] = dataRow[1]
            document['temperatures'] = dataRow[2:]
        
            data.append(document)
    
    insertRes = cities.insert_many(data)

    return jsonify(insertRes)

    

