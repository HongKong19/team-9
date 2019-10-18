
from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import ClientSerializer      # add this
from .models import Client                     # add this

class ClientView(viewsets.ModelViewSet):       # add this
  serializer_class = ClientSerializer          # add this
  queryset = Client.objects.all()
