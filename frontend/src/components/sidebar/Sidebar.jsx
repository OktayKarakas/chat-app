import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { useSideBarContext } from "../../context/SideBarContent";

const Sidebar = () => {
	const {sidebarOpen,setSidebarOpen} = useSideBarContext()
	return (
		<div className={`${sidebarOpen ? '' : 'bg-slate-500 border-slate-500'}`}>
		<button onClick={() => setSidebarOpen(prev => !prev)}>{sidebarOpen ? "" : "🔙🗨"}</button>
		<div className={`${sidebarOpen ? 'border-slate-500' : 'hidden'} border-r p-4 flex flex-col`}>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton />
		</div>
		</div>
	);
};
export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
