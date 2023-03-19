from django.db import models

# Create your models here.

class  geo(models.Model):
    image = models.ImageField(upload_to='images')

    def str(self):
        return str(self.id)