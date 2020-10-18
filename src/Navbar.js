import React, {useEffect, useState} from 'react';
import './Navbar.css'
const Navbar = () => {
    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return() => {
            window.removeEventListener("scroll");
        }
    }, []);
    return (
        <div className={`nav ${show && "navBlack"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                alt=""/>
            <img
                className="nav_avatar"
                src="https://p7.hiclipart.com/preview/954/328/914/computer-icons-user-profile-avatar.jpg"
                alt=""/>
        </div>
    );
};

export default Navbar;