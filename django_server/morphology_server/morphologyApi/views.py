from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import Userserializer


class UserApiViews(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = Userserializer


