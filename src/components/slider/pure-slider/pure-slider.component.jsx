import React from 'react'
import './pure-slider.styles.scss'
import ImageA from './../../../assets/images/a.jpg';
import ImageB from './../../../assets/images/b.jpg';
import ImageC from './../../../assets/images/c.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const PureSlider = () => {
    return (
        <div>
            <p>اسلایدر با سی اس اس خام</p>
            <div className="slideshow-wrap">
                <input type="radio" className="slider-radio" id="button-1" name="controls" />
                <label className="slide-button" htmlFor="button-1"></label>
                <input type="radio" id="button-2" className="slider-radio" name="controls" />
                <label className="slide-button" htmlFor="button-2"></label>
                <input type="radio" id="button-3" className="slider-radio" name="controls" />
                <label className="slide-button" htmlFor="button-3"></label>

                {/* image slider  */}
                <div id="slideshow-inner">
                    <ul>
                        <li id="slide1">
                            <img src={ImageA} />
                            <div className="description">
                                <input type="checkbox" id="show-description-1" />
                                <label htmlFor="show-description-1" className="show-description-label">
                                    <FontAwesomeIcon icon={faEllipsisH} />
                                </label>
                                <div className="description-text">
                                    <p>توضیحات این عکس</p>
                                    <b>پافین شماره یک</b>
                                </div>
                            </div>

                        </li>
                        <li id="slide2">
                            <img src={ImageB} />
                            <div className="description">
                                <input type="checkbox" id="show-description-2" />
                                <label htmlFor="show-description-2" className="show-description-label">
                                    <FontAwesomeIcon icon={faEllipsisH} />
                                </label>
                                <div className="description-text">
                                    <p>توضیحات این عکس</p>
                                    <b>پافین شماره یک</b>
                                </div>
                            </div>

                        </li>
                        <li id="slide3">
                            <img src={ImageC} />
                            <div className="description">
                                <input type="checkbox" id="show-description-3" />
                                <label htmlFor="show-description-3" className="show-description-label">
                                    <FontAwesomeIcon icon={faEllipsisH} />
                                </label>
                                <div className="description-text">
                                    <p>توضیحات این عکس</p>
                                    <b>پافین شماره یک</b>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PureSlider
