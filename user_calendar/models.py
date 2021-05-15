from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

# Create your models here.
class Event(models.Model):
    owner = models.ForeignKey('auth.User', related_name='events', on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    startDate = models.DateTimeField(default=datetime.now, blank=True)
    endDate = models.DateTimeField(default=datetime.now, blank=True)

    def __str__ (self):
        return f'{ self.title }'
