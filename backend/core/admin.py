from django.contrib import admin
from .models import Profile, Doctor, Patient, Appointment

admin.site.register(Profile)
admin.site.register(Doctor)
admin.site.register(Patient)
admin.site.register(Appointment)
