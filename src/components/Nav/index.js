import React from "react";

export default function () {
    return (
      <header className="page-header body-section">
        <div className="nav-top">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
}