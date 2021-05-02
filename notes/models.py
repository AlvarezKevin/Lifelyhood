from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


# Create your models here.
class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50,blank=True)
    text = models.CharField(max_length=10000,blank=True)
    date_posted = models.DateTimeField(default=timezone.now)
    