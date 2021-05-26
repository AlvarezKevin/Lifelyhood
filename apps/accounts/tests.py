from django.test import TestCase

# Create your tests here.
from django.test.client import RequestFactory
from django.contrib.auth.models import User
from .views import todos, todos_id
from .models import Todo

class SettingsTest(TestCase):
    def setUp(self):
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.user = User.objects.create_user(username="test",email="test@fakeemail.com",password="test")

    def test_todos(self):
        # Create an instance of a GET request.
        with open('test_image.jpg') as fp:
            request = self.factory.post('/settings/',{'img':fp})
            request.user = self.user
            response = todos(request)
            self.assertEqual(response.status_code,200)

        request = self.factory.get('/settings/')
        request.user = self.user
        response = todos(request)
        self.assertEqual(response.status_code, 200)