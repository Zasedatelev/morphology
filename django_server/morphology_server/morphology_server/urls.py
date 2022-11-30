
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter

from morphologyApi.views import UserDataApiViews, UserListApiViews

router = SimpleRouter()
router.register('data', UserDataApiViews)
router.register('users', UserListApiViews)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/dj-rest-auth/', include('dj_rest_auth.urls')),
    path('api/v1/', include(router.urls))
]
