import React, { Component } from 'react';

/**
 * Class Component Method
 * @param {*} props 
 */

// class Header extends Component {
//     render() { 
//         return ( 
//         <nav className="navbar navbar-light bg-light">
//         <span className="navbar-brand mb-0 h1">Navbar <span className="badge badge-pill badge-secondary">{this.props.totalNOCounter}</span></span>
//         </nav> );
//     }
// }

/**
 * Statless Component Method
 * @param {*} props 
 */

const Header = ({totalNOCounter}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
                 <span className="navbar-brand mb-0 h1">Navbar <span className="badge badge-pill badge-secondary">{totalNOCounter}</span></span>
                 </nav>
     );
}
 
export default Header;
 
//export default Header;