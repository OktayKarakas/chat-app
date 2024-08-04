import { useState } from "react";
import toast from "react-hot-toast";

const useRemoveConversation = () => {
	const [loading, setLoading] = useState(false);

	const removeConversation = async (conversationId) => {
		setLoading(true);
		try {
			const res = await fetch(`/api/messages/${conversationId}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.error || "Failed to remove conversation");
			}

			toast.success("Conversation removed successfully");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, removeConversation };
};

export default useRemoveConversation;
