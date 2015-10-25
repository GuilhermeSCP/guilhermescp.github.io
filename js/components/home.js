import React from 'react';

let Home = React.createClass({

    render() {
        return (
            <div id="home">
                <div id="header_title">
                    <div id="title_name"><h1>Luís Guilherme Martins</h1></div>
                    <div id="title_job"> Front end Engineer</div>
                </div>
                <div id="header_social">
                    <a href="mailto:luisgmartins@sapo.pt" className="social_link"><i className="fa fa-envelope-o"></i></a>
                    <a href="https://pt.linkedin.com/in/guilhermescp" className="social_link"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/GuilhermeSCP/" className="social_link"><i className="fa fa-github"></i></a>
                    <a href="https://bitbucket.org/GuilhermeSCP/" className="social_link"><i className="fa fa-bitbucket"></i></a>
                    <a href="skype:luisguilherme.martins" className="social_link"><i className="fa fa-skype"></i></a>
                </div>
                <div id="header_button"><button>Find out more</button></div>
            </div>
        );
    }
});

export default Home;