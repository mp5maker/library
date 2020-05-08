from django.db import models

from common.models import CommonDetails

class Employee(CommonDetails):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    age=models.IntegerField()

    @property
    def full_name(self):
        return '%s %s' % (self.first_name, self.last_naem)