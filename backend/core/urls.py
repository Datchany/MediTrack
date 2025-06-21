from django.urls import path
from .views import RegisterView, LoginView, PatientList, DoctorList, AppointmentList
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('patients/', PatientList.as_view(), name='patients'),
    path('doctors/', DoctorList.as_view(), name='doctors'),
    path('appointments/', AppointmentList.as_view(), name='appointments'),
]
