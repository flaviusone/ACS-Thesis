from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=200, help_text='Title: ')
    author = models.ForeignKey(User, help_text='User')
    created_at = models.DateTimeField(auto_now_add=True, help_text='Created at: ')
    content = models.TextField(help_text='Content: ')