import Image from 'next/image';
import logoWhite from '../assets/imgs/logo_white.jpg';


const Footer = () => {
    return (
    <>
            <footer className="footer-area">


                <div className="footer-bottom">
                    <div className="custom-container">
                        <div className="custom-row">
                            <div className="footer-all-links-wrap justify-content-between d-flex">

                                <div className="footer-links">

                                    <div className="left-content">
                                        <a href="index-2.html" className="logo">
                                           <Image src={logoWhite} alt='footer-logo' title='footer-logo' />

                                        </a>
                                        <br /><br />
                                            <p className="footer-para"> Your vision, our expertise. We create exceptional digital
                                                experiences that succeed. Let's collaborate!</p>
                                        </div>
                                    </div>
                                    <div className="footer-links">
                                        <h3>Services</h3>
                                        <ul>
                                            <li><a href="website-design.html">Website Design</a></li>
                                            <li><a href="web-application.html">Web Applications</a></li>
                                            <li><a href="mobile-application.html">Mobile Application<span className="new">New</span></a>
                                            </li>
                                            <li><a href="qa-testing.html">Testing & QA</a></li>

                                        </ul>
                                    </div>
                                    <div className="footer-links">
                                        <h3>Quick Link</h3>
                                        <ul>
                                            <li><a href="portfolio.html">Portfolio</a></li>
                                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                            <li><a href="term-and-condition.html">Terms & Conditions</a></li>

                                        </ul>
                                    </div>
                                </div>

                                <div className="footer-contact-info">
                                    <div className="footer-contact-info-item">
                                        <h4>Phone</h4>
                                        <p>
                                            <a href="tel:+91-907-807-2730">+91 9078072730</a> <br />

                                        </p>
                                    </div>
                                    <div className="footer-contact-info-item">
                                        <h4>Mail</h4>
                                        <p>
                                            <a href="mailto:info@paramountitsolutions.co.in">info@paramountitsolutions.co.in</a> <br />
                                                <a href="mailto:sales@paramountitsolutions.co.in">sales@paramountitsolutions.co.in</a><br />
                                                    <a href="mailto:sales@paramountitsolutions.co.in">support@paramountitsolutions.co.in</a>
                                                </p>

                                            </div>
                                            <div className="right">



                                            </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="copyright-area">
                            <div className="custom-container">
                                <div className="custom-row d-flex align-items-center justify-content-between">
                                    <ul className="social-links d-flex align-items-center">
                                        <li className="me-3"><a href="https://www.facebook.com/SaiParamountitSolutionsPvt.Ltd/"
                                            className="text-white fs-12" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li className="me-3"><a href="https://twitter.com/i/flow/login?redirect_after_login=%2FSaiparamount1"
                                            className="text-white fs-12" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                                        <li className="me-3"><a href="https://www.instagram.com/saiparamount/" className="text-white fs-12"
                                            target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="https://www.youtube.com/c/saiparamountitsolutionspvtltd" className="text-white fs-12"
                                            target="_blank"><i className="fa-brands fa-youtube"></i></a></li>
                                        <li><a href="skype:saiparamount_1?call" className="text-white fs-12"><i
                                            className="fa-brands fa-skype"></i></a></li>
                                    </ul>

                                    <p> SAIPARAMOUNT - ALL RIGHTS RESERVED </p>
                                </div>
                            </div>
                        </div>


                    </footer>
                </>
                )
}

                export default Footer
