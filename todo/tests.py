from django.test import TestCase

# Create your tests here.
from django.test.client import RequestFactory
from django.contrib.auth.models import User
from .views import todos, todos_id
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

    def test_notes_id(self):
        request = self.factory.post('/todos/',{'text':'test note'},content_type='application/json')
        request.user = self.user
        response = todos(request)

        request = self.factory.get('/todos/1/')
        request.user = self.user
        response = todos_id(request,1)
        self.assertEqual(response.status_code,200)

        request = self.factory.put('/todos/1/',{'text':'changed text'},content_type='application/json')
        request.user = self.user
        response = todos_id(request,1)
        self.assertEqual(response.status_code,200)

        request = self.factory.delete('/todos/1/')
        request.user = self.user
        response = todos_id(request,1)
        self.assertEqual(response.status_code,204)