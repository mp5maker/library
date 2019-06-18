from django.urls import path

from django.views.generic.base import TemplateView

from .views import (
    ReactAppView,
)

urlpatterns = [
    path("", ReactAppView.as_view(), name="react-app"),
    path("manifest.json", TemplateView.as_view(
            template_name='manifest.json',
            content_type='application/json'
        ),
        name="manifest-json"
    )
]