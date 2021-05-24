from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from user_calendar.permissions import IsOwner

from user_calendar.models import Event
from user_calendar.serializers import EventSerializer

# Create your views here.
class EventViewSet(viewsets.ModelViewSet):
    authentication_classes = [
        # SessionAuthentication,
        # BasicAuthentication,
        TokenAuthentication
    ]
    permission_classes = [
        IsOwner,
        permissions.IsAuthenticated
    ]
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def get_queryset(self):
        return Event.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
