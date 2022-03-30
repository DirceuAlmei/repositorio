from urllib import request
from django.shortcuts import render
from .import views
# Create your views here.
def EstudosView(request):
    return render(request, 'bestudos/estudos.html')
