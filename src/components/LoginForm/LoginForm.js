import React,{useState} from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const LoginForm = () => {
    const[values, setvalues] = useState({
        name:"",
        email:"",
        password:"",
        mobilleNumber:"",
    });
    const handleChange = (event) =>{
        setvalues({
            ...values,
            [event.target.name]:event.target.value,
        });
    };
    const handleFormSubmit = (event) =>{
        event.preventDefault();
    };
    return(
           <div className="container">
        <div className="app-wrapper">
            <div>
                <h2 className="title">Submit Profile</h2>
            </div>
            <form className="form-wrapper">
                <div className="Name">
                    <label className="label">Full Name</label>
                    <input 
                    className="input"
                     type="Text" 
                     name="full name" 
                     value={values.fullname}
                     onChange={handleChange}
                     />
                </div>
                <div className="email">
                    <label className="label">Email</label>
                    <input 
                    className="input" 
                    type="email" 
                    name="email" 
                    value={values.email}
                    onChange={handleChange}
                    />
                </div>
                <div className="password">
                    <label className="label">password</label>
                    <input 
                    className="input" 
                    type="password" 
                    name="password" 
                    value={values.password}
                    onChange={handleChange}
                    />
                </div>
                <div className="Mobile number">
                    <label className="label">Mobile Number</label>
                    <input 
                    className="input" 
                    type="text" 
                    name="mobile number" 
                    value={values.mobilleNumber}
                    onChange={handleChange}
                    />
                </div>
                <div className="username">
                    <label className="label">username</label>
                    <input 
                    className="input" 
                    type="Text" 
                    name="username" 
                    value={values.username}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <button className="submit" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </div>

            </form>
        </div>
        
    </div>
    )
}

export default LoginForm;