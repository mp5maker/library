from django.views.generic import TemplateView
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from angularjs.views import get_angular_template


urlpatterns = [
    path('admin/', admin.site.urls),
    # re_path('angular-app/(?P<item>[A-Za-z0-9\_\-\.\/]+).html$', get_angular_template)
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


urlpatterns += [
    path('', TemplateView.as_view(template_name="index.html"))
]