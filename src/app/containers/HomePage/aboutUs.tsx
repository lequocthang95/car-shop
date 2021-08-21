import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro';
import { SCREENS } from '../../components/responsive';
import JeepImg from '../../assets/images/jeep.png'

const AboutUsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        items-center
        justify-center
        pt-4
        pb-4
        pr-7
        pl-7
        md:pr-0
        md:pl-0
        bg-white
    `};
`;

const CarContainer = styled.div`
    width: auto;
    height: 15em;
    margin-left: -50px;
    img { 
        width: auto;
        height: 100%;
    }
    @media (min-width: ${SCREENS.md}){
        height: 28em
    }
    @media (min-width: ${SCREENS.lg}){
        height: 30em
    }
    @media (min-width: ${SCREENS["2xl"]}){
        height: 35em
        margin-left: 0; 
    }
`;

const InfoContainer = styled.div`
    ${tw`
        sm:w-1/2
        flex
        flex-col
        md:ml-6
        2xl:ml-16
    `};
`;

const Title = styled.h1`
    ${tw`
        text-black
        text-2xl
        md:text-5xl
        font-extrabold
        md:font-black
        md:leading-normal
    `};
`;

const InfoText = styled.p`
    ${tw`
        max-w-2xl
        text-sm
        md:text-base
        text-gray-500
        font-normal
        mt-4
    `};
`;

export function AboutUs() {
    return (
        <AboutUsContainer>
            <CarContainer>
                <img src={JeepImg} />
            </CarContainer>
            <InfoContainer>
                <Title>Fell The Best Experience With Our Rental Deals</Title>
                <InfoText>
                    Since 1926, Kelley Blue Book has been one of the best-known names in the auto industry. 
                    Today, KBB.com extends the tradition, with trusted values and a reputation for innovation, 
                    including resources to help you research, price and shop for the car you've been looking for.
                </InfoText> 
            </InfoContainer>
        </AboutUsContainer>
    )
}
