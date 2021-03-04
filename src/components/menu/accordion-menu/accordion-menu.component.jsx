import React from 'react'
import './accordion-menu.styles.scss'

const AccordionMenuComponent = () => {
    return (
        <div className="accordion-menu-page">
            <div className="accordion-menu">
                <ul className="accordion-menu-list">
                    <li id="account" className="accordion-menu-list-item">
                        <a className="accordion-menu-button" href="#/account">
                            دوره ها آموزشی
                        </a>
                        <div className="accordion-menu-sub-menu">
                            <a href="#">طراحی وب</a>
                            <a href="#">جاوا اسکریپت</a>
                            <a href="#">برنامه نویسی</a>
                        </div>
                    </li>
                    <li id="about" className="accordion-menu-list-item">
                        <a className="accordion-menu-button" href="#/about">
                            در باره ما
                        </a>
                        <div className="accordion-menu-sub-menu">
                            <a href="#">تلگرام</a>
                            <a href="#">اینستاگرام</a>
                        </div>
                    </li>
                    <li id="support" className="accordion-menu-list-item">
                        <a className="accordion-menu-button" href="#/support">
                            پشتیبانی
                        </a>
                        <div className="accordion-menu-sub-menu">
                            <a href="#">تلگرام</a>
                            <a href="#">ایمیل</a>
                            <a href="#">اینستاگرام</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AccordionMenuComponent
