import React from "react";
import { Eighth } from "./Footer/EighthSection/Eighth";
import { Seventh } from "./Footer/SeventhSection/Seventh";
import { Sixth } from "./Footer/SixthSection/Sixth";
import { Header } from "./Header/Header";
import { Fifth } from "./Sections/FifthSection/Fifth";
import { First } from "./Sections/FirstSection/First";
import { Fourth } from "./Sections/FourthSection/Fourth";
import { Second } from "./Sections/SecondSection/Second";
import { Third } from "./Sections/ThirdSection/Third";
import "../App.css";
export const Home = () => {
  return (
    <div className="app">
      <Header />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eighth />
    </div>
  );
};
