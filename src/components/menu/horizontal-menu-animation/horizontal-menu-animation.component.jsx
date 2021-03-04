import { faBabyCarriage, faBars, faFileContract, faHome, faProcedures } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'
import HorizontalMenuAnimationItemMobile from './horizontal-menu-animation-item-mobile/horizontal-menu-animation-item-mobile.component'
import { HorizontalMenuAnimationItem } from './horizontal-menu-animation-item/horizontal-menu-animation-item.component'
import './horizontal-menu-animation.styles.scss'

const HorizontalMenuAnimation = () => {

    const [isShowDropDown, setisShowDropDown] = useState(false)

    return (
        <div className="navbar-1">
            <nav className="desktop-nav-1">
                <HorizontalMenuAnimationItem width="130" right="0">خانه</HorizontalMenuAnimationItem>
                <HorizontalMenuAnimationItem width="120" right="130">در باره ما</HorizontalMenuAnimationItem>
                <HorizontalMenuAnimationItem width="100" right="250">تماس با ما</HorizontalMenuAnimationItem>
                <HorizontalMenuAnimationItem width="160" right="350">دوره ها</HorizontalMenuAnimationItem>
                <HorizontalMenuAnimationItem width="120" right="510"> محصولات </HorizontalMenuAnimationItem>
                <HorizontalMenuAnimationItem width="140" right="630">محصولات ویژه</HorizontalMenuAnimationItem>
                <HorizontalMenuAnimationItem width="150" right="770">خدمات ویژه</HorizontalMenuAnimationItem>
                <HorizontalMenuAnimationItem width="150" right="920">سفارش محصولات</HorizontalMenuAnimationItem>

                <div className="animation-navbar">
                </div>
            </nav>

            <nav className="tablet-nav-1">
                <HorizontalMenuAnimationItem width="130" right="0">خانه</HorizontalMenuAnimationItem>
                <HorizontalMenuAnimationItem width="120" right="130">در باره ما</HorizontalMenuAnimationItem>
                <HorizontalMenuAnimationItem width="100" right="250">تماس با ما</HorizontalMenuAnimationItem>
                <HorizontalMenuAnimationItem width="160" right="350">دوره ها</HorizontalMenuAnimationItem>
                <HorizontalMenuAnimationItem width="120" right="510"> محصولات </HorizontalMenuAnimationItem>


                <div className="animation-navbar">
                </div>
            </nav>

            <div className="mobile-nav-1">
                <div className="mobile-logo-holder">
                    <a href="#">سایت با ما</a>
                </div>

                <FontAwesomeIcon onClick={() => setisShowDropDown(!isShowDropDown)} id="hamburger-icon" icon={faBars} />

            </div>

            <DropDownMenu isShow={isShowDropDown}>
                <ul>
                    <HorizontalMenuAnimationItemMobile title="خانه" icon={faHome}/>
                    <HorizontalMenuAnimationItemMobile title="درباره ما" icon={faBabyCarriage}/>
                    <HorizontalMenuAnimationItemMobile title="تماس با ما" icon={faFileContract}/>
                    <HorizontalMenuAnimationItemMobile title="محصولات" icon={faProcedures}/>
                </ul>
            </DropDownMenu>
        </div>
    )
}

const DropDownMenu = styled.div`
    height: ${props => props.isShow ? '180px' : '0px'};
    overflow: auto;
    margin: 0 3%;
    padding: 0 3%;
    width: 94%;
    background: white;
    border-radius: 8px;
    transition: all 0.5s ease-in-out;
`

export default HorizontalMenuAnimation
