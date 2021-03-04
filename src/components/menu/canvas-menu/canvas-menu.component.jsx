import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './canvas-menu.styles.scss'

const CanvasMenuComponent = () => {
    return (
        <div className="canvas-page">
            <input type="checkbox" id="drawer-toggler" />

            <header className="header">
                <label id="drawer-toggler-button" htmlFor="drawer-toggler">
                    <FontAwesomeIcon icon={faBars} />
                </label>
            </header>

            <nav className="drawer-holder">
                <ul id="drawer">
                    <li><a href="">خانه</a></li>
                    <li><a href="">درباره ما</a></li>
                    <li><a href="">تماس با ما</a></li>
                    <li><a href="">محصولات</a></li>
                </ul>
            </nav>

            <div className="page-content">
                <p>دوره طراحی وب</p>
            </div>
        </div>
    )
}

export default CanvasMenuComponent
