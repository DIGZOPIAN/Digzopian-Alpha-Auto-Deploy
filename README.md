# Digzopian Alpha Auto-Deploy

Flask server exposing `/api/flashloan` endpoint.

## Test the API

You can test it by running this from terminal:

```bash
curl -X POST https://digzopian-alpha.YOUR_HASH.repl.co/api/flashloan \
     -H "Content-Type: application/json" \
     -d '{"test":"alpha_test"}'
