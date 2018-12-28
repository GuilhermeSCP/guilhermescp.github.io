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
          {
            "Hello there, my name is Guilherme and I'm a software engineer, currently delighted by the wonders of front end and Javascript."
          }
        </p>
        <p className="about_text">
          {`I'm a very curious person, therefore much of my free time is spent browsing the internet 
                researching many topics related to my main interests which are science, sports (I not
                only watch, I practice was well), music (I play saxophone when i'm inspired), games
                and tech, of course, which was the reason I became a developer.`}
        </p>
        <p className="about_text">
          {`I'm also a social guy and I believe that much of our performance it's related to 
                motivation, which can only be obtained by keeping good relations with the people that
                surround us, so I always try to be nice and make my partners as confortable as possible.`}
        </p>
      </div>
    </div>
  </div>
);

export default About;
