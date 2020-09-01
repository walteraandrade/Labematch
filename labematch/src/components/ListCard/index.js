import React from "react";
import "./style.css";
import ApproveIcon from "../../global/imgs/approve.svg";
import DisapproveIcon from "../../global/imgs/disapprove.svg";

function ListCard() {
  return (
    <div className="listCardContainer">
      <section className="imgAndIconWrapper">
        <img className="icon" src={DisapproveIcon} alt="disapprove" />
        <img
          src="https://images.unsplash.com/photo-1559655099-8a838575f6b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=697&q=80"
          alt="possible match"
        />
        <img className="icon" src={ApproveIcon} alt="approve" />
      </section>
      <p>Jonathan Kovic</p>
      <span>Extreme Metal</span>
      <span>Post-punk</span>
      <span>Hardcore</span>
    </div>
  );
}

export default ListCard;
