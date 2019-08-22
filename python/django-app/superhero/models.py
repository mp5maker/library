from django.db import models

from django.conf import settings

class Origin(models.Model):
    superhero = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="origins"
    )
    origin = models.CharField(max_length=100)

class Location(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    country = models.CharField(max_length=100)

    class Meta:
        unique_together = ['latitude', 'longitude']

class Sighting(models.Model):
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

    class Meta:
        unique_together = ["superhero", "power"]