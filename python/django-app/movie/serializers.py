from rest_framework.serializers import (
    ModelSerializer,
    CharField
)

from .models import (
    Movie
)

from .enums import (
    RATINGS
)

class MovieSerializer(ModelSerializer):
    rating_name = CharField(source='get_rating', read_only=True)
    rating_display = CharField(source='get_rating_display')

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
            'rating_display'
        )