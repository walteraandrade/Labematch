import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import MatchCard from "../../components/MatchCard";

function Matches() {
  return (
    <div className="matchesContainer">
      <Header />
      <MatchCard />
      <Footer />
    </div>
  );
}

export default Matches;
