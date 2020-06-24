from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BiositeSerializer
from .models import Biosite

# Create your views here.
class BiositeView(viewsets.ModelViewSet):
    serializer_class = BiositeSerializer
    queryset = Biosite.objects.all()
