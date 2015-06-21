from django.db import models

class Book(models.Model):
    author_name = models.CharField(max_length=30)
    text = models.CharField(max_length=200)
    created_at = models.DateTimeField('created_at')