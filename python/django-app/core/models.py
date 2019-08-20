from django.db import models

from django.conf import settings

from django.contrib.auth.models import AbstractUser

from django.utils.functional import cached_property

class CustomUser(AbstractUser):
    """ user.get_full_name_accessor() can be alternatively writter as user.get_full_name_accessor"""
    """  Invisible to ORM """
    @property
    def get_full_name_accessor(self):
        return self.first_name + " " + self.last_name

    @cached_property
    def get_full_name(self):
        return self.first_name + " " + self.last_name

class Profile(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        primary_key=True,
        on_delete=models.CASCADE
    )


class BaseProfile(models.Model):
    USER_TYPES = (
        (0, 'Ordinary'),
        (1, 'Superhero')
    )
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        primary_key=True,
        on_delete=models.CASCADE
    )
    user_type = models.IntegerField(
        null=True,
        choices=USER_TYPES
    )
    bio = models.CharField(
        max_length=200,
        blank=True,
        null=True
    )

    def __str__(self):
        return "{}: {:20}".format(self.user, self.bio or "")

class SuperHeroProfile(models.Model):
    origin = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        abstract = True


class OrdinaryProfile(models.Model):
    address = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        abstract = True

class Profile(SuperHeroProfile, OrdinaryProfile, BaseProfile):
    pass