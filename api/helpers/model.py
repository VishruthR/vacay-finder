import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

class PredictionModel:
    def __init__(self):
        self.norm_df = pd.read_csv('https://s3.us-east-2.amazonaws.com/www.findingmyschittscreek.com/Data/normalized_df_sub.csv', index_col=0)

    def from_city_cosSim(self, data, name):
        try:
            Xs = data[data.City == name].drop('City',1)
            Col_A = data[data.City != name].City
            Ys = data[data.City != name].drop('City',1)

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
            return(dfdf)
        except:
            print("Wrong input: this entry will be ignored")
    
    def make_prediction(self, userCities, numShow=10):
        # create class that defines cities
        class rated_city:
            def __init__(self, city):
                self.city = city
        
        #Loop to input cities based on the user
        # add_city = True
        # w = 0
        # while add_city == True:
        #     city_name = input("City (Include state - Ex. New York, NY): ")
        #     userInput.append(city_name)
        #     simSim = self.from_city_cosSim(data=self.norm_df, name=city_name)
        #     try:
        #         cosSim = cosSim.merge(simSim, how='inner', on='City')
        #     except:
        #         cosSim = simSim
            
        #     city = rated_city(city_name)
        #     cont = input("Do you want to include another city?")
        #     add_city = cont.lower() in ['yes','true','of course','y','si','1']
        #     w+=1

        for city in userCities:
            simSim = self.from_city_cosSim(data=self.norm_df, name=city)
            try:
                cosSim = cosSim.merge(simSim, how='inner', on='City')
            except:
                cosSim = simSim

        userCities
        
        simCols = cosSim.drop("City",1)
        cits = cosSim.City
            
        for i, row in simCols.iterrows():
            simCols.at[i,'SumVal'] = row.sum()/len(userCities)
        simi = simCols.SumVal
        
        out = {"City":cits,"Score":simi}
        out = pd.DataFrame(out).set_index("City").drop(userCities)
        out = out.sort_values('Score', ascending=False)
        
        return out.head(numShow)      
