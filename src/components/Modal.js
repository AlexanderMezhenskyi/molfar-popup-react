import React from 'react';
import './Modal.scss';
import { ReactComponent as Dots } from './dots.svg';
import { ReactComponent as Mail } from './mail.svg';
import { ReactComponent as Flag } from './flag.svg';
import { ReactComponent as CheckIcon } from './check-icon.svg';
import { ReactComponent as PinIcon } from './pin-icon.svg';
import { ReactComponent as CalendarIcon } from './calendar-icon.svg';
import coverPic from './cover-pic.jpg';
import coverPic2x from './cover-pic@2x.jpg';
import coverPic3x from './cover-pic@3x.jpg';

function Modal({handleCloseModal}) { 
    return (<div className="modal">
                <div className="modal-wrap">
                    <button type="button" 
                            className="close-modal cross"
                            onClick={() => handleCloseModal()}
                    >
                        <span>&#10060;</span>
                    </button>

                    <div className="modal-content-wrap">
                        <button type="button" 
                                className="close-modal back"
                                onClick={() => handleCloseModal()}
                        >
                            <span>&#8592; Back to Memorial</span>
                        </button>
                        <div className="more-button-wrap">
                            <button type="button" className="more-button">
                                <Dots />
                            </button>
                            <div className="more-info">
                                <ul>
                                    <li><Mail /> Contact owner</li>
                                    <li><Flag /> Report this event</li>
                                </ul>
                            </div>
                        </div>
                        <div className="img-wrap">
                            <img className="cover-pic" src={coverPic} 
                                srcSet={`${coverPic2x} 2x, ${coverPic3x} 3x`} alt="cover-pic" />
                        </div>
                        <div className="content-wrapper">
                            <div className="modal-content">
                                <div>
                                    <h2>Celebration of life</h2>
                                    <div className="modal-content_date">
                                        <div><CalendarIcon /></div>
                                        <div>
                                            <span>Friday, October 20, 2019</span>
                                            <span>9:00 AM - 2:00 PM</span>
                                            <button type="button" className="add-to-calendar">
                                                Add to calendar
                                            </button>
                                        </div>
                                    </div>
                                    <div className="modal-content_place">
                                        <div><PinIcon /></div>
                                        <div>
                                            <span>St. Marry Church</span>
                                            <span>2475 Ericsson Str., IL 60169, USA</span>
                                            <button type="button">Show on map</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-content_about">
                                    <h3>About</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                                        irure dolor in reprehen. Voluptate velit esse cillum dolore 
                                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                                        non proident, sunt in culpa qui officia deserunt mollit anim 
                                        id est laborum.
                                    </p>
                                </div>
                            </div>
                            <div className="attending-wrap">
                                <button type="button" className="attending">
                                    <CheckIcon />
                                    Attending
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>);
}

export default Modal;