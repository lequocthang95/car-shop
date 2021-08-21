import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';

const FooterContainer = styled.div`
    background-color: #1d2124;
    ${tw`
        flex
        flex-wrap
        justify-center
        min-w-full
        pt-4
        pb-1
        md:pb-0
        md:pt-12
    `};
`;

const InnerContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        max-w-screen-xl
        w-full
    `};
`;
const AboutContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-2
        md:mr-14
        pl-10
        pr-10
        md:pl-0
        md:pr-0
    `};
`;
const AboutText = styled.p`
    ${tw`
        text-white
        text-sm
        font-normal
        max-w-xs
        leading-5
        mt-2
    `};
`;
const SectionContainer = styled.div`
    ${tw`
        flex
        flex-col
        mr-2
        md:mr-14
        mt-7
        md:mt-0
        pl-10
        pr-10
        md:pl-0
        md:pr-0
    `};
`;
const HorizonContainer = styled.div`
    ${tw`
        flex
        items-center
    `};
`;
const LinksList = styled.ul`
    ${tw`
        outline-none
        list-none
        flex
        flex-col   
    `};
`;
const ListItem = styled.div`
    ${tw`
        mb-3
    `};
    & > a {
      ${tw`
        text-sm
        text-white
        transition-all
        hover:text-gray-400
      `};  
    };
`;
const HeaderTitle = styled.h3`
    ${tw`
        text-2xl
        font-bold
        text-white
        mb-3
    `};
`;
const RedIcon = styled.span`
    ${tw`
        w-8
        h-8
        rounded-full
        flex
        items-center
        justify-center
        text-white
        text-base
        mr-2
        bg-red-500
    `};
`;
const SmallText = styled.h6`
    ${tw`
        text-sm
        text-white
    `};
`;
const BottomContainer = styled.div`
    ${tw`
        w-full
        flex
        max-w-screen-xl
        justify-center 
        md:justify-start
        mt-7
        md:mt-1
    `};
`; 
const CoppyrightText = styled.small`
    font-size: 12px;
    ${tw`
        text-gray-300
    `};
`;
export function Footer () {
    return (
        <FooterContainer>
            <InnerContainer>
                <AboutContainer>
                    <Logo color="white" bgColor="black" />
                    <AboutText>Your car is a Car renting and  selling company located in many countries ascross the World which has high quality cars and top rated service</AboutText>
                </AboutContainer>
                <SectionContainer>
                    <HeaderTitle>Our Links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href="#"> Home</a></ListItem>
                        <ListItem><a href="#"> About Us</a></ListItem>
                        <ListItem><a href="#"> Services</a></ListItem>   
                        <ListItem><a href="#"> Models</a></ListItem>
                        <ListItem><a href="#"> Blog</a></ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Other Links</HeaderTitle>
                    <LinksList>
                        <ListItem><a href="#"> FAQ</a></ListItem>
                        <ListItem><a href="#"> Contact Us</a></ListItem>
                        <ListItem><a href="#"> Support</a></ListItem>   
                        <ListItem><a href="#"> Privacy Policy</a></ListItem>
                        <ListItem><a href="#"> Term &amp; Condition </a></ListItem>
                    </LinksList>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Call Now</HeaderTitle>
                    <HorizonContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                        </RedIcon>
                        <SmallText>+84 36-389-44-38</SmallText>
                    </HorizonContainer>
                </SectionContainer>
                <SectionContainer>
                    <HeaderTitle>Maill</HeaderTitle>
                    <HorizonContainer>
                        <RedIcon>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </RedIcon>
                        <SmallText>lequocthang95@gmail.com</SmallText>
                    </HorizonContainer>
                </SectionContainer>
            </InnerContainer>
            <BottomContainer>
                <CoppyrightText>
                    Coppyright &copy; {new Date().getFullYear()} YourCar. All rights reserved.
                </CoppyrightText>
            </BottomContainer>
        </FooterContainer>
    )
}
