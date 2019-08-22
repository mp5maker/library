import datetime

from django.db import models

from django.contrib.auth.models import (
    AbstractBaseUser
)

from .managers import (
    CustomUserManager
)

class CustomUser(AbstractBaseUser):
    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    username = models.CharField(max_length=100, unique=True, blank=True, null=True)
    email = models.EmailField(
        verbose_name="email address",
        max_length=255,
        unique=True
    )
    phone = models.CharField(max_length=50, blank=True, null=True)
    date_of_birth=models.DateField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_super_admin = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    def get_fullname(self):
        return "{} {}".format(self.first_name, self.last_name)

    @property
    def fullname(self):
        return "{} {}".format(self.first_name, self.last_name)

    @property
    def get_age(self):
        today = datetime.date.today()
        return today.year - self.date_of_birth.year

    @property
    def is_staff(self):
        return self.is_super_admin