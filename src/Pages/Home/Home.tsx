import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RoutePaths } from '../../Constants/RoutePaths';

const Home: FC = (props) => {
    const [scriptList, setScriptList] = useState<any>([]);

    useEffect(() => {
        loadScripts();
        return () => {
            let head = document.getElementsByTagName('head')[0];
            let scripts = head.getElementsByTagName('script');
            for (let i = 0; i < scripts.length; i++) {
                if (scripts[i].id) {
                    head.removeChild(scripts[i]);
                }
            }
        }
    }, []);

    const loadScripts = () => {
        const dynamicScripts = [
            '/js/script.js',
            '/js/scroll.js'
        ];
        let list: any = [];
        for (let i = 0; i < dynamicScripts.length; i++) {
            const node = document.createElement('script');
            node.src = dynamicScripts[i];
            node.type = 'text/javascript';
            node.async = false;
            node.charset = 'utf-8';
            node.id = 'custom'+i;
            list.push(node);
            document.getElementsByTagName('head')[0].appendChild(node);
        }
        setScriptList(list);
    }

    return (
        <>
            {/* HOME */}
            <section className="home" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="home-content">
                                <h1 className="home-subtitle">
                                    <span>CrayonCreed</span> is the first ever End-to-End NFT Launcher Platform.
                                </h1>
                                <p className="home-info">
                                    Your preferred launchpad partner for your Internet of Assets.
                                </p>
                                {/* <ul class="home-list">
                      <li class="home-list-item"><a href="" class="home-list-link">POLARS</a></li>
                      <li class="home-list-item"><a href="" class="home-list-link">ethereum</a></li>
                      <li class="home-list-item"><a href="" class="home-list-link">BINANCE SMART CHAIN</a></li>
                  </ul> */}
                                {/* <button class="home-btn">Explore</button> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row home-right-top">
                                <div className="col col-md sr-bx1">
                                    <Link to={RoutePaths.SERVICEGOLD} className="home-srv-link">
                                        <div className="home-services-box">
                                            <div className="services-header">
                                                <button className="services-top services-back">
                                                    <i className="fas fa-chevron-left"></i>
                                                </button>
                                                <div className="services-name">Gold</div>
                                            </div>
                                            <div className="album">
                                                <img src="images/Service1.png" alt="no images" />
                                            </div>
                                            <div className="service-body">
                                                <h5 className="services-title" id="title">Gold NFT Launcher</h5>
                                                <p className="services-subtitle">Generative Image</p>
                                                <p className="services-subtitle">MetaData</p>
                                                <p className="services-subtitle">Minting/Listing</p>
                                            </div>
                                            <div className="services-footer">
                                                <button className="services-bottom next">
                                                    <i className="fas fa-forward"></i>
                                                </button>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="service-svg">
                                                <path fill="#0099ff" fillOpacity="1"
                                                    d="M0,32L34.3,69.3C68.6,107,137,181,206,192C274.3,203,343,149,411,128C480,107,549,117,617,117.3C685.7,117,754,107,823,138.7C891.4,171,960,245,1029,245.3C1097.1,245,1166,171,1234,160C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col col-md sr-bx2">
                                    <Link to={RoutePaths.SERVICESILVER} className="home-srv-link">
                                        <div className="home-services-box">
                                            <div className="services-header">
                                                <button className="services-top services-back">
                                                    <i className="fas fa-chevron-left" />
                                                </button>
                                                <div className="services-name">Silver</div>
                                            </div>
                                            <div className="album">
                                                <img src="images/Service2.png" alt="no images" />
                                            </div>
                                            <div className="service-body">
                                                <h5 className="services-title" id="title">Silver NFT Launcher</h5>
                                                <p className="services-subtitle">MetaData</p>
                                                <p className="services-subtitle">Minting/Listing</p>
                                                <p className="services-subtitle">&nbsp;</p>
                                                <p className="services-subtitle">&nbsp;</p>
                                            </div>
                                            <div className="services-footer">
                                                <button className="services-bottom next">
                                                    <i className="fas fa-forward" />
                                                </button>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="service-svg">
                                                <path fill="#0099ff" fillOpacity={1} d="M0,32L34.3,69.3C68.6,107,137,181,206,192C274.3,203,343,149,411,128C480,107,549,117,617,117.3C685.7,117,754,107,823,138.7C891.4,171,960,245,1029,245.3C1097.1,245,1166,171,1234,160C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col col-md sr-bx3">
                                    <Link to={RoutePaths.SERVICEBRONZE} className="home-srv-link">
                                        <div className="home-services-box">
                                            <div className="services-header">
                                                <button className="services-top services-back">
                                                    <i className="fas fa-chevron-left" />
                                                </button>
                                                <div className="services-name">Bronze</div>
                                            </div>
                                            <div className="album">
                                                <img src="images/Service3.png" alt="no images" />
                                            </div>
                                            <div className="service-body">
                                                <h5 className="services-title" id="title">Bronze NFT Launcher</h5>
                                                <p className="services-subtitle">Minting/Listing</p>
                                                <p className="services-subtitle">&nbsp;</p>
                                                <p className="services-subtitle">&nbsp;</p>
                                            </div>
                                            <div className="services-footer">
                                                <button className="services-bottom next">
                                                    <i className="fas fa-forward" />
                                                </button>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="service-svg">
                                                <path fill="#0099ff" fillOpacity={1} d="M0,32L34.3,69.3C68.6,107,137,181,206,192C274.3,203,343,149,411,128C480,107,549,117,617,117.3C685.7,117,754,107,823,138.7C891.4,171,960,245,1029,245.3C1097.1,245,1166,171,1234,160C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col col-md sr-bx4">
                                    <Link to={RoutePaths.SERVICECUSTOM} className="home-srv-link">
                                        <div className="home-services-box">
                                            <div className="services-header">
                                                <button className="services-top services-back">
                                                    <i className="fas fa-chevron-left" />
                                                </button>
                                                <div className="services-name">Custom</div>
                                            </div>
                                            <div className="album">
                                                <img src="images/Service4.png" alt="no images" />
                                            </div>
                                            <div className="service-body">
                                                <h5 className="services-title" id="title">Custom NFT Launcher</h5>
                                                <p className="services-subtitle">Tailored NFT needs</p>
                                                <p className="services-subtitle">&nbsp;</p>
                                            </div>
                                            <div className="services-footer">
                                                <button className="services-bottom next">
                                                    <i className="fas fa-forward" />
                                                </button>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="service-svg">
                                                <path fill="#0099ff" fillOpacity={1} d="M0,32L34.3,69.3C68.6,107,137,181,206,192C274.3,203,343,149,411,128C480,107,549,117,617,117.3C685.7,117,754,107,823,138.7C891.4,171,960,245,1029,245.3C1097.1,245,1166,171,1234,160C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                                                </path>
                                            </svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270" className="home-svg">
                    <path fill="#0099ff" fillOpacity="0.2" d="M0,96L30,101.3C60,107,120,117,180,138.7C240,160,300,192,360,186.7C420,181,480,139,540,122.7C600,107,660,117,720,144C780,171,840,213,900,202.7C960,192,1020,128,1080,101.3C1140,75,1200,85,1260,74.7C1320,64,1380,32,1410,16L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
                    </path>
                </svg>
            </section>
            <section className="about" id={"about"}>
                <h1 className="about-title">About Us</h1>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md">
                            <h2 className="about-main-title">We are CrayonCreed.</h2>
                            <h3 className="about-info">
                                We have created a Trusted and Secured platform to launch your Digital Assets.
                            </h3>
                        </div>
                        <div className="col-md">
                            <div className="about-img">
                                <img src="images/Firmware.svg" className="image" alt="cc" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* SERVICES */}
            {/* <section class="services">
  <h1 class="title">Services</h1>
  <div class="container">
      <div class="row">
          <div class="col-md col-sm-6">
              <div class="services-box">
                  <div class="services-header">
                      <button class="services-top services-back">
                          <i class="fas fa-chevron-left"></i>
                      </button>
                      <div class="services-name">Service Name</div>
                  </div>
                  <div class="album">
                      <img src="images/plate.png" alt="no images" />
                  </div>
                  <h5 class="services-title" id="title">NFT Name</h5>
                  <p class="services-subtitle" id="author">NFT content</p>
                  <div class="services-footer">
                      <button class="services-bottom next">
                          <i class="fas fa-forward"></i>
                      </button>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="service-svg">
                      <path fill="#0099ff" fill-opacity="1"
                          d="M0,32L34.3,69.3C68.6,107,137,181,206,192C274.3,203,343,149,411,128C480,107,549,117,617,117.3C685.7,117,754,107,823,138.7C891.4,171,960,245,1029,245.3C1097.1,245,1166,171,1234,160C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                      </path>
                  </svg>
              </div>
          </div>
          <div class="col-md col-sm-6">
              <div class="services-box">
                  <div class="services-header">
                      <button class="services-top services-back">
                          <i class="fas fa-chevron-left"></i>
                      </button>
                      <div class="services-name">Service Name</div>
                  </div>
                  <div class="album">
                      <img src="images/music.jpg" alt="no images" />
                  </div>
                  <h5 class="services-title" id="title">NFT Name</h5>
                  <p class="services-subtitle" id="author">NFT content</p>
                  <div class="services-footer">
                      <button class="services-bottom next">
                          <i class="fas fa-forward"></i>
                      </button>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="service-svg">
                      <path fill="#0099ff" fill-opacity="1"
                          d="M0,32L34.3,69.3C68.6,107,137,181,206,192C274.3,203,343,149,411,128C480,107,549,117,617,117.3C685.7,117,754,107,823,138.7C891.4,171,960,245,1029,245.3C1097.1,245,1166,171,1234,160C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                      </path>
                  </svg>
              </div>
          </div>
          <div class="col-md col-sm-6">
              <div class="services-box">
                  <div class="services-header">
                      <button class="services-top services-back">
                          <i class="fas fa-chevron-left"></i>
                      </button>
                      <div class="services-name">Service Name</div>
                  </div>
                  <div class="album">
                      <img src="images/drinks.png" alt="no images" />
                  </div>
                  <h5 class="services-title" id="title">NFT Name</h5>
                  <p class="services-subtitle" id="author">NFT content</p>
                  <div class="services-footer">
                      <button class="services-bottom next">
                          <i class="fas fa-forward"></i>
                      </button>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="service-svg">
                      <path fill="#0099ff" fill-opacity="1"
                          d="M0,32L34.3,69.3C68.6,107,137,181,206,192C274.3,203,343,149,411,128C480,107,549,117,617,117.3C685.7,117,754,107,823,138.7C891.4,171,960,245,1029,245.3C1097.1,245,1166,171,1234,160C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                      </path>
                  </svg>
              </div>
          </div>
          <div class="col-md col-sm-6">
              <div class="services-box">
                  <div class="services-header">
                      <button class="services-top services-back">
                          <i class="fas fa-chevron-left"></i>
                      </button>
                      <div class="services-name">Service Name</div>
                  </div>
                  <div class="album">
                      <img src="images/drinks.png" alt="no images" />
                  </div>
                  <h5 class="services-title" id="title">NFT Name</h5>
                  <p class="services-subtitle" id="author">NFT content</p>
                  <div class="services-footer">
                      <button class="services-bottom next">
                          <i class="fas fa-forward"></i>
                      </button>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="service-svg">
                      <path fill="#0099ff" fill-opacity="1"
                          d="M0,32L34.3,69.3C68.6,107,137,181,206,192C274.3,203,343,149,411,128C480,107,549,117,617,117.3C685.7,117,754,107,823,138.7C891.4,171,960,245,1029,245.3C1097.1,245,1166,171,1234,160C1302.9,149,1371,203,1406,229.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                      </path>
                  </svg>
              </div>
          </div>
      </div>
  </div>
    </section> */}
            <section className="team">
                <h1 className="team-title">Team</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md sr-tm1">
                            <div className="team-box">
                                <img src="images/oscar.jpg" className="team-img" alt="team" />
                                <h6 className="team-name">oscar</h6>
                            </div>
                        </div>
                        <div className="col-md sr-tm2">
                            <div className="team-box">
                                <img src="images/caxer007.jpg" className="team-img" alt="team" />
                                <h6 className="team-name">caxer</h6>
                            </div>
                        </div>
                        <div className="col-md sr-tm3">
                            <div className="team-box">
                                <img src="images/flappy.png" className="team-img" alt="team" />
                                <h6 className="team-name">flappy</h6>
                            </div>
                        </div>
                        <div className="col-md sr-tm4">
                            <div className="team-box">
                                <img src="images/nish.jpg" className="team-img" alt="team" />
                                <h6 className="team-name">nish</h6>
                            </div>
                        </div>
                        <div className="col-md sr-tm5">
                            <div className="team-box">
                                <img src="images/venomuk.jpg" className="team-img" alt="team" />
                                <h6 className="team-name">venomuk</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
