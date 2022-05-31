from re import L
import psycopg2
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route("/casenote")
def index():
    return "Hello CaseNote!"

@app.route("/casenote/get", methods=['GET'])
def getcasenote():
    conn = psycopg2.connect("postgresql://kxiyxppvnrnfoh:9991fa3d2096615f4d1884684fc640bad5578f111b351a4b1bdfbada1f316ac6@ec2-34-207-12-160.compute-1.amazonaws.com:5432/d7sv7rqsmlauj0", sslmode='require')
    cursor=conn.cursor()
    cursor.execute('SELECT * FROM "CaseNotes"')
    rows=cursor.fetchall()
    rowdict = dict()
    for count, row in enumerate(rows):
        rowdict[count] = row
    return rowdict

@app.route("/casenote/post", methods=['POST'])
def postcasenote():
    conn = psycopg2.connect("postgresql://kxiyxppvnrnfoh:9991fa3d2096615f4d1884684fc640bad5578f111b351a4b1bdfbada1f316ac6@ec2-34-207-12-160.compute-1.amazonaws.com:5432/d7sv7rqsmlauj0", sslmode='require')
    cursor=conn.cursor()

    rq_data = request.json
    table = ('INSERT INTO "CaseNotes"(sub_first_name, sub_last_name, sub_ssn, subdate1, sub_case_notes, casenotesID) VALUES (%s,%s,%s,%s,%s,%s)', (rq_data.get('sub_first_name'), rq_data.get('sub_last_name'),rq_data.get('sub_ssn'),rq_data.get('subdate1'),rq_data.get('sub_cae_notes'),rq_data.get('casenotesID')))
    cursor.execute(table)
    conn.commit()
    return "casenotes posted"



