import React, { useContext, useState } from 'react';
import firebase from '../Firebase/Firebase';
import { navigate } from '@reach/router';
import { Link } from '@reach/router';
import '../App.css';
import Hamburger from '../assets/images/icons/icons8-menu.svg';
import heartIcon from '../assets/images/icons/logo192.png';
import CheeseburgerMenu from 'cheeseburger-menu';

import { AuthContext } from '../Firebase/firebaseAuth';

const Navbar = () => {
    const { currentUser } = useContext(AuthContext);
    const [menu, setMenu] = useState(false);

    const signOut = e => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                setMenu(false)
                navigate('/home');
                window.location.reload(false);
            }).catch((err) => {
                console.log(err);
            });
    }

        const openMenu = () => {
            setMenu(true)
        }

        const closeMenu = () => {
            setMenu(false)
        }
          
        return (
            <div>
                <header className="header">
                    <Link className="logo" to="/">
                        <img className="logo" src={heartIcon} alt="logo" />
                    </Link>
                    <nav>
                        <ul className="nav-links">
                            <li><span></span></li>
                            <li><span>About</span></li>
                            <li><span>Blog</span></li>
                            <li><span>Testimonials</span></li>
                            <li><span>Gallery</span></li>
                        </ul>
                    </nav>
                    { currentUser == null ? (
                    <React.Fragment>
                        <Link to="/signin" className="signin-button" style={{ marginLeft: 'auto' }}>Sign In</Link>
                        <Link to="/signup" className="signup-button">Sign Up</Link>
                    </React.Fragment>
                    ) : 
                    <React.Fragment>
                        <button className="signup-button" style={{ marginLeft: 'auto' }} onClick={signOut}>Sign Out</button>
                    </React.Fragment>
                    }
                    <img src={Hamburger} className="hamburger" alt="Hamburger Menu" onClick={openMenu} />
                </header>
                    <CheeseburgerMenu
                        isOpen={menu} 
                        closeCallback={closeMenu}
                        width={500} 
                        backgroundColor={'#24252a'}
                    >
                        <div className='overlay-content'>
                            <span>About</span>
                            <span>Blog</span>
                            <span>Testimonials</span>
                            <span>Gallery</span>
                            { currentUser == null ? (
                            <>
                                <Link to="/signin" onClick={closeMenu}>Sign In</Link>
                                <Link to="/signup" onClick={closeMenu}>Sign Up</Link>
                            </>
                            ) : 
                                <span onClick={signOut}>Sign Out</span>
                            }
                        </div>
                    </CheeseburgerMenu>
            </div>
        )
    }

export default Navbar;