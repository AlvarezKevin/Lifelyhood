from rest_framework.routers import DefaultRouter
from django.urls import path, include

from user_calendar import views

router = DefaultRouter()
router.register(r'events', views.TaskViewSet)

urlpatterns = router.urls