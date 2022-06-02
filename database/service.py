from database.table import Clients
from database.db import engine
from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=engine)
session = Session()


def login_on(login, password):
    current_user_name = session.query(Clients).filter_by(client_name=login, client_password=password).first()

    if current_user_name is not None:
        return True
    else:
        print(f'Пользователь {login} не найден(\n')
        return False


def register_user(login, password):
    current_user_name = session.query(Clients).filter_by(client_name=login).first()

    if current_user_name is not None:
        print(f'Пользователь {login} уже существует( Придумайте новый\n')
        return False

    else:
        user = Clients(client_name=login, client_password=password)
        session.add(user)
        session.commit()
        print(f'Пользователь {login} зарегистрирован!\n')
        return True
