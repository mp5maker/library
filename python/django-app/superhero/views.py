from rest_framework.generics  import (
    ListAPIView,
    ListCreateAPIView,
    CreateAPIView,
    RetrieveAPIView,
    DestroyAPIView,
    UpdateAPIView,
    RetrieveUpdateDestroyAPIView,
)

from .models import (
    Origin,
    Location,
    Sighting
)

from .serializers import (
    OriginSerializer,
    LocationSerializer,
    SightingSerializer
)


class OriginList(ListAPIView):
    queryset = Origin.objects.all()
    serializer_class = OriginSerializer

class LocationList(ListAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class SightingList(ListAPIView):
    queryset = Sighting.objects.all()
    serializer_class = SightingSerializer