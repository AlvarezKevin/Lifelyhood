from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from django.http import HttpResponseNotFound
from django.core import serializers
from .serializers import TodoSerializer 
from .models import Todo
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
import json

# Create your views here.
def todos(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = TodoSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user=request.user)
        return JsonResponse(serializer.data,safe=False)
    elif request.method == 'GET':
        try:
            todos = Todo.objects.filter(user=request.user).order_by('-date_posted')
            todos = serializers.serialize('python',todos)
            return JsonResponse(todos,safe=False)
        except Todo.DoesNotExist:
            return HttpResponse(status=404)
    return ""
        

def todos_id(request,id):
    todo = None
    try:
        todo = Todo.objects.filter(id=id).get()
    except Todo.DoesNotExist:
        return HttpResponse(status=404) 
    if request.user != todo.user:
        return HttpResponse(status=403)

    if request.method == 'GET':
        todo_json = serializers.serialize('json',[todo,])
        return JsonResponse(todo_json,safe=False)
    elif request.method == 'PUT' or request.method == 'PATCH':
        data = json.loads(request.body)
        serializer = TodoSerializer(todo, data=data)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse(serializer.data) 
    elif request.method == 'DELETE':
        todo.delete()
        return HttpResponse(status=204)
    return ""
