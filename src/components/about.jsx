import React from 'react';

const About = () => (
  <div className="content_section" id="about">
    <div id="about_pic">
      <img src="../../img/gui.jpg" alt="gui" />
    </div>
    <div id="about_content">
      <h2> About Me </h2>
      <div>
        <p className="about_text">
          {`My name is Guilherme and I'm a software engineer,
            currently delighted by the wonders of front end and Javascript.`}
        </p>
        <p className="about_text">
          {'I code, I think and occasionally, I '}
          <a href="https://medium.com/bynder-tech/creating-a-sdk-from-scratch-2809ded9fa8a">
            {'write.'}
          </a>
          <span style={{ fontSize: '0.7rem' }}> Not necessarily in that order.</span>
        </p>
      </div>
    </div>
  </div>
);

export default About;
