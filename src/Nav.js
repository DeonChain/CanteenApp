import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
    <>
    {/* <div id="preloader">
        <div className="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>   */}


    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                    <Link to="/" className='logo'>
                            <img src="assets/images/klassy-logo.png" align="klassy cafe html template"/>
                        </Link>
                        <ul className="nav">
                        <Link to="/">
                        
                        <li className="scroll-to-section active">Home</li>
                        </Link>
                        <Link to="/feedback">
                        
                        <li className="scroll-to-section active">Feedback</li>
                        </Link>
                        <Link to="/profile">
                        
                        <li className="scroll-to-section active">Profile</li>
                        </Link>
                        <Link to="/docs">
                       
                        <li className="scroll-to-section active">Docs</li>
                        </Link>
                        </ul>


                        {/* <ul className="nav">
                            
                           	
                            <li className="submenu">
                                <a href="javascript:;">Drop Down</a>
                                <ul>
                                    <li><a href="#">Drop Down Page 1</a></li>
                                    <li><a href="#">Drop Down Page 2</a></li>
                                    <li><a href="#">Drop Down Page 3</a></li>
                                </ul>
                            </li>
                            <li className="scroll-to-section"><a href="#menu">Menu</a></li>
                            <li className="scroll-to-section"><a href="#chefs">Chefs</a></li> 
                            <li className="submenu">
                                <a href="javascript:;">Features</a>
                                <ul>
                                    <li><a href="#">Features Page 1</a></li>
                                    <li><a href="#">Features Page 2</a></li>
                                    <li><a href="#">Features Page 3</a></li>
                                    <li><a href="#">Features Page 4</a></li>
                                </ul>
                            </li>
                             <li className=""><a rel="sponsored" href="https://templatemo.com" target="_blank">External URL</a></li> -->
                            <li className="scroll-to-section"><a href="#reservation">Contact Us</a></li> 
                        </ul>         */}
                        
                    </nav>
                </div>
            </div>
        </div>
    </header>


    <div className='navbar'>
      <Link to="/" className='navlink'>Home</Link>
      <Link to="/feedback" className='navlink'>Feedback</Link>
      <Link to="/profile"className='navlink' >Profile</Link>
    </div>
    </>
  )
}
