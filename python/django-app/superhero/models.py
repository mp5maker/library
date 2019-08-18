from django.db import models

class Origin(models.Model):
    superhero = models.CharField(max_length=100)
    origin  = models.CharField(max_length=100)

class Location(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    country = models.CharField(max_length=100)

    class Meta:
        unique_together = ["latitude", "longitude"]