from django.db import models

class MovieManager(models.Manager):
    def all_select_prefetch_related(self):
        return self.get_queryset().select_related('director').prefetch_related('writers', 'actors')