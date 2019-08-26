from django.db import models

from common.models import (
    Common
)

from .enums import (
    RATINGS,
    NOT_RATED,
)

class Movie(Common):
    year = models.PositiveIntegerField()
    rating = models.IntegerField(
        choices=RATINGS,
        default=NOT_RATED
    )
    runtime = models.PositiveIntegerField()
    website = models.URLField(blank=True)

    def __str__(self):
        return '{} ({})'.format(self.title, self.year)

    def get_rating(self):
        return [rate[1] for rate in RATINGS if (rate[0] == self.rating)][0]