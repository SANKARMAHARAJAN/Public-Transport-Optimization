# bus_api/views.py
from rest_framework import generics
from .models import Bus
from .serializers import BusSerializer

class BusList(generics.ListCreateAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

class BusDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bus.objects.all()
    serializer_class = BusSerializer

class BusByNumber(generics.ListAPIView):
    serializer_class = BusSerializer

    def get_queryset(self):
        bus_number = self.kwargs['bus_number']
        print(f"Searching for bus with number: {bus_number}")
        queryset = Bus.objects.filter(bus_number=bus_number)
        print(f"Queryset: {queryset}")
        return queryset