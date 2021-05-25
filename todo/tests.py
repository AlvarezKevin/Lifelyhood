from django.test import TestCase

# Create your tests here.
from django.test.client import RequestFactory
from django.contrib.auth.models import User
from .views import todos
from .models import Todo

class TodoTest(TestCase):
    def setUp(self):
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.user = User.objects.create_user(username="test",email="test@fakeemail.com",password="test")

    def test_todos(self):
        # Create an instance of a GET request.
        request = self.factory.post('/todos/',{'text':'test note'},content_type='application/json')
        request.user = self.user
        response = todos(request)
        self.assertEqual(response.status_code,200)

        request = self.factory.get('/todos/')
        request.user = self.user
        response = todos(request)
        self.assertEqual(response.status_code, 200)