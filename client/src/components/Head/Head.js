import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Head.css'

function Head() {
    //   hooks usestate
    const[click, setClick] = useState(false);
    const[button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        } else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    }, []);
    
    window.addEventListener('resize',showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo logonav" onClick={closeMobileMenu}>
                        <a href="/">
                            <img
                                alt="ladlolalogo"
                                src="https://res.cloudinary.com/dzsitpxzw/image/upload/v1634182321/swala/logo_white_large_c2nnmp.png"
                            />
                        </a>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                       <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                       <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li> 
                       <li className="nav-item">
                            <Link to="/cart" className="nav-links" onClick={closeMobileMenu}>
                                Shopping Cart
                            </Link>
                        </li> 
                        {/* <li>
                            <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>  */}
                    </ul>
                        {/* {button && <Button className="btn--outline">Sign Up</Button>} */}
                </div>    
            </nav>   
        </>
    )
}

export default Head
  