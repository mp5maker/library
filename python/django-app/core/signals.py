from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from .models import (
    CustomUser,
    Profile
)

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_profile_handler(sender, instance, created, **kwargs):
    if not created:
        return
    profile = models.Profile(user=instance)
    profile.save()

