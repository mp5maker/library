from django.urls import path

from .views import (
    MovieList,
    PersonList
)

app_name = 'movie'

urlpatterns = [
    path('movie/', MovieList.as_view(), name="list"),
    path('person/', PersonList.as_view(), name="person")
]