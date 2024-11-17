import { Link } from "react-router-dom"
import logo from '../assets/heroLogo.png'
import { to } from './../../node_modules/moment/src/lib/moment/to';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FiUserCheck } from "react-icons/fi";


const Navbar = () => {

    const {user ,logOut} = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
    }

    const links = <>
        <li><Link to={'/service'}>Service</Link></li>
        <li><Link to={'/booking'}>Destination</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
    </>
    return (
        <div className="md:w-11/12 mx-auto">
            <div className="navbar text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="">
                        <img className="w-24" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {/* search*/}
                    <label className="input input-bordered border-2 border-white flex items-center gap-2 bg-opacity-10">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                    <ul className="menu menu-horizontal px-1 text-lg font-bold">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user&& user.email? <p className="flex items-center">{user.email} <button onClick={handleSignOut} className="bg-red-500 w-10 h-10 rounded-full flex items-center justify-center text-xl ml-3"><FiUserCheck></FiUserCheck></button></p>
                        :<Link to={'/login'} className="btn text-lg font-bold">Login</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar