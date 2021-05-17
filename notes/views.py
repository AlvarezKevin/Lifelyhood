from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from django.core import serializers
from .serializers import NoteSerializer
from .models import Note

# Create your views here.
def notes(request):
    if request.method == 'POST':
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
        return JsonResponse(serializer.data,safe=False)
    elif request.method == 'GET':
        notes = list(Note.objects.get(user=request.user).order_by('-date_posted'))
        return JsonResponse(notes,safe=False)
    return ""
        

def notes_id(request,id):
    note = Note.objects.get(id=id)
    if request.user != note.user:
        return HttpResponse(status=403)

    if request.method == 'GET':
        note_json = serializers.serialize('json',note)
        return JsonResponse(note_json,safe=False)
    elif request.method == 'PUT' or request.method == 'PATCH':
        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse(serializer.data) 
    elif request.method == 'DELETE':
        note.delete()
        return HttpResponse(status=204)
    return ""
