import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className="wrapper">
        <aside className="sidebar">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/homework01" activeClassName="active">Homework01</NavLink>
                    </li>
                    <li>
                        <NavLink to="/homework02" activeClassName="active">Homework02</NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
        <main>
            <Outlet />
        </main>
    </div>
    </>
  )
}

export default Layout