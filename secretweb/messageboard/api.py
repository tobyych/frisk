from messageboard.models import MessageBoard
from rest_framework import viewsets, permissions
from messageboard.serializers import MessageBoardSerializer


# message board viewset
class MessageBoardViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = MessageBoardSerializer
    def get_queryset(self):
      return self.request.user.messages.all()
    def perform_create(self,  serializer):
      serializer.save(owner=self.request.user)