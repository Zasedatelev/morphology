from rest_framework import serializers
from .models import UserData
from django.contrib.auth.models import User
from .models import *


class UserDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserData
        exclude = ['created_at']
