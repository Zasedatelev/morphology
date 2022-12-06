
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import SimpleRouter

from morphologyApi.views import UserDataApiViews

router = SimpleRouter()
router.register('data', UserDataApiViews)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/v1/dj-rest-auth/', include('dj_rest_auth.urls')),
    path('api/v1/', include(router.urls))
]
