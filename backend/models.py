from pydantic import BaseModel

class UserModel(BaseModel):
    id: int
    username: str
    password: str


class MessageBase(BaseModel):
    message: str
    user: UserModel | str 