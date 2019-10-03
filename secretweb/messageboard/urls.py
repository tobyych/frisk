from rest_framework import routers
from .api import MessageBoardViewSet

router = routers.DefaultRouter()
router.register('api/messageboard', MessageBoardViewSet, 'messageboard')

urlpatterns = router.urls