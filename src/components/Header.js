import React from 'react';
import {NavLink} from 'react-router-dom';

const styleNavLink = {
    fontWeight: "bold"
}

const Header = () => {
    return (
        <header>
            <h1>Expensify</h1>
            <NavLink to="/" activeStyle={styleNavLink} exact>Dashboard</NavLink>
            <NavLink to="/create" activeStyle={styleNavLink}>Create Expense</NavLink>
            <NavLink to="/edit" activeStyle={styleNavLink}>Edit Expense</NavLink>
            <NavLink to="/help" activeStyle={styleNavLink}>Help</NavLink>
        </header>
    )
}

export default Header;