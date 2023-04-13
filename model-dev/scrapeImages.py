'''
In this example we iterating over 4 search queries,
doing pagination on each query until results is present,
and extracting original size image + optionally saving locally
'''

from serpapi import GoogleSearch
import json
import csv

def serpapi_get_google_images():
    image_results = []
    queries = []
    # READ IN CITY NAMES
    count = 0
    with open('cleaned_city_temperatures.csv', newline='') as csvfile:
        reader = csv.reader(csvfile, delimiter='\n')
        
        for row in reader:
            dataRow = row[0].split(',')
            if(dataRow[1] == 'City'):
                continue
            if(count <= 199):
                count += 1
                continue

            queries.append(dataRow[1])
    
    for query in queries:
        # search query parameters
        finalQuery = query + " city aesthetic photos"
        params = {
            "engine": "google",               # search engine. Google, Bing, Yahoo, Naver, Baidu...
            "q": finalQuery,                       # search query
            "tbm": "isch",                    # image results
            "num": "100",                     # number of images per page
            "ijn": 0,                         # page number: 0 -> first page, 1 -> second...
            "api_key": "a505d83e905e7c7367e0c58932b6d1180ad19736adac7aa0d922f69951d79c01",                 # https://serpapi.com/manage-api-key
            # other query parameters: hl (lang), gl (country), etc  
        }
    
        search = GoogleSearch(params)         # where data extraction happens
    
        # images_is_present = True
        results = search.get_dict() 
        try:
            image_results.append({"city": query, "link": results["images_results"][0]["original"]})
        except:
            break
        
        print("done with " + query)

    # TODO: WRITE LINKS TO FILE
    fieldnames = ['city', 'link']

    # Open the CSV file in write mode
    with open('links3.csv', mode='w', newline='') as file:
        # Create a CSV writer object using DictWriter
        writer = csv.DictWriter(file, fieldnames=fieldnames)

        # Write the header row to the CSV file
        writer.writeheader()

        # Write the data rows to the CSV file
        writer.writerows(image_results)

    print(f'Successfully wrote data to links.csv.')

serpapi_get_google_images()