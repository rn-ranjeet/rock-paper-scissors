from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(request):
    return render(request,'home.html')


def index(request):
    homedict = {'home_insert':''}
    return render(request ,'index.html', context=homedict)
