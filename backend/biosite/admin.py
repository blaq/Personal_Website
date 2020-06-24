from django.contrib import admin
from .models import Biosite

class BiositeAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.
admin.site.register(Biosite, BiositeAdmin)