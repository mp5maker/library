from django.contrib import admin

from django.urls import path, include, re_path

from django.conf.urls.static import static

from django.conf import settings

from django.views.generic.base import TemplateView

# Apps
urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-auth/', include('rest_framework.urls')),
    path('blog/', include('blog.urls', namespace="blog")),
]

# Debug
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# React App
urlpatterns += path('', include('deploy.urls')),
urlpatterns += re_path(r'^(?:.*)/?', include('deploy.urls')),
