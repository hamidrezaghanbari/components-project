import React from 'react'
import { Route } from 'react-router-dom'
import styled from 'styled-components'
import EtcPage from '../../../../pages/etc/etc.page'
import './vertical-menu-page.styles.scss'

const VerticalMenuPage = ({ id, backgroundColor, contentId, url }) => {
    return (
        <PageWrapper backgroundColor={backgroundColor} className="vertical-menu-page" id={id}>
            <section className="vertical-menu-section" id={contentId}>
                <p className="menu-title">عنوان شماره یک</p>
                <span className="hint">
                    دوره برتر آموزشی ایرانیان
                                </span>
            </section>
        </PageWrapper>
        // TODO make another page for this section
        // <PageWrapper backgroundColor={backgroundColor} className="vertical-menu-page" id={id}>
        //     <Route exact
        //         path={`#${url}`}
        //         render={() => <EtcPage contentId={contentId} />}
        //     />

        // </PageWrapper>
    )
}

const PageWrapper = styled.div`
    color: white;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
    position: absolute;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#ffffff'};
`

export default VerticalMenuPage
