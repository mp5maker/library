from rest_framework import (
    serializers
)

from .models import (
    Origin,
    Location,
    Sighting
)

class OriginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Origin
        fields = "__all__"

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = "__all__"

class SightingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sighting
        fields = "__all__"