from rest_framework import (
    status
)
from rest_framework.test import (
    APIClient,
    APITestCase,
    force_authenticate
)

from core.models import CustomUser
from django.urls import reverse


class OriginTestCase(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.super_user = CustomUser.objects.create_user(
            username='test',
            email='test@gmail.com',
            password='test1234'
        )

    # def test_origin(self):
    #     url = reverse('superhero:origin-list')

    #     # Login
    #     user = CustomUser.objects.get(username='test')

    #     # Request
    #     response = self.client.get('/api/v1/origin/')
    #     force_authenticate(response, user=user)
    #     print(response)
        # self.assertEqual(response.status_code, HTTP_200_OK)