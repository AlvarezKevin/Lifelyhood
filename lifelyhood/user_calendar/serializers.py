from rest_framework import serializers
from user_calendar.models import Event
from django.contrib.auth.models import User

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['user', 'title', 'description', 'startDate', 'endDate']