from sqlalchemy import create_engine
import sqlalchemy as sq
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from database.db import engine


Base = declarative_base()
Session = sessionmaker(bind=engine)


class User(Base):
    __tablename__ = "user"

    id = sq.Column(sq.Integer, nullable=False)
    user_name = sq.Column(sq.String(50), primary_key=True, nullable=False)
    user_password = sq.Column(sq.String(10), nullable=False)


class Users(Base):
    __tablename__ = "users"

    id = sq.Column(sq.Integer(), primary_key=True)
    user_name = sq.Column(sq.ForeignKey("user.user_name"), primary_key=True)


# if __name__ == "__main__":
#     session = Session()
#     Base.metadata.create_all(engine)
#
#     print('finish')
