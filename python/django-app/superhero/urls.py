from django.urls import path

app_name = 'superhero'

from .views import (
    OriginList,
    LocationList,
    SightingList
)

urlpatterns = [
    path('origin/', OriginList.as_view(), name='origin'),
    path('location/', LocationList.as_view(), name='location'),
    path('sighting/', SightingList.as_view(), name='sighting'),
]