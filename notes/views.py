from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from django.core import serializers
from .serializers import NoteSerializer
import json
from .models import Note

# Create your views here.
def notes(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = NoteSerializer(data=data)
        if serializer.is_valid():
            serializer.save(user=request.user)
        return JsonResponse(serializer.data,safe=False)
    elif request.method == 'GET':
        try:
            notes= Note.objects.filter(user=request.user).order_by('-date_posted')
            notes= serializers.serialize('python',notes)
            return JsonResponse(notes,safe=False)
        except Note.DoesNotExist:
            return HttpResponse(status=404)
    return ""

def notes_id(request,id):
    note = None
    try:
        note = Note.objects.get(id=id)
    except Note.DoesNotExist:
        return HttpResponse(status=404)
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
