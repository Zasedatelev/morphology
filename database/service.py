from sqlalchemy import select, insert, delete, update
from database.table import Clients
from database.db import engine
from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=engine)
session = Session()


def login_on(login, password):
    query = select(Clients)
    with engine.connect() as connection:
        users = connection.execute(query)
    for user in users:
        if login in user['client_name']:
            if password in user['client_password']:
                return True
        else:
            print(f'Пользователь {login} не найден( Вам нужно зарегистрироваться для доступа к приложению.')


def register_user(login, password):
    query = select(Clients)
    with engine.connect() as connection:
        users = connection.execute(query)
    for user in users:
        if login == user['client_name']:
            return False

        else:
            user = Clients(client_name=login, client_password=password)
            session.add(user)
            session.commit()
            return True
