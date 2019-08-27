from django.contrib import admin

from .models import (
    Movie,
    Person,
    Role
)

@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    pass

@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    pass

@admin.register(Role)
class RoleAdmin(admin.ModelAdmin):
    pass