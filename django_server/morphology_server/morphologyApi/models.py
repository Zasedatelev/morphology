from django.db import models


class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)
