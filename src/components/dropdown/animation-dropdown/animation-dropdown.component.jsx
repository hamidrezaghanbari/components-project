import React from 'react'
import './animation-dropdown.styles.scss'

const AnimationDropdownComponent = () => {
    return (
        <div className="dropdown-page">
            <p>انیمیشن دراپ داون</p>


            <div className="animation-dropdown-holder">
                <button className="animation-dropdown-btn">
                    <span>حساب کاربری شما</span>
                    <span className="animation-dropdown-btn-icon">&#9762;</span>

                    <ul className="animation-dropdown">
                        <li><a className="active" href="#">صفحه در باره ما</a></li>
                        <li><a href="#">صفحه در باره ما</a></li>
                        <li><a href="#">صفحه در باره ما</a></li>
                        <li><a href="#">صفحه در باره ما</a></li>
                    </ul>
                </button>
            </div>


        </div>
    )
}

export default AnimationDropdownComponent
