import React, { useState, useEffect } from 'react';
import { FaUserAlt, FaBars, FaBoxes, FaChartBar, FaShieldAlt, FaClipboardList, FaCog, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        handleResize(); // Call it initially to set initial state

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/",
            name: "User",
            icon: <FaUserAlt />
        },
        {
            path: "/inventory",
            name: "Inventory",
            icon: <FaBoxes />
        },
        {
            path: "/reports",
            name: "Reports",
            icon: <FaChartBar />
        },
        {
            path: "/security",
            name: "Security",
            icon: <FaShieldAlt />
        },
        {
            path: "/order",
            name: "Order",
            icon: <FaClipboardList />
        },
        {
            path: "/mteam",
            name: "Mteam",
            icon: <FaClipboardList />
        },
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px", display: window.innerWidth <= 768 ? "block" : "block" }} className="sidebar">
                <div className="top_section">
                    <div className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {isOpen &&
                    <div className="menu-items">
                        {menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeClassName="active" style={{ marginLeft: "10%", marginTop: "20px" }}>
                                <div className="icon">{item.icon}</div>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))}
                    </div>
                }
                {isOpen &&
                    <div className="bottom_section">
                        <NavLink to="/settings" className="link" style={{ marginLeft: "10%", marginTop: "80%" }} activeClassName="active">
                            <div className="icon"><FaCog /></div>
                            <div className="link_text">Settings</div>
                        </NavLink>
                        <NavLink to="/logout" className="link" style={{ marginLeft: "10%", marginTop: "10%" }} activeClassName="active">
                            <div className="icon"><FaSignOutAlt /></div>
                            <div className="link_text">Logout</div>
                        </NavLink>
                    </div>
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
