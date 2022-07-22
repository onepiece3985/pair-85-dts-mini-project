import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../authentication/firebase";

const Protected = ({ children, loginOnly = true }) => {
	const [user] = useAuthState(auth);

	if (!user && loginOnly) {
		return <Navigate to="/login" replace />;
	}

	return <Outlet />;
};

export default Protected;
