import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './vertical-menu-title.styles.scss'

const VerticalMenuTitle = ({ menuItemClass, pageHref, icon }) => {
    return (
        <li className={`vertical-menu-icon ${menuItemClass}`}>
            <a href={pageHref}>
                <FontAwesomeIcon icon={icon} />
            </a>
        </li>
    )
}


export default VerticalMenuTitle
