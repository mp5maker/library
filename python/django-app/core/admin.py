from django.contrib import admin

from .models import (
    CustomUser,
    Profile
)

class ProfileInline(admin.StackedInline):
    model = Profile

class UserAdmin(admin.ModelAdmin):
    inlines = [ProfileInline]

admin.site.register(CustomUser, UserAdmin)