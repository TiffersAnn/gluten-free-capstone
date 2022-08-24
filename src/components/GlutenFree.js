import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized.js"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./GlutenFree.css"


export const GlutenFree = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
					<NavBar /><br></br>
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
}

export default GlutenFree