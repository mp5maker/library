from rest_framework.serializers import (
    ModelSerializer
)

from .models import (
    BlogModel
)

class BlogSerializer(ModelSerializer):
    class Meta:
        model = BlogModel
        fields = "__all__"

