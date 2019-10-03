from messageboard.models import MessageBoard
from rest_framework import viewsets, permissions
from messageboard.serializers import MessageBoardSerializer

# message board viewset
class MessageBoardViewSet(viewsets.ModelViewSet):
    queryset = MessageBoard.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MessageBoardSerializer
