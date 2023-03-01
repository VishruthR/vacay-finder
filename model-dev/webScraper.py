import scrapy
from bs4 import BeautifulSoup
class BlogSpider(scrapy.Spider):
    name = 'blogspider'
    start_urls = ['https://nomadlist.com/']

    def parse(self, response):
        print(response)
        # soup = BeautifulSoup(response, 'html.parser')
        for title in response.css('.oxy-post-title'):
            yield {'title': title.css('::text').get()}

        for next_page in response.css('a.next'):
            yield response.follow(next_page, self.parse)