import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const{logInUser, googleLogIn}=useContext(AuthContext)
    // eslint-disable-next-line no-unused-vars
    const [success,setSuccess]=useState("")
    const [error,setError]=useState("")

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)

        setError("")

        logInUser(email,password)
        .then(res=>{
            const user = res.user
            console.log(user)
            setSuccess(Swal.fire(
                'Congratulation!',
                'LoggedIn Successfully!',
                'success'
              ))
        })
        .catch(err=>{
            setError(err.message)
            console.log(err)
        })

    }

    const googleIn = ()=>{
        googleLogIn()
        .then(result=>{
            const user = result.user
            console.log(user)
            setSuccess(Swal.fire(
                'Congratulation!',
                'LoggedIn Successfully!',
                'success'
              ))
        })
        .catch(error=>{
            console.log(error)
        })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body w-96">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div>
                                {
                                    error && <p className="text-red-600 font-bold">{error}</p>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p className="font-bold text-center">Do not have an account ?  <Link to='/register' className="text-blue-700"> Register</Link></p>
                        </form>
                        <hr />
                        <div className="mt-2 mb-3 text-center">
                            <button onClick={googleIn} className="btn btn-outline">Google Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;