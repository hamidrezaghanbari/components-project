import React, { useState } from 'react'
import './third-form.styles.scss'

const ThirdFromComponent = () => {

    const [activeClass, setActiveClass] = useState(false)

    return (
        <div className="third-form-component">
            <div className={`third-form-wrapper ${props => props.activeClass ? 'active' : ''}`}>
                <div className="card"></div>
                <div className="card">
                    <h1 className="title">login</h1>
                    <form action="">
                        <div className="input-container">
                            <input type="text" id="username" />
                            <label for="username">username</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="text" id="password" />
                            <label for="password">password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="button-container">
                            <button>
                                <span>go ahead</span>
                            </button>
                        </div>
                        <div className="footer">
                            <a href="">forget password?</a>
                        </div>
                    </form>
                </div>

                <div className="card alt">
                    <div onclick={() => setActiveClass(true)} className="toggle"></div>
                    <h1 className="title">
                        ثبت نام
                    <div onclick={() => setActiveClass(false)} className="close"></div>
                    </h1>
                    <form action="">
                        <div className="input-container">
                            <input type="text" id="user-name" />
                            <label for="user-name">username</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="text" id="pass" />
                            <label for="pass">password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="input-container">
                            <input type="text" id="reaped-pass" />
                            <label for="reaped-pass">reaped password</label>
                            <div className="bar"></div>
                        </div>
                        <div className="button-container">
                            <button>
                                <span>register</span>
                            </button>
                        </div>
                        <div className="footer">
                            <a href="">forget password?</a>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ThirdFromComponent
