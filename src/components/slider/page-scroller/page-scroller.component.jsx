import React from 'react'
import "./page-scroller.styles.scss"
import './../../../../node_modules/animate.css/animate.min.css';
import './../../../../node_modules/hover.css/css/hover-min.css';
import './../../../assets/css/ihover.min.css'
import A from '../../../assets/images/a.jpg'

const PageScrollerComponent = () => {
    return (
        <div className="page-scroller-page">
            <form className="page-scroller-form">

                {/* <div className="left-radio-section">
                    <input type="radio" className="page-scroller-radio" id="slide1" title="خانه" checked />
                    <input type="radio" className="page-scroller-radio" id="slide2" title="درباره ما" />
                    <input type="radio" className="page-scroller-radio" id="slide3" title="تماس با ما" />
                    <input type="radio" className="page-scroller-radio" id="slide4" title="محصولات" />
                    <input type="radio" className="page-scroller-radio" id="slide5" title="سوالات پر تکرار" />
                </div>

                <div className="labels">
                    <label for="slide1">
                        <div className="page-scroller-content">
                            <h1>پروژه شماره یک</h1>
                            <div className="page-scroller-icon">
                                از کیبورد هم میتوانید برای جابه جایی صفحات استفاده کنید
                            </div>
                        </div>
                    </label>
                    <label for="slide2">
                        <div className="page-scroller-content">
                            <h1>پروژه شماره یک</h1>
                            <div className="page-scroller-icon">
                                از کیبورد هم میتوانید برای جابه جایی صفحات استفاده کنید
                            </div>
                        </div>
                    </label>
                    <label for="slide3">
                        <div className="page-scroller-content">
                            <h1>پروژه شماره یک</h1>
                            <div className="page-scroller-icon">
                                از کیبورد هم میتوانید برای جابه جایی صفحات استفاده کنید
                            </div>
                        </div>
                    </label>
                    <label for="slide4">
                        <div className="page-scroller-content">
                            <h1>پروژه شماره یک</h1>
                            <div className="page-scroller-icon">
                                از کیبورد هم میتوانید برای جابه جایی صفحات استفاده کنید
                            </div>
                        </div>
                    </label>
                    <label for="slide5">
                        <div className="page-scroller-content">
                            <h1>پروژه شماره یک</h1>
                            <div className="page-scroller-icon">
                                از کیبورد هم میتوانید برای جابه جایی صفحات استفاده کنید
                            </div>
                        </div>
                    </label>
                </div> */}

                <div className="animate__animated animate__bounce" style={{ width: '120px', height: '120px', backgroundColor: 'red' }}>
                    div hamidreza ghanbari
                </div>


                <button className="hvr-shrink">
                    click me
                </button>

                <div class="ih-item circle colored effect1"><a href="#">
                    <div class="spinner"></div>
                    <div class="img"><img src={A} alt="img" /></div>
                    <div class="info">
                        <div class="info-back">
                            <h3>Heading here</h3>
                            <p>Description goes here</p>
                        </div>
                    </div></a></div>
            </form>
        </div>
    )
}

export default PageScrollerComponent
