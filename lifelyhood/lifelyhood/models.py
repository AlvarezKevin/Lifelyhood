from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='profiles/default.jpg', upload_to='profiles')
    work = models.OneToOneField(WorkSpace, on_delete=models.CASCADE)
    school = models.OneToOneField(SchoolSpace, on_delete=models.CASCADE)
    personal = models.OneToOneField(PersonalSpace, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username
