import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import Navbar from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import styled from "styled-components";

const Fill = styled.div`
 .br{color: red;}
    .fre{
    color : red;
 }
`;

export const NavigationBar = () => (
    <Fill>
        <Navbar bg="dark" expand="lg">
            <NavbarBrand className="br" href="/">#PiZZa&#x2764; </NavbarBrand>
            <NavbarToggle aria-controls="basic-navbar-nav" />
            <NavbarCollapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    </Fill>
)