import React from "react";

export default function () {
    return (
      <div className='container-fluid portfolio-center'>
        <section className='container portfolio'>
          <h2>PORTFOLIO</h2>
        </section>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="project-item">
              <div className="dinnerdecider">
                <h4>Dinner Decider</h4>
              </div>
              <a href="https://rnguyen7388.github.io/DinnerDecider/" target="_blank" rel="noopener noreferrer"> <img className="img-fluid" src="images/dinnerdecider.PNG" alt="Dinner Decider" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="project-item">
              <div className="notify">
                <h4>Notify</h4>
              </div>
              <a href="https://pacific-thicket-40936.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img className="img-fluid" src="images/notfiy.PNG" alt="Notfiy" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="project-item">
              <div className="notify">
                <h4>Employee Directory</h4>
              </div>
              <a href="https://rnguyen7388.github.io/employeeDirectory/" target="_blank" rel="noopener noreferrer"> <img className="img-fluid" src="images/employeedirectory.PNG" alt="Employee Directory" /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="project-item">
              <div className="notify">
                <h4>Star Wars Character Creation</h4>
              </div>
              <a href="https://whispering-springs-13839.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img className="img-fluid" src="images/starwars.PNG" alt="Notfiy" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="project-item">
              <div className="notify">
                <h4>Employee Generator</h4>
              </div>
              <a href="https://github.com/rnguyen7388/teamGenerator" target="_blank" rel="noopener noreferrer"> <img className="img-fluid" src="images/teamgenerator.PNG" alt="Employee Generator" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="project-item">
              <div className="notify">
                <h4>Workout Tracker</h4>
              </div>
              <a href="https://mysterious-sea-03484.herokuapp.com/" target="_blank" rel="noopener noreferrer"> <img className="img-fluid" src="images/workouttracker.PNG" alt="Workout Tracker" /></a>
            </div>
          </div>

        </div>
      </div>
    )
}