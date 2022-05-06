import {lazy} from "react";

const Home = lazy(() => import("pages/Home"));
const Following = lazy(() => import("pages/Following"));
const Profile = lazy(() => import("pages/Profile"));
const Upload = lazy(() => import("pages/Upload"));

interface routerType {
	path: string;
	component: React.FC;
}

export const publicRouter: routerType[] = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/following",
		component: Following,
	},
	{
		path: "/profile",
		component: Profile,
	},
	{
		path: "/upload",
		component: Upload,
	},
];
export const privateRouter: routerType[] = [];
