from django.urls import path

app_name = 'superhero'

from .views import (
    OriginList,
    OriginCreate,
    OriginUpdate,
    OriginDetail,
    LocationList,
    SightingList
)

urlpatterns = [
    path('origin/', OriginList.as_view(), name='origin-list'),
    path('origin/create', OriginCreate.as_view(), name='origin-create'),
    path('origin/update/<int:id>', OriginUpdate.as_view(), name='origin-update'),
    path('origin/<int:id>', OriginDetail.as_view(), name='origin-detail'),
    path('location/', LocationList.as_view(), name='location-list'),
    path('sighting/', SightingList.as_view(), name='sighting-list'),
]