import { createBrowserRouter } from "react-router-dom";
import NotFound from "../../pages/NotFound";
import MainLayout from "../../pages/MainLayout";
import Category from "../../pages/Category";
import Home from "../../pages/Home";
import Details from "../../pages/Details";
import Payment from "../../pages/Payment";
import Wishlist from "../../pages/Wishlist";
import Dashboard from "../../pages/Dashboard";
import DbCars from "../../Components/dashboard/components/dbCars";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import MangerDashbord from "../../pages/MangerDashbord";
import CategoryLayout from "../../pages/CategoryLayout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { STRIPE_PUBLIC_KEY } from "../../config";

const routerConfig = [
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{ path: "home", element: <Home /> },
			{
				path: "category",
				element: <CategoryLayout />,
				children: [
					{ path: "", element: <Category /> },
					{ path: ":id", element: <Details /> },
				],
			},
			{
				path: "payment",
				element: (
					<Elements stripe={loadStripe(STRIPE_PUBLIC_KEY)}>
						<Payment />
					</Elements>
				),
			},
			{ path: "wishlist", element: <Wishlist /> },
		],
	},
	{ path: "/login", element: <Login /> },
	{ path: "/register", element: <Register /> },
	{
		path: "/dashboard",
		element: <Dashboard />,
		children: [
			{ index: true, element: <MangerDashbord /> },
			{ path: "cars", element: <DbCars></DbCars> },
		],
	},
	{ path: "*", element: <NotFound /> },
];

export const router = createBrowserRouter(routerConfig);
