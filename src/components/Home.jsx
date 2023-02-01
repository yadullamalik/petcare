import React from "react";
import { BottomComponent } from "./BottomComponent";
import { Herocontent } from "./Herocontent";
import "./Home.css";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Herocontent />
      <BottomComponent />
    </div>
  );
};
