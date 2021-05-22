from rest_framework import serializers
from user_calendar.models import Event
from django.contrib.auth.models import User

class EventSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Event
        fields = ['id', 'owner', 'title', 'description', 'startDate', 'endDate', 'url']
        read_only_fields = ['owner, url']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    events = serializers.HyperlinkedRelatedField(many=True, view_name='user-detail', read_only=True)

    class Meta:
        model = User
        fields = ['url', 'id', 'username', 'events']