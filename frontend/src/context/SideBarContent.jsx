import { createContext, useContext, useState } from "react";

export const SideBarContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useSideBarContext = () => {
	return useContext(SideBarContext);
};

export const SideBarContextProvider = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	return <SideBarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>{children}</SideBarContext.Provider>;
};
