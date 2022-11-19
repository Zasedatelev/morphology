from django.db import models
from django.contrib.auth.models import User


class Users(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField(default=True)
    password = models.CharField(max_length=10, null=True)
    created_at = models.DateTimeField(auto_now_add=True)



class UserData(models.Model):
    id = models.AutoField(primary_key=True)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE, related_name='data', null=True)
    bithday = models.DateField(verbose_name="Дата рождения")
    body_length = models.IntegerField(verbose_name='Длина тела(см)')
    body_weight = models.IntegerField(verbose_name='Масса тела(кг)')
    acromial_diameter = models.IntegerField(verbose_name='Акромиальный диаметр(мм)')
    mid_chest_transverse_diameter = models.IntegerField(verbose_name='Среднегрудинный поперечный '
                                                                     'диаметр(мм)')
    hip_width = models.IntegerField(verbose_name='Тазо-бедреный диаметр(ширина таза 1)(мм)')
    interbody_diameter = models.IntegerField(verbose_name='Межвертельный диаметр(ширина таза 3)(мм)')
    width_two_closed_knees = models.IntegerField(verbose_name='Ширина двух сомкнутых колен(мм)')
    shin_circumference_minimal = models.IntegerField(verbose_name='Обхват голени минимальный(мм)')
    forearm_circumference_minimal = models.IntegerField(verbose_name='Обхват предплечья минимальный(мм)')
