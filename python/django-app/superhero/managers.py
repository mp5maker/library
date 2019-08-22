from django.db import models

from .querysets import (
    OriginQuerySet
)

class OriginManager(models.Manager):
    def get_queryset(self):
        return OriginQuerySet(self.model, using=self._db)

    def published(self):
        return self.get_queryset().published()

    def on_hold(self):
        return self.get_queryset().on_hold()

    def in_review(self):
        return self.get_queryset().in_review()

    def draft(self):
        return self.get_queryset().draft()

    def status_count(self, keyword):
        return   return self.get_queryset().status_count(keyword=keyword)