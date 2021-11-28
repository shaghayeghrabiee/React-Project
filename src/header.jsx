import React from 'react';
import * as BsIcon from "react-icons/bs";
import './header.css';

const Header = ({update,get}) => {
    return ( 
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Food Recipe</a>
                <form onSubmit={get}  className="d-flex">
                <input onChange={update} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit"><BsIcon.BsSearch/></button>
                </form>
            </div>
        </nav>
     );
}
 
export default Header;

