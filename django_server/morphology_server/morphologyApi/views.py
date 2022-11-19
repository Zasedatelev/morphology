from rest_framework.viewsets import ModelViewSet
from rest_framework import generics, permissions
from .models import UserData, Users
from .serializers import UserDataSerializer, Userserializer
from.permissons import IsOwnerOrReadOnly


class UserListApiViews(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = Userserializer


class UserDataApiViews(ModelViewSet):
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer




