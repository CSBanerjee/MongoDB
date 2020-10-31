use school
db.student.find().pretty()
db.student.findOne()
db.student.find({"Class":"32"})
db.student.find({"Seat":{$gt:"10"}})
db.student.find({"Seat":{$gte:"10"}})
db.student.find({"Seat":{$lt:"20"}})
db.student.find({"Seat":{$lte:"20"}})
db.student.find({"Seat":{$ne:"10"}})
db.student.find({"Gender":"1","Seat":{$gt:"10"}})
db.student.find(
{
    $or:[{"Gender":"1"},{"Seat":{$gt:"10"}}]
    
}
)
db.student.find(
{
   "Gender":"1",$or:[{"Seat":{$gt:"10"}},{"Crush":{$gte:"50"}}]
}
)
db.student.update(
{"_id" : ObjectId("5f9d701b3c9d11a933f2ad34")},{$set:{"Color":"Red"}}

)
db.student.find({"Color":"Red"})

db.student.update(
{"Class":"11"},{$set:{"Color":"Pink"}}
)

db.student.update(
{"Class":"11"},{$set:{"Color":"Pink"}},{multi :true}
)
db.student.find({"Class":"11"})

db.student.save(

{"_id" : ObjectId("5f9d701b3c9d11a933f2ad2d"), 
    "ID" : "2", 
    "Name" : "Yui Rio", 
    "Gender" : "0", 
    "Class" : "11", 
    "Seat" : "14", 
    "Club" : "1", 
    "Persona" : "5", 
    "Crush" : "0", 
    "BreastSize" : "0.5", 
    "Strength" : "0", 
    "Hairstyle" : "2", 
    "Color" : "Pink", 
    "Eyes" : "Red", 
    "EyeType" : "Default", 
    "Stockings" : "Pink", 
    "Accessory" : "0", 
    "ScheduleTime" : "7_7_8_13_13.375_15.5_16_17.25_99_99", 
    "ScheduleDestination" : "Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Clean_Club_Locker_Exit", 
    "ScheduleAction" : "Stand_Stand_Socialize_Sit_Socialize_Sit_Clean_SocialSit_Shoes_Stand", 
    "Info" : ""
}

)

db.student.remove(
{
  "Name":"Senpai"  
}


)

db.student.remove(
{
  "Seat":"14"  
}


)

db.student.find({},{"Name":1})
db.student.find({},{"Name":1,"_id":0})
db.student.find({},{"Seat":14,"_id":0}).limit(4)
db.student.find({},{"Seat":14,"_id":0}).skip(2).limit(4)
db.student.find().sort({"Name":1})
db.student.find().sort({"Name":-1})
db.student.aggregate([{$group :{_id : "$Gender",MyResult:{$sum:1}}}])
db.student.aggregate([{$group :{_id : "$Gender",MaxPersona:{$max:"$Persona"}}}])
db.student.aggregate([{$group :{_id : "$Gender",MixPersona:{$min:"$Persona"}}}])

db.student.find()