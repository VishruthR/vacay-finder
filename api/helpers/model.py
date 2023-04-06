import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

class PredictionModel:
    def __init__(self):
        self.none = "none"

    def from_city_cosSim(self, name, db):
        cities = db.Cities
        try:
            curr_city = cities.find_one({"name" : name})       

            Xs = pd.DataFrame([[float(x) for x in curr_city['temperatures']]])

            Col_A = []
            Ys = []

            for city in cities.find({"name" : {"$ne": name}}):
                Col_A.append(city['name'])
                Ys.append([float(x) for x in city['temperatures']])

            Ys = pd.DataFrame(Ys)

            cosSim = cosine_similarity(X=Xs,Y=Ys)

            sim = list(cosSim[0])
            cty = list(Col_A)
            comb = {"City":cty,"Similarity":sim}
            dfdf = pd.DataFrame(comb).reset_index()

            # Adding a row with the Y City
            currCity = {"City":name,"Similarity":1}
            curr = pd.DataFrame(currCity, index=[0])
            
            # Concatenate to finalize DF
            dfdf = pd.concat([dfdf,curr], sort=False).reset_index(drop=True).drop('index',1)

            return dfdf
        except:
            print("Wrong input: this entry will be ignored")
    
    def make_prediction(self, userCities, db, numShow=10):
        # create class that defines cities
        class rated_city:
            def __init__(self, city):
                self.city = city
        
        for city in userCities:
            simSim = self.from_city_cosSim(city, db)
            try:
                cosSim = cosSim.merge(simSim, how='inner', on='City')
            except:
                cosSim = simSim
        
        simCols = cosSim.drop("City",1)
        cits = cosSim.City
            
        for i, row in simCols.iterrows():
            simCols.at[i,'SumVal'] = row.sum()/len(userCities)
        simi = simCols.SumVal
        
        out = {"City":cits,"Score":simi}
        out = pd.DataFrame(out).set_index("City").drop(userCities)
        out = out.sort_values('Score', ascending=False)
        
        return out.head(numShow)      
