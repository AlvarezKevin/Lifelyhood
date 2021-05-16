from django.urls import path

from . import views

urlpatterns = [
    path('new-note', views.new_note, name='new-note'),
    path('note/<int:id>', views.note, name='note'),
]