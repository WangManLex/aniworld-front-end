import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar({ user, handleLogout }) {
    return (
        <div className="navbar bg-base-100 w-8/12 m-auto">
            <div className="navbar-start">
                <Link to="/home" className="btn btn-ghost normal-case text-xl">AniWorld</Link>
                <ul className='menu menu-horizontal p-0 gap-2'>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/browse" style={{ pointerEvents: 'none' }}>Browse</Link></li>
                    <li><Link to="/search/anime">Anime</Link></li>
                    <li><Link to="/search/manga" style={{ pointerEvents: 'none' }}>Manga</Link></li>
                    <li><Link to="/news">News</Link></li>
                </ul>
            </div>
            <div className="flex-none gap-2 navbar-end">

                {user &&
                    <>
                        <div className="form-control">
                            {/* <input type="text" placeholder="Search" className="input input-bordered" /> */}
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <span className="text-2xl">{user.email[0]}</span>
                                </div>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to={`/user/${user.profile.username}`}>
                                        Profile
                                        {/* <span className="badge">New</span> */}
                                    </Link>
                                </li>
                                <li><Link to="/user/settings">Settings</Link></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div>
                    </>
                }
                {!user &&
                    <>
                        <Link className="btn btn-ghost" to="/login">Login</Link>
                        <Link className="btn btn-info" to="/signup">Sign Up</Link>
                    </>
                }
            </div>
        </div>
    )
}
