

def fat_mass_body():
    print('[INFO] Определение жирового компонетнта')
    gender = input("Ваш пол: ")
    L = int(input('Введите длинну тела: '))
    P = int(input('Введите массу тела: '))
    d1 = float(input('Введите толщину жировой складки под лопаткой: '))
    d2 = float(input('Введите толщину жировой складки на груди: '))
    d3 = float(input('Введите толщину жировой складки на животе: '))
    d4 = float(input('Введите толщину жировой складки на плече спереди: '))
    d5 = float(input('Введите толщину жировой складки на плече сзади: '))
    d6 = float(input('Введите толщину жировой складки на предплечье: '))
    d7 = float(input('Введите толщину жировой складки на бедре спереди: '))
    d8 = float(input('Введите толщину жировой складки на голени: '))

    const = 1.3
    length_factor = 4.71
    mass_factor = 4.067

    S = 0.1 * length_factor * mass_factor

    def metod_Meteiki(d):
        D = (S * d * const) / 1000
        return D

    def percentage_of_body(D):
        D1 = (D / P) * 100
        return D1

    if gender == "м":
        d = (d1+d2+d3+d4+d5+d6+d7+d8) / (2 * 8)

        return print(f'Вес жирового компанента {metod_Meteiki(d)} кг '
                     f'что составляет {percentage_of_body(metod_Meteiki(d))}% от вашей массы тела')

    if gender == "ж":
        d = (d1+d2+d3+d4+d5+d6+d7) / (2 * 7)

        return print(f'Вес жирового компанента {metod_Meteiki(d)}кг '
                     f'что составляет {percentage_of_body(metod_Meteiki(d))}% от вашей массы тела')





