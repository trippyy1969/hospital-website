from django.db import models


class Department(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.URLField(blank=True)

    def __str__(self):
        return self.name


class Doctor(models.Model):
    department = models.ForeignKey(
        Department,
        on_delete=models.CASCADE,
        related_name="doctors"
    )
    name = models.CharField(max_length=100)
    qualification = models.CharField(max_length=200)
    specialization = models.CharField(max_length=100)
    experience = models.PositiveIntegerField()
    photo = models.URLField(blank=True)
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Appointment(models.Model):

    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Approved", "Approved"),
        ("Completed", "Completed"),
    ]

    doctor = models.ForeignKey(
        Doctor,
        on_delete=models.CASCADE,
        related_name="appointments"
    )

    patient_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    date = models.DateField()
    time = models.TimeField()
    symptoms = models.TextField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Pending"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.patient_name


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name