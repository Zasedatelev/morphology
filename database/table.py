import sqlalchemy as sq
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from database.db import engine


Base = declarative_base()
Session = sessionmaker(bind=engine)


class Clients(Base):
    __tablename__ = "clients"

    id = sq.Column(sq.Integer, primary_key=True)
    client_name = sq.Column(sq.String(50), nullable=False)
    client_password = sq.Column(sq.String(10), nullable=False)


if __name__ == "__main__":
    session = Session()
    Base.metadata.create_all(engine)

    print('finish')
