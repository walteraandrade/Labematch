import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css";
import ListCard from "../../components/ListCard";

function Search() {
  return (
    <div className="searchContainer">
      <Header />
      <section className="cardContainer">
        <ListCard />
      </section>
      <Footer />
    </div>
  );
}

export default Search;
