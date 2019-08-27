from django.db import models

from common.models import (
    Common
)

from .enums import (
    RATINGS,
    NOT_RATED,
    VOTES,
)

from .managers import (
    MovieManager,
    MovieImageManager
)

from django.conf import (
    settings
)

from .utilities import (
    movie_directory_path_with_uuid
)

class Movie(Common):
    year = models.PositiveIntegerField()
    rating = models.IntegerField(
        choices=RATINGS,
        default=NOT_RATED
    )
    runtime = models.PositiveIntegerField()
    website = models.URLField(blank=True)
    director = models.ForeignKey(
        to='Person',
        on_delete=models.SET_NULL,
        related_name='directed',
        null=True,
        blank=True
    )
    writers = models.ManyToManyField(
        to="Person",
        related_name="writing_credits",
        blank=True
    )
    actors = models.ManyToManyField(
        to="Person",
        through="Role",
        related_name="acting_credits",
        blank=True
    )

    objects = MovieManager()

    def __str__(self):
        return '{} ({})'.format(self.title, self.year)

    def get_rating(self):
        return [rate[1] for rate in RATINGS if (rate[0] == self.rating)][0]

    def get_director_name(self):
        return '{} {}'.format(self.director.first_name, self.director.last_name)

    def get_writers_name(self):
        return ['{} {}'.format(writer.first_name, writer.last_name) for writer in self.writers.all()]

    def get_actors_name(self):
        return ['{} {}'.format(actor.first_name, actor.last_name) for actor in self.actors.all()]

    def get_score(self):
        return self.score

    def get_total_count(self):
        return self.count

    class Meta:
        ordering = ('-year', 'title')

class MovieImage(Common):
    image = models.ImageField(upload_to=movie_directory_path_with_uuid)
    uploaded = models.DateTimeField(auto_now=True)
    movie = models.ForeignKey(
        Movie,
        on_delete=models.CASCADE,
        related_name='movie_images'
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='uploaded_movie_images'
    )

    objects = MovieImageManager()

    def get_movie_name(self):
        return self.movie.title

    def get_user_name(self):
        return '{} {}'.format(self.user.first_name, self.user.last_name)


class Person(Common):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    born = models.PositiveIntegerField()
    died = models.PositiveIntegerField(null=True, blank=True)

    def __str__(self):
        return '{} {} ({}-{})'.format(
            self.first_name, self.last_name, self.born, self.died
        )

    def get_directed_movie_names(self):
        return [movie.title for movie in self.directed.all()]

    def get_writing_credit_movies_names(self):
        return [movie.title for movie in self.writing_credits.all()]

    def get_actor_credit_movies_name(self):
        return [movie.title for movie in self.acting_credits.all()]

    class Meta:
        ordering = ('last_name', 'first_name', )

class Role(Common):
    movie = models.ForeignKey(Movie, on_delete=models.DO_NOTHING)
    person = models.ForeignKey(Person, on_delete=models.DO_NOTHING)
    name = models.CharField(max_length=100)

    def __str__(self):
        return '{} {} {}'.format(self.movie_id, self.person_id, self.name)

    class Meta:
        unique_together = ('movie', 'person', 'name', )

class Vote(models.Model):
    value = models.IntegerField(choices=VOTES)
    movie = models.ForeignKey(
        Movie,
        on_delete=models.CASCADE,
        related_name='number_of_votes'
    )
    voted_on = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="movie_vote_on"
    )

    def __str__(self):
        return self.movie.title

    class Meta:
        ordering: ('-created')


    class Meta:
        unique_together = ('user', 'movie')