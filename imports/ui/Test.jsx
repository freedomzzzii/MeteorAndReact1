import React from 'react';

export default class Test extends React.Component
{
  render()
  {
    return (
      <section id="test">
        <body id="page-top">
          <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
              <div className="container-fluid">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                          <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                      </button>
                      <a className="navbar-brand page-scroll" href="#page-top">Start Bootstrap</a>
                  </div>

                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav navbar-right">
                          <li>
                              <a className="page-scroll" href="#about">About</a>
                          </li>
                          <li>
                              <a className="page-scroll" href="#services">Services</a>
                          </li>
                          <li>
                              <a className="page-scroll" href="#portfolio">Portfolio</a>
                          </li>
                          <li>
                              <a className="page-scroll" href="#contact">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>


          <header>
            <div id="test2">
              <div className="header-content">
                  <div className="header-content-inner">
                      <h1 id="homeHeading">Your Favorite Source of Free Bootstrap Themes</h1>
                      <hr/>
                      <p>Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
                      <a href="#about" className="btn btn-primary btn-xl page-scroll">Find Out More</a>
                  </div>
              </div>
            </div>
          </header>


        </body>
      </section>
    )
  }
}
