from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import (static, )


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace="rest_framework")),
    path('api/v1/', include('superhero.urls', namespace="superhero")),
    path('api/v1/', include('movie.urls', namespace="movie")),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
    urlpatterns += static(settings.MEDIA_URL, document=settings.MEDIA_ROOT)

if 'silk' in settings.INSTALLED_APPS:
    urlpatterns += [path('silk/', include('silk.urls', namespace='silk'))]