import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
    <div id="home">
        <div id="header_title">
            <div id="title_name"><h1>Luís Guilherme Martins</h1></div>
            <div id="title_job"> Front end Engineer</div>
        </div>
        <div id="header_social">
            <a href="mailto:luisgmartins@sapo.pt" className="social_link"><i className="far fa-envelope"></i></a>
            <a href="https://pt.linkedin.com/in/guilhermescp" className="social_link"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/GuilhermeSCP/" className="social_link"><i className="fab fa-github"></i></a>
            <a href="https://bitbucket.org/GuilhermeSCP/" className="social_link"><i className="fab fa-bitbucket"></i></a>
            <a href="skype:luisguilherme.martins" className="social_link"><i className="fab fa-skype"></i></a>
        </div>
        <div id="header_button">
            <Link to="about">
                <button>Find out more</button>
            </Link>
        </div>
    </div>
);

export default Home;