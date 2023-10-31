from django.db import models

class Bus(models.Model):
    bus_number = models.CharField(max_length=100, unique=True)
    current_location = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)