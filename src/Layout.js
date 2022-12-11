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
                <NavLink to="/">Homework01</NavLink>
              </li>
              <li>
                <NavLink to="/homework02">Homework02</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
