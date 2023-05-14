import React from "react";

import NavBar from "./UI/NavBar";
import "./index.css";
import Card from "./UI/Card";

function About() {
  return (
    <>
      <NavBar />
      <Card className="about">
        <h1>About Page</h1>
        <p>
          <b>Documentation:</b>
          <br></br> The page was created in span of two days, and has working
          features including<br></br>
          1) Adding and Deleting contacts <br></br>
          2)Editing and Updating contacts <br></br>
          3)Graph page which uses React query to call Covid cases data and React
          fusion charts which renders data as graphical representation.{" "}
          <br></br>
          4)Due to time constraints ,The graph page currently only loads
          Worldwide covid data as graph,but we do make api calls to the
          countrywise and datewise covid data as well.<br></br>
          5) Also the React leaflet map is not added to the same page due to
          time limit,but I have worked with Leaflet map library in past and have
          succesfully created a project from it , I can share the link to that
          if required. well aware of its methods <br></br>6)To conclude I'd like
          to mention it was a fun challenge to create this app, I know its not
          perfect as I have not added TailWind Css and have not managed state
          with usage of Redux. But I'm on course to learn these two libraries
          and add them to my knowledge base.
        </p>
        <h5>Created by Sarvadaman Singh</h5>
      </Card>
    </>
  );
}

export default About;
