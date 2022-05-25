import math


def main_muscle():
    print("[INFO] Определение мышечной массы тела!")

    L = int(input('Введите длинну тела: '))
    P = int(input('Введите массу тела: '))

    Q1 = float(input('Введите обхват плеча в расслабленом состоянии: '))
    Q2 = float(input('Введите обхват предплечия максимальный: '))
    Q3 = float(input('Введите обхват бедра максимальный: '))
    Q4 = float(input('Введите обхват голени максимальный: '))

    d4 = float(input('Введите толщину жировой складки на плече спереди: '))
    d5 = float(input('Введите толщину жировой складки на плече сзади: '))
    d6 = float(input('Введите толщину жировой складки на предплечье: '))
    d7 = float(input('Введите толщину жировой складки на бедре спереди: '))
    d8 = float(input('Введите толщину жировой складки на голени: '))

    const = 6.5

    def sum_of_girths(Q1, Q2, Q3, Q4):
        result = Q1 + Q2 + Q3 + Q4

        return result

    def sum_of_values_of_fat_folds(d4, d5, d6, d7, d8):
        result = 0.5 * (d4 + d5) + d6 + d7 + d8

        return result

    def radius_of_limbs(sum_of_girths, sum_of_values_of_fat_folds):
        radius = (sum_of_girths / (4 * (2 * math.pi))) - (sum_of_values_of_fat_folds / (4 * 2 * 10))

        return radius

    def muscle_mass_body():
        mass = int((L * (radius_of_limbs(sum_of_girths(Q1, Q2, Q3, Q4),
                                         sum_of_values_of_fat_folds(d4, d5, d6, d7, d8)) ** 2) * const) / 1000)
        proc = (mass / P) * 100

        return print(f'Вес мышечной массы  {mass} кг '
                     f'что составляет {proc}% от вашей массы тела')

    return muscle_mass_body()
