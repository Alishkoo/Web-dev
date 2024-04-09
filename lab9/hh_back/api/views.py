from django.shortcuts import render
from .models import *
from django.http import HttpResponse, JsonResponse
# Create your views here.

def companies(request):
    list_companies = list(Company.objects.values())
    
    return JsonResponse(list_companies, safe=False)


def show_company(request, id):
    company = list(Company.objects.filter(id = id).values())
    
    return JsonResponse(company, safe=False)


def show_vacancies_of_company(request,  id):
    
    vacancies = list(Vacancy.objects.filter(company = id).values())
    
    return JsonResponse(vacancies, safe=False)
    
    
def vacancies(request):
    list_vacancies = list(Vacancy.objects.values())
    
    return JsonResponse(list_vacancies, safe=False)


def show_vacancy(request, id):
    vacancy = list(Vacancy.objects.filter(id = id).values())
    
    return JsonResponse(vacancy, safe=False)


def top_ten_vacancies(request):
    top_ten_vacancies = list(Vacancy.objects.order_by('-salary')[:10].values())
    
    return JsonResponse(top_ten_vacancies, safe=False)