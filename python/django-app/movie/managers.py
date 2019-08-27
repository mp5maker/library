from django.db import models

from django.db.models.aggregates import (
    Sum,
    Count
)

class MovieManager(models.Manager):
    def all_select_prefetch_related(self):
        return self.get_queryset().select_related('director').prefetch_related('writers', 'actors')

    def all_with_select_prefect_related_and_score(self):
        queryset = self.all_select_prefetch_related()
        queryset = queryset.annotate(
            score=Sum('number_of_votes__value'),
            count=Count('number_of_votes')
        )
        return queryset

    def top_movies(self, limit=10):
        queryset = self.all_with_select_prefect_related_and_score()
        queryset = queryset.annotate(vote_sum=Sum('number_of_votes__value'))
        return queryset.order_by('-vote_sum')[:int(limit)]

class MovieImageManager(models.Manager):
    def all_select_prefetch_related(self):
        return self.get_queryset().select_related('movie', 'user')