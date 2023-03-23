import scrapy           # webscraper TBD
import datetime

# Below is an implementation for scraping data from IMDB.
# We may use webscraping to help us with our recommendation algorithm.

# date_entry = input('Enter From date in YYYY-MM-DD format : ')
# year, month, day = map(int, date_entry.split('-'))
# date1 = datetime.date(year, month, day)
# date_entry = input('Enter To date in YYYY-MM-DD format : ')
# year, month, day = map(int, date_entry.split('-'))
# date2 = datetime.date(year, month, day)

# URL = "http://www.imdb.com/search/title?release_date=" + str(date1) + "," + str(date2)

# since a page may have HTML elements set up as tr and td, we can access those values


class MovieSpider(scrapy.Spider):
    name = 'movies'
    urls = [
        'https://www.imdb.com/search/title/?groups=top_250&sort=user_rating'
        'https://www.imdb.com/search/title/?groups=top_250&sort=user_rating,desc&start=51&ref_=adv_nxt'
        # ...
    ]

    def parse(self, response):
        # default function needed to operate
        APPROPRIATE_TAG_1 = ''
        APPROPRIATE_TAG_2 = ''
        APPROPRIATE_TAG_3 = ''

        for title in response.css(APPROPRIATE_TAG_1):
            yield {'title': title.css(APPROPRIATE_TAG_2).get()}

        for next_page in response.css(APPROPRIATE_TAG_3):
            yield response.follow(next_page, self.parse)


# feed data gathered from this scraper into recommendation algorithm

# use code from 'recAlgNotes.txt' and either create csv files or directly feed this data 
# into the algorithm 
