from django.contrib import admin

# Register your models here.

from .models import Department, Doctor, Appointment, Contact

admin.site.register(Department)
admin.site.register(Doctor)
admin.site.register(Appointment)
admin.site.register(Contact)