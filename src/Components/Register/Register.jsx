import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {

    const [pass,setPass]=useState("")

    const {createUser}=useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name,photo,email,password)

        if(password.length < 6){
            return setPass("Password should be at least 6 characters or longer")
        }

        else if(!/[A-Z]/.test(password)){

            
            return setPass("Password should contain at least one uppercase letter")
        }
        else if(!/[!@#$%^&*()_+{}\\[\\]:;<>,.?~\\\\-]/.test(password)){
    
           
            return setPass("Password should contain at least one special  character")
        }

        createUser(email,password)
        .then(res=>{
            const user = res.user
            console.log(user)
            Swal.fire(
                'Congratulation!',
                'User Created Successfully!',
                'success'
              )
        })
        .catch(err=>{
            console.log(err)
        })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <div>
                                    {
                                        pass && <p className="text-red-600 font-bold">{pass}</p>
                                    }
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="font-bold text-center">Already have an account ?  <Link to='/login' className="text-blue-700"> Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;