from django.shortcuts import render

# Create your views here.

from rest_framework import generics
from .models import Department, Doctor, Appointment, Contact
from .serializers import (
    DepartmentSerializer,
    DoctorSerializer,
    AppointmentSerializer,
    ContactSerializer,
)


# Departments
class DepartmentList(generics.ListAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


# Doctors
class DoctorList(generics.ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer


# Appointments
class AppointmentCreate(generics.CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer


class AppointmentList(generics.ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer


# Contact
class ContactCreate(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer