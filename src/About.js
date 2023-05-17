import React from "react";
import NavBar from "./UI/NavBar";
import "./index.css";
import Card from "./UI/Card";

function About() {
  return (
    <>
      <NavBar />
      <Card>
        <b className="text-center text-2xl">Documentation:</b>

        <p>
          <br></br>
          Features:<br></br> 1)Adding and Deleting contacts. <br></br>
          2)Editing and Updating contacts. <br></br>
          3)Graph page which uses React query to call Covid cases data and React
          fusion charts which renders data as graphical representation.
          <br></br>
          4)The site is Mobile responsive. <br></br>
          5)The date on API is only available from 22 january to 9 march 2023.
          <br></br>
          6)To conclude I'd like to mention it was a fun challenge to create
          this app, I know its not perfect as I have not managed state with
          usage of Redux. But I'm on course to learn this library next and add
          it to my knowledge base. <br></br>
          7)Libraries used: Fusion charts, Leaflet map ,Tailwind CSS
          <br></br> 8)API endpoints used:
          <li>World wide data of cases: https://disease.sh/v3/covid-19/all</li>
          <li>
            Country Specific data of cases:
            https://disease.sh/v3/covid-19/countries
          </li>
          <li>
            Graph data for cases with date:
            https://disease.sh/v3/covid-19/historical/all?lastdays=all
          </li>
        </p>
        <footer className="text-center text-lg">
          <b>Created by Sarvadaman Singh</b>
        </footer>
      </Card>
    </>
  );
}

export default About;
