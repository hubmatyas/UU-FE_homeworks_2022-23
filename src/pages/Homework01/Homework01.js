import React from "react";
import InfoBox from '../../components/InfoBox/InfoBox';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Graph from '../../components/Graph/Graph';
import SimpleTable from '../../components/SimpleTable/SimpleTable';

import students from "../../data/students-list.json";
import "./Homework01.css";

function Homework01() {
  return (
    <div className="wrapper">
      <ul className="infobox-wrapper">
        <InfoBox content={"Počet dnů hatchery"} value={"45"} />
        <InfoBox content={"Počet účastníků"} value={"15"} />
        <InfoBox content={"Počet lektorů"} value={"10"} />
        <InfoBox content={"Hodnocení"} value={"94%"} />
      </ul>
      <div className="split">
        <ProfileCard name={"Jakub"} about={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer lacinia. Quisque porta. Aenean vel massa quis mauris vehicula lacinia. "} mail={"example@mail.com"} imgSrc={"https://vecizfilmu.cz/18113-large_default/plysova-postavicka-borek-stavitel-borek-bob-28-cm.jpg"} ></ProfileCard>
        <Graph imgSrc={"https://static01.nyt.com/images/2022/10/04/learning/ImmigrationGraph2LN/ImmigrationGraph2LN-jumbo.png"} alt={"graph"} />
      </div>
      <SimpleTable data={students} />
    </div>
  );
}

export default Homework01;
