from django.contrib import admin

from .models import (
    Origin,
    Location,
    Sighting
)

@admin.register(Origin)
class OriginAdmin(admin.ModelAdmin):
    pass

@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    pass

@admin.register(Sighting)
class SightingAdmin(admin.ModelAdmin):
    pass