
from django.http import HttpResponse
from django.http.response import JsonResponse
from .models import Profile

def change_picture(request):
    if request.method == 'POST':
        img = request.POST.get('img')
        if img == None or img == '':
            return HttpResponse(status=403)
        newProfile = Profile(user=request.user,image=img)
        newProfile.save()
        return HttpResponse(status=200)
    elif request.method == 'GET':
        try:
            profile = Profile.objects.get(user=request.user)
            return JsonResponse(profile,safe=False)
        except Profile.DoesNotExist:
            return HttpResponse(status=404)
    return
