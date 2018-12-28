import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div id="home">
    <div id="header_title">
      <div id="title_name">
        <h1>Luís Guilherme Martins</h1>
      </div>
      <div id="title_job"> Front end Engineer</div>
    </div>
    <div id="header_social">
      <a href="mailto:luisgmartins@sapo.pt" className="social_link">
        <i className="far fa-envelope" />
      </a>
      <a href="https://pt.linkedin.com/in/guilhermescp" className="social_link">
        <i className="fab fa-linkedin" />
      </a>
      <a href="https://github.com/GuilhermeSCP/" className="social_link">
        <i className="fab fa-github" />
      </a>
      <a href="https://medium.com/@GuilhermeSCP" className="social_link">
        <i className="fab fa-medium" />
      </a>
      <a href="skype:luisguilherme.martins" className="social_link">
        <i className="fab fa-skype" />
      </a>
    </div>
    <div id="header_button">
      <Link to="about">
        <button type="button">Find out more</button>
      </Link>
    </div>
  </div>
);

export default Home;
