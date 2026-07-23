from django.shortcuts import render
from .serializers import UserSerializer
from .models import User

class UserViewSet():
    queryset = User.objects.all()
    serializer_class = UserSerializer
