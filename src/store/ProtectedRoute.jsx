import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Home from "../ui/Home";
function ProtectedRoute({ children }) {
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);
  if (!isAuthenticated) return <Navigate to="/" />;

  return children;
}

export default ProtectedRoute;
