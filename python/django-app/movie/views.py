from django.shortcuts import render

from rest_framework.generics import (
    ListAPIView
)

from .models import (
    Movie,
    Person,
)

from .serializers import (
    MovieSerializer,
    PersonSerializer,
)


class MovieList(ListAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all_select_prefetch_related()

class PersonList(ListAPIView):
    serializer_class = PersonSerializer
    queryset = Person.objects.all()