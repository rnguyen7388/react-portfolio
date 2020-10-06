import React from 'react'

export default function () {
  return (
    <section className="body-section">
      <div className="container">
        <div className="align-items-center">
          <div className="box">
            <div className="media">
              <div className="selfie">
              <img className="img-fluid" src='images/headshot.PNG' alt='Headshot'/>
              </div>
              <div className="body">
                <div className="about">
                  <h3>Ray Nguyen</h3>
                  <h4>About Myself</h4>
                  <p>
                    Hello, my name is Ray Nguyen and I'm currently learning Full Stack Web Development at Northwestern University. I recently graduated from Oakton Community College with an Associates of Arts degree.
                  </p>
                  <p>
                    Aside from coding, I have a background in dance and have worked with artists such as Chance the Rapper, Eryn Allen Kane, Ian Eastwood, and the world-renowned K-pop band, BTS.
                  </p>
                  <ul className="info">
                    <ul><i className="fas fa-birthday-cake"></i> 15th September, 1997</ul>
                    <ul><i className="fas fa-home"></i> Chicago, IL</ul>
                    <ul><i className="fas fa-envelope-open-text"></i> <a href="https://drive.google.com/file/d/11q8g8BILOUixdvKlG6TEjyVQUHMe9MKu/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}