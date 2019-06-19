from django.shortcuts import render

from rest_framework.permissions import (
    IsAuthenticated
)

from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView
)

from .models import (
    BlogModel
)

from .serializers import (
    BlogSerializer
)

class BlogListCreateView(ListCreateAPIView):
    queryset = BlogModel.objects.all()
    serializer_class = BlogSerializer
    permission_classes = (IsAuthenticated, )