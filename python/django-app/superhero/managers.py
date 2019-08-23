from django.db import models

from common.enums import (
    PUBLISHED,
    ON_HOLD,
    IN_REVIEW,
    DRAFT
)

class OriginManager(models.Manager):
    def published(self):
        return self.filter(status=PUBLISHED)

    def in_review(self):
        return self.filter(status=IN_REVIEW)

    def on_hold(self):
        return self.filter(status=ON_HOLD)

    def draft(self):
        return self.filter(status=DRAFT)