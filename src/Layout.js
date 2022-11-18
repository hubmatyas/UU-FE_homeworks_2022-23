import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className="container">
        <aside>
            <nav>
                <ul>
                    <li>
                        <NavLink></NavLink>
                    </li>
                    <li>
                        <NavLink></NavLink>
                    </li>
                    <li>
                        <NavLink></NavLink>
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