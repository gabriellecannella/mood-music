from flask import Flask, Response, request
import pandas as pd
from flask_cors import CORS, cross_origin
from markupsafe import escape

app = Flask(__name__)
cors = CORS(app)



@app.route('/songs', methods=['GET'])
@cross_origin()
def songs():
    user_mood = request.args.get('arg1').lower()
    # return Response("sucess", status=200, mimetype='application/json')
    DataFrame = pd.read_csv(r"data_moods.csv")
    DataFrame = DataFrame[DataFrame["mood"].str.lower() == user_mood]
    DataFrame = DataFrame.sort_values(by="popularity", ascending=False)
    return Response(DataFrame[["name", "album", "artist", "id"]].to_json(orient='records'), status=200, mimetype='application/json')

