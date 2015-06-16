from django.db import models

class Post(models.Model):
    author_name = models.CharField(max_length=30)
    text = models.CharField(max_length=200)
    created_at = models.DateTimeField('created_at')