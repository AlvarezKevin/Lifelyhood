from django.urls import path

from . import views

urlpatterns = [
    path('notes', views.notes, name='notes'),
    path('notes/<int:id>', views.notes_id, name='notes-id'),
]