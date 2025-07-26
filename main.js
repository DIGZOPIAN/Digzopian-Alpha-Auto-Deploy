from flask import Flask, request, jsonify
import os

# Optional: Import Claude/Kimi logic if ready
# from agents.strategy_claude import get_strategy

app = Flask(__name__)

@app.route('/api/flashloan', methods=['POST'])
def flashloan():
    data = request.json

    # For now, just echo input (AI logic to be added later)
    response = {
        "status": "flashloan received",
        "received": data
    }

    # Optional future use:
    # decision = get_strategy(data)
    # response["strategy"] = decision

    return jsonify(response)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000)
