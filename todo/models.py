from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


# Create your models here.
class Todo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length=10000,blank=True)
    date_posted = models.DateTimeField(default=timezone.now)
    completed = models.BooleanField(default=False)