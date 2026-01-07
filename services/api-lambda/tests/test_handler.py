from api_lambda.handler import handler


def test_handler_ok():
    event = {
        "version": "2.0",
        "routeKey": "GET /health",
        "rawPath": "/health",
        "rawQueryString": "",
        "headers": {"host": "example.com"},
        "requestContext": {
            "http": {
                "method": "GET",
                "path": "/health",
                "protocol": "HTTP/1.1",
                "sourceIp": "127.0.0.1",
                "userAgent": "pytest",
            },
        },
        "isBase64Encoded": False,
    }
    res = handler(event, object())
    assert res["statusCode"] == 200
