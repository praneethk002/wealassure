import logo from "../images/logo.png";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import { useNavigate } from "react-router";

function ProtectedRoute(props) {
  const { address, ipfsHash } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (address && ipfsHash) {
    return <Layout>{props.children}</Layout>;
  } else {
    // navigagte to signin page
    
  }
}

export default ProtectedRoute;
