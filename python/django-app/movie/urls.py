from django.urls import path

from .views import (
    MovieList
)

app_name = 'movie'

urlpatterns = [
    path('movie/', MovieList.as_view(), name="list")
]