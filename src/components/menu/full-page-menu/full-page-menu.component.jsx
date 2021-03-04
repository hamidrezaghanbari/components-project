import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './full-page-menu.styles.scss'

const FullPageMenu = () => {
    return (
        <div>
            <input id="full-page-menu-button" type="checkbox"  />
            <label className="full-page-menu-icons" for="full-page-menu-button">
                <FontAwesomeIcon className="icon burger" icon={faBars} />
                <FontAwesomeIcon className="icon close" icon={faTimes}/>
            </label>

            <div className="full-page-menu">
                <div className="full-page-menu-item">
                    منوی شماره یک
                </div>
                <div className="full-page-menu-item">
                    منوی شماره دو
                </div>
                <div className="full-page-menu-item">
                    منوی شماره سه
                </div>
                <div className="full-page-menu-item">
                    منوی شماره چهار
                </div>
            </div>

            <div className="main">
                <b>صفحه اصلی سایت</b>
            </div>

        </div>
    )
}

export default FullPageMenu
