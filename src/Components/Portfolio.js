import React, { Component } from "react";
import { Image, Button } from 'react-bootstrap'
import Fade from "react-reveal";
import '../assets/css/port.css'

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap con">
            <Image responsive alt={projects.title} src={projectImage} className="image" />
            <div style={{ textAlign: "center", fontWeight: 600 }}>{projects.title}</div>

            <p style={{ fontWeight: 500 }}>Tools : {projects.tools}</p>
            <div className="middle">
              <Button variant="outline-primary" href={projects.url}>View</Button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
