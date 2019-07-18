from django.db import models

from django.core.mail import send_mail
from django.contrib.auth.base_user import AbstractBaseUser


class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    first_name = models.CharField(max_length=200, blank=True)
    last_name = models.CharField(max_length=200, blank=True)
    date_joined = models.CharField(max_length=200, blank=True)
    is_active = models.CharField(max_length=200, blank=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    class Meta:
        verbose_name = 'user'
        verbose_name_plural = 'users'

    def get_full_name(self):
        full_name = "{} {}".format(self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        return self.first_name

    def email_user(self, *args, **kwargs):
        subject = kwargs.get('subject')
        email = kwargs.get('email')
        from_email = kwargs.get('from_email')
        send_mail(subject, message, from_email, [self.email])