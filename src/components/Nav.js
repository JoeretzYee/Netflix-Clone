import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                src='https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024'
                alt='netflix logo'
                className='nav__logo'
            />

            <img
                src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
                alt='netflix avatar'
                className='nav__avatar'
            />
        </div>
    );
}

export default Nav;
