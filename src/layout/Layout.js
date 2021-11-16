import React from "react";
import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import { useLocation } from "react-router";

export default function Layout(props) {
	const location = useLocation();
	const arr = ["/auth", "/categories/all", "/categories/unisex", "/categories/men", "/categories/women", "/cart", "/checkout","/payment"];
	const current_path = location.pathname;
	return (
		<div>
			<Navbar />
			{props.children}
			{current_path.substring(0, 7) === "/result" ? null : !arr.includes(current_path) ? <Footer /> : null}
		</div>
	);
}
