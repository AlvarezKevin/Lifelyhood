from rest_framework.routers import DefaultRouter
from django.urls import path, include

from user_calendar import views

router = DefaultRouter()
router.register(r'events', views.EventViewSet)

urlpatterns = [
    path('api/calendar/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]