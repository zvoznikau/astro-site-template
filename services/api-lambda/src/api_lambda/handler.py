from __future__ import annotations

from mangum import Mangum

from api_lambda.app import app

handler = Mangum(app)
