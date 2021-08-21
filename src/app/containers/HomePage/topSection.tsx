import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'
import BlobImg from "../../assets/images/blob.svg";
import MclarenImg from '../../assets/images/mclaren-orange-big.png';
import { Button } from '../../components/button';
import { SCREENS } from '../../components/responsive';

const TopSectionContainer = styled.div`
    min-height: 400px;
    margin-top: 6em;
    ${tw`
        flex
        justify-between
        w-full
        max-w-screen-xl
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
    `}
`;

const LeftContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col    
    `};
`;

const RightContainer = styled.div`
    ${tw`
        w-1/2
        flex
        flex-col    
        relative
        mt-20
    `};
`;

const Slogan = styled.h1`
    ${tw` 
        font-bold
        text-2xl
        sm:text-3xl 
        md:text-5xl
        xl:text-6xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4 
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `}
`;

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
    `}
`;

const BlobContainer = styled.div`
    width: 20em;
    height: 10em;
    position: absolute;
    right: -5em;
    top: -9em;
    z-index: -1;
    transform: rotate(-30deg);

    img { 
        width: 100%;
        height: auto;
        max-height: max-content; 
    }

    @media (min-width: ${SCREENS.sm}){
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }

    @media (min-width: ${SCREENS.lg}){
        width: 50em;
        max-height: 30em;
        right: -7em;
        top: -15em;
        transform: rotate(-30deg);
    }

    @media (min-width: ${SCREENS.xl}){
        width: 65em;
        max-height: 10em;
        right: -15em;
        top: -25em;
        transform: rotate(-25deg);
    }
`;

const StandaloneCar = styled.div`
    width: auto;
    height: 10em;
    right: -6em;
    top: -5em;
    position: absolute;

    img { 
        width: auto;
        height: 100%;
        max-width: fit-content;
    }

    
    @media (min-width: ${SCREENS.sm}){
      height: 16em;
      right: -6em;
      top: -6em;
    }

    @media (min-width: ${SCREENS.lg}){
        height: 21em;
        right: -8em;
        top: -5em;
    }

    @media (min-width: ${SCREENS.xl}){
      height: 28em;
      right: -14em;
      top: -9em;
    }
`;

const ButtonContainer = styled.div`
    ${tw`
        flex
        flex-wrap
        mt-4
    `};
`;

export function TopSection(){
    return(
        <TopSectionContainer>
            <LeftContainer>
                <Slogan>Lựa chọn tuyệt vời cho bạn! </Slogan>
                <Description>
                    Luôn có nhiều sự lựa chọn điện thoại cho bạn. 
                    Bạn sẽ tìm thấy sự lựa chọn tuyệt vời nhất ở cửa hàng chúng tôi.
                </Description>
                <ButtonContainer>
                    <Button text="Book Your Ride" />
                    <Button theme="filled" text="Sell Your Car" />
                </ButtonContainer>
            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={BlobImg} />
                </BlobContainer> 
                <StandaloneCar>
                    <img src={MclarenImg} />
                </StandaloneCar>
            </RightContainer>
        </TopSectionContainer>
    )
}