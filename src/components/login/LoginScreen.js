import React, { useContext } from 'react' ;
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext(AuthContext);
    const last_path = localStorage.getItem("last_path") || "/";
    const handleLogin = ()=>{
        //history.push("/");
        //history.replace("/");
        dispatch({
            type: types.login,
            payload: {
                name: "Alma",
                apellido: "Suarez"
            }
        });
        history.replace(last_path);
    }
    return (
        <div className="container mt-5">
            
            <h1>Login Screen</h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ handleLogin}
            >
                Ingresar
            </button>
        </div>
    )
}
