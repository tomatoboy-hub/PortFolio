import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
        <div className='logo'>
            <h3>ポートフォリオ</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='about'>About</Link>
                </li>
                <li>
                    <Link to="project">Project</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header