from django.shortcuts import render
from rest_framework import viewsets, permissions

from user_calendar.models import Event
from user_calendar.serializers import EventSerializer

# Create your views here.
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    # without authtentication
    permission_classes[
        permissions.AllowAny
    ]
    
