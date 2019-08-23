from django.shortcuts import get_object_or_404

from rest_framework.generics  import (
    ListAPIView,
    ListCreateAPIView,
    CreateAPIView,
    RetrieveAPIView,
    DestroyAPIView,
    UpdateAPIView,
    RetrieveUpdateDestroyAPIView,
)

from rest_framework.response import Response
from rest_framework import status

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

    def get_queryset(self, *args, **kwargs):
        sort = self.request.query_params.get('sort', None)
        origin = Origin.objects.order_by('-origin') if sort == 'desc' else Origin.objects.order_by('origin')
        return origin

class OriginDetail(RetrieveAPIView):
    queryset = Origin.objects.all()
    serializer_class = OriginSerializer
    lookup_field = 'id'

    def get_queryset(self):
        return Origin.objects.filter(id=self.kwargs.get('id'))

class OriginCreate(CreateAPIView):
    queryset = Origin.objects.all()
    serializer_class = OriginSerializer

    def post(self, request):
        origin = OriginSerializer(data=self.request.data)
        if origin.is_valid():
            origin.save()
            return Response(origin.data, status=status.HTTP_201_CREATED)
        return Response(origin.error, status=status.HTTP_400_BAD_REQUEST)

class OriginUpdate(UpdateAPIView):
    queryset = Origin.objects.all()
    serializer_class = OriginSerializer
    lookup_field = 'id'

    def patch(self, request):
        instance = self.get_object()
        origin = OriginSerializer(instance, data=request.data, partial=True)
        if origin.is_valid():
            origin.save()
            return Response(origin.data, status=status.HTTP_200_OK)
        return Response(origin.error, status=status.HTTP_400_BAD_REQUEST)


class LocationList(ListAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

class SightingList(ListAPIView):
    queryset = Sighting.objects.all()
    serializer_class = SightingSerializer