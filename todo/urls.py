from django.urls import path

from . import views

urlpatterns = [
    path('todos', views.todos, name='todos'),
    path('todos/<int:id>', views.todos_id, name='todos-id'),
]