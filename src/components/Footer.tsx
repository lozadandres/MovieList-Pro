import React from 'react';


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">

                    <div className="footer-brand-wrapper">

                        <a href="./index.html" className="logo">
                            <span className="logo-text">Reelify</span>
                        </a>

                        <div className="cta">

                            <form action="" className="cta-form">
                                <input type="email" name="email" required placeholder="Ingrese su email" className="email-field" />

                                <button type="submit" className="cta-form-btn">Suscribirse</button>
                            </form>

                        </div>

                    </div>

                    <div className="divider"></div>

                    <div className="quicklink-wrapper">

                        <ul className="quicklink-list">

                            <li>
                                <a href="#" className="quicklink-link">FAQs</a>
                            </li>

                            <li>
                                <a href="#" className="quicklink-link">Centro de ayuda</a>
                            </li>

                            <li>
                                <a href="#" className="quicklink-link">Terminos y condiciones</a>
                            </li>

                            <li>
                                <a href="#" className="quicklink-link">Politica de Privacidad</a>
                            </li>

                        </ul>

                        <ul className="social-list">

                            <li>
                                <a href="#" className="social-link">
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <i className="ri-tiktok-fill"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <i className="ri-twitter-x-fill"></i>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <i className="ri-telegram-2-fill"></i>
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>


            <div className="footer-bottom">
                <div className="container">

                    <p className="copyright">
                    Todos los derechos reservados © 2024 | sitio web creado por <a>Andrés Lozada</a>
                    </p>

                </div>
            </div>
        </footer>
    );
}

export default Footer;