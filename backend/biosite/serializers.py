from rest_framework import serializers
from .models import Biosite

class BiositeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Biosite
        fields = ('id', 'title', 'description', 'completed')