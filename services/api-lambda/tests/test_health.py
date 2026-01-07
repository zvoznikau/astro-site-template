from fastapi.testclient import TestClient

from api_lambda.app import app


def test_health_ok():
    client = TestClient(app)
    res = client.get("/health")
    assert res.status_code == 200
    assert res.json()["status"] == "ok"
