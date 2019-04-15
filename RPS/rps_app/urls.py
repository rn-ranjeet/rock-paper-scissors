from django.conf.urls import url
from rps_app import views

urlpatterns = [
    url(r'^$',views.index,name='HOME'),
]
