from django.db import models

class Origin(models.Model):
    superhero = models.CharField(max_length=100)
    origin  = models.CharField(max_length=100)

class Power(models.Model):
    superhero = models.ForeignKey(
        Origin,
        on_delete=models.CASCADE
    )
    power = models.CharField(max_length=100)

class Location(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    country = models.CharField(max_length=100)

    class Meta:
        unique_together = ["latitude", "longitude"]

class Sighting(models.Model):
    superhero = models.ForeignKey(
        Origin,
        on_delete=models.CASCADE,
        related_name="seen_where"
    )
    power = models.ForeignKey(
        Power,
        on_delete=models.CASCADE,
        related_name="seen_where"
    )
    location = models.ForeignKey(
        Location,
        on_delete=models.CASCADE,
        related_name="superhero_sighting"
    )
    sighted_on = models.DateTimeField(blank=True, null=True)
