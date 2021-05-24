from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from django.core import serializers
from .serializers import TodoSerializer 
from .models import Todo

# Create your views here.
def todos(request):
    if request.method == 'POST':
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
        return JsonResponse(serializer.data,safe=False)
    elif request.method == 'GET':
        try:
            todos = list(Todo.objects.get(user=request.user).order_by('-date_posted'))
            return JsonResponse(todos,safe=False)
        except Todo.DoesNotExist:
            return HttpResponse(status=404)
    return ""
        

def todos_id(request,id):
    todo = None
    try:
        todo = Todo.objects.get(id=id)
    except Todo.DoesNotExist:
        return HttpResponse(status=404) 
    if request.user != todo.user:
        return HttpResponse(status=403)

    if request.method == 'GET':
        todo_json = serializers.serialize('json',todo)
        return JsonResponse(todo_json,safe=False)
    elif request.method == 'PUT' or request.method == 'PATCH':
        serializer = TodoSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse(serializer.data) 
    elif request.method == 'DELETE':
        todo.delete()
        return HttpResponse(status=204)
    return ""
