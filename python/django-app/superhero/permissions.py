from rest_framework import permissions

class OriginPermission(permission.BasePermission):
    message = "You are not allowed to perform any operation on Origin"

    def has_permission(self, request, view):
        return True

    def has_object_permission(self, request, view, obj):
        return True
