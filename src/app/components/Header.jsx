import Image from 'next/image';
import logo from '../assets/imgs/logo.png';
const Header = () => {
    return (
        <>
            {/* Header Bar  */}
            <div className="header-bar">
                <div className="custom-container">
                    <div className="header-bar-body d-flex align-items-center justify-content-between">
                        <div className="left">
                            <div>
                                <ul className="d-flex">
                                    <li className="me-3"><a href="tel:+919078072730" className="text-white fs-12"><span className="me-2"><i
                                        className="las la-phone-volume"></i></span>+91 9078072730</a></li>
                                    <li className="me-3"><a href="mailto:info@paramountitsolutions.co.in" className="text-white fs-12"><span
                                        className="me-2"><i className="las la-envelope-open-text"></i></span>
                                        info@paramountitsolutions.co.in</a></li>
                                    <li><a href="mailto:sales@paramountitsolutions.co.in" className="text-white fs-12"><span
                                        className="me-2"><i className="las la-envelope-open-text"></i></span>
                                        support@paramountitsolutions.co.in</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right">

                            <ul className="social-links d-flex align-items-center">
                                <li className="me-3"><a href="https://www.facebook.com/SaiParamountitSolutionsPvt.Ltd/"
                                    className="text-white fs-12" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="me-3"><a href="skype:saiparamount_1?call" className="text-white fs-12"><i
                                    className="fa-brands fa-skype"></i></a></li>
                                <li className="me-3"><a href="https://twitter.com/i/flow/login?redirect_after_login=%2FSaiparamount1"
                                    className="text-white fs-12" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                                <li className="me-3"><a href="https://www.instagram.com/saiparamount/" className="text-white fs-12"
                                    target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a href="https://www.youtube.com/c/saiparamountitsolutionspvtltd" className="text-white fs-12"
                                    target="_blank"><i className="fa-brands fa-youtube"></i></a></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            {/* Header  */}
            <header class="header-area">
                <div class="custom-container">
                    <div class="custom-row align-items-center justify-content-between">
                        <div class="header-left d-flex align-items-center">
                            <a href="#" class="logo">
                                <Image src={logo} title='logo' alt='logo' />
                            </a>

                            <div class="header-left-right">
                                <a href="contact.html" class="theme-btn" id="header-button">Contact Us</a>
                                <span class="menu-bar">
                                    <i class="las la-bars"></i>
                                </span>
                            </div>
                            <nav class="navbar-wrapper">
                                <span class="close-menu-bar">
                                    <i class="las la-times"></i>
                                </span>
                                <ul>
                                    <li class="">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li class="">
                                        <a href="about.html">About</a>
                                    </li>
                                    <li class="mega-menu-item ">
                                        <a href="#">Services</a>
                                        <span class="dropdown-menu-item-icon">
                                            <i class="las la-angle-down"></i>
                                        </span>
                                        <div class="mega-menu">
                                            <div class="mega-menu-inner">
                                                <div class="custom-container d-flex">
                                                    <div class="left">
                                                        <div
                                                            class="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                                            <div class="mega-menu-service-cards align-items-start">
                                                                <a href="website-design.html"
                                                                    class="">
                                                                    <div class="mega-menu-service-card">
                                                                        <span class="icon">
                                                                            <img src="assets/imgs/wb_logo_1.svg" alt="Service" />
                                                                        </span>
                                                                        <div class="content">

                                                                            <h2>Website </h2>
                                                                            <p>Design</p>

                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a href="mobile-application.html"
                                                                    class="">
                                                                    <div class="mega-menu-service-card">
                                                                        <span class="icon">
                                                                            <img src="assets/imgs/mobile-application111.svg"
                                                                                alt="Service" />
                                                                        </span>
                                                                        <div class="content">

                                                                            <h2>Mobile <br /></h2>
                                                                            <p>Application</p>

                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a href="ecommerce-solutions.html"
                                                                    class="">
                                                                    <div class="mega-menu-service-card">
                                                                        <span class="icon">
                                                                            <img src="assets/imgs/e-commerce_solution.svg"
                                                                                alt="Service" />
                                                                        </span>
                                                                        <div class="content">

                                                                            <h2>Ecommerce<br /> </h2>
                                                                            <p>Solutions</p>

                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a href="qa-testing.html"
                                                                    class="">
                                                                    <div class="mega-menu-service-card">
                                                                        <span class="icon">
                                                                            <img src="assets/imgs/qa_testing.svg" alt="Service" />
                                                                        </span>
                                                                        <div class="content">

                                                                            <h2>Quality</h2>
                                                                            <p> Assurance</p>

                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a href="web-application.html"
                                                                    class="">
                                                                    <div class="mega-menu-service-card">
                                                                        <span class="icon">
                                                                            <img src="assets/imgs/frontend_hwd.svg" alt="Service" />
                                                                        </span>
                                                                        <div class="content">

                                                                            <h2>Web</h2>
                                                                            <p>Applications</p>

                                                                        </div>
                                                                    </div>
                                                                </a>
                                                                <a href="domain-and-hosting.html"
                                                                    class="">
                                                                    <div class="mega-menu-service-card">
                                                                        <span class="icon">
                                                                            <img src="assets/imgs/Domain_and_Hosting.svg"
                                                                                alt="Service" />
                                                                        </span>
                                                                        <div class="content">

                                                                            <h2>Domain & </h2>
                                                                            <p>Hosting</p>

                                                                        </div>
                                                                    </div>
                                                                    </a>
                                                            </div>

                                                        <div class="mega-menu-links d-flex">
                                                            <div class="mega-menu-link">
                                                                <h3>Digital Marketing</h3>
                                                                <ul>
                                                                    <li
                                                                        class="">
                                                                        <a href="search-engine-optimisation.html">Search
                                                                            Engine Optimization</a>
                                                                    </li>
                                                                    <li
                                                                        class="">
                                                                        <a href="social-media-optimization.html">Social
                                                                            Media Optimization</a>
                                                                    </li>
                                                                    <li
                                                                        class="">
                                                                        <a href="reputation-management.html">Reputation
                                                                            Management</a>
                                                                    </li>
                                                                    <li
                                                                        class="">
                                                                        <a href="search-engine-marketing.html">Search
                                                                            Engine Marketing</a>
                                                                    </li>
                                                                    <li
                                                                        class="">
                                                                        <a href="pay-per-click.html">Pay Per Click</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="mega-menu-footer d-flex align-items-center justify-content-between w-full">
                                                        <ul class="mega-menu-social d-flex align-items-center">
                                                            <li><a href="#"><i class="iconoir-dribbble"></i></a></li>
                                                            <li><a href="#"><i class="iconoir-twitter"></i></a></li>
                                                            <li><a href="#"><i class="iconoir-instagram"></i></a></li>
                                                            <li><a href="#"><i class="iconoir-linkedin"></i></a></li>
                                                        </ul>

                                                        <p>Looking for new career? <a href="career.html">We're
                                                            hiring</a></p>
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    <div class="mega-menu-ads">
                                                        <img src="assets/imgs/ipad.jpg" alt="iPad" />
                                                        <h2> Dedicated Assistance</h2>
                                                        <p>Your goals, our tailored approach </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li
                                    class="mega-menu-item ">
                                    <a href="portfolio.html">Portfolio</a>
                                    <span class="dropdown-menu-item-icon">
                                        <i class="las la-angle-down"></i>
                                    </span>

                                    <div class="mega-menu mega-menu-portfolio">
                                        <div class="mega-menu-inner">
                                            <div class="custom-container d-flex">
                                                <div class="left">
                                                    <div
                                                        class="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                                        <div class="mega-menu-portfolio-card">
                                                            <div class="img-box">
                                                                <img src="assets/imgs/Graphics_design.jpg" alt="Portfolio" />
                                                            </div>
                                                            <div class="content-box">
                                                                <h3
                                                                    class="">
                                                                    <a href="graphic-design.html">Graphics Design</a>
                                                                </h3>
                                                                <p>Discover Our Creative Showcase Gallery.</p>
                                                            </div>
                                                        </div>
                                                        <div class="mega-menu-portfolio-card">
                                                            <div class="img-box">
                                                                <img src="assets/imgs/website_dev.jpg" alt="Portfolio" />
                                                            </div>
                                                            <div class="content-box">
                                                                <h3
                                                                    class="">
                                                                    <a href="website-designing.html">Website
                                                                        Designing</a>
                                                                </h3>
                                                                <p>Presenting our designed websites</p>
                                                            </div>
                                                        </div>
                                                       
                                                        <div class="mega-menu-portfolio-card">
                                                            <div class="img-box">
                                                                <img src="assets/imgs/ecommerce_dev.jpg" alt="Portfolio" />
                                                            </div>
                                                            <div class="content-box">
                                                                <h3
                                                                    class="">
                                                                    <a href="ecommerce-development.html">E-Commerce
                                                                        Development</a>
                                                                </h3>
                                                                <p>Check out our crafted e-commerce platforms</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                        <ul class="mega-menu-social d-flex align-items-center">
                                                            <li><a href="#"><i class="iconoir-dribbble"></i></a></li>
                                                            <li><a href="#"><i class="iconoir-twitter"></i></a></li>
                                                            <li><a href="#"><i class="iconoir-instagram"></i></a></li>
                                                            <li><a href="#"><i class="iconoir-linkedin"></i></a></li>
                                                        </ul>

                                                        <p>
                                                            <a href="portfolio.html">View Portfolio <i
                                                                class="iconoir-arrow-up-right"></i></a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    <div class="mega-menu-ads">
                                                        <img src="assets/imgs/portfolio1.jpg" alt="iPad" />
                                                        <h2>Crafted Success</h2>
                                                        <p>Every project tells a story of success. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>



                                <li
                                    class="mega-menu-item ">
                                    <a href="#">Pricing</a>
                                    <span class="dropdown-menu-item-icon">
                                        <i class="las la-angle-down"></i>
                                    </span>
                                    <div class="mega-menu mega-menu-portfolio">
                                        <div class="mega-menu-inner">
                                            <div class="custom-container d-flex">
                                                <div class="left">
                                                    <div
                                                        class="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                                        <div class="mega-menu-portfolio-card">
                                                            <div class="img-box">
                                                                <img src="assets/imgs/seo_pricing.jpg" alt="SEO Pricing" />
                                                            </div>
                                                            <div class="content-box">
                                                                <h3
                                                                    class="">
                                                                    <a href="seo-pricing.html">SEO Pricing</a>
                                                                </h3>
                                                                <p>Explore our digital marketing pricing options.</p>
                                                            </div>
                                                        </div>
                                                        <div class="mega-menu-portfolio-card">
                                                            <div class="img-box">
                                                                <img src="assets/imgs/website_pricing2.jpg"
                                                                    alt="Web Design Pricing" />
                                                            </div>
                                                            <div class="content-box">
                                                                <h3
                                                                    class="">
                                                                    <a href="web-design-pricing.html">Web Design
                                                                        Pricing</a>
                                                                </h3>
                                                                <p>Discover our web design pricing options.</p>
                                                            </div>
                                                        </div>
                                                      
                                                        <div class="mega-menu-portfolio-card">
                                                            <div class="img-box">
                                                                <img src="assets/imgs/ecommerce_pricing.jpg"
                                                                    alt="Ecommerce Pricing" />
                                                            </div>
                                                            <div class="content-box">
                                                                <h3
                                                                    class="">
                                                                    <a href="ecommerce-pricing.html">Ecommerce
                                                                        Pricing</a>
                                                                </h3>
                                                                <p>View our ecommerce pricing details.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div
                                                        class="mega-menu-footer d-flex align-items-center justify-content-between w-full">
                                                        <ul class="mega-menu-social d-flex align-items-center">
                                                            <li><a href="#"><i class="iconoir-dribbble"></i></a></li>
                                                            <li><a href="#"><i class="iconoir-twitter"></i></a></li>
                                                            <li><a href="#"><i class="iconoir-instagram"></i></a></li>
                                                            <li><a href="#"><i class="iconoir-linkedin"></i></a></li>
                                                        </ul>
                                                        <p>
                                                            <a href="portfolio.html">View Portfolio <i
                                                                class="iconoir-arrow-up-right"></i></a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="right">
                                                    <div class="mega-menu-ads">
                                                        <img src="assets/imgs/pricing-rightside-image.png" alt="Pricing" />
                                                        <h2>Transparent Pricing</h2>
                                                        <p>Clear pricing, no surprises—value guaranteed.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li class="">
                                    <a href="career.html">Career</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header-right">
                        <div class="header-contact-info d-flex align-items-center">
                            <div class="phone-number">
                                <a href="tel:+919078072730">
                                    Call Us
                                    <i class="iconoir-arrow-up-right"></i>
                                </a>
                                +91 9078072730
                            </div>
                            <a href="contact.html" class="theme-btn">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>

        </header >
        </>
    )
}

export default Header;
