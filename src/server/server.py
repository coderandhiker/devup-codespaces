from flask import Flask, jsonify
from flask_cors import CORS

# app instance
app = Flask(__name__)
CORS(app)

# /api/home
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message':"Service Health: No issues."
    })

@app.route("/api/roles")
def return_roles():
    return jsonify({
        'app_roles': ['editor', 'approver']
    })

if __name__ == "__main__":
    # Remove the debug flag for prod release
    app.run(debug=True, port=8080)