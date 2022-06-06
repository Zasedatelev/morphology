from rest_framework.routers import SimpleRouter
from .views import UserApiViews
from django.urls import path, include
router = SimpleRouter()
router.register('users', UserApiViews)

urlpatterns = [
    path('api/', include(router.urls))
]
