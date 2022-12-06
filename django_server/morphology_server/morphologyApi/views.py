from rest_framework.viewsets import ModelViewSet
from rest_framework import generics, permissions
from .models import UserData
from .serializers import UserDataSerializer
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from .permissions import IsOwnerOrReadOnly


class UserDataApiViews(ModelViewSet):
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer




