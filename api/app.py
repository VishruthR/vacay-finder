from flask import Flask, request, jsonify
import private.credentials as creds
from pymongo import MongoClient
from helpers.model import PredictionModel
import csv
import random
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config['TESTING'] = True
CORS(app)

client = MongoClient("mongodb+srv://" + creds.username + ":" + creds.password + "@cluster0.vgbagff.mongodb.net/?retryWrites=true&w=majority")
db = client.VacayFinderDB

model = PredictionModel()

@app.route('/')
@cross_origin()
def hello():
    return '<h1>Hello, World!</h1>'

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    data = request.json['cities']

    prediction = model.make_prediction(data, db)

    return jsonify(prediction.to_dict('dict'))

@app.route('/get-city')
@cross_origin()
def getCity():
    args = request.args
    cities = db.Cities

    findRes = cities.find_one({"name" : args.get("name")})

    del findRes['_id']

    return jsonify(findRes)

@app.route('/get-city-random')
@cross_origin()
def getRandomCity():
    cities = db.Cities

    num_docs = cities.count_documents({})
    random_index = random.randint(0, num_docs-1)

    findRes = cities.find().limit(1).skip(random_index)[0]
    
    del findRes['_id']

    print(jsonify(findRes))

    return jsonify(findRes)

# ONLY MEANT FOR DEVELOPMENT
@app.route('/populate')
@cross_origin()
def populate():
    cities = db.Cities

    deleteRes = cities.delete_many({})
    cityImages = {}

    with open('links.csv', newline='') as linksfile:
        reader = csv.reader(linksfile, delimiter='\n')
        
        for row in reader:
            dataRow = row[0].split(',')
            if(dataRow[1] == 'link'):
                continue
            
            cityImages[dataRow[0]] = dataRow[1]


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
            document['image'] = cityImages[dataRow[1]]
            document['temperatures'] = dataRow[2:]
        
            data.append(document)
    
    insertRes = cities.insert_many(data)

    return "success"


if __name__ == '__main__':
    app.run()
    

