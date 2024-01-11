import {useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {auth} from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {useHistory} from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setError] = useState(null);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            console.log(error)
        })
        history.push("/")
    }
    
    return ( 
        <div className="login">
             <h2>Login</h2>
            <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input 
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password: </label>
            <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button>Login</button>
            </form>
            <p> Don't have an Account? <Link to="/register">Sign Up </Link></p>
        </div>
     );
}
 
export default Login;