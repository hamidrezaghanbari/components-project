import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './horizontal-menu-animation-item.-mobile.styles.scss'

const HorizontalMenuAnimationItemMobile = ({ title, icon }) => {
    return (
        <li className="mobile-menu-item">
            <a href="#">{title} </a>
            <FontAwesomeIcon icon={icon} />
        </li>
    )
}

export default HorizontalMenuAnimationItemMobile