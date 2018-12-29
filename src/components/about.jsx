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
          {`Originally from Portugal, I'm currently based in the lovely city of Barcelona.
              I'm a very curious and and also a bit stubborn by nature, which translates to a instinctive
              appetence for detail, being performance and quality, two of the topics I try to
              incorporate the most in my work.
              I care a lot about the team efforts and I'm always trying to find ways of improving
              the engineering side of things. I always try to ally the challenge and the fun of
              working on a project with commitment of delivering business value and adapt to individuals
              and interactions.`}
        </p>
        <p className="about_text">
          {`In my free time I enjoy going out and exploring the city with friends and family 
              but I definitely won't say no to some quality time at home watching some good series/movies
              and listening to whatever I feel like hearing to (it changes, a lot).`}
        </p>
      </div>
    </div>
  </div>
);

export default About;
