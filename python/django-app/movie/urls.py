from django.urls import path

from .views import (
    MovieList,
    MovieTopList,
    MovieImageList,
    MovieImageCreate,
    PersonList,
)

app_name = 'movie'

urlpatterns = [
    path('movie/', MovieList.as_view(), name="list"),
    path('movie-top/', MovieTopList.as_view(), name="top-list"),
    path('movie-image/', MovieImageList.as_view(), name="image-list"),
    path('movie-image-create/', MovieImageCreate.as_view(), name="image-create"),
    path('person/', PersonList.as_view(), name="person")
]