from django.urls import path
from .views import EstudosView

urlpatterns = [
    path('', EstudosView, name="estudos"),
]