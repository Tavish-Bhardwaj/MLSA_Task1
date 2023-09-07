/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/coder.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Learning Complete Java Programming Language | Resources 🎉",
    description:
      "Learn complete Java programming Language  from scratch with resources to learn DS and Algo in Java.",
    url: "https://github.com/Tavish-Bhardwaj/DSA-Bootcamp-Java",
  },
  {
    title: "Software Development Roadmaps",
    description:
      "Collection of some Software Development Roadmaps have been shared with you all",
    url: "https://github.com/Tavish-Bhardwaj/roadmaps",
  },
  {
    title: "My Resume Site",
    description:
      "This site has been created by me and also learnt how to buy domains and host websites.",
    url: "https://tavishbhardwaj.me/",
  },
  {
    title: "100 Problems for Java Developer",
    description:
      "You are provided with a problem set of 1-- problems which targets at building the concept of Java Programming Language.",
    url: "https://github.com/Tavish-Bhardwaj/100ProblemsinJAVA",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
