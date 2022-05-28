from sqlalchemy import select, insert, delete, update
from database.table import User, Users
from database.db import engine


def login_on(login, password):
    query = select(Users)
    with engine.connect() as connection:
        users = connection.execute(query)
    for user in users:
        if login in user['user_name']:
            if password in User.user_password:
                print('Пользователь существует')

                return True


def register_user(login, password):
    query = select(Users)
    with engine.connect() as connection:
        users = connection.execute(query)
    for user in users:
        if login in user['user_name']:
            print('[INFO] Этот логин уже занят!( Придумайте другой...')
            return False
    else:
        added = insert(User).values(
            login=User.user_name,
            password=User.user_password)

        with engine.connect() as connection:
            connection.execute(added)
            connection.commit()
            print('[INFO] Пользователь добавлен!')
        return True
