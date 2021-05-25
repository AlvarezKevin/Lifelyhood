from django.test import TestCase

# Create your tests here.
from django.test.client import RequestFactory
from django.contrib.auth.models import User
from .views import notes, notes_id 
from .models import Note

class NoteTest(TestCase):
    def setUp(self):
        self.factory = RequestFactory()
        self.user = User.objects.create_user(username="test",email="test@fakeemail.com",password="test")

    def test_notes(self):
        request = self.factory.post('/notes/',{'title':'title text','text':'test note'},content_type='application/json')
        request.user = self.user
        response = notes(request)
        self.assertEqual(response.status_code,200)

        request = self.factory.get('/notes/')
        request.user = self.user
        response = notes(request)
        self.assertEqual(response.status_code, 200)

    def test_notes_id(self):
        request = self.factory.post('/notes/',{'title':'title text','text':'test note'},content_type='application/json')
        request.user = self.user
        response = notes(request)

        request = self.factory.get('/notes/1/')
        request.user = self.user
        response = notes_id(request,1)
        self.assertEqual(response.status_code,200)

        request = self.factory.put('/notes/1/',{'title':'changed title'},content_type='application/json')
        request.user = self.user
        response = notes_id(request,1)
        self.assertEqual(response.status_code,200)

        request = self.factory.delete('/notes/1/')
        request.user = self.user
        response = notes_id(request,1)
        self.assertEqual(response.status_code,204)