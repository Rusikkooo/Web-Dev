from django.urls import path,include
from . import views
from rest_framework import routers
from .views import ProductViewSet, CategoryViewSet

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'categories', CategoryViewSet)



urlpatterns = [
    # path('products/', views.products_list, name='products_list'),
    # path('products/<int:id>/', views.product_detail, name='product_detail'),
    # path('categories/', views.categories_list, name='categories_list'),
    # path('categories/<int:id>/', views.category_detail, name='category_detail'),
    # path('categories/<int:id>/products/', views.category_products, name='category_products'),
    path('', include(router.urls))
]