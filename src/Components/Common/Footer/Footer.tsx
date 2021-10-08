import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../../Constants/RoutePaths';

const Footer = () => {
    return (
        <>
            {/* FOOTER */}
            <footer>
                <div className="container">
                    <hr />
                    <div className="row m-0">
                        <div className="col-md-6">
                            <div className="explore-card">
                                <div className="explore-box">
                                    <h1 className="explore-title">CrayonCreed</h1>
                                    <p className="explore-subtitle">
                                        CrayonCreed is the first ever Internet of Asset(IOA) platform.
                                    </p>
                                    <div className="mr-auto">
                                        <ul className="nav social-media">
                                            <li>
                                                <a className="social-list social-links" href="https://discord.gg/gCQxPAf3FC" target="_blank">
                                                    <i className="fab fa-discord" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="social-list social-links" href="https://twitter.com/crayoncreed" target="_blank">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a className="social-list social-links" href="https://www.instagram.com/crayoncreed/" target="_blank">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            </li>
                                            {/* <li>
                                  <a class="social-list social-links" href="" target="_blank">
                                      <i class="far fa-envelope"></i>
                                  </a>
                              </li> */}
                                            {/* <li>
                                  <a class="social-list social-links" href="" target="_blank">
                                      <i class="far fa-paper-plane"></i>
                                  </a>
                              </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="explore-card">
                                <div className="explore-box">
                                    <h1 className="explore-title">Services</h1>
                                    <ul className="explore-list">
                                        <li>
                                            <Link to={RoutePaths.SERVICEGOLD}>Gold</Link>
                                        </li>
                                        <li>
                                            <Link to={RoutePaths.SERVICESILVER}>Silver</Link>
                                        </li>
                                        <li>
                                            <Link to={RoutePaths.SERVICEBRONZE}>Bronze</Link>
                                        </li>
                                        <li>
                                            <Link to={RoutePaths.SERVICECUSTOM}>Custom</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <hr />
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <p className="copyright m-0">
                                © crayoncreed.com 2021. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
