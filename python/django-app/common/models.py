from django.db import models

from common.enums import (
    STATUS,
    PUBLISHED
)

class Common(models.Model):
    title = models.CharField(blank=True, null=True, max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=2, choices=STATUS, default=PUBLISHED)

    class Meta:
        abstract = True