
def main_bone():
    print('[INFO] Определение костного компонетнта')

    L = int(input('Введите длинну тела: '))
    P = int(input('Введите массу тела: '))

    o1 = float(input('Введите диаметр дистальной части плеча: '))
    o2 = float(input('Введите диаметр дистальной часть предплечия: '))
    o3 = float(input('Введите диаметр дистальной часть бедра: '))
    o4 = float(input('Введите диаметр дистальной часть голени: '))
    const = 1.2

    def sum_o(o1,o2,o3,o4):
        result = (o1 + o2 + o3 + o4) / 4

        return result

    def mass_bone_body():
         result = int((L * (sum_o(o1, o2, o3, o4) ** 2) * const) / 1000)
         proc = (result / P) * 100

         return print(f'Вес костной массы  {result} кг, '
                      f'что составляет {proc}% от вашей массы тела')

    return mass_bone_body()

