from flask import Flask, request, jsonify
from agents.strategy_claude import get_strategy

app = Flask(__name__)

@app.route('/api/flashloan', methods=['POST'])
def flashloan():
    data = request.json
    strategy = get_strategy(data)

    return jsonify({
        "status": "flashloan strategy evaluated",
        "input": data,
        "strategy": strategy
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
