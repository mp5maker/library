from django_filters import rest_framework as filters

from .models import (
    Origin
)


class OriginFilter(filters.FilterSet):
    origin = filters.CharFilter(field_name='origin', lookup_expr="icontains")
    title = filters.CharFilter(field_name="title", lookup_expr="icontains")
    description = filters.CharFilter(field_name="description", lookup_expr="icontains")

    class Meta:
        model = Origin
        fields = ('origin', 'title', 'description', )