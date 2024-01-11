import {useState} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase";
import {useHistory} from "react-router-dom"

const Register = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setError] = useState(null);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
        signInWithEmailAndPassword(auth, email, password);
        })
        .catch((error) => {
            console.log(error)
        })
        history.push("/");
    }
    

    return ( 
        <div className="register">
            <h2>Make an Account</h2>
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
            <button>Register</button>
            </form>
            <p> Already have an Account? <Link to="/login">Sign In </Link></p>
        </div>
     );
}
 
export default Register;