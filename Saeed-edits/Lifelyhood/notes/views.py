from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse
from .serializers import NoteSerializer

# Create your views here.
def new_note(request):
    if request.method == 'POST':
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
        return JsonResponse(serializer.data,safe=False)
    return ""
        

def note(request,id):
    note = Note.objects.get(id=id)
    if request.user != note.user:
        return HttpResponse(status=403)

    if request.method == 'GET':
        return JsonResponse(serializer.data,safe=False)
    elif request.method == 'PUT' or request.method == 'PATCH':
        data = JSONParser().parse(request)
        serializer = NoteSerializer(note, data=data)
        if serializer.is_valid():
            serializer.save()
        return JsonResponse(serializer.data) 
    elif request.method == 'DELETE':
        note.delete()
        return HttpResponse(status=204)
    return ""
