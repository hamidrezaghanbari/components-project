import React from 'react'
import './second-form.styles.scss'

const SecondFormComponent = () => {
    return (
        <div className="second-form-page">
            <div className="second-form-wrapper">
                <form autocomplete="off" className="second-form">
                    <div className="second-form-input-group half-input">
                        <input placeholder=" " type="text" name="password" />
                        <label>password</label>
                    </div>
                    <div className="second-form-input-group half-input">
                        <input placeholder=" " type="text" name="password" />
                        <label>password</label>
                    </div>
                    <div className="second-form-input-group full-input">
                        <input placeholder=" " type="text" name="name" />
                        <label>full name</label>
                    </div>
                    <div className="second-form-input-group submit-button">
                        <button>submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SecondFormComponent
