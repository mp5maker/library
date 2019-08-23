from rest_framework import (
    serializers
)

from .models import (
    Origin,
    Location,
    Sighting
)

class OriginSerializer(serializers.ModelSerializer):
    query_params = serializers.SerializerMethodField()

    def get_query_params(self, obj):
        return self.context['request'].query_params

    class Meta:
        model = Origin
        fields = (
            'id',
            'title',
            'created',
            'updated',
            'description',
            'origin',
            'superhero',
            'query_params'
        )

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = "__all__"

class SightingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sighting
        fields = "__all__"