import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'
import { Logo } from '../logo';
import { NavItems } from './navitems';

const NavbarContainer = styled.div`
    ${tw`
        w-full
        max-w-screen-xl
        flex
        flex-row
        items-center
        lg:pl-12    
        lg:pr-12
        justify-between
        min-h-60
        sm:min-h-68
    `}
`; 
const LogoContainer = styled.div``;
export function Navbar() {
    return (
        <NavbarContainer> 
            <LogoContainer>
                <Logo/>
            </LogoContainer>
            <NavItems/>
        </NavbarContainer>
    )
}
