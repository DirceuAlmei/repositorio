from django.urls import path
from .views import EstudosView, ProjetoView

urlpatterns = [
    path('', EstudosView, name="estudos"),
    path('projetos/', ProjetoView, name="projetos"),
]