from django.urls import path

from . import views

urlpatterns = [
    path('new-todo', views.new_todo, name='new-todo'),
    path('todo/<int:id>', views.todo, name='todo'),
]