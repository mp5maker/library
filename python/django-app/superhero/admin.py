from django.contrib import admin

from .models import (
    Origin,
    Power,
    Location,
    Sighting
)

admin.site.register(Origin)
admin.site.register(Power)
admin.site.register(Location)
admin.site.register(Sighting)