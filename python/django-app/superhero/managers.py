from django.db import models

from common.enums import (
    PUBLISHED,
    ON_HOLD,
    IN_REVIEW,
    DRAFT
)

class OriginManager(models.Manager):
    def publshed(self):
        return self.filter(status=PUBLISHED)

    def on_hold(self):
        return self.filter(status=ON_HOLD)

    def in_review(self):
        return self.filter(status=IN_REVIEW)

    def draft(self):
        return self.filter(status=DRAFT)

    def status_count(self, keyword):
        return self.filter(status=keyword).count()