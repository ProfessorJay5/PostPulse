import {Link} from "react-router-dom";
import useAuthDetails from "./useAuthDetails";
import Profile from "./Profile";
import {auth} from "./firebase";
import {signOut} from "firebase/auth";
import {useHistory} from "react-router-dom";

const Navbar = () => {
    const history = useHistory();
    const {authUser, uid} = useAuthDetails();
    const handleClick = () => {
        signOut(auth)
        .then(() => {
        history.push("/");
        })
    }
    return (
    <nav className="navbar">
        <Link to="/"><h1> PostPulse </h1> </Link> 
        <div className="links">
            {!authUser && <Link to = "/Register"> Sign Up</Link>}
            {!authUser && <Link to="/login">Sign In</Link>}
            {authUser && <button onClick={handleClick}>Sign Out</button>}
            {authUser && <Link to={`/profile/${uid}`}> Profile </Link>}
        </div>
    </nav>       
        
    );
}
 
export default Navbar;
