from django.test import TestCase
import pytest
from django.db import models
from django.contrib.auth.models import User
from user_calendar.models import *

# Create your tests here.
@pytest.mark.django_db
def test_create_event():
    user = User.objects.create_user(username='test', password='randomPassword19293')
    Event.objects.create(owner=user, title='title', description='description', startDate='2021-01-01', endDate='2021-12-31')
    assert Event.objects.count() == 1
