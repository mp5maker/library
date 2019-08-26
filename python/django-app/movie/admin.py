from django.contrib import admin

from .models import (
    Movie
)

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    pass