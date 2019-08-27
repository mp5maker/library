from django.shortcuts import render

from rest_framework.generics import (
    ListAPIView,
    CreateAPIView,
)

from rest_framework.parsers import (
    MultiPartParser,
    FileUploadParser
)

from .models import (
    Movie,
    MovieImage,
    Person,
)

from .serializers import (
    MovieSerializer,
    PersonSerializer,
    MovieImageSerializer
)


class MovieList(ListAPIView):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all_with_select_prefect_related_and_score()

class MovieImageList(ListAPIView):
    serializer_class = MovieImageSerializer
    queryset = MovieImage.objects.all_select_prefetch_related()

class MovieImageCreate(CreateAPIView):
    serializer_class = MovieImageSerializer
    queryset = MovieImage.objects.all()
    # parser_classes = (
    #     FileUploadParser
    # )

class PersonList(ListAPIView):
    serializer_class = PersonSerializer
    queryset = Person.objects.all()
