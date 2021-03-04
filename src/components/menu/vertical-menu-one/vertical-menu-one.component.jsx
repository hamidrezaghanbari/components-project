import { faRocket, faStickyNote, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { withTheme } from 'styled-components'
import './vertical-menu-one.styles.scss'
import VerticalMenuPage from './vertical-menu-page/vertical-menu-page.component'
import VerticalMenuTitle from './vertical-menu-title/vertical-menu-title.component'

const VerticalMenuOne = ({ theme: { primary_color, dark_color, light_color } }) => {
    return (
        <div>
            <div className="ct" id="t1">
                <div className="ct" id="t2">
                    <div className="ct" id="t3">
                        <ul className="vertical-menu">
                            <VerticalMenuTitle menuItemClass="fa-rocket" pageHref="#t1" icon={faRocket} />
                            <VerticalMenuTitle menuItemClass="fa-user-minus" pageHref="#t2" icon={faUserMinus} />
                            <VerticalMenuTitle menuItemClass="fa-sticky-note" pageHref="#t3" icon={faStickyNote} />
                        </ul>


                        <VerticalMenuPage url="t1" id="p1" backgroundColor={primary_color} contentId="fa-rocket" />
                        <VerticalMenuPage url="t2" id="p2" backgroundColor={dark_color} contentId="fa-user-minus" />
                        <VerticalMenuPage url="t3" id="p3" backgroundColor={light_color} contentId="fa-sticky-note" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTheme(VerticalMenuOne)
