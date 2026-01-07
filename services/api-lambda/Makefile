.PHONY: lint test invoke

lint:
	PYTHONPATH=src uv run ruff check . --fix

test:
	PYTHONPATH=src uv run pytest -q

invoke:
	PYTHONPATH=src uv run python -c 'import json; from api_lambda.handler import handler; print(handler(json.load(open("events/apigw_v2_health.json")), object()))'
