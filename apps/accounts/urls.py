from django.conf.urls import url, include
from django.urls import path
# from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    url(r'^api/', include('djoser.urls')),
    url(r'^api/', include('djoser.urls.authtoken')),
    path('change-picture',views.change_picture,name='change-picture')
]