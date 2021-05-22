from django.test import TestCase
import pytest, json
from django.db import models
from django.contrib.auth.models import User
from user_calendar.models import *
from django.urls import reverse

# Possibly create a fixture for creating a user and an event

@pytest.mark.django_db
class TestEvent():
    def test_event_get_anonymous(self, client):
        response = client.get(reverse('api-root'))
        assert response.status_code == 200

        response = client.get(reverse('event-list'))
        assert response.status_code == 403

    def test_event_get_authenticated(self, client):
        self.superuser = User.objects.create_user(
            username='test-admin',
            password='123',
            is_staff=True, is_superuser=True
        )
        client.login(username='test-admin', password='123')

        response = client.get(reverse('api-root'))
        assert response.status_code == 200
        
        response = client.get(reverse('event-list'))
        assert response.status_code == 200

@pytest.mark.django_db
class TestEventDetail():
    def test_event_detail_get_anonymous(self, client):
        superuser = User.objects.create_user(
            username='test-admin',
            password='123',
            is_staff=True, is_superuser=True
        )
        event = Event.objects.create(
            owner=superuser,
            title='title',
            description='description',
            startDate='2021-01-01',
            endDate='2021-12-31'
        )

        response = client.get(reverse('event-detail', kwargs={'pk': 1}))
        assert response.status_code == 403

    def test_event_detail_get_authenticated(self, client):
        superuser = User.objects.create_user(
            username='test-admin',
            password='123',
            is_staff=True, is_superuser=True
        )
        event = Event.objects.create(
            owner=superuser,
            title='title',
            description='description',
            startDate='2021-01-01',
            endDate='2021-12-31'
        )

        client.login(username='test-admin', password='123')
        response = client.get(reverse('event-detail', kwargs={'pk': 1}))

        assert response.status_code == 200

@pytest.mark.django_db(transaction=True)
class TestEventPost():
    def test_event_post_post(self, client):
        self.superuser = User.objects.create_user(
            username='test-admin',
            password='123',
            is_staff=True, is_superuser=True
        )

        data = {
            'title': 'title',
            'description': 'description',
            'startDate': '2021-01-01',
            'endDate': '2021-12-31'
        }

        client.login(username='test-admin', password='123')
        response = client.post(reverse('event-list'), data, follow=True)

        assert response.status_code == 201
        assert Event.objects.count() == 1

    def test_event_post_post_invalid(self, client):
        self.superuser = User.objects.create_user(
            username='test-admin',
            password='123',
            is_staff=True, is_superuser=True
        )

        data = {
            'title': '',
            'description': '',
            'startDate': '',
            'endDate': ''
        }

        client.login(username='test-admin', password='123')
        response = client.post(reverse('event-list'), data, follow=True)

        assert response.status_code == 400
    
@pytest.mark.django_db(transaction=True)
class TestEventPatch():
    @pytest.mark.parametrize("data",
        [
            ({"title":"change"}), 
            ({"description":"change"}), 
            ({"startDate":"2021-12-31"}), 
            ({"endDate":"2021-12-31"})
        ]
    )
    def test_event_patch_patch(self, client, data):
        superuser = User.objects.create_user(
            username='test-admin',
            password='123',
            is_staff=True, is_superuser=True
        )

        Event.objects.create(
            owner=superuser,
            title='title',
            description='description',
            startDate='2021-01-01',
            endDate='2021-01-01'
        )

        assert Event.objects.count() == 1

        client.login(username='test-admin', password='123')
        response = client.patch(reverse('event-detail', kwargs={'pk': 1}), data, content_type='application/json')

        assert response.status_code == 200

    def test_event_patch_invalid(self, client):
        superuser = User.objects.create_user(
            username='test-admin',
            password='123',
            is_staff=True, is_superuser=True
        )

        event = Event.objects.create(
            owner=superuser,
            title='title',
            description='description',
            startDate='2021-01-01',
            endDate='2021-01-01'
        )

        assert Event.objects.count() == 1

        data = json.dumps({
            "not_a_field": "stuff",
        })

        client.login(username='test-admin', password='123')
        response = client.patch(reverse('event-detail', kwargs={'pk': 1}), data, content_type='application/json')

        assert response.status_code == 400

@pytest.mark.django_db(transaction=True)
class TestEventDelete():
    def test_event_delete(self, client):
        superuser = User.objects.create_user(
            username='test-admin',
            password='123',
            is_staff=True, is_superuser=True
        )
        
        event = Event.objects.create(
            owner=superuser,
            title='title',
            description='description',
            startDate='2021-01-01',
            endDate='2021-12-31'
        )

        assert Event.objects.count() == 1

        client.login(username='test-admin', password='123')
        response = client.delete(reverse('event-detail', kwargs={'pk': 1}), follow=True)

        assert response.status_code == 204
