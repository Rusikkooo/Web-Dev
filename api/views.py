from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import render
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['get'])
    def products(self, request, pk=None):
        category = self.get_object()
        products = Product.objects.filter(category=category)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


# def products_list(request):
    
#     """Список всех товаров"""
#     products = Product.objects.all()
#     data = []
#     for product in products:
#         data.append({
#             'id': product.id,
#             'name': product.name,
#             'price': product.price,
#             'description': product.description,
#             'count': product.count,
#             'is_active': product.is_active,
#             'category': product.category.name
#         })
#     return JsonResponse(data, safe=False)

# def product_detail(request, id):
#     """Получить один товар по ID"""
#     try:
#         product = Product.objects.get(id=id)
#         data = {
#             'id': product.id,
#             'name': product.name,
#             'price': product.price,
#             'description': product.description,
#             'count': product.count,
#             'is_active': product.is_active,
#             'category': product.category.name
#         }
#         return JsonResponse(data)
#     except Product.DoesNotExist:
#         return JsonResponse({'error': 'Product not found'}, status=404)

# def categories_list(request):
#     """Список всех категорий"""
#     categories = Category.objects.all()
#     data = []
#     for category in categories:
#         data.append({
#             'id': category.id,
#             'name': category.name
#         })
#     return JsonResponse(data, safe=False)

# def category_detail(request, id):
#     """Получить одну категорию по ID"""
#     try:
#         category = Category.objects.get(id=id)
#         data = {
#             'id': category.id,
#             'name': category.name
#         }
#         return JsonResponse(data)
#     except Category.DoesNotExist:
#         return JsonResponse({'error': 'Category not found'}, status=404)

# def category_products(request, id):
#     """Список товаров по категории"""
#     try:
#         category = Category.objects.get(id=id)
#         products = category.products.all()
#         data = []
#         for product in products:
#             data.append({
#                 'id': product.id,
#                 'name': product.name,
#                 'price': product.price,
#                 'description': product.description,
#                 'count': product.count,
#                 'is_active': product.is_active,
#                 'category': product.category.name
#             })
#         return JsonResponse(data, safe=False)
#     except Category.DoesNotExist:
#         return JsonResponse({'error': 'Category not found'}, status=404)
    
    