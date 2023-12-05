from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.
class AppDevClubReviewsView(APIView):
    reviews = []
    
    def get(self, request):
        
        return Response({"reviews": AppDevClubReviewsView.reviews})
    
    def post(self, request):
        AppDevClubReviewsView.reviews.append(request.data['review'])
        return Response({"reviews": AppDevClubReviewsView.reviews})




