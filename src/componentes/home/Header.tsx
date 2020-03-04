import React from 'react'
import { NavBar } from './NavBar';
import './Header.css';

const Header: React.FC = () => {

    return (
        <div>
            <div className="header" >
                <span>Ceiba</span>
            </div>
            <div className="nav-bar-header">
                <NavBar></NavBar>
            </div>


        </div>

    );
}
export default Header;