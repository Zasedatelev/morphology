from rest_framework import serializers
from .models import UserData
from django.contrib.auth.models import User
from .models import *


class UserDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserData
        fields = '__all__'


class Userserializer(serializers.ModelSerializer):
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault)
    data = UserDataSerializer(read_only=True, many=True)
    class Meta:
        model = Users
        fields = '__all__'