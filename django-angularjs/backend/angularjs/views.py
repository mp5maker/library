from django.shortcuts import render

def get_angular_template(request, path=None):
    return render(request, 'index.html', {})