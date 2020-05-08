from .models import Employee

from rest_framework.serializers import ModelSerializer


class EmployeeSerializer(ModelSerializer):
    class Meta:
        model=Employee
        fields = (
            'id',
            'alias',
            'first_name',
            'last_name',
            'age',
            'created_at',
            'updated_at'
        )