import { Navigate } from "react-router-dom";

const Redirect = () => {
  return <Navigate to="/portfolio/" replace={true} />
}

export default Redirect