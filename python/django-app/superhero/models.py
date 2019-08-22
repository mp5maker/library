from django.db import models

from django.conf import settings

from common.models import (
    Common
)

from .managers import (
    OriginManager
)

class Origin(Common):
    superhero = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="origins"
    )
    origin = models.CharField(max_length=100)
    state = OriginManager()

    def __str__(self):
        return self.origin[:50]

class Location(Common):
    latitude = models.FloatField()
    longitude = models.FloatField()
    country = models.CharField(max_length=100)

    def __str__(self):
        return "{}lat {}long".format(self.latitude, self.longitude)

    class Meta:
        unique_together = ['latitude', 'longitude']

class Sighting(Common):
    superhero = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="sightings"
    )
    power = models.CharField(max_length=100)
    location = models.ForeignKey(
        Location,
        on_delete=models.CASCADE,
        related_name="sighting_locations"
    )
    sighted_on = models.DateTimeField()

    def __str__(self):
        return "{}-{}".format(self.power, self.location)

    class Meta:
        unique_together = ["superhero", "power"]