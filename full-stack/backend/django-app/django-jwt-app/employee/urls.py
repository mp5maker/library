from django.urls import path
from .views import (
    EmployeeList,
    EmployeeDetail,
    EmployeeCreate,
    EmployeeUpdate,
    EmployeeDelete,
)

app_name = 'employee'

urlpatterns = [
    path('', EmployeeList.as_view(), name='list'),
    path('create', EmployeeCreate.as_view(), name='create'),
    path('detail/<int:pk>', EmployeeDetail.as_view(), name='detail'),
    path('update/<int:pk>', EmployeeUpdate.as_view(), name='update'),
    path('delete/<int:pk>', EmployeeDelete.as_view(), name='delete'),
]