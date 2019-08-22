from django.db import models

from common.enums import (
    PUBLISHED
)

class OriginQuerySet(models.QuerySet):
    def published(self):
        return self.filter(status=PUBLISHED)

class OriginManager(models.Manager):
    def get_queryset(self):
        return OriginQuerySet(self.model, using=self._db)

    def published(self):
        return self.get_queryset().published()