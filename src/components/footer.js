import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row form-group">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                            <a href="https://twitter.com/RonSkufca">
                                <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="https://stackoverflow.com/cv/ronskufca">
                                <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-stack-overflow fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="https://github.com/RonSkufca">
                                <span className="fa-stack fa-lg">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                            </li>
                            <li className="list-inline-item">
                                    <a href="https://www.linkedin.com/in/ronskufca/">
                                    <span className="fa-stack fa-lg">
                                        <i className="fas fa-circle fa-stack-2x"></i>
                                        <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                                    </span>
                                    </a>
                                </li>
                        </ul>                    
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p className="copyright text-muted">Copyright &copy; Ron Skufca 2018</p>
                    </div>                
                </div>
            </div>  
        </footer>
    );
}

export default Footer;