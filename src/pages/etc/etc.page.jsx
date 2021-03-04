import React, { useEffect } from 'react'

const EtcPage = ({contentId}) => {

    useEffect(() => {
        console.log('I just mounted!');
    }, [])
    
    return (
        <section className="vertical-menu-section" id={contentId}>
            <p className="menu-title">عنوان شماره یک</p>
            <span className="hint">
                دوره برتر آموزشی ایرانیان
                        </span>
        </section>
    )
}

export default EtcPage
