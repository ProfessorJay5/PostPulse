import {useEffect, useState} from "react";
import {auth} from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const useAuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const [uid, setUid] = useState(0);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user)
            {
                setAuthUser(user);
                setUid(user.uid);
            }
            else
            {
                setAuthUser(null);
            }
            return () => {
                listen();
            }
        })
    },[authUser])
    
    
    return {authUser, uid}
}
 
export default useAuthDetails;