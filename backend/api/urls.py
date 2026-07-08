from django.urls import path
from .views import (
    DepartmentList,
    DoctorList,
    AppointmentCreate,
    AppointmentList,
    ContactCreate,
)

urlpatterns = [
    path("departments/", DepartmentList.as_view()),
    path("doctors/", DoctorList.as_view()),
    path("appointments/", AppointmentList.as_view()),
    path("appointments/create/", AppointmentCreate.as_view()),
    path("contact/", ContactCreate.as_view()),
]