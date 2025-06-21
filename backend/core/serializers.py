from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Patient, Doctor, Appointment, Profile

# -------------------------------
# ✅ User Registration Serializer
# -------------------------------
class RegisterSerializer(serializers.ModelSerializer):
    role = serializers.CharField(write_only=True)  # For profile creation

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'role']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        role = validated_data.pop('role')
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        # Create profile
        Profile.objects.create(user=user, role=role)
        return user

# -------------------------------
# ✅ Patient Serializer
# -------------------------------
class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'

# -------------------------------
# ✅ Doctor Serializer
# -------------------------------
class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

# -------------------------------
# ✅ Appointment Serializer
# -------------------------------
class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
