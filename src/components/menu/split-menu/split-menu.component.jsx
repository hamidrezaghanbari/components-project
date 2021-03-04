import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './split-menu.styles.scss'

const SplitMenuComponent = () => {
    return (
        <div className="split-page">
            <input type="checkbox" id="split-menu-toggler" />
            <label className="splitter-label" htmlFor="split-menu-toggler">
                <span className="bars bar-top"></span>
                <span className="bars bar-middle"></span>
                <span className="bars bar-bottom"></span>
            </label>

            <aside>
                <div className="aside-section aside-left">
                    <p>محتوای مورد نظر</p>
                    <button>بزن بریم</button>
                </div>

                <div className="aside-section aside-right">
                    <ul className="aside-list">
                        <li><a href="" className="aside-anchor">خانه</a></li>
                        <li><a href="" className="aside-anchor">درباره ما</a></li>
                        <li><a href="" className="aside-anchor">تماس با ما</a></li>
                        <li><a href="" className="aside-anchor">محصولات</a></li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default SplitMenuComponent
