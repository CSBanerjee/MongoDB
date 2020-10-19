# -*- coding: utf-8 -*-
"""
Created on Mon Oct 19 01:21:09 2020

@author: 91973
"""

# First install pip install pymongo
import pymongo
#client is the variable that communicate with the mongodb
client = pymongo.MongoClient('mongodb://127.0.0.1:27017/') # protocol://ip address:localhost

db_1 = client['Student']

information = db_1.student_info

record = {
    "_id": 0,
    "name": "aimee Zank",
    "scores": [
      {
        "score": 1.463179736705023,
        "type": "exam"
      },
      {
        "score": 11.78273309957772,
        "type": "quiz"
      },
      {
        "score": 35.8740349954354,
        "type": "homework"
      }
    ]
  }
        

information.insert_one(record)

# Select Top 1 record
information.find_one()

#Get all the records
for record  in information.find():
    print(record)

# Where clause
for record in information.find({'name':'Corliss Zuk'}):
    print(record)

#Where in clouse
    for record in information.find({'_id':{'$in':[36,37]}}):
        print(record)
#Where and clause
    for record in information.find({'_id': 36,'scores':{'$lt':70}}):
        print(record)

#Or condition
    for record in information.find({'$or':[{"name": "Mariette Batdorf"},{"name": "Richelle Siemers"}]}):
        print(record)
        
#and condition
    for record in information.find({'$and':[{"name": "Mariette Batdorf"},{"scores":{"score": 91.46799649446983,"type": "quiz" }}]}):
        print(record) 