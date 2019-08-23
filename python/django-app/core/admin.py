from django.contrib import admin

from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from django.contrib.auth.models import Group

from .models import (
    CustomUser
)

from .forms import (
    UserCreationForm,
    UserChangeForm
)

@admin.register(CustomUser)
class UserAdmin(BaseUserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    list_display = ('email', 'username', 'is_admin')
    list_filter = ('is_admin', )
    filter_horizontal = ()

    fieldsets = (
        (
            None,
            {
                'fields': ('email', 'password', 'username', 'first_name', 'last_name', 'date_of_birth', 'phone', )
            }
        ),
        (
            'Permissions', {
                'fields': ('is_admin', 'is_super_admin')
            }
        ),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'username', 'password1', 'password2', 'first_name', 'last_name', 'date_of_birth', 'phone')}
        ),
    )

    search_fields = ('email', 'username', )
    ordering = ('email', 'username', )
admin.site.unregister(Group)