import math


def fat_free_body_weight():

    print("[INFO] Определение обезжиреной массы тела!")

    const = 18.1
    L = float(input('Введите длинну тела: '))
    P = float(input('Введите массу тела: '))
    a = float(input('Введите акроминальный диаметр(ширина плеч): '))
    b = float(input('Введите среднегрудинный поперечный диаметр: '))
    c = float(input('Введите тазо-бедреный диаметр'
                    '(ширина таза 1): '))
    d = float(input('Введите межвертельный диаметр(ширина таза 3): '))
    e = float(input('Введите ширина двух сомкнутых колен: '))
    g = float(input('Введите обхват голени минимальный: '))
    h = float(input('Введите обхват предплечия минимальный: '))

    R = (a + b + c + d + e + g + h) / const

    Behnke_formula = (math.pi * (R ** 2) * L) // 1000
    percentage_of_body_weight = (Behnke_formula / P) * 100

    return print(f'Вес обезжиреной массы тела {Behnke_formula}кг '
                 f'что составляет {percentage_of_body_weight}% от вашей массы тела')



