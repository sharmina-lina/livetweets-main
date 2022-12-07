from .models import TweetMetrics
from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
import csv


async def index(request):
    return render(request, 'index.html')

async def graph(request):
    return render(request, 'graph.html')
async def graph2(request):
    return render(request, 'graph2.html')


async def engagement(request):
    return HttpResponse(request.POST['test'])




