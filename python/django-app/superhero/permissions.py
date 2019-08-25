from rest_framework import permissions

class OriginPermission(permissions.BasePermission):
    message = "You are not allowed to perform any operation on Origin"

    def has_permission(self, request, view):
        if request.method == 'GET':
            return True

    def has_object_permission(self, request, view, obj):
        if request.method == 'GET':
            return request.user == obj.owner

