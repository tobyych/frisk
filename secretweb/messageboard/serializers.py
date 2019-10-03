from rest_framework import serializers
from messageboard.models import MessageBoard

# message board serializer
class MessageBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = MessageBoard
        fields = "__all__"