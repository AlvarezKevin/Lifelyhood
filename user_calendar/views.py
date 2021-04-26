from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from user_calendar.permissions import IsOwner

from user_calendar.models import Event
from user_calendar.serializers import EventSerializer

# Create your views here.
class EventViewSet(viewsets.ModelViewSet):
    authentication_classes = [
        SessionAuthentication,
        BasicAuthentication
    ]
    permission_classes = [
        IsOwner
    ]
    queryset = Event.objects.all()
    serializer_class = EventSerializer

