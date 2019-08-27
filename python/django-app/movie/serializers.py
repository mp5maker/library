from rest_framework.serializers import (
    ModelSerializer,
    CharField,
    IntegerField
)

from .models import (
    Movie,
    Person,
    Role
)

from .enums import (
    RATINGS
)

class MovieSerializer(ModelSerializer):
    rating_name = CharField(source='get_rating', read_only=True)
    rating_display = CharField(source='get_rating_display', read_only=True)
    director_name = CharField(source='get_director_name', read_only=True)
    writers_name = CharField(source='get_writers_name', read_only=True)
    actors_name = CharField(source='get_actors_name', read_only=True)
    score = IntegerField(source='get_score', read_only=True)
    number_of_votes = IntegerField(source='get_total_count', read_only=True)

    class Meta:
        model = Movie
        fields = (
            'id',
            'title',
            'description',
            'rating',
            'created',
            'updated',
            'year',
            'runtime',
            'website',
            'rating_name',
            'rating_display',
            'director',
            'writers',
            'actors',
            'director_name',
            'writers_name',
            'actors_name',
            'score',
            'number_of_votes',
        )

class PersonSerializer(ModelSerializer):
    directed = CharField(source='get_directed_movie_names', read_only=True)
    writing_credits = CharField(source='get_writing_credit_movies_names', read_only=True)
    acting_credits = CharField(source='get_actor_credit_movies_name', read_only=True)

    class Meta:
        model = Person
        fields = (
            "id",
            "title",
            "created",
            "updated",
            "description",
            "status",
            "first_name",
            "last_name",
            "born",
            "died",
            'directed',
            'writing_credits',
            'acting_credits'
        )

class RoleSerializer(ModelSerializer):
    class Meta:
        model = Role
        fields = "__all__"