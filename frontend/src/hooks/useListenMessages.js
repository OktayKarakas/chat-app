import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { selectedConversation, setMessages } = useConversation();

  useEffect(() => {
    const handleMessage = (newMessage) => {
      if (newMessage.conversationId === selectedConversation?._id) {
        newMessage.shouldShake = true;
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    };

	const sound = new Audio(notificationSound);
	sound.play();

    if (socket) {
      socket.on("newMessage", handleMessage);

      return () => {
        socket.off("newMessage", handleMessage);
      };
    }
  }, [socket, selectedConversation?._id, setMessages]);
};

export default useListenMessages;
