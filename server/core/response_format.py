import uuid
from datetime import datetime

def success_response(data:dict, message:str) -> dict:
    return {
        "ok": True,
        "message": message,
        "data": data,
        "error": None,
        "meta": {
            "req_id": uuid.uuid4(),
            "apiVersion": "v1.0.0",
            "timestamp": datetime.combine(datetime.today(), datetime.time(datetime.now()))
        }
    }

def error_response(error:str, message:str, field:dict=None) -> dict:
    return {
        "ok": False,
        "message": message,
        "data": None,
        "error": error,
        "fields": field,
        "meta": {
            "req_id": uuid.uuid4(),
            "timestamp": datetime.combine(datetime.today(), datetime.time(datetime.now()))
        }
    }
