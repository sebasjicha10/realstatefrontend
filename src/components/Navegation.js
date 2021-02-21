import React from 'react'
import {Link} from "gatsby"
import styled from "@emotion/styled"


const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media(min-width: 768px) {
        padding: 0;
        flex-direction: row;
    }
`

const NavLink = styled(Link)`
    color: #FFF;
    font-weight: 700;
    font-family: "PT Sans", sans-serif;
    text-decoration: none;
    padding: .5rem;
    margin-right: 1rem;
    &:last-of-type {
        margin-right: 0;
    }
    &.current-page {
        border-bottom: 2px solid #FFF;
    }
`

const Navigation = () => {
    return (  
        <Nav>
            <NavLink activeClassName="current-page" to={"/"}>Home</NavLink>
            <NavLink activeClassName="current-page" to={"/about-us"}>About Us</NavLink>
            <NavLink activeClassName="current-page" to={"/properties"}>Properties</NavLink>
        </Nav>
    )
}
 
export default Navigation