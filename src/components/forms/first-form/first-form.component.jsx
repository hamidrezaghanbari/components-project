import { faAdjust, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './first-form.styles.scss'

const FirstFormComponent = () => {
    return (
        <div className="first-form-page">
            <div className="first-form-wrapper">
                <form autoComplete="off" className="first-form">
                    <div className="first-form-input-group">
                        <input onInvalid="this.setCustomValidity('به صورت فارسی خطا نشان داده شود')" id="input-name" pattern="[a-zA-Z]{3}" required className="first-form-input" type="text" placeholder="نام" />
                        <FontAwesomeIcon className="input-icon input-icon-check" icon={faCheck} />
                    </div>
                    <input pattern="[0-9]" className="first-form-input" type="text" placeholder="نام خانوادگی" />
                    <input pattern="^(\+98|0)?9\d{9}$" className="first-form-input" type="text" placeholder="شماره تلفن" />
                    <input className="first-form-input" type="text" placeholder="رمز عبور" />
                    <button className="first-form-button">ثبت نام</button>
                </form>
            </div>
        </div>
    )
}

export default FirstFormComponent
