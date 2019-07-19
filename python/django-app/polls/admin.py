from django.contrib import admin

# Register your models here.
from .models import (
    PollModel,
    ChoiceModel,
    VoteModel
)

class PollAdmin(admin.ModelAdmin):
    pass
admin.site.register(PollModel)

class ChoiceAdmin(admin.ModelAdmin):
    pass
admin.site.register(ChoiceModel)

class VoteAdmin(admin.ModelAdmin):
    pass
admin.site.register(VoteModel)