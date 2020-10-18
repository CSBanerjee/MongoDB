# -*- coding: utf-8 -*-
"""
Created on Mon Oct 19 01:21:09 2020

@author: 91973
"""

# First install pip install pymongo
import pymongo
#client is the variable that communicate with the mongodb
client = pymongo.MongoClient('mongodb://127.0.0.1:27017/') # protocol://ip address:localhost

db_1 = client['Employee']

information = db_1.employeeinformation

record = [
        {
         'FirstName':'Employee_1',
         'LastName' :'Lastname_1',
         'Department':'Analytics'
        }, {
         'FirstName':'Employee_2',
         'LastName' :'Lastname_2',
         'Department':'Analytics'
        },{
         'FirstName':'Employee_3',
         'LastName' :'Lastname_3',
         'Department':'IT'
        },{
         'FirstName':'Employee_4',
         'LastName' :'Lastname_4',
         'Department':'Sales'
        }
                
        
        ]

information.insert_many(record)