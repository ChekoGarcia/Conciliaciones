from pymongo import MongoClient

MONGO_URI = 'mongodb://localhost'

client = MongoClient(MONGO_URI)

db = client['testsstore']
collection = db['files']

collection.insert_one({ "id_conciliacion": 1, "pais": "MEX", "file": "conciliacion-MEX-ARG-14-07-20223.csv"})