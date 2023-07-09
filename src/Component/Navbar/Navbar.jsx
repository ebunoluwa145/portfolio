import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useState } from 'react';

function Navbar() {

	const [click, setClick] = useState(false);
	const handleClick  = () => setClick(!click);
	const closeMobMenu = () => setClick(false);
  return (
	<>
		<nav className="navbar">
			<div className="navbar-container">
				<Link to='' className="navbar-logo">Ebunoluwa</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-item">
						<Link to='/' className="nav-links" onClick={closeMobMenu}>Home</Link>
					</li>
					<li className="nav-item">
						<Link to='/about' className="nav-links" onClick={closeMobMenu}>About</Link>
					</li>
					<li className="nav-item">
						<Link to='/portfolio' className="nav-links" onClick={closeMobMenu}>Portfolio</Link>
					</li>
					{/* <li className="nav-item">
						<Link to='/contact' className="nav-links" onClick={closeMobMenu}>Contact</Link>
					</li>					 */}
				</ul>
			</div>
		</nav>
	</>
  )
}

export default Navbar