import React from 'react'
import styled from 'styled-components'

export const HorizontalMenuAnimationItem = ({ children, width, right }) => {
    return (
        <HorizontalMenuAnimationItemHolder right={right} width={width}>
            {children}
        </HorizontalMenuAnimationItemHolder>
    )
}


const HorizontalMenuAnimationItemHolder = styled.a`
    line-height: 50px;
    height: 100%;
    font-size: 15px;
    display: inline-block;
    position: relative;
    z-index: 1;
    color: $text-dark-color;
    cursor: pointer;
    text-align: center;
    width: ${props => props.width ? `${props.width}px` : 'auto'};

    &:hover {
        color: ${props => props.theme.text_light_color};
    }

    &:hover ~ .animation-navbar {
        width: ${props => props.width ? `${props.width}px` : 'auto'};
        right: ${props  => props.right ? `${props.right}px`: '0'};
        background-color: ${props => props.theme.light_color};
    }
`