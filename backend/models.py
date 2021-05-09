from django.db import models
from django.contrib.auth.models import User

class Workspace(models.Model):
    pass
class Schoolspace(models.Model):
    pass
class Personalspace(models.Model):
    pass
    
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default=r"src\images\profile\user\default.svg", upload_to='user')
    email = models.EmailField(max_length=100, unique=True)
    work = models.OneToOneField(Workspace, on_delete=models.CASCADE)
    school = models.OneToOneField(Schoolspace, on_delete=models.CASCADE)
    personal = models.OneToOneField(Personalspace, on_delete=models.CASCADE)

    def __str__(self):
        return self.email #self.user.username

