from rest_framework import serializers
from user_calendar.models import Event

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['user', 'title', 'description', 'startDate', 'endDate']