from django.shortcuts import render

from rest_framework.generics import (
    ListAPIView
)

from .models import (
    Movie
)

from .serializers import (
    MovieSerializer
)


class MovieList(ListAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()