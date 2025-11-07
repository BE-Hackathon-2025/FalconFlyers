import fastapi

from typing import Union

backend = fastapi.FastAPI()

@backend.get("/")
def root():
    return "Hello World"

@backend.get("/services")
def services():
    return {"I am a teapot.": "I am a teapot."}

@backend.post("/teapot")
def post():
    pass

@backend.post("/message")
def send_message():
    pass

@backend.get("/communitywall")
def get_message():
    return {"Wall": {"Brick": "Cement"}}