import { Link, NavLink } from "react-router-dom";
import tech from '../Layout../../../assets/gad.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import pic from '../Layout../../../assets/mface1.png'

const Navbar = () => {

    const { user,logOut } = useContext(AuthContext)

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/cart'>My Cart</NavLink></li>
    </>

    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch()
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-[80px]" src={tech} alt="" />
                        <h2 className="font-bold text-xl text-blue-700 italic">Gadget World</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end">
                <div>
                            {
                                user && <p>{user.displayName}</p>
                            }
                        </div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        
                        <div className="w-10 rounded-full">
                            {
                                user ? <img src={user.photoURL} /> : 
                                 <img src={pic} />
                            }
                           
                        </div>
                    </label>
                    {
                        user ? <button  onClick={handleLogOut} className="btn">Logout</button> :
                            <Link to='/login'><button className="btn">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;