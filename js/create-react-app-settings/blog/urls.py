from django.urls import path

from django.views.generic.base import TemplateView

from .views import (
    BlogListCreateView,
)

app_name = "blog"

urlpatterns = [
    path("", BlogListCreateView.as_view(), name="list-create")
]